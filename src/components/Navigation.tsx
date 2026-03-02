import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Order', href: '#about' },
    { name: 'Operatives', href: '#team' },
    { name: 'Dossiers', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-bone/95 backdrop-blur-md border-b border-charcoal/10 py-4 shadow-sm' : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <a href="#" className="font-serif text-2xl font-bold tracking-widest text-charcoal uppercase flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border border-charcoal/30 flex items-center justify-center text-lg mt-1">X</span>
                    <span>XAENITHRA</span>
                </a>

                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-sans text-sm tracking-[0.15em] uppercase text-charcoal/80 hover:text-charcoal transition-colors relative group py-2"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-dark group-hover:w-full transition-all duration-300 ease-out" />
                        </a>
                    ))}
                    <a
                        href="#projects"
                        className="ml-4 px-6 py-2 border border-charcoal/30 text-charcoal font-sans text-sm hover:border-gold-dark hover:text-gold-dark transition-all duration-300 uppercase tracking-widest"
                    >
                        Access Archive
                    </a>
                </nav>

                <button className="md:hidden flex flex-col gap-[6px] p-2">
                    <span className="w-6 h-[1px] bg-charcoal" />
                    <span className="w-6 h-[1px] bg-charcoal" />
                </button>
            </div>
        </motion.header>
    );
}
