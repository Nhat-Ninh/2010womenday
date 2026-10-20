"use client";

import React, { useState, useId } from "react";
import { m } from "motion/react";
import { RELATIONSHIPS } from "@/lib/wishesData";
import { RoseFlower, SparkleIcon, HeartIcon } from "./FloralIcons";
import { springs, durations, easings } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

export function PersonalizationSection() {
  const {
    displayName,
    role,
    name,
    hasCustomRecipient,
    personalWish,
    isCreatorMode,
    setCreatorMode,
    updateRecipient,
  } = useRecipient();

  const inputId = useId();
  const [formName, setFormName] = useState(name);
  const [formRole, setFormRole] = useState(role);
  const [copySuccess, setCopySuccess] = useState(false);
  const [revealKey, setRevealKey] = useState(0);

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRecipient(formName, formRole);
    setCreatorMode(false);
    setRevealKey((k) => k + 1);
  };

  const handleCopyLink = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="letter"
      className="relative min-h-[85dvh] w-full flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-zinc-950/90 text-zinc-800 dark:text-zinc-100"
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
            {hasCustomRecipient ? "Bức Tâm Thư Riêng" : "Cá Nhân Hóa"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
            {hasCustomRecipient
              ? `Lời Chúc Đặc Biệt Dành Cho ${displayName}`
              : "Gửi Lời Chúc Đến Người Thương"}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            {hasCustomRecipient
              ? `Những dòng tâm sự ấm áp do Hàn Nhật Ninh nắn nót gửi tặng ${displayName} nhân ngày 20/10`
              : "Nhập tên và chọn xưng hô để tạo bức thông điệp ấm áp gửi tặng tận tay."}
          </p>
        </m.div>

        {/* RECIPIENT MODE: Direct reading experience, NO inputs required */}
        {hasCustomRecipient && !isCreatorMode ? (
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

            {/* Author Attribution */}
            <div className="mt-8 pt-5 border-t border-rose-200/80 dark:border-rose-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm font-serif italic text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                <span>Thiết kế & gửi tặng bởi Hàn Nhật Ninh</span>
                <HeartIcon size={14} className="text-rose-500 fill-current" />
              </p>

              {/* Action for Recipient */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRevealKey((k) => k + 1)}
                  className="text-xs text-rose-600 dark:text-rose-400 hover:underline px-2.5 py-1"
                >
                  ↻ Đọc lại từ đầu
                </button>
              </div>
            </div>

            {/* Optional Switch to Create Another Link */}
            <div className="mt-6 text-center pt-3 border-t border-dashed border-rose-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setCreatorMode(true)}
                className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-300 underline transition-colors"
              >
                Bạn muốn tạo thiệp gửi tặng một người khác? Bấm vào đây ✨
              </button>
            </div>
          </m.div>
        ) : (
          /* CREATOR MODE / FALLBACK FORM: Used to generate custom link */
          <div className="w-full rounded-3xl bg-rose-50/60 dark:bg-zinc-900/70 border border-rose-200/80 dark:border-rose-900/60 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <form onSubmit={handleCreateSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-rose-900 dark:text-rose-200 mb-2.5">
                  1. Chọn xưng hô thân mật:
                </label>
                <div className="flex flex-wrap gap-2">
                  {RELATIONSHIPS.map((rel) => {
                    const isSelected = formRole === rel.id;
                    return (
                      <button
                        key={rel.id}
                        type="button"
                        onClick={() => setFormRole(rel.id)}
                        className={`min-h-[44px] min-w-[54px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "bg-rose-500 text-white shadow-md shadow-rose-500/25 scale-105"
                            : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-rose-100 dark:hover:bg-zinc-700 border border-rose-200/60 dark:border-zinc-700"
                        }`}
                      >
                        {rel.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor={inputId}
                  className="block text-xs font-semibold uppercase tracking-wider text-rose-900 dark:text-rose-200 mb-2"
                >
                  2. Nhập tên người nhận:
                </label>
                <div className="relative">
                  <input
                    id={inputId}
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={
                      formRole === "Người yêu"
                        ? "Ví dụ: Hà, Mai Anh, Bé Heo, Vợ yêu..."
                        : formRole === "Mẹ"
                        ? "Ví dụ: Mẹ yêu, Mẹ Lan, Mẹ Hương..."
                        : formRole === "Dì"
                        ? "Ví dụ: Dì Dung, Dì Mai, Dì Hương..."
                        : formRole === "Em"
                        ? "Ví dụ: Mai Anh, Linh Đan, Bé Na..."
                        : formRole === "Bạn"
                        ? "Ví dụ: Linh, Trang, Nga..."
                        : "Ví dụ: Lan, Hương, Chi..."
                    }
                    className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-rose-300 dark:border-rose-800/80 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:focus:ring-rose-500 text-sm sm:text-base text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-inner"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <m.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springs.bouncy}
                  className="flex-1 min-h-[48px] px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2"
                >
                  <HeartIcon size={18} className="fill-current text-rose-200" />
                  <span>Cập Nhật Lời Chúc & Tạo Link</span>
                </m.button>

                {hasCustomRecipient && (
                  <button
                    type="button"
                    onClick={() => setCreatorMode(false)}
                    className="min-h-[48px] px-4 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-sm font-medium"
                  >
                    Hủy bỏ
                  </button>
                )}
              </div>
            </form>

            {hasCustomRecipient && (
              <div className="mt-5 pt-4 border-t border-rose-200 dark:border-zinc-800 flex justify-center">
                <m.button
                  type="button"
                  onClick={handleCopyLink}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-900 dark:text-rose-200 text-xs sm:text-sm font-medium border border-rose-300 dark:border-rose-800 flex items-center gap-1.5"
                >
                  <span>🔗</span>
                  <span>
                    {copySuccess
                      ? "Đã sao chép link cá nhân hóa!"
                      : `Sao chép link gửi cho ${displayName}`}
                  </span>
                </m.button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
