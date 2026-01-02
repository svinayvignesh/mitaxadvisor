
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Zod validation
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // 1. Send notification to the business owner
    const { error: error1 } = await resend.emails.send({
      from: 'Contact Form <saryu@mitaxadvisor.com>',
      to: ['svinayvignesh@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error1) {
      return NextResponse.json({ error: error1 }, { status: 500 });
    }

    // 2. Send confirmation to the visitor
    const { error: error2 } = await resend.emails.send({
      from: 'Contact Form <saryu@mitaxadvisor.com>',
      to: [email],
      subject: 'Thank you for contacting MI Tax Advisor',
      text: `Hi ${name},\n\nThanks for reaching out! We will get back to you as soon as possible.\n\nBest regards,\nMI Tax Advisor Team`,
    });

    // We don't fail the request if the auto-reply fails, but we could log it.

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
