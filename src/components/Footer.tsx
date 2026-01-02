import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="py-12 border-t border-white/10 transition-colors duration-300"
            style={{ backgroundColor: "var(--footer-bg)", color: "var(--footer-fg)" }}
        >
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">MI Tax Advisor</h3>
                        <p className="opacity-80 max-w-sm">
                            Your expert partner in tax planning & preparation. Peace of mind through proactive strategy and unmatched expertise.
                        </p>
                    </div>

                    <div id="services">
                        <h4 className="font-semibold mb-4 text-[var(--secondary)]">Services</h4>
                        <ul className="space-y-2 opacity-80">
                            <li>Tax Planning</li>
                            <li>Tax Preparation</li>
                            <li>IRS Representation</li>
                            <li>Business Consulting</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-[var(--secondary)]">Connect</h4>
                        <ul className="space-y-2 opacity-80">
                            <li><Link href="#contact" className="hover:text-[var(--secondary)] transition-colors">Contact Me</Link></li>
                            <li><Link href="#about" className="hover:text-[var(--secondary)] transition-colors">About Saryu</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center text-sm opacity-60">
                    <p>&copy; {new Date().getFullYear()} MI Tax Advisor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
