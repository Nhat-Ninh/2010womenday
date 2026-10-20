"use client";

import React, { useMemo } from "react";
import { m } from "motion/react";
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
import { springs } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

export function WishesCarousel() {
  const { role, displayName, hasCustomRecipient } = useRecipient();

  // Find strictly the matching wish for this person's role (no access to other roles' cards)
  const currentWish = useMemo(() => {
    const lower = role.toLowerCase();
    const matched = GROUP_WISHES.find(
      (w) =>
        w.role.toLowerCase() === lower ||
        w.roleAlias.some(
          (alias) => alias.toLowerCase() === lower || lower.includes(alias.toLowerCase())
        )
    );
    return matched || GROUP_WISHES[0];
  }, [role]);

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

  return (
    <section className="relative min-h-[75dvh] w-full flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-rose-200/20 dark:bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={springs.gentle}
        className="text-center mb-8 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <SparkleIcon size={12} />
          Thông Điệp Yêu Thương
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
          {hasCustomRecipient
            ? `Lời Chúc Chân Thành Dành Cho ${displayName}`
            : "Lời Chúc 20/10 Gửi Tặng Bạn"}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {hasCustomRecipient
            ? `Thông điệp chúc mừng sâu lắng được nắn nót riêng gửi đến ${displayName}.`
            : "Những lời chúc chân thành, sâu lắng nhân Ngày Phụ Nữ Việt Nam."}
        </p>
      </m.div>

      {/* Dedicated Exclusive Card (Only displays the recipient's matched role) */}
      <div className="relative w-full max-w-xl flex items-center justify-center z-20">
        <m.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={springs.gentle}
          className={`w-full rounded-3xl p-7 sm:p-10 bg-gradient-to-br ${currentWish.gradientBg} bg-white dark:bg-zinc-900/95 border-2 border-rose-200/90 dark:border-rose-800/80 shadow-2xl backdrop-blur-xl flex flex-col justify-between select-none relative overflow-hidden`}
        >
          {/* Ambient Corner Floral Icon */}
          <div className="absolute top-5 right-5 opacity-80 pointer-events-none">
            {renderFlower(currentWish.floralAccent)}
          </div>

          {/* Card Content */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest font-bold text-rose-500">
                {currentWish.role}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-serif font-bold text-rose-950 dark:text-rose-100 mb-2">
              Thân gửi {displayName}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-rose-700 dark:text-rose-300 mb-5 italic">
              &ldquo;{currentWish.tagline}&rdquo;
            </p>

            <blockquote className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans mb-4">
              {currentWish.fullMessage}
            </blockquote>
          </div>

          {/* Card Footer with Author Signature */}
          <div className="pt-5 border-t border-rose-200/60 dark:border-rose-900/50 flex items-center justify-between">
            <span className="text-xs font-serif italic text-rose-800 dark:text-rose-300 flex items-center gap-1">
              <span>Thiết kế & gửi tặng bởi Hàn Nhật Ninh</span>
              <HeartIcon size={12} className="text-rose-500 fill-current" />
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
