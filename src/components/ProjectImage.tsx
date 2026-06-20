import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

const palettes = [
  "from-indigo-500 via-violet-500 to-fuchsia-500",
  "from-cyan-500 via-sky-500 to-blue-600",
  "from-emerald-500 via-teal-500 to-cyan-500",
  "from-amber-500 via-orange-500 to-rose-500",
];

export default function ProjectImage({
  src,
  video,
  name,
  index,
}: {
  src: string;
  video?: string;
  name: string;
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = src;
  }, [src]);

  useEffect(() => {
    setVideoFailed(false);
  }, [video]);

  if (video && !videoFailed) {
    return (
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <video
          src={video}
          poster={src}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (loaded) {
    return (
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img src={src} alt={`${name} screenshot`} className="h-full w-full object-cover" />
      </div>
    );
  }

  const palette = palettes[index % palettes.length];

  return (
    <div
      className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${palette}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
        <Rocket size={24} className="text-white" />
      </span>
    </div>
  );
}
