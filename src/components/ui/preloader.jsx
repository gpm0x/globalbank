import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading time for a premium feel
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        key="preloader"
                        initial={{ opacity: 1 }}
                        exit={{
                            y: '-100%',
                            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    >
                        <div className="relative flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: [1, 1.05, 1],
                                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 2, repeat: Infinity },
                                    filter: { duration: 2, repeat: Infinity }
                                }}
                                className="mb-8"
                            >
                                <img src="/images/logo.svg" alt="Global Bank Logo" className="w-32 md:w-48" />
                            </motion.div>

                            <div className="relative w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '0%' }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-green-400"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="mt-4"
                            >
                                <span className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase">
                                    Global Bank
                                </span>
                            </motion.div>
                        </div>

                        {/* Added some premium decorative elements */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            transition={{ duration: 1 }}
                            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-green-400)_0%,_transparent_70%)] opacity-20"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default Preloader;
