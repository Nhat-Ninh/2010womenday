import { Suspense } from "react";
import { RecipientProvider } from "@/context/RecipientContext";
import { HeroEnvelope } from "@/components/HeroEnvelope";
import { PersonalizationSection } from "@/components/PersonalizationSection";
import { InteractiveGarden } from "@/components/InteractiveGarden";
import { WishesCarousel } from "@/components/WishesCarousel";
import { ScrollStory } from "@/components/ScrollStory";
import { ShareCard } from "@/components/ShareCard";
import { GrandFinale } from "@/components/GrandFinale";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-rose-50 dark:bg-zinc-950 text-rose-500 font-serif">
          Đang chuẩn bị bức thư yêu thương 20/10...
        </div>
      }
    >
      <RecipientProvider>
        <main className="flex min-h-dvh flex-col items-center justify-between overflow-x-clip">
          {/* 1. Màn mở đầu: Phong bì phát sáng, nắp mở 3D, hoa bung nở riêng cho người nhận */}
          <HeroEnvelope />

          {/* 2. Bức tâm thư riêng: Tự động hiển thị và đọc thông điệp nắn nót, không cần điền form */}
          <PersonalizationSection />

          {/* 3. Vườn hoa tương tác: Vườn hoa dành riêng tặng người nhận, nở hoa, kéo thả */}
          <InteractiveGarden />

          {/* 4. Lời chúc theo nhóm: Tự động chọn đúng danh xưng của người nhận (Mẹ, Chị, Em, ...) */}
          <WishesCarousel />

          {/* 5. Cuộn có hiệu ứng: useScroll, useTransform, đường SVG tự vẽ pathLength, parallax */}
          <ScrollStory />

          {/* 6. Thẻ chúc mừng: Thiệp kỷ niệm khắc tên người nhận, tải ảnh PNG offline 1-click */}
          <ShareCard />

          {/* 7. Đại kết cục: Pháo hoa cánh hoa, lời cảm ơn & Footer bản quyền Hàn Nhật Ninh */}
          <GrandFinale />
        </main>
      </RecipientProvider>
    </Suspense>
  );
}
