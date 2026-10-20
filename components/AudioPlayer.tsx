"use client";

import React, { useState, useEffect, useRef } from "react";
import { m } from "motion/react";
import { springs } from "@/lib/motion";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Soft pentatonic acoustic chime notes (Hz)
  const notes = [
    261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99,
  ];

  const playChime = () => {
    if (!audioCtxRef.current || audioCtxRef.current.state !== "running") return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    // Pick 2 harmonious notes
    const note1 = notes[Math.floor(Math.random() * notes.length)];
    const note2 = notes[Math.floor(Math.random() * notes.length)];

    [note1, note2].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.15);

      // Soft envelope (gentle music box feel)
      gain.gain.setValueAtTime(0.0001, now + idx * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.08, now + idx * 0.15 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.15 + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.15);
      osc.stop(now + idx * 0.15 + 2.6);
    });
  };

  const togglePlay = async () => {
    if (!isPlaying) {
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext })
              .webkitAudioContext;
          audioCtxRef.current = new AudioContextClass();
        }
        if (audioCtxRef.current.state === "suspended") {
          await audioCtxRef.current.resume();
        }
        setIsPlaying(true);
        playChime();
        intervalRef.current = setInterval(playChime, 2400);
      } catch (err) {
        console.error("Audio error:", err);
      }
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === "running") {
        await audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <m.button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Tắt giai điệu nền" : "Bật giai điệu êm dịu 20/10"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={springs.bouncy}
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full text-xs font-medium backdrop-blur-md border shadow-lg transition-all duration-300 min-h-[44px] min-w-[44px] ${
          isPlaying
            ? "bg-rose-500/90 text-white border-rose-300 shadow-rose-500/25"
            : "bg-white/80 dark:bg-zinc-900/80 text-rose-800 dark:text-rose-200 border-rose-200/80 dark:border-rose-900 shadow-rose-900/10"
        }`}
      >
        <div className="flex items-end gap-0.5 h-3.5 w-3.5 justify-center">
          {isPlaying ? (
            <>
              <span className="w-1 bg-white rounded-full h-full animate-[pulse_0.6s_infinite]" />
              <span className="w-1 bg-white rounded-full h-2/3 animate-[pulse_0.8s_infinite]" />
              <span className="w-1 bg-white rounded-full h-4/5 animate-[pulse_0.7s_infinite]" />
            </>
          ) : (
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          )}
        </div>
        <span className="hidden sm:inline">
          {isPlaying ? "Đang phát nhạc êm dịu" : "Bật giai điệu 20/10"}
        </span>
      </m.button>
    </div>
  );
}
