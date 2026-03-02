import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: Event) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5,
                }}
            >
                <div className={`relative flex items-center justify-center transition-all duration-300 ${isHovering ? 'w-full h-full' : 'w-4 h-4'}`}>
                    {/* Outer rotating sigil ring on hover */}
                    <motion.div
                        className={`absolute border border-gold-muted rounded-full pointer-events-none ${isHovering ? 'w-full h-full opacity-100' : 'w-full h-full opacity-0'}`}
                        animate={{ rotate: isHovering ? 360 : 0 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Inner dots representing binary/mechanical gears */}
                    {isHovering && (
                        <>
                            <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-muted rounded-full" />
                            <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-muted rounded-full" />
                            <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1 h-1 bg-gold-muted rounded-full" />
                            <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-1 h-1 bg-gold-muted rounded-full" />
                        </>
                    )}

                    {/* Center Dot */}
                    <div className="w-2 h-2 bg-gold-muted rounded-full pointer-events-none" />
                </div>
            </motion.div>

            {/* Trailing dust particles */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-gold-muted/30 rounded-full pointer-events-none z-[99] blur-[1px]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: 'spring',
                    damping: 50,
                    stiffness: 100,
                    mass: 1.5,
                }}
            />
        </>
    );
}
