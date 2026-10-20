"use client";

import React, { useState } from "react";
import { m } from "motion/react";
import { SinglePetal, HeartIcon, SparkleIcon, RoseFlower, LotusFlower } from "./FloralIcons";
import { springs } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

export function GrandFinale() {
  const { displayName, hasCustomRecipient, role } = useRecipient();
  const [celebrate, setCelebrate] = useState(false);

  // Confetti Petals
  const confettiList = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: `${(i * 5.5) + (i % 2 === 0 ? 2 : 0)}%`,
    delay: (i % 6) * 0.18,
    duration: 3 + (i % 4) * 0.5,
    variant: (i % 3 === 0 ? "rose" : i % 3 === 1 ? "sakura" : "gold") as
      | "rose"
      | "sakura"
      | "gold",
    size: 18 + (i % 3) * 6,
  }));

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-rose-50/40 via-pink-100/50 to-rose-200/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20 pb-12 border-t border-rose-200/60 dark:border-rose-900/40">
      {/* Falling Petals Background Shower */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confettiList.map((c) => (
          <m.div
            key={c.id}
            initial={{ y: -40, opacity: 0, rotate: 0 }}
            whileInView={{
              y: ["0%", "1200%"],
              opacity: [0, 0.9, 0.9, 0],
              rotate: [0, 180, 360],
              x: [0, (c.id % 2 === 0 ? 30 : -30), 0],
            }}
            viewport={{ once: false }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ position: "absolute", left: c.left, top: "-20px" }}
          >
            <SinglePetal variant={c.variant} size={c.size} />
          </m.div>
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        {/* Blooming Icon */}
        <m.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={springs.bloom}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <RoseFlower size={36} />
          <LotusFlower size={40} />
          <RoseFlower size={36} />
        </m.div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100 mb-3">
          {hasCustomRecipient
            ? `Cảm Ơn ${displayName} Vì Đã Luôn Là Điều Tuyệt Vời Nhất`
            : "Cảm Ơn Vì Đã Luôn Là Điều Tuyệt Vời Nhất"}
        </h2>

        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 max-w-lg leading-relaxed mb-6 font-sans">
          {hasCustomRecipient ? (
            <>
              Kính chúc <strong>{displayName}</strong> có một ngày 20/10 thật ngập
              tràn nụ cười, ấm áp bên gia đình và luôn rực rỡ, hạnh phúc trên mỗi
              bước đường đời. Cảm ơn {role.toLowerCase()} vì tất cả những điều tốt
              đẹp!
            </>
          ) : (
            <>
              Cảm ơn những người phụ nữ luôn thầm lặng gieo hạt mầm yêu thương, lan
              tỏa sự dịu êm và thắp sáng niềm tin cho mọi mái ấm gia đình cũng như
              xã hội. Chúc bạn mỗi ngày đều ngập tràn nụ cười và hạnh phúc tròn đầy!
            </>
          )}
        </p>

        {/* Celebrate button */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <m.button
            type="button"
            onClick={() => setCelebrate(!celebrate)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-h-[44px] px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-medium text-xs sm:text-sm shadow-lg shadow-rose-500/25 flex items-center gap-1.5"
          >
            <SparkleIcon size={14} className="text-amber-200" />
            <span>{hasCustomRecipient ? `Rắc thêm hoa tặng ${displayName}` : "Rắc thêm hoa chúc mừng"}</span>
          </m.button>

          <m.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-h-[44px] px-4 py-2.5 rounded-full bg-white/90 dark:bg-zinc-800/90 hover:bg-rose-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs sm:text-sm font-medium border border-rose-200 dark:border-zinc-700 shadow-sm flex items-center gap-1.5"
          >
            <span>Cuộn lên đầu trang ↑</span>
          </m.button>
        </div>

        {/* MANDATORY COPYRIGHT & AUTHOR FOOTER */}
        <div className="w-full pt-8 border-t border-rose-300/60 dark:border-rose-900/60 flex flex-col items-center">
          <p className="text-base sm:text-lg font-serif font-semibold text-rose-950 dark:text-rose-100 flex items-center gap-2">
            <span>Thiết kế & gửi tặng bởi Hàn Nhật Ninh</span>
            <HeartIcon size={18} className="text-rose-500 fill-current animate-pulse" />
          </p>
          <p className="mt-1 text-xs text-rose-800/70 dark:text-rose-400/70 font-sans">
            Ngày Phụ Nữ Việt Nam 20/10 • Trao gửi trọn vẹn yêu thương
          </p>
        </div>
      </div>
    </footer>
  );
}
