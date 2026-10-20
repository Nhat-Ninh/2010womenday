"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { GROUP_WISHES, GroupWish } from "@/lib/wishesData";
import {
  RoseFlower,
  LotusFlower,
  TulipFlower,
  DaisyFlower,
  PeonyFlower,
  SparkleIcon,
  HeartIcon,
} from "./FloralIcons";
import { springs, durations, easings } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

export function WishesCarousel() {
  const { role, displayName, hasCustomRecipient } = useRecipient();

  const getInitialIndex = (r: string) => {
    const lower = r.toLowerCase();
    if (lower.includes("yêu") || lower.includes("vợ") || lower.includes("ny")) return 0;
    if (lower.includes("mẹ")) return 1;
    if (lower.includes("dì")) return 2;
    if (lower.includes("em") && !lower.includes("chị")) return 3;
    if (lower.includes("bạn")) return 4;
    if (lower.includes("chị")) return 5;
    if (lower.includes("bà")) return 6;
    if (lower.includes("cô") || lower.includes("bác")) return 7;
    if (lower.includes("đồng nghiệp") || lower.includes("cộng sự")) return 8;
    return 0;
  };

  const [userIndex, setUserIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);

  const currentIndex = userIndex ?? getInitialIndex(role);
  const currentWish = GROUP_WISHES[currentIndex];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let next = currentIndex + newDirection;
    if (next < 0) next = GROUP_WISHES.length - 1;
    if (next >= GROUP_WISHES.length) next = 0;
    setUserIndex(next);
  };

  const renderFlower = (accent: GroupWish["floralAccent"]) => {
    switch (accent) {
      case "rose":
        return <RoseFlower size={36} />;
      case "lotus":
        return <LotusFlower size={36} />;
      case "tulip":
        return <TulipFlower size={36} />;
      case "daisy":
        return <DaisyFlower size={36} />;
      case "peony":
        return <PeonyFlower size={36} />;
      default:
        return <RoseFlower size={36} />;
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: springs.swipe,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.94,
      transition: { duration: durations.fast, ease: easings.outCubic },
    }),
  };

  return (
    <section className="relative min-h-[90dvh] w-full flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-rose-200/20 dark:bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={springs.gentle}
        className="text-center mb-6 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <SparkleIcon size={12} />
          Thông Điệp Yêu Thương
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
          {hasCustomRecipient
            ? `Lời Chúc Chân Thành Dành Cho ${displayName}`
            : "Lời Chúc Gửi Từng Người Phụ Nữ"}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {hasCustomRecipient
            ? `Thẻ chúc mừng đã được chọn sẵn cho ${displayName}. Bạn có thể vuốt qua lại để đọc thêm những lời chúc ý nghĩa khác!`
            : "Vuốt sang trái / phải để đọc những tâm tình chân thành được chắp bút riêng cho từng thiên chức thiêng liêng."}
        </p>
      </m.div>

      {/* Quick Jump Category Pills */}
      <div className="w-full max-w-xl flex flex-wrap items-center justify-center gap-2 mb-6 z-10">
        {GROUP_WISHES.map((w, idx) => (
          <button
            key={w.id}
            type="button"
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setUserIndex(idx);
            }}
            className={`min-h-[44px] px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              idx === currentIndex
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-105"
                : "bg-rose-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-rose-100 dark:hover:bg-zinc-800 border border-rose-200/60 dark:border-zinc-800"
            }`}
          >
            {w.role}
          </button>
        ))}
      </div>

      {/* Swipeable Card Container */}
      <div className="relative w-full max-w-xl min-h-[380px] sm:min-h-[360px] flex items-center justify-center z-20">
        <AnimatePresence custom={direction} mode="wait">
          <m.div
            key={currentWish.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) paginate(1);
              else if (info.offset.x > 50) paginate(-1);
            }}
            className={`w-full rounded-3xl p-6 sm:p-9 bg-gradient-to-br ${currentWish.gradientBg} bg-white dark:bg-zinc-900/90 border-2 border-rose-200/90 dark:border-rose-800/80 shadow-2xl backdrop-blur-xl flex flex-col justify-between cursor-grab active:cursor-grabbing select-none relative overflow-hidden`}
          >
            {/* Ambient Corner Floral Icon */}
            <div className="absolute top-4 right-4 opacity-80">
              {renderFlower(currentWish.floralAccent)}
            </div>

            {/* Card Content */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest font-bold text-rose-500">
                  {currentWish.role}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {currentIndex + 1} / {GROUP_WISHES.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-rose-950 dark:text-rose-100 mb-1">
                {hasCustomRecipient &&
                (currentWish.role.toLowerCase() === role.toLowerCase() ||
                  currentWish.roleAlias?.some(
                    (a) =>
                      a.toLowerCase() === role.toLowerCase() ||
                      role.toLowerCase().includes(a.toLowerCase())
                  ))
                  ? `Thân gửi ${displayName}`
                  : currentWish.recipientTitle}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-rose-700 dark:text-rose-300 mb-4 italic">
                &ldquo;{currentWish.tagline}&rdquo;
              </p>

              <blockquote className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans mb-4">
                {currentWish.fullMessage}
              </blockquote>
            </div>

            {/* Card Footer with Author Signature */}
            <div className="pt-4 border-t border-rose-200/60 dark:border-rose-900/50 flex items-center justify-between">
              <span className="text-xs font-serif italic text-rose-800 dark:text-rose-300 flex items-center gap-1">
                <span>Thiết kế & gửi tặng bởi Hàn Nhật Ninh</span>
                <HeartIcon size={12} className="text-rose-500 fill-current" />
              </span>
              <span className="text-[11px] text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                Vuốt để chuyển thẻ →
              </span>
            </div>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Nav Controls */}
      <div className="mt-6 flex items-center gap-4 z-10">
        <m.button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Lời chúc trước"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="min-h-[44px] min-w-[44px] rounded-full bg-white dark:bg-zinc-800 border border-rose-200 dark:border-zinc-700 text-rose-800 dark:text-rose-200 shadow-md flex items-center justify-center font-bold text-lg"
        >
          ←
        </m.button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {GROUP_WISHES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setUserIndex(i);
              }}
              aria-label={`Chuyển đến lời chúc ${i + 1}`}
              className="h-2.5 rounded-full transition-all min-h-[24px] min-w-[24px] flex items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-rose-500"
                    : "w-2 bg-rose-200 dark:bg-zinc-700"
                }`}
              />
            </button>
          ))}
        </div>

        <m.button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Lời chúc tiếp theo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="min-h-[44px] min-w-[44px] rounded-full bg-white dark:bg-zinc-800 border border-rose-200 dark:border-zinc-700 text-rose-800 dark:text-rose-200 shadow-md flex items-center justify-center font-bold text-lg"
        >
          →
        </m.button>
      </div>
    </section>
  );
}
