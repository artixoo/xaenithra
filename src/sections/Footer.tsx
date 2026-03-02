import { Github, Linkedin, Instagram, Twitter, Shield } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-24 relative bg-charcoal text-bone border-t border-charcoal/10 overflow-hidden">
            {/* Top Border Engraving Equivalent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-muted/50 to-transparent" />
            <div className="absolute top-1 left-0 w-full flex justify-center gap-1">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-4 h-[1px] bg-charcoal/40" />
                ))}
            </div>

            <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">

                <h2 className="text-4xl md:text-5xl font-serif uppercase tracking-[0.3em] mb-12 select-none">Enter The Order</h2>

                <div className="flex justify-center gap-6 md:gap-8 mb-16">
                    <a href="#" className="text-bone/60 hover:text-gold-muted transition-colors border border-bone/10 hover:border-gold-muted/30 p-4 rounded-full hover:bg-gold-muted/5">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/xaenithra/" target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-gold-muted transition-colors border border-bone/10 hover:border-gold-muted/30 p-4 rounded-full hover:bg-gold-muted/5">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/xaenithra" target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-gold-muted transition-colors border border-bone/10 hover:border-gold-muted/30 p-4 rounded-full hover:bg-gold-muted/5">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/xaenithra" target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-gold-muted transition-colors border border-bone/10 hover:border-gold-muted/30 p-4 rounded-full hover:bg-gold-muted/5">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-bone/60 hover:text-gold-muted transition-colors border border-bone/10 hover:border-gold-muted/30 p-4 rounded-full hover:bg-gold-muted/5" title="CTFTime">
                        <Shield className="w-6 h-6" />
                    </a>
                </div>

                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-gold-muted/50" />
                    <div className="w-2 h-2 rotate-45 border border-gold-muted" />
                    <div className="w-12 h-[1px] bg-gold-muted/50" />
                </div>

                <p className="font-serif tracking-[0.4em] text-xs md:text-sm uppercase text-bone/60 font-medium select-none">
                    Order of XAENITHRA — Established MMXXIV
                </p>
            </div>

            {/* Subtle bottom gears */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-bone/5 rounded-full border-dashed animate-[spin_120s_linear_infinite]" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 border border-bone/5 rounded-full border-dashed animate-[spin_80s_reverse_infinite]" />
        </footer>
    );
}
