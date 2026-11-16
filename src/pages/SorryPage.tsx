
import { useState } from "react";
import {
    Heart,
    Sparkles,
    Send,
    Stars,
    Gift,
    Flower2,
    MessageCircleHeart,
    HandHeart,
    Infinity,
} from "lucide-react";

const sorryCards = [
    {
        number: "01",
        title: "For Every Hurt",
        message:
            "I am sorry for every word that made your heart heavy. I wish I could take back every moment that hurt you.",
        ending: "You deserved gentleness. 🌷",
        icon: Heart,
        gradient: "from-pink-500/20 via-rose-400/10 to-purple-500/20",
    },
    {
        number: "02",
        title: "For Every Tear",
        message:
            "If I ever became the reason behind your tears, I wish I could replace them with a thousand beautiful smiles.",
        ending: "Your smile matters to me. 🥺",
        icon: Flower2,
        gradient: "from-purple-500/20 via-fuchsia-400/10 to-pink-500/20",
    },
    {
        number: "03",
        title: "For Not Understanding",
        message:
            "I am sorry for the times I didn't listen, didn't understand, or didn't notice what your heart was trying to say.",
        ending: "I want to understand you better. 💗",
        icon: MessageCircleHeart,
        gradient: "from-fuchsia-500/20 via-purple-400/10 to-indigo-500/20",
    },
    {
        number: "04",
        title: "For Our Friendship",
        message:
            "No misunderstanding is more important than a friendship that holds so many memories, laughs, and little moments.",
        ending: "I never want to lose our bond. ♾️",
        icon: HandHeart,
        gradient: "from-rose-500/20 via-pink-400/10 to-purple-500/20",
    },
];

export default function SorryPage() {
    const [forgiven, setForgiven] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#100b27] via-[#211039] to-[#100b27] px-5 py-16 text-white">

            {/* Background Hearts */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {Array.from({ length: 22 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-bounce text-pink-300/25"
                        style={{
                            left: `${(i * 37) % 100}%`,
                            top: `${(i * 19) % 100}%`,
                            animationDelay: `${i * 0.35}s`,
                            animationDuration: `${3 + (i % 4)}s`,
                        }}
                    >
                        <Heart size={14 + (i % 3) * 9} fill="currentColor" />
                    </div>
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-5xl">

                {/* Top Label */}
                <div className="mb-6 flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-300/10 px-5 py-2 text-sm text-pink-200 shadow-lg shadow-pink-500/10">
                        <Sparkles size={16} />
                        A little message from my heart
                        <Sparkles size={16} />
                    </div>
                </div>

                {/* Main Title */}
                <div className="text-center">
                    <h1 className="bg-gradient-to-r from-pink-200 via-fuchsia-300 to-purple-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl">
                        A Thousand
                        <br />
                        Sorrys
                    </h1>

                    <p className="mt-5 text-lg text-purple-200 md:text-xl">
                        Some feelings are too precious to leave unsaid...
                    </p>
                </div>

                {/* Main Heart */}
                <div className="my-12 flex justify-center">
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-pink-200/30 bg-pink-300/10 shadow-[0_0_60px_rgba(244,114,182,0.25)]">
                        <div className="absolute inset-3 animate-ping rounded-full border border-pink-300/20" />
                        <Heart
                            size={76}
                            color="#f9a8d4"
                            fill="#f9a8d4"
                            strokeWidth={1.5}
                            className="drop-shadow-[0_0_18px_rgba(249,168,212,0.8)]"
                        />
                        <Sparkles
                            size={22}
                            className="absolute -right-2 top-2 text-yellow-200"
                        />
                        <Stars
                            size={20}
                            className="absolute -left-3 bottom-5 text-pink-200"
                        />
                    </div>
                </div>

                {/* Apology Letter */}
                <div className="rounded-[30px] border border-pink-200/20 bg-white/[0.07] p-7 shadow-[0_15px_70px_rgba(236,72,153,0.12)] backdrop-blur-xl md:p-12">
                    <div className="mb-7 flex items-center justify-center gap-3">
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-300/50" />
                        <Heart size={20} color="#f9a8d4" fill="#f9a8d4" />
                        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-300/50" />
                    </div>

                    <h2 className="mb-6 text-center text-2xl font-bold text-pink-200 md:text-3xl">
                        Dear My Favourite Person...
                    </h2>

                    <div className="space-y-5 text-center text-purple-100 leading-8 md:text-lg">
                        <p>
                            I know that sometimes I make mistakes. Maybe I say
                            things without thinking, maybe I fail to understand
                            your feelings, but please believe me...
                        </p>

                        <p className="text-pink-200">
                            Hurting you was never my intention.
                            You are someone I never want to lose.
                        </p>

                        <p>
                            Our friendship means more to me than my ego,
                            my anger, or any silly misunderstanding.
                        </p>

                        <p>
                            I cannot change the past, but I promise to try
                            harder, understand better, and cherish you more.
                        </p>
                    </div>

                    <div className="mt-9 text-center">
                        <p className="text-2xl font-bold italic text-pink-300">
                            I am truly, truly sorry. 💗
                        </p>
                    </div>
                </div>

                {/* Emotional Cards */}
                <div className="mt-20">
                    <div className="mb-10 text-center">
                        <div className="mb-4 flex justify-center">
                            <div className="rounded-2xl border border-pink-300/20 bg-pink-300/10 p-3">
                                <MessageCircleHeart
                                    size={30}
                                    className="text-pink-200"
                                />
                            </div>
                        </div>

                        <h2 className="text-3xl font-extrabold text-pink-200 md:text-4xl">
                            Little Sorrys, Big Feelings
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-purple-300">
                            Every card holds a feeling I wish I could express
                            with a thousand hugs.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {sorryCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.number}
                                    className={`group relative overflow-hidden rounded-[28px] border border-pink-200/20 bg-gradient-to-br ${card.gradient} p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-pink-200/60 hover:shadow-[0_18px_50px_rgba(236,72,153,0.2)] md:p-8`}
                                >
                                    {/* Decorative Glow */}
                                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-pink-300/10 blur-3xl transition-all duration-500 group-hover:bg-pink-300/25" />

                                    {/* Card Number */}
                                    <div className="relative flex items-center justify-between">
                                        <span className="text-sm font-bold tracking-[0.3em] text-pink-200/60">
                                            {card.number} / 04
                                        </span>

                                        <div className="rounded-2xl border border-pink-200/20 bg-white/10 p-3 transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                                            <Icon
                                                size={25}
                                                className="text-pink-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Card Heading */}
                                    <h3 className="relative mt-7 text-2xl font-extrabold text-pink-100">
                                        {card.title}
                                    </h3>

                                    {/* Divider */}
                                    <div className="my-4 h-px w-full bg-gradient-to-r from-pink-200/60 via-purple-200/30 to-transparent" />

                                    {/* Card Message */}
                                    <p className="relative min-h-[105px] text-base leading-7 text-purple-100">
                                        {card.message}
                                    </p>

                                    {/* Emotional Ending */}
                                    <div className="relative mt-6 flex items-center gap-2 border-t border-pink-200/15 pt-5">
                                        <Heart
                                            size={17}
                                            color="#f9a8d4"
                                            fill="#f9a8d4"
                                        />
                                        <p className="text-sm font-semibold italic text-pink-200">
                                            {card.ending}
                                        </p>
                                    </div>

                                    {/* Bottom Decoration */}
                                    <div className="absolute -bottom-5 -right-3 rotate-[-20deg] text-pink-200/10 transition duration-500 group-hover:scale-125">
                                        <Heart size={90} fill="currentColor" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Virtual Hug */}
                <div className="mt-16 rounded-[30px] border border-purple-200/20 bg-gradient-to-br from-pink-400/15 to-purple-500/15 p-8 text-center shadow-xl md:p-12">
                    <div className="mb-4 text-6xl">🫂</div>

                    <h2 className="text-3xl font-bold text-pink-200">
                        Sending You a Big Hug!
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-100">
                        Imagine a warm hug that says everything my words
                        cannot explain. No distance, no anger, just love
                        and friendship.
                    </p>

                    <div className="mt-5 text-3xl">💕 🌷 💕</div>
                </div>

                {/* New Beginning */}
                <div className="mt-16 text-center">
                    <Gift
                        size={38}
                        className="mx-auto mb-5 text-pink-300"
                    />

                    <h2 className="text-3xl font-bold text-pink-200 md:text-4xl">
                        Can We Start Again?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-200">
                        I don't expect everything to become perfect instantly.
                        I just hope we can leave the hurt behind and make
                        more beautiful memories together.
                    </p>

                    <button
                        onClick={() => setForgiven(true)}
                        className="mt-8 inline-flex items-center gap-3 rounded-full border border-pink-200/40 bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(236,72,153,0.3)] transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(236,72,153,0.5)]"
                    >
                        <Heart size={20} fill="white" />
                        {forgiven ? "A New Beginning 💗" : "One More Chance?"}
                        <Send size={17} />
                    </button>

                    {forgiven && (
                        <div className="mt-8">
                            <div className="animate-bounce text-5xl">🥹💗🫂</div>

                            <h3 className="mt-4 text-2xl font-bold text-pink-200">
                                A New Chapter Begins!
                            </h3>

                            <p className="mt-2 text-purple-200">
                                More smiles, more memories, and endless friendship.
                            </p>
                        </div>
                    )}
                </div>

                {/* Final Promise */}
                <div className="mt-20 border-t border-pink-200/20 pt-10 text-center">
                    <Infinity
                        size={38}
                        className="mx-auto mb-5 text-pink-300"
                    />

                    <p className="text-2xl font-bold italic text-pink-200">
                        "No matter what, you will always be special to me."
                    </p>

                    <div className="mt-6 flex justify-center gap-3 text-2xl">
                        💗 🌙 ✨ 🌷 💗
                    </div>

                    <p className="mt-5 text-sm tracking-[0.3em] text-purple-300">
                        FOREVER BESTIES
                    </p>
                </div>
            </div>
        </div>
    );
}
