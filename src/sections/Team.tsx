import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Utkarsh Pratham',
        role: 'Team Leader',
        spec: 'Binary Exploitation',
        fun: { ctf: 'Pwn', skill: 'Assembly Reading', quote: '"Logic is the only truth."' }
    },
    {
        name: 'Aryan Bharadwaj',
        role: 'Operative',
        spec: 'Web Exploitation',
        fun: { ctf: 'Web', skill: 'Bypassing WAFs', quote: '"Tags are meant to be broken."' }
    },
    {
        name: 'Yuyutshu Parashar',
        role: 'Operative',
        spec: 'Reverse Engineering',
        fun: { ctf: 'Rev', skill: 'Ghidra Wizardry', quote: '"There is no black box."' }
    },
    {
        name: 'Divyanshu Rai',
        role: 'Operative',
        spec: 'OSINT',
        fun: { ctf: 'OSINT', skill: 'Digital Footprinting', quote: '"You leave a trace."' }
    },
    {
        name: 'Shivang Kumar',
        role: 'Operative',
        spec: 'Digital Forensics',
        fun: { ctf: 'Forensics', skill: 'Memory Dumps', quote: '"Memory never lies."' }
    },
    {
        name: 'Sukhman Shally',
        role: 'Core Member',
        spec: 'Cyber Intelligence',
        fun: { ctf: 'Crypto', skill: 'Pattern Recognition', quote: '"Keys open everything."' }
    },
    {
        name: 'Yashika Siwach',
        role: 'Core Member',
        spec: 'Cyber Intelligence',
        fun: { ctf: 'Misc', skill: 'Lateral Thinking', quote: '"Outside the sandbox."' }
    },
];

export default function Team() {
    return (
        <section id="team" className="py-32 border-t border-charcoal/10">
            <div className="container mx-auto px-6 max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl tracking-[0.2em] font-serif uppercase text-charcoal mb-4">The Operatives</h2>
                    <div className="w-16 h-[1px] bg-gold-dark mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            key={member.name}
                            className="group relative border border-charcoal/10 bg-bone/50 hover:bg-bone hover:shadow-[0_8px_30px_rgba(42,37,34,0.05)] transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                            <div className="p-8 flex flex-col items-center text-center h-full">
                                {/* Portrait Frame */}
                                <div className="w-20 h-20 mb-6 rounded-full border border-charcoal/20 flex items-center justify-center bg-bone group-hover:border-gold-muted transition-colors">
                                    <span className="font-serif text-2xl text-charcoal/60 group-hover:text-gold-dark transition-colors">{member.name.charAt(0)}</span>
                                </div>

                                <h3 className="font-serif text-lg tracking-widest text-charcoal mb-1 uppercase font-medium">{member.name}</h3>
                                <p className="font-sans text-xs tracking-widest uppercase text-charcoal/50 mb-4">{member.role}</p>

                                <span className="font-serif text-sm text-charcoal/80 block mb-8">
                                    {member.spec}
                                </span>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-charcoal/10 mb-6 mt-auto" />

                                {/* Fun Stuff Section */}
                                <div className="w-full text-left space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-sans text-[10px] tracking-widest uppercase text-charcoal/40">Fav CTF</span>
                                        <span className="font-sans text-xs text-charcoal/80 font-medium">{member.fun.ctf}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-sans text-[10px] tracking-widest uppercase text-charcoal/40">Skill</span>
                                        <span className="font-sans text-xs text-charcoal/80 font-medium">{member.fun.skill}</span>
                                    </div>
                                    <div className="pt-2 text-center text-gold-dark font-serif italic text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        {member.fun.quote}
                                    </div>
                                </div>
                            </div>

                            {/* Subtle corner dots */}
                            <div className="absolute top-2 left-2 w-1 h-1 bg-charcoal/10 rounded-full" />
                            <div className="absolute top-2 right-2 w-1 h-1 bg-charcoal/10 rounded-full" />
                            <div className="absolute bottom-2 left-2 w-1 h-1 bg-charcoal/10 rounded-full" />
                            <div className="absolute bottom-2 right-2 w-1 h-1 bg-charcoal/10 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
