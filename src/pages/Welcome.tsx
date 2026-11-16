
import { useState } from "react";

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
        emoji: "👑",
        message: "You have your own magic, and no one could ever take your place in my universe.",
        color: "from-pink-500 to-purple-600",
    },
    {
        name: "JAAN BESTIE",
        subtitle: "My Favourite Person",
        emoji: "💗",
        message: "You are not just my best friend. You are a very special part of my heart.",
        color: "from-purple-500 to-pink-500",
    },
    {
        name: "POOKIE",
        subtitle: "My Little Sunshine",
        emoji: "🌸",
        message: "Even on my worst days, your presence makes everything feel a little better.",
        color: "from-fuchsia-500 to-rose-500",
    },
    {
        name: "CHISHMISH",
        subtitle: "My Sweet Trouble",
        emoji: "🍇",
        message: "Our silly moments are some of my most precious memories. Never change!",
        color: "from-violet-500 to-purple-700",
    },
    {
        name: "4 EYES WALI",
        subtitle: "My Partner in Crime",
        emoji: "👀",
        message: "From random talks to endless laughter, life is more fun with you.",
        color: "from-rose-500 to-purple-500",
    },
    {
        name: "MY GIRL",
        subtitle: "My Forever Person",
        emoji: "🦋",
        message: "Different days, different stories, but always one special friendship.",
        color: "from-purple-600 to-pink-500",
    },
];

const friendshipLines = [
    "Soul-tied & timeless. ♾️",
    "My platonic soulmate. 🤍",
    "Forever on the same frequency. ✨",
    "Day one to day infinity. 💗",
];

export default function Welcome({ onEnter }: WelcomeProps) {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [quoteIndex, setQuoteIndex] = useState(0);

    const toggleCard = (index: number) => {
        setFlippedCards((previous) =>
            previous.includes(index)
                ? previous.filter((item) => item !== index)
                : [...previous, index]
        );
    };

    const nextQuote = () => {
        setQuoteIndex((previous) => (previous + 1) % quotes.length);
    };

    const previousQuote = () => {
        setQuoteIndex(
            (previous) => (previous - 1 + quotes.length) % quotes.length
        );
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#10071f] px-4 py-10 text-white sm:px-6">

            {/* Galaxy Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-600/20 blur-[100px]" />
                <div className="absolute -right-32 top-96 h-96 w-96 rounded-full bg-purple-600/25 blur-[110px]" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[100px]" />

                {Array.from({ length: 30 }).map((_, index) => (
                    <div
                        key={index}
                        className="absolute h-1 w-1 animate-pulse rounded-full bg-pink-200"
                        style={{
                            left: `${(index * 37) % 100}%`,
                            top: `${(index * 53) % 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">

                {/* Welcome Heading */}
                <section className="flex min-h-[550px] flex-col items-center justify-center text-center">

                    <div className="mb-6 rounded-full border border-pink-300/30 bg-pink-500/10 px-5 py-2 text-sm text-pink-200">
                        ✨ A LITTLE UNIVERSE MADE WITH LOVE ✨
                    </div>

                    <div className="mb-5 animate-bounce text-6xl">
                        💗
                    </div>

                    <h1 className="text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
                        <span className="block bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                            WELCOME TO
                        </span>

                        <span className="mt-3 block bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            MUSKAN
                        </span>

                        <span className="mt-3 block text-3xl text-white sm:text-5xl">
                            BEST FRIEND
                        </span>

                        <span className="mt-3 block bg-gradient-to-r from-purple-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
                            FOREVER UNIVERSE
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-purple-200 sm:text-lg">
                        A magical little world filled with our memories, silly moments,
                        secret conversations, endless love and a friendship that deserves
                        its own universe. ✨
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <span className="rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-200">
                            💕 Besties Forever
                        </span>

                        <span className="rounded-full border border-purple-300/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
                            ♾️ Since 2018
                        </span>

                        <span className="rounded-full border border-fuchsia-300/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-200">
                            🌙 One in a Billion
                        </span>
                    </div>

                    <div className="mt-12 animate-bounce text-3xl text-pink-300">
                        ↓
                    </div>
                </section>

                {/* Nickname Cards */}
                <section className="mb-20">

                    <div className="mb-9 text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink-300">
                            Special Names, Special Feelings
                        </p>

                        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                            <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                                OUR LITTLE NICKNAMES
                            </span>
                            💌
                        </h2>

                        <p className="mt-3 text-purple-200">
                            Swipe the cards and tap any card to reveal its secret message.
                        </p>
                    </div>

                    <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-6">

                        {cards.map((card, index) => {
                            const isFlipped = flippedCards.includes(index);

                            return (
                                <button
                                    key={card.name}
                                    type="button"
                                    onClick={() => toggleCard(index)}
                                    className="h-64 min-w-[250px] snap-center text-left sm:min-w-[280px]"
                                    style={{ perspective: "1000px" }}
                                >
                                    <div
                                        className="relative h-full w-full transition-transform duration-700"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                                        }}
                                    >

                                        {/* Front */}
                                        <div
                                            className={`absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br ${card.color} p-6 text-center shadow-xl`}
                                            style={{ backfaceVisibility: "hidden" }}
                                        >
                                            <div className="mb-4 text-6xl">
                                                {card.emoji}
                                            </div>

                                            <h3 className="text-2xl font-black tracking-wide">
                                                {card.name}
                                            </h3>

                                            <p className="mt-2 text-sm text-white/90">
                                                {card.subtitle}
                                            </p>

                                            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/80">
                                                Tap to flip ✨
                                            </p>
                                        </div>

                                        {/* Back */}
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-pink-200/30 bg-gradient-to-br from-[#41104b] via-[#7c1d65] to-[#32104f] p-6 text-center shadow-xl"
                                            style={{
                                                backfaceVisibility: "hidden",
                                                transform: "rotateY(180deg)",
                                            }}
                                        >
                                            <span className="text-5xl">
                                                {card.emoji}
                                            </span>

                                            <h3 className="mt-4 text-xl font-black text-pink-200">
                                                {card.name}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-white">
                                                {card.message}
                                            </p>

                                            <span className="mt-4 text-xs text-pink-200">
                                                Tap to turn back 💗
                                            </span>
                                        </div>

                                    </div>
                                </button>
                            );
                        })}

                    </div>

                    <p className="mt-2 text-center text-xs text-purple-300">
                        ← Swipe to explore all six cards →
                    </p>
                </section>

                {/* Quotes */}
                <section className="mb-20">

                    <div className="mx-auto max-w-3xl rounded-3xl border border-pink-300/20 bg-gradient-to-r from-pink-950/50 to-purple-950/60 p-8 text-center shadow-xl sm:p-10">

                        <div className="text-5xl">💞</div>

                        <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
                            A Little Reminder
                        </p>

                        <div
                            key={quoteIndex}
                            className="mt-6 flex min-h-32 items-center justify-center"
                        >
                            <h2 className="text-xl font-bold leading-9 text-pink-100 sm:text-2xl">
                                “{quotes[quoteIndex]}”
                            </h2>
                        </div>

                        <div className="mt-7 flex items-center justify-center gap-5">

                            <button
                                type="button"
                                onClick={previousQuote}
                                aria-label="Previous quote"
                                className="rounded-full border border-pink-300/30 px-5 py-3 text-xl text-pink-200 transition hover:bg-pink-500/20"
                            >
                                ←
                            </button>

                            <span className="text-sm text-purple-300">
                                {quoteIndex + 1} / {quotes.length}
                            </span>

                            <button
                                type="button"
                                onClick={nextQuote}
                                aria-label="Next quote"
                                className="rounded-full border border-pink-300/30 px-5 py-3 text-xl text-pink-200 transition hover:bg-pink-500/20"
                            >
                                →
                            </button>

                        </div>
                    </div>
                </section>

                {/* Friendship Code */}
                <section className="mb-20">

                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-black text-pink-200">
                            OUR FRIENDSHIP CODE ♾️
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {friendshipLines.map((line) => (
                            <div
                                key={line}
                                className="rounded-2xl border border-purple-300/20 bg-purple-900/30 p-5 text-center font-bold text-purple-100 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-pink-300/50"
                            >
                                {line}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Enter Button */}
                <section className="py-12 text-center">

                    <div className="mb-6 animate-pulse text-6xl">
                        🌌
                    </div>

                    <h2 className="text-3xl font-black sm:text-4xl">
                        <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                            OUR STORY STARTS HERE
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-200">
                        Ready to explore our memories, stories, secrets and all the little
                        things that make this friendship special?
                    </p>

                    <button
                        type="button"
                        onClick={onEnter}
                        className="mt-8 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-9 py-4 text-lg font-black text-white shadow-xl shadow-pink-500/30 transition duration-300 hover:scale-105"
                    >
                        ENTER OUR WORLD →
                    </button>

                    <p className="mt-8 text-sm text-purple-300">
                        Made with endless love, just for Muskan. 💗
                    </p>
                </section>

            </div>
        </main>
    );
}
