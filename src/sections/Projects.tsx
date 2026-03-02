import { motion } from 'framer-motion';

const dossiers = [
    { id: '01', title: 'CTF Writeups', desc: 'Detailed dissection of captured flags, reverse engineering puzzles, and exploited vulnerabilities.' },
    { id: '02', title: 'Tool Development', desc: 'Custom offensive tooling and automated intelligence gathering scripts forged by the order.' },
    { id: '03', title: 'Exploit Research', desc: 'Zero-day hunting, vulnerability analysis, and profound exploration of memory corruption.' },
    { id: '04', title: 'OSINT Case Studies', desc: 'Tracing digital footprints, mapping syndicates, and unearthing redacted intelligence.' },
    { id: '05', title: 'Forensics Investigations', desc: 'Post-mortem analysis of breached systems, memory dumps, and cryptographic anomalies.' },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative border-t border-charcoal/10 bg-bone">

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl tracking-[0.2em] font-serif uppercase text-charcoal mb-4">Dossiers</h2>
                    <p className="font-sans text-charcoal/50 tracking-widest text-sm uppercase">Classified Archives & Expeditions</p>
                </motion.div>

                {/* Stacked Cards Container */}
                <div className="relative pb-24">
                    {dossiers.map((dossier, index) => {
                        const topOffset = `calc(100px + ${index * 24}px)`;

                        return (
                            <div
                                key={dossier.id}
                                className="sticky mb-12"
                                style={{ top: topOffset, zIndex: index + 1 }}
                            >
                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6 }}
                                    className="group block bg-[#FDFCF8] border border-charcoal/10 p-10 md:p-14 hover:border-gold-muted transition-colors duration-500 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                        {/* Index Number */}
                                        <div className="font-serif text-5xl md:text-7xl text-charcoal/10 group-hover:text-gold-light transition-colors font-light tracking-tighter shrink-0 w-24">
                                            {dossier.id}
                                        </div>

                                        <div className="hidden md:block w-[1px] h-20 bg-charcoal/10" />

                                        {/* Text Content */}
                                        <div className="flex-1">
                                            <h3 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide uppercase mb-3">{dossier.title}</h3>
                                            <p className="font-sans text-charcoal/60 leading-relaxed text-sm md:text-base md:w-5/6">
                                                {dossier.desc}
                                            </p>
                                        </div>

                                        {/* Arrow Graphic */}
                                        <div className="shrink-0 w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-gold-muted group-hover:border-gold-muted group-hover:text-bone text-charcoal/40 transition-all duration-300">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
