import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "./gameStore.jsx";
import { getShelterTier, SHELTER_IMAGES } from "../lib/shelterState.js";

export default function ShelterScene() {
  const stats = useGame;
  const tier = getShelterTier(stats);

  useEffect(() => {
    Object.values(SHELTER_IMAGES).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <AnimatePresence mode="sync">
        <motion.img
          key={tier}
          src={SHELTER_IMAGES[tier]}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AnimatePresence>
    </div>
  );
}