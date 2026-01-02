"use client";

import { useState } from 'react';
import { z } from 'zod';

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
    const [emailError, setEmailError] = useState<string>('');

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const email = e.target.value;
        if (!email) {
            setEmailError('');
            return;
        }

        const result = z.string().email('Invalid email address').safeParse(email);
        if (!result.success) {
            setEmailError(result.error.issues[0].message);
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Don't submit if there's an existing email error
        if (emailError) {
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to send message');
            }

            setStatus({ type: 'success', message: 'Thanks for reaching out, we will reach out to you as soon as possible.' });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[var(--card)] text-[var(--foreground)] dark:bg-slate-900/50 relative overflow-hidden transition-colors">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--foreground)]/20 dark:via-white/20 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Let's Discuss Your Strategy</h2>
                        <p className="text-[var(--muted-foreground)] dark:text-gray-400">
                            For accurate, convenient, and strategic tax services, please contact me today.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 bg-white/60 dark:bg-white/5 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-xl">
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-[var(--secondary)]">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)] flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[var(--foreground)] dark:text-white">Email</p>
                                        <a href="mailto:saryu@mitaxadvisor.com" className="text-[var(--muted-foreground)] dark:text-gray-400 hover:text-[var(--secondary)] transition-colors">saryu@mitaxadvisor.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)] flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[var(--foreground)] dark:text-white">Location</p>
                                        <p className="text-[var(--muted-foreground)] dark:text-gray-400">Serving clients nationwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {status.type && (
                                <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                                    {status.message}
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[var(--muted-foreground)] dark:text-gray-300">Name</label>
                                <input name="name" type="text" required className="w-full bg-[var(--background)] dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-[var(--foreground)] dark:text-white focus:outline-none focus:border-[var(--secondary)] transition-colors" placeholder="Your Name" disabled={isSubmitting} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[var(--muted-foreground)] dark:text-gray-300">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className={`w-full bg-[var(--background)] dark:bg-white/5 border rounded-lg px-4 py-3 text-[var(--foreground)] dark:text-white focus:outline-none hover:border-[var(--secondary)] focus:border-[var(--secondary)] transition-colors ${emailError ? 'border-red-500 hover:border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10'}`}
                                    placeholder="name@example.com"
                                    disabled={isSubmitting}
                                    onBlur={handleEmailBlur}
                                />
                                {emailError && (
                                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[var(--muted-foreground)] dark:text-gray-300">Message</label>
                                <textarea name="message" required rows={4} className="w-full bg-[var(--background)] dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-[var(--foreground)] dark:text-white focus:outline-none focus:border-[var(--secondary)] transition-colors" placeholder="How can I help you?" disabled={isSubmitting}></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold py-4 rounded-lg hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
