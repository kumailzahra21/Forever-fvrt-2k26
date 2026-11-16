
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Camera,
    ChevronLeft,
    ChevronRight,
    Heart,
    Lock,
    Sparkles,
    X,
} from "lucide-react";

type MemoryLaneProps = {
    onContinue: () => void;
};

const memories = [
    {
        image: "/images/memory-1.jpg",
        title: "The Beginning",
        year: "2018",
        caption: "The beginning of a friendship that became so special.",
    },
    {
        image: "/images/memory-2.jpg",
        title: "Little Moments",
        year: "2019",
        caption: "The little moments that turned into beautiful memories.",
    },
    {
        image: "/images/memory-3.jpg",
        title: "Endless Laughter",
        year: "2020",
        caption: "The laughs, the jokes and the happiness we shared.",
    },
    {
        image: "/images/memory-4.jpg",
        title: "Together Always",
        year: "2021",
        caption: "No matter what happened, our friendship stayed special.",
    },
    {
        image: "/images/memory-5.jpg",
        title: "Beautiful Days",
        year: "2022",
        caption: "Days I wish I could live all over again.",
    },
    {
        image: "/images/memory-6.jpg",
        title: "Our Little World",
        year: "2023",
        caption: "A world full of memories only we understand.",
    },
    {
        image: "/images/memory-7.jpg",
        title: "More Memories",
        year: "2024",
        caption: "Growing together and collecting more reasons to smile.",
    },
    {
        image: "/images/memory-8.jpg",
        title: "Forever Us",
        year: "2025",
        caption: "One friendship, countless memories and a forever bond.",
    },
];

export default function MemoryLane({ onContinue }: MemoryLaneProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const closePhoto = () => setSelectedPhoto(null);

    const previousPhoto = () => {
        setSelectedPhoto((current) =>
            current === null
                ? null
                : (current - 1 + memories.length) % memories.length
        );
    };

    const nextPhoto = () => {
        setSelectedPhoto((current) =>
            current === null ? null : (current + 1) % memories.length
        );
    };

    useEffect(() => {
        if (selectedPhoto === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closePhoto();
            if (event.key === "ArrowLeft") previousPhoto();
            if (event.key === "ArrowRight") nextPhoto();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedPhoto]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#10091c] px-5 pb-24 pt-20 text-white">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
            <div className="pointer-events-none absolute right-[-120px] top-[35%] h-96 w-96 rounded-full bg-pink-500/10 blur-[120px]" />

            {/* Heading */}
            <section className="relative z-10 mx-auto max-w-4xl py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-7 inline-flex items-center gap-3 rounded-full border border-pink-300/20 bg-pink-300/5 px-5 py-3 text-xs font-semibold tracking-[0.3em] text-pink-200"
                >
                    <Sparkles size={15} />
                    THE VAULT OF US
                    <Heart size={15} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-black leading-tight sm:text-6xl"
                >
                    Where our forever
                    <br />
                    <span className="gradient-text">memories live.</span>
                </motion.h1>

                <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-purple-100/60 sm:text-base">
                    Behind these doors lives a universe of laughter, love and moments we
                    will treasure forever.
                </p>

                <div className="mt-8 flex items-center justify-center gap-4 text-pink-300/70">
                    <Sparkles size={17} />
                    <Heart size={23} className="fill-pink-400/20" />
                    <Sparkles size={17} />
                </div>
            </section>

            {/* Unlock section */}
            {!isUnlocked && (
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 mx-auto max-w-xl rounded-3xl border border-pink-300/20 bg-white/[0.04] px-6 py-14 text-center shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-12"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-pink-300/20 bg-pink-400/10 text-pink-200"
                    >
                        <Lock size={35} />
                    </motion.div>

                    <p className="text-xs font-semibold tracking-[0.3em] text-pink-300">
                        A SPECIAL PLACE
                    </p>

                    <h2 className="mt-4 text-3xl font-bold">
                        Our memories are waiting
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-purple-100/55">
                        A little collection of our favourite moments, made with love and
                        saved just for us.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsUnlocked(true)}
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-sm font-bold shadow-[0_0_35px_rgba(236,72,153,0.3)] transition hover:shadow-[0_0_45px_rgba(236,72,153,0.5)]"
                    >
                        <Heart size={17} />
                        UNLOCK OUR WORLD
                        <Sparkles size={17} />
                    </motion.button>
                </motion.section>
            )}

            {/* Gallery */}
            <AnimatePresence>
                {isUnlocked && (
                    <motion.section
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10 mx-auto max-w-7xl"
                    >
                        <div className="mb-12 text-center">
                            <p className="text-xs font-semibold tracking-[0.3em] text-pink-300">
                                OUR BEAUTIFUL COLLECTION
                            </p>
                            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                                Every picture tells a story
                            </h2>
                            <p className="mt-4 text-sm text-purple-100/50">
                                Click any photo to open it in full view. ♡
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {memories.map((memory, index) => (
                                <motion.button
                                    type="button"
                                    key={memory.image}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.07 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    onClick={() => setSelectedPhoto(index)}
                                    className="group overflow-hidden rounded-3xl border border-pink-300/15 bg-white/[0.04] text-left shadow-xl transition hover:border-pink-300/40 hover:shadow-[0_15px_40px_rgba(236,72,153,0.12)]"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden bg-purple-950/50">
                                        <img
                                            src={memory.image}
                                            alt={memory.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                            onError={(event) => {
                                                event.currentTarget.style.opacity = "0";
                                            }}
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#10091c] via-transparent to-transparent opacity-90" />

                                        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur-md">
                                            <Camera size={17} />
                                        </div>

                                        <div className="absolute bottom-0 left-0 w-full p-5">
                                            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-pink-300">
                                                {memory.year}
                                            </p>
                                            <h3 className="text-xl font-bold text-white">
                                                {memory.title}
                                            </h3>
                                            <p className="mt-2 text-xs leading-6 text-purple-100/70">
                                                {memory.caption}
                                            </p>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <Heart
                                size={28}
                                className="mx-auto mb-5 fill-pink-400/20 text-pink-300"
                            />
                            <h2 className="text-3xl font-bold">
                                And our story continues...
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-purple-100/55">
                                These memories are only a small part of our beautiful journey.
                                There is so much more to our story.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onContinue}
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-sm font-bold shadow-lg shadow-pink-500/20 transition hover:shadow-pink-500/40"
                            >
                                Read Our Story
                                <ArrowRight size={18} />
                            </motion.button>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Fullscreen photo viewer */}
            <AnimatePresence>
                {selectedPhoto !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
                        onClick={closePhoto}
                    >
                        <button
                            type="button"
                            aria-label="Close photo"
                            onClick={closePhoto}
                            className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-pink-500/30"
                        >
                            <X size={24} />
                        </button>

                        <button
                            type="button"
                            aria-label="Previous photo"
                            onClick={(event) => {
                                event.stopPropagation();
                                previousPhoto();
                            }}
                            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-pink-500/30 sm:left-8"
                        >
                            <ChevronLeft size={25} />
                        </button>

                        <motion.div
                            key={selectedPhoto}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25 }}
                            className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center justify-center"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <img
                                src={memories[selectedPhoto].image}
                                alt={memories[selectedPhoto].title}
                                className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-[0_0_50px_rgba(236,72,153,0.15)]"
                            />

                            <div className="mt-5 text-center">
                                <p className="text-xs font-semibold tracking-[0.25em] text-pink-300">
                                    {memories[selectedPhoto].year}
                                </p>
                                <h3 className="mt-2 text-2xl font-bold text-white">
                                    {memories[selectedPhoto].title}
                                </h3>
                                <p className="mt-2 text-sm text-purple-100/60">
                                    {memories[selectedPhoto].caption}
                                </p>
                                <p className="mt-3 text-xs text-pink-200/50">
                                    {selectedPhoto + 1} / {memories.length}
                                </p>
                            </div>
                        </motion.div>

                        <button
                            type="button"
                            aria-label="Next photo"
                            onClick={(event) => {
                                event.stopPropagation();
                                nextPhoto();
                            }}
                            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-pink-500/30 sm:right-8"
                        >
                            <ChevronRight size={25} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
