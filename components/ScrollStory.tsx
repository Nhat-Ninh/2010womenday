"use client";

import React, { useRef, useMemo } from "react";
import { m, useScroll, useTransform } from "motion/react";
import {
  RoseFlower,
  LotusFlower,
  DaisyFlower,
  PeonyFlower,
  TulipFlower,
  SparkleIcon,
  HeartIcon,
} from "./FloralIcons";
import { springs } from "@/lib/motion";
import { useRecipient } from "@/context/RecipientContext";

interface VirtueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { role, displayName, hasCustomRecipient } = useRecipient();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animated SVG pathLength and floating parallax
  const pathLength = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const petalParallaxY = useTransform(scrollYProgress, [0, 1], [-40, 90]);
  const petalParallaxRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Bespoke virtues tailored for each specific persona
  const { headerTag, headerTitle, headerSubtitle, virtues } = useMemo(() => {
    const r = role.toLowerCase();

    // 1. NGƯỜI YÊU / EM YÊU
    if (r.includes("yêu") || r.includes("vợ") || r.includes("ny")) {
      return {
        headerTag: "Những Nét Đẹp Đáng Yêu",
        headerTitle: `Những Phẩm Chất Đáng Trân Quý Ở ${displayName}`,
        headerSubtitle: `Những điều dịu dàng, đáng yêu và chân thành nhất khiến em luôn là người phụ nữ đặc biệt nhất trong mắt anh.`,
        virtues: [
          {
            tag: "Dịu Dàng & Ấm Áp",
            title: "Nụ Cười Sưởi Ấm Tâm Hồn",
            description:
              "Sự dịu êm, ánh mắt ấm áp và nụ cười trong veo của em luôn là nơi bình yên nhất, giúp xoa dịu mọi mệt nhoài và áp lực sau những ngày dài bận rộn.",
            icon: <RoseFlower size={32} />,
          },
          {
            tag: "Tinh Tế & Lắng Nghe",
            title: "Trái Tim Thấu Cảm Sâu Sắc",
            description:
              "Sự chu đáo, biết quan sát và luôn thấu hiểu ngay cả khi chưa kịp cất lời. Có em kề bên là có một người bạn đồng hành vừa yêu thương, vừa thấu suốt tâm can.",
            icon: <LotusFlower size={32} />,
          },
          {
            tag: "Chân Thành & Kiêu Hãnh",
            title: "Nét Duyên Độc Nhất Vô Nhị",
            description:
              "Luôn chân thật, tự nhiên và kiên định là chính mình. Nét duyên dáng, đáng yêu và lòng nhân hậu của em là kho báu mà anh luôn muốn nâng niu mỗi ngày.",
            icon: <DaisyFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 2. MẸ
    if (r.includes("mẹ")) {
      return {
        headerTag: "Ân Tình Trời Biển",
        headerTitle: `Những Phẩm Chất Đáng Kính Của ${displayName}`,
        headerSubtitle: `Tri ân đức hy sinh cao cả, tình yêu thương vô điều kiện và vòng tay chở che ấm áp suốt một đời của Mẹ.`,
        virtues: [
          {
            tag: "Đức Hy Sinh",
            title: "Tình Yêu Thương Vô Điều Kiện",
            description:
              "Cả một đời mẹ luôn chắt chiu, nhường nhịn, dành trọn những gì ngọt lành và tốt đẹp nhất cho con cái mà chẳng bao giờ mong cầu đền đáp lại.",
            icon: <PeonyFlower size={32} />,
          },
          {
            tag: "Bến Đỗ Bình Yên",
            title: "Vòng Tay Bao Dung Bất Biến",
            description:
              "Dù ngoài kia cuộc đời có phong ba bão táp, chỉ cần bước chân về nhà bên mẹ là mọi âu lo đều tan biến, bởi nơi mẹ luôn là chốn an yên nhất.",
            icon: <LotusFlower size={32} />,
          },
          {
            tag: "Tảo Tần Vun Vén",
            title: "Ngọn Lửa Ấm Áp Của Tổ Ấm",
            description:
              "Đôi bàn tay chai sạn gom góp từng hạt gạo, nấu từng bữa cơm ngọt lành, gìn giữ nếp nhà và là linh hồn nuôi dưỡng hạnh phúc của cả gia đình.",
            icon: <RoseFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 3. DÌ
    if (r.includes("dì")) {
      return {
        headerTag: "Ân Cần & Gần Gũi",
        headerTitle: `Những Phẩm Chất Đáng Quý Của ${displayName}`,
        headerSubtitle: `Tôn vinh sự ấm áp, tấm lòng nồng hậu và tình thương chở che như người mẹ thứ hai của Dì.`,
        virtues: [
          {
            tag: "Hào Sảng & Bao Dung",
            title: "Tấm Lòng Nồng Hậu Chân Tình",
            description:
              "Luôn đón chào con cháu bằng nụ cười rạng rỡ và sự cởi mở, thân tình. Ở bên Dì luôn có cảm giác ấm áp, vui tươi và ngập tràn tiếng cười rộn rã.",
            icon: <LotusFlower size={32} />,
          },
          {
            tag: "Ân Cần Sẻ Chia",
            title: "Chỗ Dựa Của Người Mẹ Thứ Hai",
            description:
              "Sự chu đáo, tinh tế và luôn lắng nghe. Dì là người con cháu có thể thoải mái tâm sự những chuyện riêng tư và nhận về những lời khuyên chân tình nhất.",
            icon: <RoseFlower size={32} />,
          },
          {
            tag: "Gắn Kết Tình Thân",
            title: "Sự Chu Toàn Gìn Giữ Dòng Họ",
            description:
              "Luôn khéo léo vun đắp cho tình cảm gia đình họ hàng thêm khăng khít, luôn nghĩ cho người khác và là sợi dây ấm áp kết nối các thế hệ.",
            icon: <DaisyFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 4. CÁC EM / EM GÁI
    if (r.includes("em") && !r.includes("chị")) {
      return {
        headerTag: "Rạng Rỡ Tuổi Trẻ",
        headerTitle: `Những Phẩm Chất Tuyệt Vời Của ${displayName}`,
        headerSubtitle: `Tôn vinh nguồn năng lượng tươi sáng, tinh thần tự do và nét kiêu hãnh đáng yêu của em gái.`,
        virtues: [
          {
            tag: "Hồn Nhiên & Tươi Sáng",
            title: "Nguồn Năng Lượng Tích Cực",
            description:
              "Nụ cười trong trẻo, ánh mắt lấp lánh và tinh thần lạc quan yêu đời. Sự hiện diện của em luôn xua tan mệt mỏi và thắp sáng mọi không gian xung quanh.",
            icon: <TulipFlower size={32} />,
          },
          {
            tag: "Tự Do & Kiêu Hãnh",
            title: "Khát Vọng Tỏa Sáng Bản Thân",
            description:
              "Tự tin theo đuổi ước mơ, dám nghĩ dám làm và không ngại vấp ngã. Em luôn nỗ lực để trở thành một đóa hoa độc nhất vô nhị trên hành trình trưởng thành.",
            icon: <DaisyFlower size={32} />,
          },
          {
            tag: "Chân Thật & Lương Thiện",
            title: "Trái Tim Giàu Tình Cảm",
            description:
              "Biết yêu thương gia đình, biết sẻ chia và luôn chân thật với cảm xúc của mình. Em luôn là niềm tự hào và điều ngọt ngào nhất của mọi người.",
            icon: <RoseFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 5. BẠN BÈ / TRI KỶ
    if (r.includes("bạn")) {
      return {
        headerTag: "Thanh Xuân & Tri Kỷ",
        headerTitle: `Những Phẩm Chất Đáng Trân Quý Ở ${displayName}`,
        headerSubtitle: `Tôn vinh sự thấu hiểu không lời, bản lĩnh tự do và tình bạn chân thành đã cùng đi qua năm tháng thanh xuân rực rỡ.`,
        virtues: [
          {
            tag: "Thấu Cảm Tri Kỷ",
            title: "Sự Đồng Điệu Tâm Hồn",
            description:
              "Chỉ cần một ánh nhìn là hiểu, cùng cười thả ga những ngày vui và sẵn sàng ngồi lặng yên bên nhau lúc mệt mỏi mà không cần một lời giải thích nào.",
            icon: <RoseFlower size={32} />,
          },
          {
            tag: "Độc Lập & Kiêu Kỳ",
            title: "Bản Lĩnh Làm Chủ Cuộc Đời",
            description:
              "Tự tin, tự lập và luôn kiên định với những đam mê của mình. Cậu luôn tỏa ra nguồn năng lượng cuốn hút của một người phụ nữ hiện đại, tự do.",
            icon: <DaisyFlower size={32} />,
          },
          {
            tag: "Chân Thành Tuyệt Đối",
            title: "Tình Bạn Bền Chặt Qua Năm Tháng",
            description:
              "Dù thời gian trôi qua, cuộc sống có bao nhiêu đổi thay, sự chân thành và tình bạn giữa chúng ta vẫn luôn vẹn nguyên, là điểm tựa đáng tin cậy nhất.",
            icon: <LotusFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 6. CHỊ GÁI
    if (r.includes("chị")) {
      return {
        headerTag: "Chở Che & Gắn Bó",
        headerTitle: `Những Phẩm Chất Đáng Quý Ở ${displayName}`,
        headerSubtitle: `Tôn vinh sự bao dung, tình thương che chở và đức hy sinh ấm áp của người chị gái.`,
        virtues: [
          {
            tag: "Bao Dung Nhường Nhịn",
            title: "Tấm Lòng Của Người Chị Lớn",
            description:
              "Luôn chở che, chăm sóc và nhường nhịn em từ những ngày thơ bé. Sự vị tha của chị là tấm khiên vững chãi bảo bọc suốt tuổi thơ của em.",
            icon: <RoseFlower size={32} />,
          },
          {
            tag: "Chỗ Dựa Vững Vàng",
            title: "Người Bạn Đồng Hành Đáng Tin",
            description:
              "Luôn cho em những lời khuyên thông tuệ lúc chông chênh, cùng em chia sẻ những điều sâu kín và luôn dõi theo từng bước trưởng thành của em.",
            icon: <LotusFlower size={32} />,
          },
          {
            tag: "Đảm Đang Chu Toàn",
            title: "Bản Lĩnh Hòa Cùng Dịu Dàng",
            description:
              "Mạnh mẽ vượt qua những thử thách trong cuộc sống, nhưng đối với gia đình thì luôn chu đáo, ngọt ngào và ấm áp như ánh nắng sớm mai.",
            icon: <PeonyFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 7. BÀ KÍNH YÊU
    if (r.includes("bà")) {
      return {
        headerTag: "Phúc Đức Trường Tồn",
        headerTitle: `Những Phẩm Chất Đáng Kính Của ${displayName}`,
        headerSubtitle: `Tri ân nụ cười từ bi, bóng mát chở che và tình thương bao la của Bà đối với các thế hệ con cháu.`,
        virtues: [
          {
            tag: "Từ Bi Hiền Hậu",
            title: "Nụ Cười Bao Dung Của Bà",
            description:
              "Phúc lành lớn nhất của cả gia đình, nụ cười đôn hậu và ánh mắt hiền từ luôn mang lại cảm giác bình yên, ấm êm trong từng ký ức tuổi thơ.",
            icon: <LotusFlower size={32} />,
          },
          {
            tag: "Tình Thương Truyền Đời",
            title: "Lời Ru & Ký Ức Êm Đềm",
            description:
              "Từng câu chuyện hiền hòa, sự vỗ về và tình thương bao la của bà đã nuôi dưỡng tâm hồn con cháu lớn khôn, là hành trang đẹp nhất đời người.",
            icon: <PeonyFlower size={32} />,
          },
          {
            tag: "Cội Nguồn Gia Đạo",
            title: "Cây Cao Bóng Cả Của Gia Đình",
            description:
              "Chỗ dựa tinh thần tôn kính, nơi con cháu tìm về để cảm nhận sự thanh thản trong tâm hồn và gìn giữ phúc đức trường tồn của dòng họ.",
            icon: <DaisyFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 8. CÔ / BÁC
    if (r.includes("cô") || r.includes("bác")) {
      return {
        headerTag: "Nồng Hậu & Ấm Áp",
        headerTitle: `Những Phẩm Chất Đáng Quý Của ${displayName}`,
        headerSubtitle: `Tôn vinh sự ân cần, tình cảm ruột thịt nồng ấm và sự chu toàn gìn giữ nếp nhà.`,
        virtues: [
          {
            tag: "Ân Cần Chu Đáo",
            title: "Tình Thân Ruột Thịt Nồng Hậu",
            description:
              "Sự niềm nở, chu đáo và tình cảm chân thành luôn dành cho con cháu, luôn tạo nên sự gắn kết ấm áp và sum vầy của đại gia đình.",
            icon: <DaisyFlower size={32} />,
          },
          {
            tag: "Kinh Nghiệm Sâu Sắc",
            title: "Người Dẫn Lối Thấu Đáo",
            description:
              "Luôn động viên, trao gửi những bài học và lời khuyên quý báu giúp con cháu tự tin, vững vàng hơn trên mỗi chặng đường lập thân.",
            icon: <LotusFlower size={32} />,
          },
          {
            tag: "Gìn Giữ Nếp Nhà",
            title: "Ngọn Lửa Gia Đạo Đầm Ấm",
            description:
              "Khéo léo vun vén cho các buổi họp mặt gia đình luôn chan chứa tiếng cười và tình yêu thương bền chặt theo năm tháng.",
            icon: <RoseFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // 9. NỮ ĐỒNG NGHIỆP
    if (r.includes("đồng nghiệp") || r.includes("cộng sự")) {
      return {
        headerTag: "Bản Lĩnh & Duyên Dáng",
        headerTitle: `Những Phẩm Chất Đáng Trân Quý Ở ${displayName}`,
        headerSubtitle: `Tôn vinh trí tuệ sắc bén, phong thái thanh lịch và tinh thần nhiệt huyết truyền cảm hứng trong công việc.`,
        virtues: [
          {
            tag: "Trí Tuệ & Quyết Đoán",
            title: "Bản Lĩnh Chuyên Nghiệp",
            description:
              "Tư duy thông tuệ, tác phong nhanh nhạy và trách nhiệm cao trong công việc, luôn mang đến những kết quả xuất sắc và sự tin cậy tuyệt đối.",
            icon: <TulipFlower size={32} />,
          },
          {
            tag: "Thanh Lịch Tinh Tế",
            title: "Phong Thái Duyên Dáng",
            description:
              "Khéo léo trong ứng xử, nhẹ nhàng trong giao tiếp và luôn giữ được nét dịu dàng cuốn hút, mang lại bầu không khí làm việc hài hòa.",
            icon: <RoseFlower size={32} />,
          },
          {
            tag: "Nhiệt Huyết Lan Tỏa",
            title: "Nguồn Cảm Hứng Tích Cực",
            description:
              "Năng lượng tươi mới, tinh thần sáng tạo không ngừng và sự cởi mở, luôn thắp sáng và truyền cảm hứng làm việc cho cả tập thể.",
            icon: <DaisyFlower size={32} />,
          },
        ] as VirtueItem[],
      };
    }

    // DEFAULT / TỔNG THỂ
    return {
      headerTag: "Giá Trị Vĩnh Cửu",
      headerTitle: hasCustomRecipient
        ? `Những Phẩm Chất Đáng Trân Quý Ở ${displayName}`
        : "Những Phẩm Chất Đáng Trân Quý",
      headerSubtitle: hasCustomRecipient
        ? `Tôn vinh những nét đẹp dịu dàng, ấm áp và đáng quý nhất ở ${displayName}.`
        : "Tôn vinh nét đẹp truyền thống hòa quyện cùng phong thái độc lập, kiêu sa của người phụ nữ Việt Nam.",
      virtues: [
        {
          tag: "Dịu Dàng",
          title: "Vẻ Đẹp Tâm Hồn",
          description:
            "Sự dịu êm, nhẫn nại và lòng bao dung vô bờ bến. Trong bất cứ hoàn cảnh nào, nụ cười của người phụ nữ luôn là ánh nắng sưởi ấm mọi giá lạnh.",
          icon: <RoseFlower size={32} />,
        },
        {
          tag: "Trí Tuệ & Kiên Cường",
          title: "Bản Lĩnh Hiện Đại",
          description:
            "Người phụ nữ Việt Nam hôm nay tự tin khẳng định vị thế, thông tuệ trong tư duy, không ngừng sáng tạo và tỏa sáng ở mọi lĩnh vực xã hội.",
          icon: <LotusFlower size={32} />,
        },
        {
          tag: "Rực Rỡ",
          title: "Hạnh Phúc Là Chính Mình",
          description:
            "Tự do ước mơ, yêu thương bản thân và kiêu hãnh bước đi trên con đường mình chọn. Bạn sinh ra là một tuyệt tác rạng rỡ của cuộc đời.",
          icon: <DaisyFlower size={32} />,
        },
      ] as VirtueItem[],
    };
  }, [role, displayName, hasCustomRecipient]);

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
          {headerTag}
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
          {headerTitle}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {headerSubtitle}
        </p>
      </m.div>

      {/* Staggered Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {virtues.map((item, index) => (
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
