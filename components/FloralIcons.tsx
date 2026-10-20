import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Artisanal Rose Flower SVG
 */
export function RoseFlower({ className = "", size = 48, ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="roseCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#BE123C" />
          <stop offset="60%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#FB7185" />
        </radialGradient>
        <radialGradient id="roseOuter" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="70%" stopColor="#FDA4AF" />
          <stop offset="100%" stopColor="#FFE4E6" />
        </radialGradient>
        <linearGradient id="roseStem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
      </defs>
      {/* Leaves & Stem */}
      <path
        d="M50 78 Q50 95 52 98"
        stroke="url(#roseStem)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M48 84 C38 82 32 76 34 70 C38 72 45 77 48 84 Z"
        fill="#22C55E"
        opacity="0.9"
      />
      <path
        d="M52 82 C62 80 68 74 66 68 C62 70 55 75 52 82 Z"
        fill="#16A34A"
        opacity="0.9"
      />
      {/* Outer Petals */}
      <path
        d="M50 15 C30 15 20 35 24 54 C28 72 48 80 50 80 C52 80 72 72 76 54 C80 35 70 15 50 15 Z"
        fill="url(#roseOuter)"
      />
      <path
        d="M26 36 C18 48 24 64 36 72 C42 66 40 52 32 42 Z"
        fill="#FB7185"
        opacity="0.8"
      />
      <path
        d="M74 36 C82 48 76 64 64 72 C58 66 60 52 68 42 Z"
        fill="#F43F5E"
        opacity="0.75"
      />
      {/* Mid Petals */}
      <path
        d="M34 32 C40 22 60 22 66 32 C72 42 66 56 50 62 C34 56 28 42 34 32 Z"
        fill="#E11D48"
        opacity="0.9"
      />
      <path
        d="M40 36 C44 28 56 28 60 36 C64 44 58 52 50 54 C42 52 36 44 40 36 Z"
        fill="url(#roseCore)"
      />
      {/* Center Swirl */}
      <path
        d="M46 42 Q50 38 54 42 Q52 47 48 45 Z"
        fill="#881337"
      />
    </svg>
  );
}

/**
 * Artisanal Sacred Lotus Flower SVG
 */
export function LotusFlower({ className = "", size = 48, ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="lotusCenter" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="60%" stopColor="#FDF2F8" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="lotusSide" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="70%" stopColor="#FBCFE8" />
          <stop offset="100%" stopColor="#FFF1F2" />
        </linearGradient>
        <radialGradient id="lotusCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
      </defs>
      {/* Base pad */}
      <ellipse cx="50" cy="82" rx="38" ry="8" fill="#059669" opacity="0.6" />
      <path
        d="M50 78 C30 78 12 70 18 64 C28 58 40 68 50 72 C60 68 72 58 82 64 C88 70 70 78 50 78 Z"
        fill="#10B981"
        opacity="0.8"
      />
      {/* Outermost Petals */}
      <path
        d="M50 72 C32 68 15 54 18 42 C22 34 38 48 50 68 Z"
        fill="url(#lotusSide)"
        opacity="0.85"
      />
      <path
        d="M50 72 C68 68 85 54 82 42 C78 34 62 48 50 68 Z"
        fill="url(#lotusSide)"
        opacity="0.85"
      />
      {/* Mid Petals */}
      <path
        d="M50 70 C36 62 26 42 34 26 C42 20 48 44 50 66 Z"
        fill="url(#lotusCenter)"
      />
      <path
        d="M50 70 C64 62 74 42 66 26 C58 20 52 44 50 66 Z"
        fill="url(#lotusCenter)"
      />
      {/* Central Crown Petal */}
      <path
        d="M50 66 C42 50 42 30 50 14 C58 30 58 50 50 66 Z"
        fill="url(#lotusCenter)"
      />
      {/* Golden Pistil Core */}
      <circle cx="50" cy="58" r="6" fill="url(#lotusCore)" />
      <circle cx="48" cy="56" r="1.5" fill="#FEF3C7" />
    </svg>
  );
}

/**
 * Artisanal Tulip Flower SVG
 */
export function TulipFlower({ className = "", size = 48, ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="tulipGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#C026D3" />
          <stop offset="50%" stopColor="#E879F9" />
          <stop offset="100%" stopColor="#FDF4FF" />
        </linearGradient>
        <linearGradient id="tulipSideGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#A21CAF" />
          <stop offset="70%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#F5D0FE" />
        </linearGradient>
      </defs>
      {/* Stem */}
      <path
        d="M50 65 Q50 88 52 96"
        stroke="#15803D"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M48 78 Q30 72 26 55 Q36 62 48 74 Z"
        fill="#22C55E"
        opacity="0.9"
      />
      <path
        d="M52 75 Q70 68 76 50 Q66 58 52 72 Z"
        fill="#16A34A"
        opacity="0.9"
      />
      {/* Back petal */}
      <path
        d="M50 20 C40 30 40 55 50 64 C60 55 60 30 50 20 Z"
        fill="#86198F"
        opacity="0.8"
      />
      {/* Left petal */}
      <path
        d="M50 64 C35 60 25 45 28 28 C36 28 44 42 50 64 Z"
        fill="url(#tulipSideGrad)"
      />
      {/* Right petal */}
      <path
        d="M50 64 C65 60 75 45 72 28 C64 28 56 42 50 64 Z"
        fill="url(#tulipSideGrad)"
      />
      {/* Front center petal */}
      <path
        d="M50 64 C42 54 38 38 50 25 C62 38 58 54 50 64 Z"
        fill="url(#tulipGrad)"
      />
    </svg>
  );
}

/**
 * Artisanal Daisy / Cúc Họa Mi SVG
 */
export function DaisyFlower({ className = "", size = 48, ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="daisyCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
      </defs>
      {/* Stem */}
      <path d="M50 55 L50 95" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
      {/* 12 Petals array */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <path
          key={deg}
          d="M50 50 C46 36 46 16 50 12 C54 16 54 36 50 50 Z"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="0.8"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {/* Center disk */}
      <circle cx="50" cy="50" r="14" fill="url(#daisyCore)" />
      <circle cx="48" cy="48" r="3" fill="#FDE68A" opacity="0.8" />
    </svg>
  );
}

/**
 * Artisanal Peony Flower SVG
 */
export function PeonyFlower({ className = "", size = 48, ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="peonyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#BE185D" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="90%" stopColor="#FBCFE8" />
          <stop offset="100%" stopColor="#FFF1F2" />
        </radialGradient>
      </defs>
      {/* Leaves */}
      <path
        d="M50 75 Q32 85 24 74 Q34 68 50 72 Z"
        fill="#15803D"
        opacity="0.8"
      />
      <path
        d="M50 75 Q68 85 76 74 Q66 68 50 72 Z"
        fill="#16A34A"
        opacity="0.8"
      />
      {/* Large Ruffled Petals */}
      <circle cx="50" cy="50" r="36" fill="url(#peonyGrad)" opacity="0.6" />
      <path
        d="M20 50 C20 30 35 18 50 18 C65 18 80 30 80 50 C80 70 65 82 50 82 C35 82 20 70 20 50 Z"
        fill="#F472B6"
        opacity="0.8"
      />
      <path
        d="M26 44 C26 28 38 24 50 24 C62 24 74 28 74 44 C74 60 62 70 50 70 C38 70 26 60 26 44 Z"
        fill="#DB2777"
        opacity="0.85"
      />
      <path
        d="M34 46 C34 34 42 30 50 30 C58 30 66 34 66 46 C66 56 58 62 50 62 C42 62 34 56 34 46 Z"
        fill="#9D174D"
        opacity="0.9"
      />
      {/* Golden heart specks */}
      <circle cx="48" cy="46" r="2.5" fill="#FDE047" />
      <circle cx="53" cy="47" r="2" fill="#FACC15" />
      <circle cx="50" cy="43" r="1.8" fill="#FEF08A" />
    </svg>
  );
}

/**
 * Artisanal Single Falling Petal
 */
export function SinglePetal({
  className = "",
  size = 24,
  variant = "rose",
  ...props
}: SvgProps & { variant?: "rose" | "sakura" | "gold" }) {
  const fill =
    variant === "rose"
      ? "#FB7185"
      : variant === "sakura"
      ? "#F472B6"
      : "#FBBF24";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20 4 C10 12 6 24 14 34 C20 40 28 36 32 28 C36 18 28 8 20 4 Z"
        fill={fill}
        opacity="0.88"
      />
      <path
        d="M20 8 Q18 22 24 30"
        stroke="#FFF"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

/**
 * Romantic Vintage Envelope SVG with Flap
 */
export function VintageEnvelope({
  isOpen = false,
  className = "",
  size = 280,
}: {
  isOpen: boolean;
  className?: string;
  size?: number;
}) {
  return (
    <div
      style={{ width: size, height: size * 0.65 }}
      className={`relative mx-auto select-none transition-transform duration-500 ${className}`}
    >
      {/* Shadow */}
      <div className="absolute inset-x-4 -bottom-4 h-8 bg-rose-950/20 dark:bg-black/50 blur-xl rounded-full" />

      {/* Envelope Body Base */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 dark:from-zinc-900 dark:via-rose-950/40 dark:to-zinc-900 border border-rose-200/80 dark:border-rose-500/30 shadow-2xl">
        {/* Decorative inner pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        {/* Envelope pocket triangles */}
        <svg
          viewBox="0 0 280 182"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Left fold */}
          <path
            d="M0 0 L140 100 L0 182 Z"
            fill="#FCE7F3"
            className="dark:fill-rose-950/60"
            opacity="0.85"
          />
          {/* Right fold */}
          <path
            d="M280 0 L140 100 L280 182 Z"
            fill="#FBCFE8"
            className="dark:fill-rose-950/80"
            opacity="0.85"
          />
          {/* Bottom fold */}
          <path
            d="M0 182 L140 92 L280 182 Z"
            fill="#FDF2F8"
            className="dark:fill-zinc-900/90"
            stroke="#FDA4AF"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
        </svg>

        {/* Wax Seal / Stamp */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-red-500 border-2 border-rose-300 shadow-lg flex items-center justify-center transition-all duration-500 ${
              isOpen ? "scale-90 opacity-60" : "scale-100 hover:scale-105"
            }`}
          >
            <div className="w-10 h-10 rounded-full border border-rose-300/60 flex items-center justify-center">
              <span className="text-amber-200 font-bold text-xs tracking-wider">
                20/10
              </span>
            </div>
          </div>
          {!isOpen && (
            <span className="mt-2 text-[11px] font-medium text-rose-700 dark:text-rose-300 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-800 shadow-sm animate-pulse">
              Chạm để mở
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Sparkling Star Icon
 */
export function SparkleIcon({ className = "", size = 20 }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2 C12 8 16 12 22 12 C16 12 12 16 12 22 C12 16 8 12 2 12 C8 12 12 8 12 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Romantic Heart Icon
 */
export function HeartIcon({ className = "", size = 20 }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
