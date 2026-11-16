
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Heart, Sparkles, Star, ArrowRight, Camera, Gift,
    WandSparkles, Gem, Crown, Infinity, Moon, Flower2,
    Scan, Orbit, Rocket, Smile, Laugh, HeartHandshake,
    ChevronRight, Zap,
} from "lucide-react";

type WelcomeProps = {
    onEnter?: () => void;
};

const quotes = [
    "Some souls just understand each other without saying a word. ♡",
    "Nine years of memories, laughter and a friendship I will always treasure.",
    "A best friend is a little piece of home wherever life takes us.",
    "If I could choose again, I would still choose you. Every single time.",
];

const cards = [
    {
        name: "SENORITA",
        subtitle: "My Beautiful Chaos",
        icon: Crown,
        color: "from-pink-400 via-rose-500 to-purple-600",
        message: "You have your own magic, and no one could ever take your place in my universe.",
        symbol: "👑",
    },
    {
        name: "JAAN BESTIE",
        subtitle: "My Heart's Person",
        icon: Heart,
        color: "from-purple-400 via-fuchsia-500 to-pink-500",
        message: "Some people become a part of your heart. You became a part of my entire world.",
        symbol: "💗",
    },
    {
        name: "POOKIE",
        subtitle: "My Cutest Human",
        icon: Flower2,
        color: "from-pink-400 via-purple-500 to-fuchsia-400",
        message: "Even ordinary moments become beautiful when they have you in them.",
        symbol: "🦋",
    },
    {
        name: "CHISHMISH",
        subtitle: "My Little Sunshine",
        icon: Star,
        color: "from-fuchsia-400 via-pink-400 to-purple-500",
        message: "Your little habits, your smile and your presence make my days brighter.",
        symbol: "✨",
    },
    {
        name: "4 EYES WALI",
        subtitle: "My Forever Partner",
        icon: Gem,
        color: "from-purple-400 via-violet-500 to-pink-500",
        message: "From silly moments to serious talks, I want a lifetime of memories with you.",
        symbol: "💎",
    },
    {
        name: "MY GIRL",
        subtitle: "My Forever & Always",
        icon: Infinity,
        color: "from-rose-400 via-pink-500 to-violet-600",
        message: "From 2018 to infinity. No matter what life brings, you will always be special to me.",
        symbol: "♾️",
    },
];

const friendshipLines = [
    "Soul-tied & timeless. ♾️",
    "My platonic soulmate. 🤍",
    "Forever on the same frequency. ✨",
    "Day one to day infinity. 💗",
];

const petMoods = [
    {
        name: "Happy",
        emoji: "🥰",
        face: "😊",
        message: "YAYYY! My two favourite humans are together! Somebody bring the friendship cake! 🎂",
    },
    {
        name: "Angry",
        emoji: "😤",
        face: "😡",
        message: "WHO IS FIGHTING AGAIN?! Alien court is now in session. Both besties must hug immediately! 👽",
    },
    {
        name: "Sleepy",
        emoji: "😴",
        face: "🥱",
        message: "Zzz... even in my dreams, I can hear these two besties talking non-stop. 😂",
    },
    {
        name: "Love",
        emoji: "💗",
        face: "😍",
        message: "Warning! Too much friendship energy detected. My tiny alien heart cannot handle this! 💞",
    },
];

export default function Welcome({ onEnter }: WelcomeProps) {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [surpriseOpen, setSurpriseOpen] = useState(false);
    const [petMood, setPetMood] = useState(0);
    const [scanStarted, setScanStarted] = useState(false);
    const [scanResult, setScanResult] = useState(false);

    const toggleCard = (index: number) => {
        setFlippedCards((previous) =>
            previous.includes(index)
                ? previous.filter((item) => item !== index)
                : [...previous, index]
        );
    };

    const startScan = () => {
        setScanStarted(false);
        setScanResult(false);

        window.setTimeout(() => {
            setScanStarted(true);
            window.setTimeout(() => setScanResult(true), 2600);
        }, 100);
    };

    return (
        <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-12 text-white sm:px-8">
            <style>{`
        @keyframes alienFloat {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-16px) rotate(4deg); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scannerPulse {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
        @keyframes sparklePop {
          0%, 100% { transform: scale(.7); opacity: .4; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes alienBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(.1); }
        }
        .alien-float { animation: alienFloat 3s ease-in-out infinite; }
        .orbit-spin { animation: orbitSpin 12s linear infinite; }
        .scanner-line { animation: scannerPulse 1.4s ease-in-out infinite; }
        .sparkle-pop { animation: sparklePop 2s ease-in-out infinite; }
        .alien-eyes { animation: alienBlink 4s infinite; transform-origin: center; }
        .pink-scroll::-webkit-scrollbar { height: 5px; }
        .pink-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #ec4899, #a855f7);
          border-radius: 20px;
        }
      `}</style>

            {/* GALAXY BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-600/20 blur-[120px]" />
                <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-purple-600/25 blur-[130px]" />
                <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[120px]" />

                {Array.from({ length: 55 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: i % 4 === 0 ? 3 : 2,
                            height: i % 4 === 0 ? 3 : 2,
                            left: `${(i * 31) % 100}%`,
                            top: `${(i * 47) % 100}%`,
                        }}
                        animate={{
                            opacity: [0.15, 1, 0.15],
                            scale: [0.7, 1.5, 0.7],
                        }}
                        transition={{
                            duration: 2 + (i % 4),
                            repeat: Infinity,
                            delay: (i % 6) * 0.4,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* TOP LABEL */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-7 flex justify-center"
                >
                    <div className="flex items-center gap-2 rounded-full border border-pink-300/30 bg-white/5 px-5 py-2 shadow-lg shadow-pink-500/10 backdrop-blur-xl">
                        <Sparkles size={15} className="text-pink-300" />
                        <span className="text-center text-[10px] font-black tracking-[0.3em] text-pink-200 sm:text-xs">
                            A GALAXY MADE JUST FOR YOU
                        </span>
                        <Sparkles size={15} className="text-purple-300" />
                    </div>
                </motion.div>

                {/* MAIN HEADING */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="mb-3 text-sm font-black tracking-[0.4em] text-purple-200 sm:text-base">
                        WELCOME TO
                    </p>

                    <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
                        <span className="block bg-gradient-to-r from-pink-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
                            MUSKAN
                        </span>
                        <span className="mt-2 block bg-gradient-to-r from-purple-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
                            BEST FRIEND
                        </span>
                        <span className="mt-2 block bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                            FOREVER UNIVERSE
                        </span>
                    </h1>

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="mx-auto mt-7 flex h-24 w-24 items-center justify-center rounded-full border border-pink-300/40 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-fuchsia-500/20 shadow-[0_0_50px_rgba(217,70,239,0.25)]"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10">
                            <Heart size={35} className="fill-pink-300 text-pink-200" />
                        </div>
                    </motion.div>

                    <p className="mx-auto mt-7 max-w-2xl text-sm font-semibold leading-7 text-purple-100/90 sm:text-lg">
                        A little universe of our memories, crazy moments, endless love
                        and a bond that has its own place among the stars.
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-3">
                        {["SINCE 2018", "9 YEARS OF MEMORIES", "FOREVER CONNECTED"].map(
                            (item, index) => (
                                <motion.span
                                    key={item}
                                    whileHover={{ scale: 1.12, y: -4 }}
                                    className="rounded-full border border-purple-300/25 bg-purple-500/10 px-4 py-2 text-[10px] font-black tracking-widest text-pink-100 sm:text-xs"
                                >
                                    {item}
                                </motion.span>
                            )
                        )}
                    </div>
                </motion.div>

                {/* NICKNAME CARDS */}
                <section className="mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-3 text-center"
                    >
                        <p className="text-xs font-black tracking-[0.35em] text-pink-300">
                            YOUR MANY MAGICAL NAMES
                        </p>
                        <h2 className="mt-3 text-2xl font-black sm:text-4xl">
                            Six Names. One <span className="text-pink-300">Special Soul.</span>
                        </h2>
                        <p className="mt-3 text-sm font-semibold text-purple-200">
                            Swipe the cards or tap them to reveal hidden messages ✨
                        </p>
                    </motion.div>

                    <div className="pink-scroll mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-6">
                        {cards.map((card, index) => {
                            const Icon = card.icon;
                            const flipped = flippedCards.includes(index);

                            return (
                                <motion.div
                                    key={card.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    whileHover={{ y: -9, rotateZ: index % 2 ? 2 : -2 }}
                                    style={{ perspective: 1000 }}
                                    className="h-64 w-[260px] flex-shrink-0 cursor-pointer snap-center sm:w-[290px]"
                                    onClick={() => toggleCard(index)}
                                >
                                    <motion.div
                                        animate={{ rotateY: flipped ? 180 : 0 }}
                                        transition={{ duration: 0.75, ease: "easeInOut" }}
                                        style={{
                                            transformStyle: "preserve-3d",
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                backfaceVisibility: "hidden",
                                                WebkitBackfaceVisibility: "hidden",
                                            }}
                                            className={`absolute inset-0 overflow-hidden rounded-3xl border border-white/25 bg-gradient-to-br ${card.color} p-[1px] shadow-2xl`}
                                        >
                                            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#100a27]/95 p-5 text-center backdrop-blur-2xl">
                                                <motion.div
                                                    animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.08, 1] }}
                                                    transition={{ duration: 5, repeat: Infinity }}
                                                    className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br ${card.color} shadow-[0_0_35px_rgba(236,72,153,0.3)]`}
                                                >
                                                    <Icon size={35} className="text-white" />
                                                </motion.div>

                                                <h3 className="mt-5 text-2xl font-black tracking-wider text-white">
                                                    {card.name}
                                                </h3>
                                                <p className="mt-2 text-sm font-bold text-pink-200">
                                                    {card.subtitle}
                                                </p>
                                                <div className="mt-5 flex items-center gap-2 text-[10px] font-black tracking-[0.25em] text-purple-200">
                                                    <Sparkles size={13} />
                                                    TAP TO REVEAL
                                                    <Sparkles size={13} />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                transform: "rotateY(180deg)",
                                                backfaceVisibility: "hidden",
                                                WebkitBackfaceVisibility: "hidden",
                                            }}
                                            className={`absolute inset-0 overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br ${card.color} p-[1px] shadow-2xl`}
                                        >
                                            <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-[#130a2d]/95 p-6 text-center">
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="text-5xl"
                                                >
                                                    {card.symbol}
                                                </motion.div>
                                                <h3 className="mt-4 text-xl font-black text-white">
                                                    {card.name}
                                                </h3>
                                                <p className="mt-3 text-sm font-bold leading-6 text-pink-100">
                                                    {card.message}
                                                </p>
                                                <p className="mt-4 text-[10px] font-black tracking-widest text-purple-200">
                                                    MADE WITH LOVE ♡
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <p className="mt-1 text-center text-xs font-bold text-purple-300">
                        ← Swipe to explore all six cards →
                    </p>
                </section>

                {/* OUR ALIEN PET */}
                <motion.section
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mt-24 overflow-hidden rounded-[2rem] border border-pink-300/25 bg-gradient-to-br from-pink-500/10 via-purple-500/15 to-fuchsia-500/10 p-6 shadow-[0_0_55px_rgba(217,70,239,0.13)] backdrop-blur-xl sm:p-10"
                >
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-pink-500/20 blur-3xl" />

                    <div className="relative z-10 text-center">
                        <p className="text-xs font-black tracking-[0.35em] text-pink-300">
                            YOUR LITTLE GALAXY COMPANION
                        </p>
                        <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                            Our Alien Pet <span className="text-pink-300">👽</span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-purple-100">
                            Meet your tiny alien friend! Choose its mood and see what funny
                            things it has to say about your friendship.
                        </p>

                        <div className="relative mx-auto mt-9 flex max-w-sm flex-col items-center rounded-[2rem] border border-purple-300/25 bg-[#120a2c]/70 p-7 shadow-[0_0_40px_rgba(192,132,252,0.15)]">
                            <div className="absolute inset-5 rounded-full border border-dashed border-pink-300/20 orbit-spin" />

                            <motion.div
                                key={petMood}
                                initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 180 }}
                                className="alien-float relative z-10 flex h-40 w-40 items-center justify-center rounded-[45%] border-4 border-pink-200/50 bg-gradient-to-br from-pink-300 via-fuchsia-400 to-purple-600 text-7xl shadow-[0_0_55px_rgba(236,72,153,0.4)]"
                            >
                                <span className="alien-eyes">{petMoods[petMood].face}</span>
                                <span className="absolute -left-5 top-8 text-3xl">✨</span>
                                <span className="absolute -right-5 bottom-5 text-3xl">💫</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="mt-7 rounded-full border border-pink-300/30 bg-pink-500/10 px-5 py-2 text-sm font-black text-pink-200"
                            >
                                BUBBLES THE ALIEN
                            </motion.div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={petMood}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    className="mt-5 min-h-24 rounded-2xl border border-purple-300/20 bg-white/5 p-4 text-sm font-bold leading-7 text-white"
                                >
                                    "{petMoods[petMood].message}"
                                </motion.div>
                            </AnimatePresence>

                            <p className="mt-5 text-xs font-black tracking-widest text-purple-200">
                                CHOOSE MY MOOD
                            </p>

                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                                {petMoods.map((mood, index) => (
                                    <motion.button
                                        key={mood.name}
                                        whileHover={{ scale: 1.12, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setPetMood(index)}
                                        className={`rounded-full border px-4 py-2 text-xs font-black transition ${petMood === index
                                                ? "border-pink-200 bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                                                : "border-purple-300/30 bg-white/5 text-purple-100"
                                            }`}
                                    >
                                        {mood.emoji} {mood.name}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <p className="mt-6 text-xs font-bold text-purple-200">
                            Bubbles says: "I officially adopted these two besties!" 👽💗
                        </p>
                    </div>
                </motion.section>

                {/* BESTIE DNA SCANNER */}
                <motion.section
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mt-20 overflow-hidden rounded-[2rem] border border-purple-300/25 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-fuchsia-500/15 p-6 shadow-[0_0_55px_rgba(217,70,239,0.14)] sm:p-10"
                >
                    <div className="text-center">
                        <p className="text-xs font-black tracking-[0.35em] text-purple-200">
                            TOP SECRET FRIENDSHIP LAB
                        </p>
                        <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                            Bestie DNA Scanner <span className="text-pink-300">🧬</span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-purple-100">
                            Scanning two souls, countless memories and one extraordinary
                            friendship. Let's discover your friendship compatibility!
                        </p>

                        <div className="mx-auto mt-9 max-w-lg rounded-[2rem] border border-pink-300/25 bg-[#100a27]/80 p-6 shadow-[0_0_45px_rgba(236,72,153,0.15)]">
                            <div className="flex items-center justify-center gap-5">
                                <motion.div
                                    animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="flex h-20 w-20 items-center justify-center rounded-2xl border border-pink-300/40 bg-pink-500/15 text-4xl shadow-lg shadow-pink-500/20"
                                >
                                    👩🏻‍🤝‍👩🏻
                                </motion.div>

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <HeartHandshake size={35} className="text-pink-300" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 8, 0], rotate: [5, -5, 5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="flex h-20 w-20 items-center justify-center rounded-2xl border border-purple-300/40 bg-purple-500/15 text-4xl shadow-lg shadow-purple-500/20"
                                >
                                    💗
                                </motion.div>
                            </div>

                            <div className="relative mx-auto mt-8 h-40 max-w-xs overflow-hidden rounded-2xl border border-purple-300/30 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                                        className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-pink-300/60"
                                    >
                                        <motion.div
                                            animate={{ scale: [0.8, 1.15, 0.8] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Scan size={55} className="text-pink-200" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {scanStarted && !scanResult && (
                                    <div className="scanner-line absolute left-0 right-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-pink-300/60 to-transparent shadow-[0_0_25px_rgba(236,72,153,0.8)]" />
                                )}

                                <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] font-black tracking-[0.3em] text-purple-200">
                                    {scanResult
                                        ? "SCAN COMPLETE"
                                        : scanStarted
                                            ? "ANALYZING FRIENDSHIP..."
                                            : "SCANNER READY"}
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {scanResult ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        className="mt-7 rounded-2xl border border-pink-300/40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-6"
                                    >
                                        <motion.div
                                            animate={{ scale: [1, 1.12, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-5xl"
                                        >
                                            💗
                                        </motion.div>
                                        <p className="mt-4 text-xs font-black tracking-[0.3em] text-pink-200">
                                            OFFICIAL GALAXY RESULT
                                        </p>
                                        <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                                            99.9% MATCH!
                                        </h3>
                                        <p className="mt-3 text-lg font-black text-pink-200">
                                            ONE IN A BILLION BOND
                                        </p>
                                        <p className="mt-3 text-sm font-semibold leading-7 text-purple-100">
                                            Two different personalities, one special connection.
                                            Your friendship is rare, precious and impossible to replace.
                                        </p>
                                        <div className="mt-5 flex justify-center gap-2 text-2xl">
                                            <span>💗</span><span>♾️</span><span>✨</span>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="mt-7">
                                        <p className="text-sm font-bold text-purple-200">
                                            {scanStarted
                                                ? "Connecting your friendship frequencies..."
                                                : "Ready to discover your friendship DNA?"}
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.06 }}
                                            whileTap={{ scale: 0.95 }}
                                            disabled={scanStarted}
                                            onClick={startScan}
                                            className="mt-5 inline-flex items-center gap-3 rounded-full border border-pink-200/40 bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-4 text-sm font-black tracking-widest text-white shadow-[0_0_30px_rgba(236,72,153,0.3)] disabled:cursor-wait disabled:opacity-60"
                                        >
                                            <Zap size={18} />
                                            {scanStarted ? "SCANNING..." : "START FRIENDSHIP SCAN"}
                                        </motion.button>
                                    </div>
                                )}
                            </AnimatePresence>

                            {scanResult && (
                                <button
                                    onClick={startScan}
                                    className="mt-5 text-xs font-black tracking-widest text-purple-200 underline decoration-pink-300 underline-offset-4"
                                >
                                    SCAN AGAIN
                                </button>
                            )}
                        </div>
                        <p className="mt-5 text-xs font-semibold text-purple-300">
                            *A fun friendship compatibility game — powered by bestie magic! ✨
                        </p>
                    </div>
                </motion.section>

                {/* FRIENDSHIP LINES */}
                <section className="mx-auto mt-20 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 text-center"
                    >
                        <p className="text-xs font-black tracking-[0.35em] text-purple-300">
                            OUR CONNECTION
                        </p>
                        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                            Beyond Ordinary Friendship
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {friendshipLines.map((line, index) => (
                            <motion.div
                                key={line}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -45 : 45 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ scale: 1.04, x: 8 }}
                                className="rounded-2xl border border-white/15 bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-fuchsia-500/15 px-5 py-5 text-center shadow-[0_0_25px_rgba(168,85,247,0.12)] backdrop-blur-xl"
                            >
                                <p className="text-base font-black tracking-wide text-white sm:text-xl">
                                    {line}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* MEMORY FRAME */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-20 max-w-3xl rounded-[2rem] border border-pink-300/25 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-fuchsia-500/10 p-7 text-center shadow-[0_0_50px_rgba(217,70,239,0.12)] backdrop-blur-xl sm:p-10"
                >
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-300/30 bg-pink-500/15"
                    >
                        <Camera size={27} className="text-pink-200" />
                    </motion.div>

                    <p className="mt-5 text-xs font-black tracking-[0.3em] text-pink-300">
                        OUR BEAUTIFUL JOURNEY
                    </p>
                    <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                        Nine Years, Countless Memories
                    </h2>
                    <p className="mt-5 text-sm font-semibold leading-7 text-purple-100 sm:text-base">
                        From the first hello in 2018 to all the moments that made us
                        who we are today. Every laugh, every little fight, every
                        journey and every memory has a special place in my heart.
                    </p>
                    <div className="mt-7 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-pink-300/40" />
                        <Heart size={19} className="fill-pink-300 text-pink-300" />
                        <span className="h-px w-12 bg-pink-300/40" />
                    </div>
                </motion.section>

                {/* INTERACTIVE QUOTE */}
                <section className="mx-auto mt-16 max-w-2xl text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <Star size={16} className="text-pink-300" />
                        <p className="text-xs font-black tracking-[0.3em] text-purple-200">
                            A LITTLE MESSAGE FOR YOU
                        </p>
                        <Star size={16} className="text-pink-300" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={quoteIndex}
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35 }}
                            className="flex min-h-32 items-center justify-center rounded-3xl border border-purple-300/25 bg-white/5 p-7 shadow-xl backdrop-blur-xl"
                        >
                            <p className="text-lg font-bold leading-8 text-pink-100 sm:text-xl">
                                {quotes[quoteIndex]}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setQuoteIndex((quoteIndex + 1) % quotes.length)}
                        className="mt-5 rounded-full border border-purple-300/30 bg-purple-500/15 px-6 py-3 text-xs font-black tracking-widest text-white transition hover:bg-purple-500/30"
                    >
                        ANOTHER LITTLE MESSAGE ✨
                    </motion.button>
                </section>

                {/* SURPRISE */}
                <section className="mx-auto mt-16 max-w-xl text-center">
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-300/30 bg-pink-500/15 shadow-[0_0_35px_rgba(236,72,153,0.2)]"
                    >
                        <Gift size={32} className="text-pink-200" />
                    </motion.div>

                    <h2 className="text-2xl font-black sm:text-3xl">
                        A Little Surprise For You
                    </h2>
                    <p className="mt-3 text-sm font-semibold text-purple-200">
                        There is something special waiting behind this little button.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSurpriseOpen(!surpriseOpen)}
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-pink-300/40 bg-gradient-to-r from-pink-500/30 to-purple-500/30 px-7 py-3 font-black text-white shadow-[0_0_25px_rgba(236,72,153,0.2)]"
                    >
                        <WandSparkles size={18} />
                        {surpriseOpen ? "CLOSE MY SURPRISE" : "OPEN YOUR SURPRISE"}
                    </motion.button>

                    <AnimatePresence>
                        {surpriseOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.7 }}
                                className="mt-7 rounded-3xl border border-pink-300/30 bg-gradient-to-br from-pink-500/15 to-purple-500/20 p-7 shadow-[0_0_40px_rgba(236,72,153,0.2)]"
                            >
                                <div className="text-4xl">💗🫂💗</div>
                                <h3 className="mt-4 text-2xl font-black text-pink-200">
                                    You Are Irreplaceable!
                                </h3>
                                <p className="mt-3 font-semibold leading-7 text-purple-100">
                                    No matter how many people enter my life, nobody can
                                    take the place that belongs to you. You are my
                                    one-of-a-kind person, Muskan.
                                </p>
                                <p className="mt-4 font-black text-pink-200">
                                    From 2018 to infinity. ♾️
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>

                {/* ENTER BUTTON */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="mb-5 text-sm font-bold tracking-widest text-purple-200">
                        READY TO EXPLORE OUR LITTLE WORLD?
                    </p>

                    <motion.button
                        onClick={onEnter}
                        whileHover={{ scale: 1.07, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 rounded-full border border-pink-200/50 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 px-9 py-4 text-sm font-black tracking-widest text-white shadow-[0_0_40px_rgba(217,70,239,0.35)]"
                    >
                        ENTER OUR WORLD
                        <ArrowRight
                            size={20}
                            className="transition-transform group-hover:translate-x-2"
                        />
                    </motion.button>
                </motion.div>

                {/* FOOTER */}
                <footer className="mt-20 border-t border-white/10 pt-8 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <Moon size={16} className="text-purple-300" />
                        <p className="text-xs font-black tracking-[0.35em] text-pink-200">
                            FOREVER & ALWAYS
                        </p>
                        <Gem size={16} className="text-pink-300" />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-purple-200">
                        Made with endless love, just for Muskan. 💗
                    </p>
                    <p className="mt-2 text-xs font-bold tracking-widest text-purple-300/60">
                        ONE FRIENDSHIP • ONE UNIVERSE • INFINITY MEMORIES
                    </p>
                </footer>
            </div>
        </main>
    );
}
