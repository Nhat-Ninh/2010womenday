"use client";

import React, { useState } from "react";
import { m } from "motion/react";
import { RoseFlower, PeonyFlower, SparkleIcon, HeartIcon } from "./FloralIcons";
import { springs } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

export function ShareCard() {
  const { displayName, personalWish, hasCustomRecipient } = useRecipient();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopyLink = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleWebShare = async () => {
    if (typeof window === "undefined") return;
    const shareData = {
      title: "Chúc mừng 20/10 – Hàn Nhật Ninh",
      text: `Thiệp chúc mừng Ngày Phụ Nữ Việt Nam 20/10 gửi tặng ${displayName}!`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or share failed
      }
    } else {
      handleCopyLink();
    }
  };

  // High-resolution Canvas generator for stable offline card download
  const handleDownloadCard = () => {
    setDownloading(true);
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 1. Soft romantic background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
      bgGrad.addColorStop(0, "#FFF1F2");
      bgGrad.addColorStop(0.5, "#FDF2F8");
      bgGrad.addColorStop(1, "#FEF3C7");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 800);

      // 2. Ornate Golden Double Border
      ctx.strokeStyle = "#F59E0B";
      ctx.lineWidth = 4;
      ctx.strokeRect(36, 36, 1128, 728);

      ctx.strokeStyle = "#FDA4AF";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(48, 48, 1104, 704);

      // Corner decorative dots
      const corners = [
        [56, 56],
        [1144, 56],
        [56, 744],
        [1144, 744],
      ];
      ctx.fillStyle = "#E11D48";
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Header Title
      ctx.textAlign = "center";
      ctx.fillStyle = "#BE123C";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText("MỪNG NGÀY PHỤ NỮ VIỆT NAM 20/10", 600, 140);

      // 4. Main Greeting
      ctx.fillStyle = "#881337";
      ctx.font = "bold 52px serif";
      const displayTitle = hasCustomRecipient
        ? `Thân gửi ${displayName}`
        : "Thân gửi Phái Đẹp Việt Nam";
      ctx.fillText(displayTitle, 600, 230);

      // 5. Divider Ribbon
      ctx.strokeStyle = "#F43F5E";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(400, 270);
      ctx.lineTo(800, 270);
      ctx.stroke();

      // Small heart in center
      ctx.fillStyle = "#E11D48";
      ctx.font = "24px sans-serif";
      ctx.fillText("❤️", 600, 278);

      // 6. Message Body (multi-line wrap)
      ctx.fillStyle = "#374151";
      ctx.font = "26px sans-serif";
      const words = personalWish.split(" ");
      let line = "";
      let y = 350;
      const maxWidth = 900;
      const lineHeight = 44;

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.fillText(line, 600, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 600, y);

      // 7. Signature / Copyright (MANDATORY)
      ctx.fillStyle = "#9F1239";
      ctx.font = "italic 26px serif";
      ctx.fillText("Thiết kế & gửi tặng bởi Hàn Nhật Ninh ❤️", 600, 680);

      // Trigger download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      const safeName = displayName.toLowerCase().replace(/[^a-z0-9]/g, "-");
      a.download = `thiep-20-10-${safeName || "han-nhat-ninh"}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Download card error:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section className="relative min-h-[90dvh] w-full flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Title */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={springs.gentle}
        className="text-center mb-8 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <SparkleIcon size={12} />
          Món Quà Kỷ Niệm
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
          {hasCustomRecipient
            ? `Tấm Thiệp Dành Riêng Cho ${displayName}`
            : "Tấm Thiệp Chúc Mừng 20/10"}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {hasCustomRecipient
            ? `Tấm thiệp đã được nắn nót riêng cho ${displayName}. Bạn có thể tải ảnh về làm kỷ niệm hoặc chia sẻ niềm vui này!`
            : "Bạn có thể chia sẻ trực tiếp liên kết này hoặc tải ảnh thiệp về máy để gửi qua Zalo, Facebook, Messenger."}
        </p>
      </m.div>

      {/* The Printable / Sharable Card Preview */}
      <div className="relative w-full max-w-xl rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-rose-50 via-pink-50/60 to-amber-50/50 dark:from-zinc-900 dark:via-rose-950/40 dark:to-zinc-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xl backdrop-blur-xl z-20">
        {/* Decorative Inner Golden Rim */}
        <div className="absolute inset-3 border border-amber-400/60 dark:border-amber-500/30 rounded-2xl pointer-events-none" />

        {/* Floral Corners */}
        <div className="absolute top-4 left-4 opacity-75">
          <RoseFlower size={28} />
        </div>
        <div className="absolute top-4 right-4 opacity-75">
          <PeonyFlower size={28} />
        </div>

        <div className="text-center flex flex-col items-center pt-3 pb-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-600 dark:text-rose-400 mb-1">
            Thiệp Chúc Mừng 20/10
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-rose-950 dark:text-rose-100 mb-2">
            {hasCustomRecipient
              ? `Kính gửi ${displayName}`
              : "Thân gửi Phái Đẹp Việt Nam"}
          </h3>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent my-3" />

          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed my-2 max-w-md">
            {personalWish}
          </p>

          <div className="mt-6 pt-4 border-t border-rose-200/60 dark:border-rose-900/40 w-full flex flex-col items-center">
            <p className="text-xs sm:text-sm font-serif italic text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
              <span>Thiết kế & gửi tặng bởi Hàn Nhật Ninh</span>
              <HeartIcon size={13} className="text-rose-500 fill-current" />
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 z-10">
        {/* Download Card Image */}
        <m.button
          type="button"
          onClick={handleDownloadCard}
          disabled={downloading}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="min-h-[44px] px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-medium text-xs sm:text-sm shadow-md shadow-amber-500/25 flex items-center gap-2 disabled:opacity-50"
        >
          <span>🖼️</span>
          <span>{downloading ? "Đang tạo ảnh..." : "Tải ảnh thiệp kỷ niệm (PNG)"}</span>
        </m.button>

        {/* Web Share Button */}
        <m.button
          type="button"
          onClick={handleWebShare}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="min-h-[44px] px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium text-xs sm:text-sm shadow-md shadow-rose-500/25 flex items-center gap-2"
        >
          <span>💌</span>
          <span>Chia sẻ thiệp ngay</span>
        </m.button>

        {/* Copy Link Button */}
        <m.button
          type="button"
          onClick={handleCopyLink}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="min-h-[44px] px-5 py-2.5 rounded-2xl bg-white dark:bg-zinc-800 hover:bg-rose-50 dark:hover:bg-zinc-700 text-rose-900 dark:text-rose-200 font-medium text-xs sm:text-sm border border-rose-300 dark:border-zinc-700 shadow-md flex items-center gap-2"
        >
          <span>📋</span>
          <span>{copied ? "Đã sao chép liên kết!" : "Sao chép liên kết"}</span>
        </m.button>
      </div>
    </section>
  );
}
