"use client";

import React, { useState } from "react";
import { m } from "motion/react";
import { RoseFlower, SparkleIcon, HeartIcon } from "./FloralIcons";
import { springs, durations, easings } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

export function PersonalizationSection() {
  const { displayName, personalWish } = useRecipient();
  const [revealKey, setRevealKey] = useState(0);

  return (
    <section
      id="letter"
      className="relative min-h-[80dvh] w-full flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-zinc-950/90 text-zinc-800 dark:text-zinc-100"
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={springs.gentle}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <SparkleIcon size={12} />
            Bức Tâm Thư Riêng
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
            Lời Chúc Đặc Biệt Dành Cho {displayName}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            Những dòng tâm sự ấm áp do Hàn Nhật Ninh nắn nót gửi tặng {displayName} nhân
            ngày 20/10
          </p>
        </m.div>

        {/* Dedicated Personal Letter Card */}
        <m.div
          key={`wish-card-${revealKey}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springs.gentle}
          className="w-full rounded-3xl bg-gradient-to-br from-rose-50/90 via-pink-50/60 to-amber-50/50 dark:from-zinc-900/90 dark:via-rose-950/40 dark:to-zinc-900/90 border-2 border-rose-300/80 dark:border-rose-800/80 p-7 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Corner Decorative Flower */}
          <div className="absolute top-4 right-4 opacity-80 pointer-events-none">
            <RoseFlower size={36} />
          </div>
          <div className="absolute bottom-4 left-4 opacity-30 pointer-events-none">
            <SparkleIcon size={28} className="text-amber-400" />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
              Thông điệp ngày 20/10
            </span>
          </div>

          {/* Personalized Staggered Text Reveal */}
          <div className="text-base sm:text-2xl font-serif text-rose-950 dark:text-rose-100 leading-relaxed sm:leading-loose">
            {personalWish.split(" ").map((word, idx) => (
              <m.span
                key={`${word}-${idx}`}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: durations.fast,
                  delay: idx * 0.035,
                  ease: easings.outCubic,
                }}
                className="inline-block mr-1.5"
              >
                {word}
              </m.span>
            ))}
          </div>

          {/* Author Attribution & Replay Button */}
          <div className="mt-8 pt-5 border-t border-rose-200/80 dark:border-rose-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm font-serif italic text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
              <span>Thiết kế & gửi tặng bởi Hàn Nhật Ninh</span>
              <HeartIcon size={14} className="text-rose-500 fill-current" />
            </p>

            <button
              type="button"
              onClick={() => setRevealKey((k) => k + 1)}
              className="text-xs text-rose-600 dark:text-rose-400 hover:underline px-2.5 py-1 flex items-center gap-1 font-medium transition-colors"
            >
              <span>↻</span>
              <span>Đọc lại từ đầu</span>
            </button>
          </div>
        </m.div>
      </div>
    </section>
  );
}
