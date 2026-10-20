"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import {
  RoseFlower,
  DaisyFlower,
  SinglePetal,
  SparkleIcon,
  HeartIcon,
} from "./FloralIcons";
import { springs, easings } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

export function HeroEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const { displayName, hasCustomRecipient, role } = useRecipient();

  // Precomputed burst petals
  const burstPetals = [
    { x: -140, y: -180, r: -45, scale: 1.2, delay: 0.1, type: "rose" as const },
    { x: 140, y: -200, r: 60, scale: 1.1, delay: 0.12, type: "sakura" as const },
    { x: -90, y: -240, r: -20, scale: 0.9, delay: 0.15, type: "gold" as const },
    { x: 90, y: -260, r: 35, scale: 1.3, delay: 0.18, type: "rose" as const },
    { x: -180, y: -100, r: -80, scale: 1.0, delay: 0.2, type: "sakura" as const },
    { x: 180, y: -110, r: 75, scale: 0.95, delay: 0.22, type: "rose" as const },
    { x: 0, y: -280, r: 15, scale: 1.4, delay: 0.14, type: "sakura" as const },
    { x: -50, y: -160, r: -30, scale: 1.0, delay: 0.16, type: "gold" as const },
    { x: 60, y: -170, r: 40, scale: 1.05, delay: 0.17, type: "rose" as const },
  ];

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 overflow-hidden bg-gradient-to-b from-rose-50/70 via-pink-50/40 to-amber-50/30 dark:from-zinc-950 dark:via-rose-950/20 dark:to-zinc-950">
      {/* Background Ambient Glow & Floating Petals */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full bg-gradient-to-tr from-pink-300/30 via-rose-200/30 to-amber-200/20 dark:from-rose-900/20 dark:via-pink-900/15 dark:to-purple-900/10 blur-3xl pointer-events-none" />

      {/* Header Tagline Personalized */}
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springs.gentle}
        className="text-center mb-6 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 dark:bg-rose-950/60 border border-rose-200/80 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm mb-3">
          <SparkleIcon size={14} className="text-amber-500 animate-spin" />
          <span>
            {hasCustomRecipient
              ? `Món Quà Dành Riêng Tặng ${displayName}`
              : "Kỷ Niệm Ngày Phụ Nữ Việt Nam 20/10"}
          </span>
          <HeartIcon size={12} className="text-rose-500 fill-current" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-rose-950 dark:text-rose-100 tracking-tight leading-tight">
          {hasCustomRecipient
            ? `Gửi Trọn Yêu Thương Đến ${displayName}`
            : "Gửi Trọn Yêu Thương 20/10"}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-rose-800/80 dark:text-rose-300/80 font-sans">
          {hasCustomRecipient
            ? `Một phong thư đong đầy tình cảm do Hàn Nhật Ninh nắn nót gửi đến ${displayName}`
            : "Mỗi người phụ nữ là một đóa hoa ngát hương giữa cuộc đời"}
        </p>
      </m.div>

      {/* Main Interactive Gift / Envelope */}
      <div className="relative w-full max-w-md flex flex-col items-center justify-center my-2 z-20">
        {/* Light explosion rays when opened */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.5, 2.2], opacity: [1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: easings.outExpo }}
              className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.6)_0%,rgba(253,224,71,0.4)_40%,transparent_70%)] pointer-events-none z-10"
            />
          )}
        </AnimatePresence>

        {/* Petal fireworks burst */}
        <AnimatePresence>
          {isOpen &&
            burstPetals.map((p, idx) => (
              <m.div
                key={idx}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                  x: p.x,
                  y: p.y,
                  scale: p.scale,
                  opacity: [0, 1, 0.9, 0],
                  rotate: p.r,
                }}
                transition={{
                  duration: 2.2,
                  delay: p.delay,
                  ease: easings.outCubic,
                }}
                className="absolute left-1/2 top-1/2 pointer-events-none z-30"
              >
                <SinglePetal variant={p.type} size={28} />
              </m.div>
            ))}
        </AnimatePresence>

        {/* Envelope Container */}
        <div
          onClick={() => !isOpen && setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          aria-label={
            isOpen
              ? "Phong bì thư đã mở"
              : `Chạm để mở thiệp chúc mừng 20/10 gửi ${displayName}`
          }
          className={`relative w-[300px] sm:w-[380px] cursor-pointer outline-none transition-all duration-500 ${
            !isOpen ? "hover:scale-[1.02] active:scale-[0.98]" : ""
          }`}
          style={{ perspective: "1200px" }}
        >
          {/* Pulsing glow ring when closed */}
          {!isOpen && (
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-rose-400/30 via-pink-300/40 to-amber-300/30 blur-lg animate-pulse" />
          )}

          {/* Envelope Body */}
          <div className="relative w-full h-[200px] sm:h-[240px] rounded-2xl bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 dark:from-zinc-900 dark:via-rose-950/60 dark:to-zinc-900 border-2 border-rose-200/90 dark:border-rose-700/60 shadow-2xl overflow-hidden flex items-end">
            {/* Inner background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

            {/* Folds */}
            <svg
              viewBox="0 0 380 240"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
              <path
                d="M0 0 L190 130 L0 240 Z"
                fill="#FCE7F3"
                className="dark:fill-rose-950/70"
                opacity="0.9"
              />
              <path
                d="M380 0 L190 130 L380 240 Z"
                fill="#FBCFE8"
                className="dark:fill-rose-950/85"
                opacity="0.9"
              />
              <path
                d="M0 240 L190 120 L380 240 Z"
                fill="#FFF1F2"
                className="dark:fill-zinc-900"
                stroke="#FDA4AF"
                strokeWidth="1"
              />
            </svg>

            {/* Recipient tag printed on the envelope face */}
            {hasCustomRecipient && !isOpen && (
              <div className="absolute bottom-4 left-6 z-20 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400 dark:text-rose-500 block">
                  Kính gửi:
                </span>
                <span className="text-base sm:text-lg font-serif font-bold text-rose-900 dark:text-rose-200">
                  {displayName}
                </span>
              </div>
            )}

            {/* 3D Top Flap */}
            <m.div
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              animate={{ rotateX: isOpen ? -180 : 0 }}
              transition={{ duration: 0.8, ease: easings.inOutCubic }}
              className="absolute inset-x-0 top-0 h-[130px] z-20 pointer-events-none"
            >
              <svg viewBox="0 0 380 130" className="w-full h-full drop-shadow-md">
                <path
                  d="M0 0 L190 125 L380 0 Z"
                  fill="#FDA4AF"
                  className="dark:fill-rose-900"
                  stroke="#FB7185"
                  strokeWidth="1"
                />
              </svg>
            </m.div>

            {/* Wax Seal / Stamp Button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
              <m.div
                animate={
                  isOpen
                    ? { scale: 0.85, opacity: 0.3 }
                    : { scale: [1, 1.08, 1] }
                }
                transition={
                  isOpen
                    ? { duration: 0.3 }
                    : { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
                }
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-red-500 border-2 border-amber-300 shadow-xl flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full border border-amber-300/60 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] text-amber-200 tracking-widest font-mono">
                    20/10
                  </span>
                  <HeartIcon size={12} className="text-amber-200 fill-current" />
                </div>
              </m.div>
              {!isOpen && (
                <span className="mt-2 text-xs font-semibold text-rose-800 dark:text-rose-200 bg-white/95 dark:bg-black/80 px-3 py-1 rounded-full border border-rose-300 dark:border-rose-700 shadow-md">
                  ✨ Chạm để mở quà
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Sliding Letter Card (Revealed upon opening) */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ y: 80, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ ...springs.gentle, delay: 0.35 }}
              className="mt-6 w-full max-w-lg rounded-3xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-rose-200 dark:border-rose-800 p-6 sm:p-8 shadow-2xl text-center relative z-40"
            >
              {/* Corner Floral Accents */}
              <div className="absolute top-3 left-3 opacity-70">
                <RoseFlower size={24} />
              </div>
              <div className="absolute top-3 right-3 opacity-70">
                <DaisyFlower size={24} />
              </div>

              <span className="text-xs uppercase tracking-widest font-semibold text-rose-500">
                Bức Thư Tri Ân 20/10
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-rose-950 dark:text-rose-100 mt-1 mb-3">
                {hasCustomRecipient
                  ? `Thân gửi ${displayName} yêu quý!`
                  : "Chúc Mừng Ngày 20/10"}
              </h2>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {hasCustomRecipient ? (
                  <>
                    Nhân Ngày Phụ Nữ Việt Nam 20/10, Hàn Nhật Ninh xin gửi tới{" "}
                    <strong className="text-rose-600 dark:text-rose-400 font-medium">
                      {displayName}
                    </strong>{" "}
                    những lời chúc an lành, tươi vui và rực rỡ nhất! Cảm ơn{" "}
                    {role.toLowerCase()} vì đã luôn mang lại nụ cười, sự ấm áp và
                    nguồn cảm hứng dịu dàng cho những người xung quanh. Chúc{" "}
                    {role.toLowerCase()} mỗi ngày đều được yêu thương và nâng niu
                    trọn vẹn!
                  </>
                ) : (
                  <>
                    Nhân Ngày Phụ Nữ Việt Nam 20/10, xin gửi những đóa hoa thơm ngát nhất
                    cùng lời chúc bình an, hạnh phúc và vạn sự như ý đến những người bà,
                    người mẹ, cô dì, chị em và các nữ đồng nghiệp đáng kính. Chúc bạn
                    mỗi ngày đều được yêu thương, trân trọng và tỏa sáng!
                  </>
                )}
              </p>

              <div className="mt-6 pt-4 border-t border-rose-100 dark:border-rose-900/60 flex flex-col items-center justify-center">
                <p className="text-xs sm:text-sm font-serif italic text-rose-800 dark:text-rose-300">
                  Thiết kế & gửi tặng bởi Hàn Nhật Ninh ❤️
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <a
                    href="#letter"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all min-h-[44px]"
                  >
                    <span>Khám phá những điều dành riêng cho bạn</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
