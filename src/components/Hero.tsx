import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--secondary)] rounded-full blur-[80px] md:blur-[120px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600 rounded-full blur-[80px] md:blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/3"></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 text-center md:text-left">
                    <div className="inline-block px-4 py-2 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)] font-medium text-xs md:text-sm">
                        My Plan. My Peace of Mind. My Tax Advisor.
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight font-serif text-balance">
                        Expert Partner in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] via-amber-500 to-amber-600 dark:to-amber-200">
                            Tax Planning
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-lg leading-relaxed mx-auto md:mx-0 text-balance">
                        Navigate the complexities of the tax code with confidence. Proactive strategies to maximize your value and minimize liability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <Button asChild size="lg" variant="premium">
                            <Link href="#contact">Get my Consultation</Link>
                        </Button>
                        <Button asChild size="lg" variant="glass" className="text-[var(--foreground)] border-[var(--border)] hover:bg-[var(--muted)]">
                            <Link href="#services">Explore Services</Link>
                        </Button>
                    </div>
                </div>

                {/* Abstract Visual / Image Placeholder */}
                <div className="relative h-[300px] md:h-[600px] flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-200 mt-8 md:mt-0 p-4">
                    <div className="relative w-[90%] sm:w-full h-full max-w-xs md:max-w-sm bg-white text-black rounded-sm p-6 transform rotate-1 md:rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl border border-gray-300 font-serif">
                        {/* Form Header */}
                        <div className="border-b-2 border-black pb-2 mb-4 flex justify-between items-end">
                            <div>
                                <h3 className="font-bold text-3xl leading-none">1040</h3>
                                <p className="text-[0.6rem] font-bold mt-1">U.S. Individual Income Tax Return</p>
                            </div>
                            <div className="text-right">
                                <div className="text-[0.6rem] font-bold">OMB No. 1545-0074</div>
                                <div className="text-xs font-bold mt-1">2024</div>
                            </div>
                        </div>

                        {/* Form Body */}
                        <div className="space-y-3 font-sans text-xs">
                            <div className="flex gap-2 items-center border-b border-gray-300 pb-1">
                                <span className="font-bold w-12 shrink-0">Status</span>
                                <div className="font-mono flex-1 bg-blue-50 px-2 py-0.5 text-blue-900 truncate">Filing Jointly</div>
                            </div>

                            <div className="flex gap-2 items-center border-b border-gray-300 pb-1">
                                <span className="font-bold w-12 shrink-0">Name</span>
                                <div className="font-mono flex-1 px-2">John Doe</div>
                            </div>

                            {/* Focus Field */}
                            <div className="mt-4 p-2 border-2 border-blue-600/30 rounded bg-blue-50/30">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-sm">Accuracy Goal</span>
                                    <span className="text-[0.6rem] text-gray-500">Line 24b</span>
                                </div>
                                <div className="font-mono text-3xl font-bold text-blue-700 tracking-wider">
                                    100%
                                </div>
                            </div>

                            <div className="flex gap-2 mt-2 opacity-60">
                                <div className="h-3 bg-gray-200 w-1/3 rounded-sm"></div>
                                <div className="h-3 bg-gray-200 w-2/3 rounded-sm"></div>
                            </div>
                            <div className="h-3 bg-gray-200 w-full rounded-sm opacity-60"></div>
                        </div>

                        {/* Absolute decorative stamp or sign */}
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-500/20 rounded-full border-4 border-amber-500/50 flex items-center justify-center rotate-[-15deg] backdrop-blur-sm">
                            <span className="font-bold text-amber-700 text-xs uppercase border-2 border-amber-700 px-1 py-0.5 rounded">Verified</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
