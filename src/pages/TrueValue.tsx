
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Flower2,
  ShieldCheck,
  HandHeart,
  Headphones,
  Star,
  Gem,
  Crown,
  Infinity,
} from "lucide-react";

const qualities = [
  {
    icon: ShieldCheck,
    title: "My Safe Haven",
    subtitle: "A place where my heart feels at home",
    description:
      "You are my safe place, the person I can turn to when the world feels too heavy. Your presence makes everything feel a little lighter, and your friendship gives me comfort that words cannot explain.",
  },
  {
    icon: HandHeart,
    title: "Your Unwavering Patience",
    subtitle: "Loving me through every mood",
    description:
      "Even when I get angry, pick silly fights, or let my emotions take over, you meet my storms with patience and understanding. Your calm heart is something I will always appreciate.",
  },
  {
    icon: Headphones,
    title: "My Favourite Listener",
    subtitle: "You always make time for me",
    description:
      "You listen without judging, understand without needing explanations, and make me feel heard even when I cannot find the right words.",
  },
  {
    icon: Gem,
    title: "A Rare Treasure",
    subtitle: "One of a kind, always",
    description:
      "Your kindness, loyalty, and beautiful heart make you truly special. A friendship like yours is rare, and I never want to take it for granted.",
  },
  {
    icon: Crown,
    title: "My Greatest Blessing",
    subtitle: "Forever someone I cherish",
    description:
      "You make ordinary days beautiful just by being part of them. I feel lucky to have someone like you in my life.",
  },
  {
    icon: Infinity,
    title: "My Forever Bestie",
    subtitle: "A bond beyond distance and time",
    description:
      "No matter where life takes us, your place in my heart will always remain special. Some friendships are simply forever.",
  },
];

export default function TrueValue() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-purple-500/15 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex justify-center gap-3">
            <Flower2 className="h-7 w-7 text-pink-300" />
            <Heart className="h-8 w-8 fill-pink-400 text-pink-300" />
            <Sparkles className="h-7 w-7 text-purple-300" />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-pink-300">
            A little reminder for you
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-200 via-purple-200 to-pink-300 bg-clip-text">
            The True Value of You
          </h1>

          <div className="mx-auto mb-7 h-1 w-24 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />

          <p className="mx-auto max-w-3xl text-base leading-8 text-purple-100/90 sm:text-lg">
            In a world that often rushes past the people who matter most, I
            want to pause and remind you of your irreplaceable worth in my
            life. You are not just my best friend; you are my safe haven and
            my greatest blessing. I know I can be difficult at times—I get
            angry, I pick silly fights, and I let my emotions take over—yet
            you always meet my storms with unwavering patience and a quiet,
            comforting grace. The way you simply listen, stay calm, and hold
            space for me without ever judging proves the depth of your pure
            heart. You consistently make me feel cherished, valued, and
            deeply understood, even when I am at my worst. Please never doubt
            your place in my world, because your presence is a rare treasure
            that I hold in the highest esteem and appreciate beyond words.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;

            return (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -7, scale: 1.02 }}
                className="group rounded-3xl border border-purple-300/20 bg-gradient-to-br from-purple-500/15 to-pink-500/10 p-7 shadow-xl shadow-purple-950/20 backdrop-blur-md transition-colors hover:border-pink-300/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-300/20 bg-pink-400/10 text-pink-300 transition-all group-hover:bg-pink-400/20">
                  <Icon size={29} strokeWidth={1.7} />
                </div>

                <h2 className="mb-2 text-xl font-semibold text-pink-100">
                  {quality.title}
                </h2>

                <p className="mb-4 text-sm italic text-purple-300">
                  {quality.subtitle}
                </p>

                <p className="text-sm leading-7 text-purple-100/80">
                  {quality.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-pink-300">
                  <Star size={13} className="fill-pink-300" />
                  <Star size={13} className="fill-pink-300" />
                  <Star size={13} className="fill-pink-300" />
                  <Heart size={15} className="ml-auto" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-pink-300/20 bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-9 text-center backdrop-blur-md"
        >
          <Heart className="mx-auto mb-5 h-9 w-9 fill-pink-400 text-pink-300" />

          <h2 className="mb-4 text-2xl font-bold text-pink-100 sm:text-3xl">
            Never Forget How Special You Are
          </h2>

          <p className="leading-8 text-purple-100/90">
            You are appreciated more than you know, loved more than words can
            express, and valued more than you will ever imagine. Thank you
            for being my person. Forever my bestie. ♡
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Sparkles className="text-purple-300" />
            <Heart className="fill-pink-400 text-pink-300" />
            <Sparkles className="text-purple-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
