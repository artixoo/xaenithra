import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const RotatingEmblem = () => (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12 mx-auto">
        <motion.div
            className="absolute inset-0 rounded-full border border-charcoal/20 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
            className="absolute inset-4 rounded-full border border-charcoal/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-12 rounded-full border border-gold-muted/30 flex items-center justify-center bg-bone shadow-inner">
            <Shield strokeWidth={1} className="w-20 h-20 text-charcoal/80" />
        </div>
    </div>
);

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-20">
            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <RotatingEmblem />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-8 tracking-widest uppercase font-light leading-tight"
                >
                    Forged in Logic.<br />Proven in Capture.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 mt-8"
                >
                    <a
                        href="#about"
                        className="px-8 py-3 bg-charcoal text-bone font-sans text-sm tracking-widest uppercase hover:bg-gold-dark hover:text-bone transition-all duration-300"
                    >
                        Explore The Order
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-transparent border border-charcoal text-charcoal font-sans text-sm tracking-widest uppercase hover:border-gold-dark hover:text-gold-dark transition-all duration-300"
                    >
                        View Campaigns
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
