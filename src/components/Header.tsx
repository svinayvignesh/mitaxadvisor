"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { prefixPath } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? "glass border-[var(--border)] py-2 bg-[var(--background)]/70"
                : "bg-transparent border-transparent py-4 text-[var(--foreground)]"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[var(--border)] shadow-md transition-transform group-hover:scale-105">
                        <Image
                            src={prefixPath("/logo.svg")}
                            alt="MI Tax Advisor Logo"
                            fill
                            sizes="40px"
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold text-xl font-serif tracking-tight transition-colors">
                        MI Tax Advisor
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {["Services", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium hover:text-[var(--secondary)] transition-colors text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <Button asChild size="sm" variant="default" className="rounded-full shadow-lg">
                            <Link href="#contact">Get Started</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        className="p-2 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] p-4 shadow-xl animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4">
                        {["Services", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--secondary)]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Button asChild className="w-full">
                            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
