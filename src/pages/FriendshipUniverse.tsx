
import { useState } from "react";
import {
    Heart, Sparkles, Star, X, ChevronRight, Orbit,
    Rocket, Moon, Infinity, Plane, BookOpen
} from "lucide-react";

const planets = [
    {
        id: 1,
        name: "PINK PLANET",
        subtitle: "Where It All Began",
        date: "APRIL 2018 • SCHOOL DAYS",
        emoji: "💗",
        icon: Heart,
        color: "#ff69b4",
        glow: "rgba(255,105,180,.55)",
        story: `Our story started back in April 2018 when I joined 9th class at Government Girls School in Tando Muhammad Khan.

You were so quiet back then, while I slowly started talking to everyone. Our real interaction began in the chemistry lab — doing little challenges together — and that’s where my true attachment to you started.

I always wished you would talk to me, Muskan. Honestly, talking to Neha was just an excuse; my heart always wanted YOUR friendship.

People said a lot of things to me, and even though it made me want to cry, I stayed silent because you mattered.`,
        closing: "You were the friendship my heart was secretly wishing for. 💗"
    },
    {
        id: 2,
        name: "PURPLE PLANET",
        subtitle: "The Silent Distance",
        date: "MATRIC • INTERMEDIATE",
        emoji: "💜",
        icon: BookOpen,
        color: "#b58aff",
        glow: "rgba(181,138,255,.55)",
        story: `We enjoyed our Matric days a lot, even through all the gossip and issues.

In 1st Year, whenever I just wanted to sit next to you, everyone seemed to have a problem with it. In Inter, we finally got the chance to sit together, even though we didn't go to college every day.

Later, I'm sorry to say, I stopped talking to you because I saw how happy you were with your other friends. I assumed you weren't interested in my friendship, yet I carried a heavy guilt inside me because of our silence.`,
        closing: "Sometimes silence hides feelings that words cannot explain. 💜"
    },
    {
        id: 3,
        name: "MEMORY PLANET",
        subtitle: "Our 2023 Comeback",
        date: "2023 – 2025 • OUR JOURNEYS",
        emoji: "🌍",
        icon: Plane,
        color: "#63cfff",
        glow: "rgba(99,207,255,.55)",
        story: `In 2023, when I started my job, our real friendship finally blossomed again.

From Karachi to Mulakatiar and Hyderabad — every single trip with you was pure magic.

Those are the most precious memories of my life, and I still wish someone could rewind time and bring those days back.

Even at the start of 2025, my last trip with the school — and with you — gave me memories I will cherish forever.`,
        closing: "If only we could travel back and live those moments once again. ✈️"
    },
    {
        id: 4,
        name: "MOON PLANET",
        subtitle: "Tears, Sorry & Forgiveness",
        date: "EID-UL-ADHA • 2025",
        emoji: "🌙",
        icon: Moon,
        color: "#9a9bff",
        glow: "rgba(154,155,255,.55)",
        story: `Yes, we fought a lot. Whenever someone else talked to you or got close, I became possessive and serious — not out of anger, but because I couldn't bear to share you with anyone.

Our biggest fight happened on Eid-ul-Adha over not sending pictures. I thought you ignored me, so I held back too. That fight broke me, and honestly, I still can't forget it.

Whenever you don't talk to me, everything feels incomplete and tears come to my eyes.

I have zero ego or attitude, Muskan — I genuinely care for you and love you from the bottom of my heart.

I am truly sorry for all my mistakes. Please forgive me.`,
        closing: "I never wanted a fight to become a distance between us. 🥺"
    },
    {
        id: 5,
        name: "FOREVER PLANET",
        subtitle: "Until My Last Breath",
        date: "OUR FUTURE • NO ENDING",
        emoji: "♾️",
        icon: Infinity,
        color: "#ffb6d9",
        glow: "rgba(255,182,217,.6)",
        story: `No matter what happens in the future, just stay happy.

Even if life gets busy, I promise I will keep messaging you until my last breath because I can never forget you.

Everything I say comes straight from my heart.

Always remember this one truth: ours is not just a normal friendship — it is a bond of the heart (Dil Ka Rishta), and it will stay alive forever.`,
        closing: "You are a part of my story that I never want to end. ♾️"
    }
];

const stars = Array.from({ length: 65 }, (_, i) => ({
    left: `${(i * 47) % 100}%`,
    top: `${(i * 67) % 100}%`,
    delay: `${(i % 8) * 0.4}s`,
    size: i % 4 === 0 ? 4 : 2
}));

export default function FriendshipUniverse() {
    const [selected, setSelected] = useState<number | null>(null);
    const [alienMessage, setAlienMessage] = useState(
        "Welcome to the galaxy of our friendship! 👽💗"
    );

    const activePlanet = planets.find(p => p.id === selected);

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#080719] px-4 py-16 text-white">
            <style>{`
        @keyframes planetFloat {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-19px) rotate(5deg); }
        }
        @keyframes planetSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes starBlink {
          0%,100% { opacity: .2; }
          50% { opacity: 1; }
        }
        @keyframes ufoFly {
          0%,100% { transform: translate(0,0) rotate(-8deg); }
          50% { transform: translate(22px,-15px) rotate(8deg); }
        }
        @keyframes alienBounce {
          0%,100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes galaxyPulse {
          0%,100% { opacity: .3; transform: scale(.9); }
          50% { opacity: .7; transform: scale(1.1); }
        }
        @keyframes ringRotate {
          from { transform: translate(-50%,-50%) rotateX(70deg) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotateX(70deg) rotate(360deg); }
        }
        @keyframes modalIn {
          from { opacity:0; transform:translateY(25px) scale(.96); }
          to { opacity:1; transform:translateY(0) scale(1); }
        }
        .planet-float { animation: planetFloat 5s ease-in-out infinite; }
        .planet-ring {
          position:absolute; left:50%; top:50%;
          width:155%; height:48%;
          border:2px solid var(--planet);
          border-radius:50%;
          transform:translate(-50%,-50%) rotateX(70deg);
          box-shadow:0 0 13px var(--planet);
        }
        .planet-ring-spin {
          animation:ringRotate 13s linear infinite;
        }
        .planet-sphere {
          position:relative;
          border-radius:50%;
          overflow:hidden;
          background:
            radial-gradient(circle at 30% 25%,rgba(255,255,255,.9),transparent 9%),
            radial-gradient(circle at 35% 35%,var(--planet-light),transparent 30%),
            radial-gradient(circle at 70% 75%,rgba(0,0,0,.8),transparent 48%),
            radial-gradient(circle at 40% 40%,var(--planet),#26134d 85%);
          box-shadow:inset -18px -14px 28px rgba(0,0,0,.7),
            inset 7px 7px 18px rgba(255,255,255,.3),
            0 0 30px var(--planet-glow);
        }
        .planet-sphere:after {
          content:"";
          position:absolute; inset:0;
          background:repeating-linear-gradient(
            165deg,transparent 0 17px,
            rgba(255,255,255,.09) 19px 23px,
            transparent 27px 42px
          );
          opacity:.65;
        }
        .planet-card {
          background:linear-gradient(145deg,rgba(36,27,72,.85),rgba(12,10,34,.95));
          border:1px solid rgba(216,180,254,.2);
          backdrop-filter:blur(15px);
        }
        .galaxy-modal { animation:modalIn .45s ease both; }
        .alien { animation:alienBounce 3s ease-in-out infinite; }
        .ufo { animation:ufoFly 6s ease-in-out infinite; }
        .space-star { animation:starBlink 3s ease-in-out infinite; }
      `}</style>

            {/* Galaxy background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/3 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-purple-700/15 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-600/10 blur-[110px]" />
                {stars.map((star, i) => (
                    <Star
                        key={i}
                        className="space-star absolute fill-purple-200 text-purple-200"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            animationDelay: star.delay
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="mb-5 inline-flex rounded-2xl border border-purple-300/30 bg-purple-400/10 p-4 text-purple-200">
                        <Orbit size={34} />
                    </div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[.45em] text-pink-300">
                        A galaxy made from memories
                    </p>
                    <h1 className="text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
                        <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
                            THE FRIENDSHIP
                        </span>
                        <br />
                        <span className="text-white">UNIVERSE</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-purple-200 sm:text-lg">
                        Five planets. Five chapters. One friendship that lives in my heart.
                        Explore our little universe, Muskan. 💗
                    </p>
                </header>

                {/* Alien greeting */}
                <div className="mx-auto mb-12 flex max-w-xl items-center justify-center gap-4 rounded-2xl border border-purple-300/20 bg-purple-400/10 p-4">
                    <div className="alien text-4xl">👽</div>
                    <div className="min-w-0 flex-1">
                        <p className="text-xs font-black uppercase tracking-widest text-pink-300">
                            Your Galaxy Guide
                        </p>
                        <p className="mt-1 text-sm font-semibold text-purple-100">
                            {alienMessage}
                        </p>
                    </div>
                    <button
                        onClick={() => setAlienMessage(
                            "Psst! Every planet holds a little piece of your story. Tap one! ✨"
                        )}
                        className="rounded-full bg-pink-500/20 p-2 text-pink-200 hover:bg-pink-500/40"
                        aria-label="Talk to alien"
                    >
                        <Sparkles size={19} />
                    </button>
                </div>

                {/* Orbit map */}
                <section className="relative mx-auto mb-16 max-w-5xl">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/10 sm:h-[600px] sm:w-[600px]" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-300/10 sm:h-[440px] sm:w-[440px]" />

                    <div className="grid grid-cols-2 items-center justify-items-center gap-x-3 gap-y-12 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
                        {planets.map((planet, index) => {
                            const Icon = planet.icon;
                            return (
                                <button
                                    key={planet.id}
                                    onClick={() => {
                                        setSelected(planet.id);
                                        setAlienMessage(`You discovered ${planet.name}! ✨`);
                                    }}
                                    className={`group relative flex w-full max-w-[190px] flex-col items-center rounded-3xl p-3 text-center transition duration-300 hover:-translate-y-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-pink-300 ${index === 4 ? "col-span-2 sm:col-span-1" : ""
                                        }`}
                                >
                                    <div
                                        className="planet-float relative mb-5 flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40"
                                        style={{
                                            animationDelay: `${index * .45}s`,
                                            ["--planet" as string]: planet.color,
                                            ["--planet-light" as string]: planet.color,
                                            ["--planet-glow" as string]: planet.glow
                                        }}
                                    >
                                        <div className="planet-ring planet-ring-spin" style={{ ["--planet" as string]: planet.color }} />
                                        <div
                                            className="planet-sphere h-24 w-24 sm:h-32 sm:w-32"
                                            style={{
                                                ["--planet" as string]: planet.color,
                                                ["--planet-light" as string]: planet.color,
                                                ["--planet-glow" as string]: planet.glow
                                            }}
                                        />
                                        <span className="absolute z-10 text-3xl drop-shadow-lg">
                                            {planet.emoji}
                                        </span>
                                        <span className="absolute -right-1 top-2 text-xl">✦</span>
                                    </div>

                                    <span
                                        className="text-xs font-black tracking-widest sm:text-sm"
                                        style={{ color: planet.color }}
                                    >
                                        {planet.name}
                                    </span>
                                    <span className="mt-2 text-xs font-semibold leading-5 text-purple-200">
                                        {planet.subtitle}
                                    </span>
                                    <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-white/80 transition group-hover:border-pink-300/50 group-hover:text-pink-200">
                                        Explore <ChevronRight size={13} />
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Flying UFO and aliens */}
                    <div className="ufo pointer-events-none absolute -left-1 top-[18%] hidden text-4xl sm:block">
                        🛸
                    </div>
                    <div className="alien pointer-events-none absolute -right-2 top-[52%] hidden text-4xl sm:block">
                        👾
                    </div>
                    <div className="ufo pointer-events-none absolute bottom-[4%] left-[8%] text-2xl">
                        ✨
                    </div>
                </section>

                {/* Planet instructions */}
                <div className="planet-card mx-auto mb-14 max-w-3xl rounded-3xl p-6 text-center">
                    <Rocket className="mx-auto mb-3 text-pink-300" size={30} />
                    <h2 className="text-xl font-black text-white">
                        Your Journey Through Our Galaxy
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-purple-200">
                        Choose any planet to unlock its chapter. Each one carries a
                        different memory, a different feeling and a piece of my heart.
                    </p>
                </div>

                {/* Story modal */}
                {activePlanet && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#050411]/90 p-4 backdrop-blur-md"
                        onClick={() => setSelected(null)}
                    >
                        <article
                            className="galaxy-modal relative my-auto max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border p-6 shadow-2xl sm:p-10"
                            style={{
                                borderColor: `${activePlanet.color}80`,
                                background: "linear-gradient(145deg,#21143d,#100b27 70%)",
                                boxShadow: `0 0 55px ${activePlanet.glow}`
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-pink-500/30"
                                aria-label="Close planet story"
                            >
                                <X size={22} />
                            </button>

                            <div className="mb-7 flex flex-col items-center text-center">
                                <div
                                    className="mb-5 flex h-24 w-24 items-center justify-center rounded-full text-5xl"
                                    style={{
                                        background: `radial-gradient(circle at 30% 25%,white,${activePlanet.color} 35%,#26134d 85%)`,
                                        boxShadow: `0 0 40px ${activePlanet.glow}`
                                    }}
                                >
                                    {activePlanet.emoji}
                                </div>
                                <p
                                    className="text-xs font-black tracking-[.35em]"
                                    style={{ color: activePlanet.color }}
                                >
                                    {activePlanet.name}
                                </p>
                                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                                    {activePlanet.subtitle}
                                </h2>
                                <p className="mt-3 text-xs font-black tracking-[.2em] text-purple-300">
                                    {activePlanet.date}
                                </p>
                            </div>

                            <div
                                className="mb-7 h-px"
                                style={{
                                    background: `linear-gradient(to right,transparent,${activePlanet.color},transparent)`
                                }}
                            />

                            <div className="space-y-5">
                                {activePlanet.story.split("\n\n").map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-base font-medium leading-8 text-purple-100 sm:text-lg sm:leading-9"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div
                                className="mt-8 rounded-2xl border p-5 text-center"
                                style={{
                                    borderColor: `${activePlanet.color}55`,
                                    background: `${activePlanet.color}12`
                                }}
                            >
                                <Heart
                                    className="mx-auto mb-3"
                                    size={25}
                                    fill={activePlanet.color}
                                    color={activePlanet.color}
                                />
                                <p className="text-base font-black leading-7 sm:text-lg" style={{ color: activePlanet.color }}>
                                    {activePlanet.closing}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const next = activePlanet.id === 5 ? 1 : activePlanet.id + 1;
                                    setSelected(next);
                                    setAlienMessage(`Now entering ${planets[next - 1].name}! 🚀`);
                                }}
                                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-black text-[#160c2d] transition hover:scale-[1.02]"
                                style={{
                                    background: `linear-gradient(90deg,${activePlanet.color},#e9c5ff)`
                                }}
                            >
                                Explore Next Planet <ChevronRight size={18} />
                            </button>
                        </article>
                    </div>
                )}

                {/* Ending */}
                <footer className="pb-8 text-center">
                    <div className="mb-5 flex justify-center gap-4 text-pink-300">
                        <Star size={19} />
                        <Heart size={22} fill="currentColor" />
                        <Star size={19} />
                    </div>
                    <h2 className="text-2xl font-black sm:text-4xl">
                        <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
                            Some Bonds Are Written in the Stars
                        </span>
                    </h2>
                    <p className="mt-4 text-sm font-semibold text-purple-300">
                        Five planets • One Dil Ka Rishta • Forever ♡
                    </p>
                    <div className="alien mt-5 text-3xl">👽 💗 👾</div>
                </footer>
            </div>
        </main>
    );
}
