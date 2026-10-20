"use client";

import React, { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";
import { RoseFlower, LotusFlower, DaisyFlower, SparkleIcon, HeartIcon } from "./FloralIcons";
import { springs } from "@/lib/motion";

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animated SVG pathLength and floating parallax
  const pathLength = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const petalParallaxY = useTransform(scrollYProgress, [0, 1], [-40, 90]);
  const petalParallaxRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const storyItems = [
    {
      title: "Vẻ Đẹp Tâm Hồn",
      description:
        "Sự dịu êm, nhẫn nại và lòng bao dung vô bờ bến. Trong bất cứ hoàn cảnh nào, nụ cười của người phụ nữ luôn là ánh nắng sưởi ấm mọi giá lạnh.",
      icon: <RoseFlower size={32} />,
      tag: "Dịu Dàng",
    },
    {
      title: "Bản Lĩnh Hiện Đại",
      description:
        "Người phụ nữ Việt Nam hôm nay tự tin khẳng định vị thế, thông tuệ trong tư duy, không ngừng sáng tạo và tỏa sáng ở mọi lĩnh vực xã hội.",
      icon: <LotusFlower size={32} />,
      tag: "Trí Tuệ & Kiên Cường",
    },
    {
      title: "Hạnh Phúc Là Chính Mình",
      description:
        "Tự do ước mơ, yêu thương bản thân và kiêu hãnh bước đi trên con đường mình chọn. Bạn sinh ra là một tuyệt tác rạng rỡ của cuộc đời.",
      icon: <DaisyFlower size={32} />,
      tag: "Rực Rỡ",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90dvh] w-full flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-amber-50/20 via-rose-50/40 to-pink-50/30 dark:from-zinc-950 dark:via-rose-950/20 dark:to-zinc-950 overflow-hidden"
    >
      {/* Decorative Self-Drawing SVG Line (Scroll Linked) */}
      <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 pointer-events-none hidden sm:block opacity-40 dark:opacity-20">
        <svg
          viewBox="0 0 40 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
        >
          <m.path
            d="M20 0 Q35 150 20 300 T20 600 Q5 700 20 800"
            stroke="#F43F5E"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            style={{ pathLength }}
          />
        </svg>
      </div>

      {/* Parallax Floating Petal */}
      <m.div
        style={{ y: petalParallaxY, rotate: petalParallaxRotate }}
        className="absolute right-8 top-1/4 pointer-events-none opacity-60 hidden md:block"
      >
        <RoseFlower size={48} />
      </m.div>

      {/* Header */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={springs.gentle}
        className="text-center mb-12 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <SparkleIcon size={12} />
          Giá Trị Vĩnh Cửu
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
          Những Phẩm Chất Đáng Trân Quý
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Tôn vinh nét đẹp truyền thống hòa quyện cùng phong thái độc lập, kiêu sa của
          người phụ nữ Việt Nam.
        </p>
      </m.div>

      {/* Staggered Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {storyItems.map((item, index) => (
          <m.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ ...springs.gentle, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-6 sm:p-7 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-rose-200/90 dark:border-rose-900/70 shadow-xl flex flex-col justify-between transition-shadow hover:shadow-2xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-zinc-800 border border-rose-200/80 dark:border-zinc-700 flex items-center justify-center mb-4 shadow-sm">
                {item.icon}
              </div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-rose-500 mb-1 block">
                {item.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-rose-950 dark:text-rose-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-rose-800/80 dark:text-rose-300/80 font-serif italic">
              <span>Hàn Nhật Ninh gửi tặng</span>
              <HeartIcon size={12} className="text-rose-500 fill-current" />
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
