import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed right-6 bottom-6 z-50 flex h-11 w-11 items-center justify-center rounded bg-accent text-white shadow-md transition-colors hover:bg-accent-light"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
