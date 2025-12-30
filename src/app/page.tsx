import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] selection:bg-[var(--secondary)] selection:text-[var(--secondary-foreground)]">
      <Header />

      <main>
        <Hero />

        {/* Why Choose Me Section */}
        <section id="services" className="py-24 px-6 bg-[var(--background)]">
          <div className="container mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--foreground)] tracking-tight font-serif">Why Choose Me?</h2>
              <p className="text-[var(--muted-foreground)] dark:text-gray-400 text-lg">
                I specialize in proactive strategies that go beyond simple tax preparation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="No Surprises"
                description="I specialize in proactive tax planning. We'll work together year-round to ensure your tax return reflects a smart, deliberate strategy, not a last-minute scramble."
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
              />
              <FeatureCard
                title="Maximum Value"
                description="My goal is to ensure your returns are 100% accurate and that you receive the maximum refund or pay the minimum liability you are legally entitled to."
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
              />
              <FeatureCard
                title="Unmatched Expertise"
                description="As an EA, I am federally licensed and hold unlimited rights to represent taxpayers before all administrative levels of the IRS."
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-[var(--muted)] dark:bg-slate-900/50">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace with actual image of Saryu if available */}
              <Image
                src="/logo.svg"
                alt="Saryu Chitrakar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">Saryu Chitrakar</h3>
                  <p className="text-[var(--secondary)] font-medium">Enrolled Agent (EA) & Founder</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight font-serif">
                Your Expert Partner in <br />
                <span className="text-[var(--secondary)]">Tax Planning</span>
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] dark:text-gray-400 leading-relaxed">
                I’m Saryu Chitrakar, an Enrolled Agent (EA) and founder of mitaxadvisor.com. With 15 years of experience in taxation, I am dedicated to helping you navigate the complexities of the tax code with confidence.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <span className="font-bold text-blue-600 dark:text-blue-400">15</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--foreground)]">Years Experience</h4>
                    <p className="text-sm text-[var(--muted-foreground)] dark:text-gray-500">Deep knowledge of tax codes and regulations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                    <span className="font-bold text-amber-600 dark:text-amber-400">EA</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--foreground)]">Federally Licensed</h4>
                    <p className="text-sm text-[var(--muted-foreground)] dark:text-gray-500">Unlimited rights to represent taxpayers before the IRS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
