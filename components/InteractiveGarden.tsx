"use client";

import React, { useState, useRef } from "react";
import { m, AnimatePresence } from "motion/react";
import {
  RoseFlower,
  LotusFlower,
  TulipFlower,
  DaisyFlower,
  PeonyFlower,
  SparkleIcon,
  HeartIcon,
} from "./FloralIcons";
import { springs } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

interface PlantedFlower {
  id: string;
  x: number;
  y: number;
  type: "rose" | "lotus" | "tulip" | "daisy" | "peony";
  size: number;
  rotation: number;
}

export function InteractiveGarden() {
  const { displayName, hasCustomRecipient } = useRecipient();
  const gardenRef = useRef<HTMLDivElement>(null);

  const [flowers, setFlowers] = useState<PlantedFlower[]>([
    { id: "init-1", x: 80, y: 120, type: "rose", size: 64, rotation: -10 },
    { id: "init-2", x: 220, y: 160, type: "lotus", size: 68, rotation: 15 },
    { id: "init-3", x: 150, y: 240, type: "peony", size: 70, rotation: -5 },
    { id: "init-4", x: 300, y: 100, type: "tulip", size: 58, rotation: 20 },
    { id: "init-5", x: 260, y: 260, type: "daisy", size: 56, rotation: -12 },
  ]);

  const flowerTypes: PlantedFlower["type"][] = [
    "rose",
    "lotus",
    "tulip",
    "daisy",
    "peony",
  ];

  const handleGardenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only spawn if clicking directly on garden canvas (avoid clicking on buttons)
    if ((e.target as HTMLElement).closest("button")) return;
    if (!gardenRef.current) return;

    const rect = gardenRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 32;
    const y = e.clientY - rect.top - 32;

    const newFlower: PlantedFlower = {
      id: `flower-${Date.now()}-${Math.random()}`,
      x: Math.max(10, Math.min(rect.width - 70, x)),
      y: Math.max(10, Math.min(rect.height - 70, y)),
      type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
      size: Math.floor(Math.random() * 20) + 52,
      rotation: Math.floor(Math.random() * 60) - 30,
    };

    setFlowers((prev) => [...prev.slice(-25), newFlower]);
  };

  const handleClear = () => {
    setFlowers([]);
  };

  const handleBloomAll = () => {
    if (!gardenRef.current) return;
    const rect = gardenRef.current.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const autoFlowers: PlantedFlower[] = Array.from({ length: 9 }).map((_, i) => ({
      id: `auto-${Date.now()}-${i}`,
      x: Math.random() * (w - 80) + 10,
      y: Math.random() * (h - 80) + 10,
      type: flowerTypes[i % flowerTypes.length],
      size: Math.floor(Math.random() * 18) + 54,
      rotation: Math.floor(Math.random() * 60) - 30,
    }));

    setFlowers(autoFlowers);
  };

  const renderFlowerSvg = (type: PlantedFlower["type"], size: number) => {
    switch (type) {
      case "rose":
        return <RoseFlower size={size} />;
      case "lotus":
        return <LotusFlower size={size} />;
      case "tulip":
        return <TulipFlower size={size} />;
      case "daisy":
        return <DaisyFlower size={size} />;
      case "peony":
        return <PeonyFlower size={size} />;
    }
  };

  return (
    <section className="relative min-h-[90dvh] w-full flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-rose-50/50 via-pink-50/30 to-amber-50/40 dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 overflow-hidden">
      {/* Title & Guidelines */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={springs.gentle}
        className="text-center mb-6 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <SparkleIcon size={12} />
          Trải Nghiệm Tương Tác
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
          {hasCustomRecipient
            ? `Khu Vườn Hoa Dành Tặng ${displayName}`
            : "Khu Vườn Hoa Nở Rộ"}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {hasCustomRecipient
            ? `Từng đóa hoa ở đây được gieo để mang lại nụ cười cho ${displayName}. Chạm bất cứ đâu để hoa nở thêm, hoặc kéo thả hoa để trang trí khu vườn!`
            : "Chạm vào bất cứ đâu để gieo một đóa hoa mới. Bạn có thể kéo thả hoa để sắp xếp khu vườn của riêng mình!"}
        </p>

        {/* Counter Badge */}
        <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-rose-200 dark:border-rose-900 text-xs font-medium text-rose-800 dark:text-rose-300 shadow-sm">
          <HeartIcon size={12} className="text-rose-500 fill-current" />
          <span>
            {hasCustomRecipient
              ? `${flowers.length} đóa hoa đang ngát hương tặng ${displayName}`
              : `${flowers.length} đóa hoa đang tỏa hương`}
          </span>
        </div>
      </m.div>

      {/* Garden Canvas */}
      <div
        ref={gardenRef}
        onClick={handleGardenClick}
        className="relative w-full max-w-3xl h-[380px] sm:h-[460px] rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-2 border-dashed border-rose-300/80 dark:border-rose-800/80 shadow-2xl overflow-hidden cursor-crosshair select-none"
      >
        {/* Soft grass/dew gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-rose-500/10 pointer-events-none" />

        {/* Helper guide text if few flowers */}
        {flowers.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-rose-400 dark:text-rose-600 pointer-events-none">
            <span className="text-4xl mb-2">🌸</span>
            <p className="text-sm font-medium">Chạm vào đây để vườn nở hoa</p>
          </div>
        )}

        {/* Planted Flowers */}
        <AnimatePresence>
          {flowers.map((f) => (
            <m.div
              key={f.id}
              initial={{ scale: 0, rotate: f.rotation - 45, opacity: 0 }}
              animate={{ scale: 1, rotate: f.rotation, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
              transition={springs.bloom}
              drag
              dragConstraints={gardenRef}
              dragElastic={0.15}
              whileHover={{ scale: 1.15, cursor: "grab" }}
              whileDrag={{ scale: 1.25, cursor: "grabbing", zIndex: 50 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "absolute",
                left: f.x,
                top: f.y,
              }}
              className="touch-none select-none drop-shadow-md"
            >
              {renderFlowerSvg(f.type, f.size)}
            </m.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 z-10">
        <m.button
          type="button"
          onClick={handleBloomAll}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={springs.bouncy}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium text-xs sm:text-sm shadow-md shadow-rose-500/25 flex items-center gap-1.5"
        >
          <span>🌺</span>
          <span>{hasCustomRecipient ? `Nở rộ cả vườn tặng ${displayName}` : "Nở rộ cả vườn"}</span>
        </m.button>
        <m.button
          type="button"
          onClick={handleClear}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 hover:bg-rose-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-xs sm:text-sm border border-rose-200 dark:border-zinc-700 shadow-sm flex items-center gap-1.5"
        >
          <span>🍃</span>
          <span>Làm mới vườn</span>
        </m.button>
      </div>
    </section>
  );
}
