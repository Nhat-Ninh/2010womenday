import type { Metadata, Viewport } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { AudioPlayer } from "@/components/AudioPlayer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFF1F2",
};

export const metadata: Metadata = {
  title: "Chúc mừng 20/10 – Hàn Nhật Ninh",
  description:
    "Website chúc mừng Ngày Phụ Nữ Việt Nam 20/10 tràn ngập hoa tươi, âm hưởng ngọt ngào và những lời chúc yêu thương cá nhân hóa. Thiết kế & gửi tặng bởi Hàn Nhật Ninh.",
  authors: [{ name: "Hàn Nhật Ninh" }],
  creator: "Hàn Nhật Ninh",
  publisher: "Hàn Nhật Ninh",
  keywords: [
    "20/10",
    "Ngày Phụ Nữ Việt Nam",
    "Chúc mừng 20/10",
    "Hàn Nhật Ninh",
    "Thiệp 20/10",
    "Lời chúc 20/10",
  ],
  openGraph: {
    title: "Chúc mừng 20/10 – Hàn Nhật Ninh",
    description:
      "Website chúc mừng Ngày Phụ Nữ Việt Nam 20/10 với hoa tươi, lời chúc cảm xúc và thiệp cá nhân hóa. Thiết kế & gửi tặng bởi Hàn Nhật Ninh.",
    siteName: "Chúc mừng 20/10 – Hàn Nhật Ninh",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chúc mừng 20/10 – Hàn Nhật Ninh",
    description:
      "Món quà tri ân Ngày Phụ Nữ Việt Nam 20/10. Thiết kế & gửi tặng bởi Hàn Nhật Ninh.",
  },
  other: {
    "author": "Hàn Nhật Ninh",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col font-sans bg-rose-50/20 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-rose-200 selection:text-rose-900">
        <MotionProvider>
          <AudioPlayer />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
