import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroImages, profile } from "../data";
import { asset } from "../lib/asset";

const candidates = ["/profile.jpeg", ...heroImages].map(asset);
const SLIDE_DURATION = 4500;

export default function HeroSlider({ initials }: { initials: string }) {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      candidates.map(
        (src) =>
          new Promise<string | null>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          }),
      ),
    ).then((results) => {
      if (!cancelled) setImages(results.filter((src): src is string => src !== null));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [images.length]);

  const go = (next: number) => setIndex((next + images.length) % images.length);

  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-lg border border-slate-200 bg-accent shadow-xl sm:max-w-sm">
        <span className="text-6xl font-bold text-white/90">{initials}</span>
      </div>
    );
  }

  return (
    <div className="group relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xl sm:max-w-sm">
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={profile.name}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.7 },
            scale: { duration: SLIDE_DURATION / 1000 + 0.7, ease: "linear" },
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-semibold text-white">{profile.name}</p>
        <p className="text-xs text-white/80">{profile.location}</p>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-accent opacity-0 shadow transition-opacity group-hover:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-accent opacity-0 shadow transition-opacity group-hover:opacity-100"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute top-3 right-3 flex gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
