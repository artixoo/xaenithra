import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-32 relative">
            {/* Subtle Background Sigil Motif */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold-dark">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                    <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="0.2" />
                </svg>
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16 relative"
                >
                    {/* Engraved Chapter Heading Style */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                        <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-charcoal/50" />
                        <div className="w-3 h-3 rotate-45 border border-gold-muted flex items-center justify-center">
                            <div className="w-1 h-1 bg-charcoal" />
                        </div>
                        <h2 className="text-3xl md:text-5xl tracking-[0.2em] font-serif uppercase">The Order</h2>
                        <div className="w-3 h-3 rotate-45 border border-gold-muted flex items-center justify-center">
                            <div className="w-1 h-1 bg-charcoal" />
                        </div>
                        <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-charcoal/50" />
                    </div>

                    <p className="font-serif text-gold-dark tracking-widest text-sm uppercase mb-12">Chapter I : Origins & Purpose</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative p-8 md:p-12 border border-charcoal/10 bg-bone/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.02)]"
                >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-muted/50 -translate-x-[2px] -translate-y-[2px]" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-muted/50 translate-x-[2px] -translate-y-[2px]" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-muted/50 -translate-x-[2px] translate-y-[2px]" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-muted/50 translate-x-[2px] translate-y-[2px]" />

                    <p className="text-lg md:text-2xl font-sans text-charcoal/90 leading-[1.8] text-center md:text-justify mb-8 font-light">
                        <span className="font-serif text-4xl float-left mr-3 text-gold-dark mt-[-8px]">X</span>
                        AENITHRA is a competitive cybersecurity syndicate specializing in <strong className="font-medium text-charcoal">Binary Exploitation, Web Exploitation, Reverse Engineering, OSINT,</strong> and <strong className="font-medium text-charcoal">Digital Forensics</strong>.
                    </p>
                    <p className="text-lg md:text-xl font-sans text-charcoal/80 leading-relaxed text-center md:text-justify font-light">
                        We operate as a collective of elite minds, competing traversing national and international capture-the-flag (CTF) engagements. Our mission is to relentlessly push the boundaries in offensive security and cyber intelligence, maintaining intellectual dominance over chaos.
                    </p>

                    {/* Engraved Seal Placeholder at the bottom of the text */}
                    <div className="mt-12 flex justify-center opacity-40">
                        <div className="w-16 h-16 rounded-full border border-charcoal/30 flex items-center justify-center p-1">
                            <div className="w-full h-full border border-charcoal/20 rounded-full border-dashed flex items-center justify-center">
                                <span className="font-serif text-xs tracking-widest text-charcoal">EST.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
