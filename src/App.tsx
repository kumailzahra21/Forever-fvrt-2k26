
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Images,
  BookHeart,
  Heart,
  Mail,
  LockKeyhole,
  Menu,
  X,
  Music,
  Music2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Stars,
} from "lucide-react";

import Welcome from "./pages/Welcome";
import MemoryLane from "./pages/MemoryLane";
import OurStory from "./pages/OurStory";
import TrueValue from "./pages/TrueValue";
import SorryPage from "./pages/SorryPage";
import FriendshipUniverse from "./pages/FriendshipUniverse";
import SecretDiary from "./pages/SecretDiary";

type Page =
  | "home"
  | "memories"
  | "story"
  | "value"
  | "sorry"
  | "universe"
  | "diary";

const pages = [
  { id: "home" as Page, label: "Home", icon: Home },
  { id: "memories" as Page, label: "Memory Lane", icon: Images },
  { id: "story" as Page, label: "Our Story", icon: BookHeart },
  { id: "value" as Page, label: "Your Value", icon: Heart },
  { id: "sorry" as Page, label: "A Thousand Sorrys", icon: Mail },
  { id: "universe" as Page, label: "Friendship Universe", icon: Sparkles },
  { id: "diary" as Page, label: "Secret Diary", icon: LockKeyhole },
];

const musicFile =
  "/music/Yariyaan%20%28Ost%20Ehd%20E%20Wafa%29%28KoshalWorld.Com%29.mp3";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(musicFile);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const goToPage = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        console.error("Music could not be played:", error);
        setMusicPlaying(false);
      }
    }
  };

  const currentIndex = pages.findIndex(
    (page) => page.id === currentPage
  );

  const goNext = () => {
    const nextIndex = Math.min(currentIndex + 1, pages.length - 1);
    goToPage(pages[nextIndex].id);
  };

  const goPrevious = () => {
    const previousIndex = Math.max(currentIndex - 1, 0);
    goToPage(pages[previousIndex].id);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Welcome onEnter={() => goToPage("memories")} />;

      case "memories":
        return <MemoryLane />;

      case "story":
        return <OurStory />;

      case "value":
        return <TrueValue />;

      case "sorry":
        return <SorryPage />;

      case "universe":
        return <FriendshipUniverse />;

      case "diary":
        return <SecretDiary />;

      default:
        return <Welcome onEnter={() => goToPage("memories")} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08051b] text-white">

      {/* Galaxy Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#100a2e] via-[#09051d] to-[#160725]" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />

        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-pink-500/15 blur-[120px]" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        {Array.from({ length: 45 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: index % 4 === 0 ? 3 : 2,
              height: index % 4 === 0 ? 3 : 2,
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 2 + (index % 4),
              repeat: Infinity,
              delay: (index % 7) * 0.3,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0720]/85 shadow-lg shadow-purple-950/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">

          {/* Logo */}
          <button
            onClick={() => goToPage("home")}
            className="flex items-center gap-2 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-300/30 bg-gradient-to-br from-pink-500/30 to-purple-600/30">
              <Heart
                size={22}
                className="fill-pink-300 text-pink-200"
              />
            </div>

            <div>
              <p className="text-sm font-black tracking-wider text-white sm:text-base">
                BESTIE UNIVERSE
              </p>
              <p className="text-[10px] font-bold tracking-[0.25em] text-pink-300">
                FOREVER & ALWAYS
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {pages.map((page) => {
              const Icon = page.icon;
              const active = currentPage === page.id;

              return (
                <button
                  key={page.id}
                  onClick={() => goToPage(page.id)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-300 ${active
                      ? "border border-pink-300/30 bg-pink-500/20 text-pink-200 shadow-lg shadow-pink-500/10"
                      : "text-purple-100/70 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <Icon size={15} />
                  {page.label}
                </button>
              );
            })}
          </nav>

          {/* Music + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMusic}
              aria-label={musicPlaying ? "Pause music" : "Play music"}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${musicPlaying
                  ? "border-pink-300/50 bg-pink-500/20 text-pink-200"
                  : "border-purple-300/20 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20"
                }`}
            >
              {musicPlaying ? (
                <Music2 size={19} className="animate-pulse" />
              ) : (
                <Music size={19} />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-500/10 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#100a2a] lg:hidden"
            >
              <div className="space-y-1 px-4 py-3">
                {pages.map((page) => {
                  const Icon = page.icon;
                  const active = currentPage === page.id;

                  return (
                    <button
                      key={page.id}
                      onClick={() => goToPage(page.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-bold transition-all ${active
                          ? "bg-pink-500/20 text-pink-200"
                          : "text-purple-100 hover:bg-white/10"
                        }`}
                    >
                      <Icon size={18} />
                      {page.label}
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Page Progress */}
      <div className="relative z-10 h-1 w-full bg-white/5">
        <motion.div
          className="h-full rounded-r-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
          animate={{
            width: `${((currentIndex + 1) / pages.length) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Main Page */}
      <main className="relative z-10 min-h-[75vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 25, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Previous / Next Navigation */}
      <div className="relative z-10 mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-8">
        <button
          onClick={goPrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 rounded-xl border border-purple-300/20 bg-purple-500/10 px-4 py-3 text-xs font-bold text-purple-100 transition hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-30 sm:text-sm"
        >
          <ChevronLeft size={17} />
          Previous
        </button>

        <div className="flex items-center gap-2">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => goToPage(page.id)}
              aria-label={`Go to ${page.label}`}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                  ? "w-7 bg-pink-300"
                  : "w-2 bg-purple-300/30 hover:bg-purple-200"
                }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentIndex === pages.length - 1}
          className="flex items-center gap-2 rounded-xl border border-pink-300/20 bg-pink-500/10 px-4 py-3 text-xs font-bold text-pink-100 transition hover:bg-pink-500/20 disabled:cursor-not-allowed disabled:opacity-30 sm:text-sm"
        >
          Next
          <ChevronRight size={17} />
        </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0b071d]/70 px-4 py-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Sparkles size={15} className="text-pink-300" />
          <p className="text-xs font-black tracking-[0.25em] text-pink-200 sm:text-sm">
            FOREVER & ALWAYS
          </p>
          <Stars size={15} className="text-purple-300" />
        </div>

        <p className="text-sm font-semibold text-purple-100/80">
          Some friendships are written in the stars. Ours is written in
          forever. 💗
        </p>

        <p className="mt-3 text-[10px] font-bold tracking-widest text-purple-300/50">
          MADE WITH LOVE • BESTIE UNIVERSE
        </p>
      </footer>
    </div>
  );
}
