import { motion } from 'framer-motion';

const milestones = [
    { event: 'Bear CTF', date: '21 Feb 2026', rank: 'Top 20', desc: 'International CTF' },
    { event: 'SVNIT Surat', date: '17 Jan 2026', rank: 'Rank 1 — Echelon', desc: 'Secured 1st position.' },
    { event: 'AIT Pune', date: '27 Dec 2025', rank: 'Top 23', desc: 'Bypass CTF' },
    { event: 'IIT Madras', date: '15 Dec 2025', rank: '6th Position', desc: 'Shaastra Grand Finals' },
    { event: 'MIT Manipal', date: '12 Dec 2025', rank: 'Top 25', desc: 'Nite CTF' },
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-32 border-t border-charcoal/10 bg-bone">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl tracking-[0.2em] font-serif uppercase text-charcoal mb-4">Timeboard</h2>
                    <p className="font-sans text-charcoal/50 tracking-widest text-sm uppercase">The Archival Ledger</p>
                </motion.div>

                <div className="relative">
                    {/* Solid vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-charcoal/20" />

                    <div className="space-y-20">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                            >
                                {/* Center Stamped Seal */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-charcoal/30 bg-bone z-10 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                                </div>

                                <div className={`w-[calc(50%-3rem)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="font-sans text-gold-dark font-medium text-xs tracking-widest uppercase mb-2">{milestone.date}</div>
                                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide uppercase mb-3">{milestone.event}</h3>

                                    <div className="font-sans text-sm font-medium text-charcoal/80 mb-3 px-4 py-1.5 border border-charcoal/10 inline-block bg-white/30">
                                        {milestone.rank}
                                    </div>

                                    <p className="font-serif text-charcoal/60 leading-relaxed text-sm italic">
                                        {milestone.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
