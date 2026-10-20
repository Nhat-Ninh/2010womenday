export interface GroupWish {
  id: string;
  role: string;
  roleAlias: string[];
  recipientTitle: string;
  tagline: string;
  quote: string;
  fullMessage: string;
  floralAccent: "rose" | "lotus" | "tulip" | "daisy" | "peony" | "lavender";
  gradientBg: string;
}

export const GROUP_WISHES: GroupWish[] = [
  {
    id: "nguoi-yeu",
    role: "Người yêu",
    roleAlias: ["người yêu", "nguoi-yeu", "em yêu", "em-yeu", "ny", "bạn gái", "vợ", "vo"],
    recipientTitle: "Gửi Em Yêu – Món quà dịu dàng nhất của anh",
    tagline: "Cảm ơn em vì đã đến, mang theo sự dịu êm cho thế giới của anh",
    quote: "Thế giới ngoài kia có thể ồn ào và vội vã, nhưng bên em luôn là chốn bình yên nhất...",
    fullMessage:
      "Cảm ơn em vì đã bước vào cuộc đời anh với tất cả sự dịu dàng, thấu hiểu và chân thành. Ngày 20/10 này, anh không chúc em những điều sáo rỗng hay mong em phải trở thành một cô gái hoàn hảo, anh chỉ mong em luôn được là chính mình — một cô gái yêu đời, hay cười và luôn thấy an yên trong lòng. Những lúc mệt mỏi ngoài kia, hãy nhớ rằng luôn có một cái ôm ấm áp và một bờ vai vững chãi sẵn sàng đợi em. Chúc em yêu ngày 20/10 thật rực rỡ và luôn cảm nhận được trọn vẹn tình yêu thương của anh!",
    floralAccent: "rose",
    gradientBg: "from-rose-500/15 via-pink-500/15 to-red-500/10",
  },
  {
    id: "me",
    role: "Mẹ",
    roleAlias: ["mẹ", "me", "mama", "mẹ yêu"],
    recipientTitle: "Kính gửi Mẹ kính yêu",
    tagline: "Nơi bão giông dừng sau cánh cửa, bến đỗ bình yên nhất cuộc đời",
    quote: "Càng đi xa con càng nhận ra, không nơi đâu ấm áp bằng mái nhà có mẹ...",
    fullMessage:
      "Càng trưởng thành giữa cuộc đời nhiều va vấp, con lại càng nhận ra món quà quý giá nhất không phải là những thành công ngoài kia, mà là mỗi lần trở về vẫn thấy bóng dáng mẹ bên hiên nhà và nghe tiếng mẹ gọi cơm. Cảm ơn mẹ vì cả một đời chắt chiu, nhẫn nại, hy sinh thầm lặng để dành hết những điều ngọt lành nhất cho chúng con. Ngày 20/10, con không chúc mẹ điều gì xa xôi, chỉ cầu mong thời gian trôi thật chậm, mong mẹ mỗi ngày đều thảnh thơi, bớt lo toan, đêm về ngủ thật ngon giấc và sống an vui, khỏe mạnh bên con cháu thật dài lâu.",
    floralAccent: "peony",
    gradientBg: "from-rose-500/10 via-pink-500/10 to-amber-500/10",
  },
  {
    id: "di",
    role: "Dì",
    roleAlias: ["dì", "di", "dì yêu", "dì thương"],
    recipientTitle: "Gửi Dì thân thương của con",
    tagline: "Sự ân cần, gần gũi và ấm áp như người mẹ thứ hai",
    quote: "Tình thương và sự chu đáo của Dì luôn là ký ức êm dịu nhất...",
    fullMessage:
      "Gửi Dì thương quý của con, trong gia đình, Dì luôn là người phụ nữ gần gũi, bao dung và nồng hậu nhất. Con vẫn luôn nhớ những ngày thơ bé, mỗi lần gặp Dì là có quà bánh, là những lời hỏi han ân cần, những cái ôm ấm áp và cả những chuyện vui buồn con có thể thoải mái tâm sự cùng Dì. Nhân ngày 20/10, con chúc Dì luôn giữ được sự tươi trẻ, nụ cười rạng rỡ trên môi, gia đình lúc nào cũng tràn ngập niềm vui và mỗi ngày trôi qua đều trọn vẹn an khang, hạnh phúc. Cảm ơn Dì vì tình cảm ấm áp Dì luôn dành cho con cháu suốt bao năm qua!",
    floralAccent: "lotus",
    gradientBg: "from-amber-500/10 via-rose-400/10 to-yellow-500/10",
  },
  {
    id: "cac-em",
    role: "Các em",
    roleAlias: ["em", "các em", "em gái", "cac-em", "em-gai"],
    recipientTitle: "Gửi Em gái – Bông hoa tự do và kiêu hãnh",
    tagline: "Hãy cứ tự tin tỏa sáng theo cách độc nhất của riêng mình",
    quote: "Trưởng thành có lúc chông chênh, nhưng đừng bao giờ quên em sinh ra đã là một điều kỳ diệu...",
    fullMessage:
      "Chúc em gái ngày 20/10 thật rực rỡ và nhận được thật nhiều điều ngọt ngào! Trưởng thành là một hành trình dài và đôi khi có những ngày mệt mỏi, nhưng em đừng bao giờ ép mình phải trở thành bản sao của bất kỳ ai. Cứ sống kiêu hãnh, tươi vui, tự tin theo đuổi những hoài bão của mình và yêu thương bản thân thật tốt. Vấp ngã thì đứng dậy phủi bụi đi tiếp, phía sau em luôn có người thân sẵn sàng lắng nghe và bảo bọc em vô điều kiện. Cứ rực rỡ và tự do như bông hoa mùa xuân nhé!",
    floralAccent: "tulip",
    gradientBg: "from-violet-500/10 via-fuchsia-400/10 to-pink-500/10",
  },
  {
    id: "ban-be",
    role: "Bạn bè",
    roleAlias: ["bạn", "ban", "bạn thân", "tri kỷ", "ban-than"],
    recipientTitle: "Gửi Người bạn tri kỷ",
    tagline: "Cùng nhau đi qua năm tháng thanh xuân rực rỡ",
    quote: "Cảm ơn vì đã luôn ở đó, cùng cười thả ga và cùng nhau vượt qua những ngày chông chênh...",
    fullMessage:
      "Chúc người bạn tuyệt vời của tôi ngày 20/10 ngập tràn hoa, quà và những điều dịu ngọt! Cảm ơn cậu vì đã cùng tôi đi qua những năm tháng thanh xuân — những lúc ngốc nghếch nhất, những ngày mỏi mệt lẫn những buổi tối ngồi cạnh nhau chẳng cần nói câu nào mà vẫn thấy bình yên. Chúc cậu tuổi trẻ này không có điều gì phải nuối tiếc, ăn ngon ngủ kỹ, kiếm thật nhiều tiền, tự do sống theo đam mê và sớm gặp được người trân trọng từng nét đẹp trong tâm hồn cậu. Mãi kiêu hãnh và rạng rỡ nhé!",
    floralAccent: "daisy",
    gradientBg: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
  },
  {
    id: "chi",
    role: "Chị gái",
    roleAlias: ["chị", "chi", "chị gái", "chi-gai"],
    recipientTitle: "Gửi Chị gái yêu quý",
    tagline: "Người bạn đồng hành bao dung và là chỗ dựa vững chãi",
    quote: "Cảm ơn chị vì luôn nhường nhịn và chở che cho em từ thuở ấu thơ...",
    fullMessage:
      "Gửi chị gái thân yêu của em, cảm ơn chị vì đã luôn bao dung, chở che và nhường nhịn em từ những ngày còn thơ bé. Chị luôn chu đáo vun vén cho gia đình, đôi khi quên mất cả việc yêu thương chính mình. Ngày 20/10 này, em mong chị hãy gác lại mọi âu lo, dành trọn thời gian để chiều chuộng bản thân nhé. Chúc chị luôn rạng ngời, kiêu hãnh, công việc hanh thông và luôn gặp được những điều xứng đáng nhất với tấm lòng lương thiện của chị.",
    floralAccent: "rose",
    gradientBg: "from-pink-500/10 via-rose-400/10 to-purple-500/10",
  },
  {
    id: "ba",
    role: "Bà",
    roleAlias: ["bà", "ba", "bà ngoại", "bà nội", "bà kính yêu"],
    recipientTitle: "Kính gửi Bà thân thương",
    tagline: "Cội nguồn phúc lành và nụ cười hiền hậu của cả gia đình",
    quote: "Lời ru và bóng hình bà là miền ký ức êm đềm nhất cuộc đời...",
    fullMessage:
      "Kính chúc Bà yêu quý một ngày 20/10 thật an vui, vạn thọ vô cương. Cảm ơn Bà vì những câu chuyện hiền hòa bên bậu cửa, vòng tay chở che ấm áp và tình thương bao la luôn dành cho con cháu. Con chỉ mong Bà mỗi ngày đều trọn vẹn an khang, ăn ngon ngủ yên và luôn tràn ngập tiếng cười ấm cúng bên gia đình.",
    floralAccent: "lotus",
    gradientBg: "from-amber-500/10 via-orange-400/10 to-yellow-500/10",
  },
  {
    id: "co-bac",
    role: "Cô & Bác",
    roleAlias: ["cô", "co", "bác", "bac", "cô bác"],
    recipientTitle: "Gửi Cô và Bác kính quý",
    tagline: "Sự ân cần và nồng hậu gìn giữ tình thân gia đình",
    quote: "Những người phụ nữ luôn mang lại sự sum vầy và ấm áp...",
    fullMessage:
      "Nhân ngày Phụ nữ Việt Nam 20/10, xin gửi tới Cô, Bác những lời chúc tốt đẹp và chân thành nhất! Kính chúc Cô, Bác luôn dồi dào sức khỏe, gia đạo bình an, cuộc sống luôn nhẹ nhõm thảnh thơi và mỗi ngày đều gom góp thêm thật nhiều niềm vui cùng sự yêu kính từ con cháu.",
    floralAccent: "daisy",
    gradientBg: "from-teal-500/10 via-emerald-500/10 to-cyan-500/10",
  },
  {
    id: "dong-nghiep",
    role: "Đồng nghiệp",
    roleAlias: ["đồng nghiệp", "dong-nghiep", "cộng sự", "cong-su"],
    recipientTitle: "Gửi Quý Nữ Đồng Nghiệp & Cộng sự",
    tagline: "Bản lĩnh, thông tuệ và đầy nhiệt huyết truyền cảm hứng",
    quote: "Tỏa sáng bằng tài năng và dịu dàng trong từng phong thái...",
    fullMessage:
      "Chúc những người cộng sự tuyệt vời một ngày 20/10 ngập tràn hoa tươi, năng lượng tích cực và những bước tiến vượt bậc trong sự nghiệp. Cảm ơn sự đồng hành chuyên nghiệp, nụ cười rạng rỡ và tinh thần nhiệt huyết mà bạn luôn mang đến cho tập thể mỗi ngày. Chúc bạn luôn tự tin khẳng định bản thân và tận hưởng trọn vẹn từng khoảnh khắc ngọt ngào của cuộc sống!",
    floralAccent: "lavender",
    gradientBg: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
  },
  {
    id: "phu-nu-viet-nam",
    role: "Tất cả",
    roleAlias: ["tất cả", "phụ nữ việt nam", "phu-nu"],
    recipientTitle: "Tôn vinh Phái Đẹp Việt Nam",
    tagline: "Đóa hoa ngát hương giữa dòng thời gian",
    quote: "Mỗi người phụ nữ là một tuyệt tác kỳ diệu của tạo hóa...",
    fullMessage:
      "Xin gửi lời chúc trân trọng và sâu sắc nhất đến toàn thể phụ nữ Việt Nam nhân ngày 20/10. Dù là dịu dàng hay mạnh mẽ, thầm lặng vun vén hay kiêu hãnh khẳng định mình trên đỉnh cao sự nghiệp, các bạn đều là ánh sáng mang lại vẻ đẹp và sự diệu kỳ cho thế giới này. Chúc bạn luôn được nâng niu, trân trọng và hạnh phúc mỗi ngày!",
    floralAccent: "lotus",
    gradientBg: "from-red-500/10 via-pink-500/10 to-yellow-500/10",
  },
];

export const RELATIONSHIPS = [
  { id: "Người yêu", label: "Em Yêu / Người Yêu", prefix: "Em Yêu", pronoun: "em" },
  { id: "Mẹ", label: "Mẹ Kính Yêu", prefix: "Mẹ", pronoun: "mẹ" },
  { id: "Dì", label: "Dì Thân Thương", prefix: "Dì", pronoun: "dì" },
  { id: "Em", label: "Em Gái / Các Em", prefix: "Em", pronoun: "em" },
  { id: "Bạn", label: "Bạn Bè / Bạn Thân", prefix: "Bạn", pronoun: "cậu" },
  { id: "Chị", label: "Chị Gái", prefix: "Chị", pronoun: "chị" },
  { id: "Bà", label: "Bà Kính Yêu", prefix: "Bà", pronoun: "bà" },
  { id: "Cô", label: "Cô", prefix: "Cô", pronoun: "cô" },
  { id: "Bác", label: "Bác", prefix: "Bác", pronoun: "bác" },
  { id: "Đồng nghiệp", label: "Nữ Đồng Nghiệp", prefix: "Đồng nghiệp", pronoun: "bạn" },
];

/**
 * Generates bespoke, deeply emotional, non-industrial Vietnamese wishes
 */
export function generatePersonalWish(name: string, relationshipId: string): string {
  const cleanName = name.trim();
  const rel =
    RELATIONSHIPS.find((r) => r.id.toLowerCase() === relationshipId.toLowerCase()) ||
    RELATIONSHIPS[0];

  const greeting = cleanName
    ? cleanName.toLowerCase().startsWith(rel.prefix.toLowerCase())
      ? cleanName
      : `${rel.prefix} ${cleanName}`
    : rel.label;

  switch (rel.id) {
    case "Người yêu":
      return `Gửi ${greeting} của anh! Cảm ơn em vì đã bước vào cuộc đời anh với tất cả sự dịu êm và chân thành nhất. Ngày 20/10, anh chỉ mong em mỗi sáng thức dậy đều thấy lòng nhẹ nhõm, môi luôn nở nụ cười và không bao giờ phải chịu ấm ức một mình. Dù ngoài kia có bao nhiêu bão giông, bờ vai và cái ôm ấm áp của anh luôn sẵn sàng đợi em. Chúc em yêu ngày 20/10 thật ngọt ngào, rạng rỡ và luôn hạnh phúc trọn vẹn bên anh nhé!`;

    case "Mẹ":
      return `Kính gửi ${greeting} kính yêu của con! Càng lớn lên, con càng nhận ra món quà lớn nhất không phải những điều xa hoa ngoài kia, mà là mỗi lần về nhà vẫn thấy nụ cười hiền của mẹ. Cảm ơn mẹ vì cả một đời tảo tần, gom hết ngọt ngào dành cho con. Ngày 20/10, con chỉ cầu mong mẹ luôn mạnh khỏe, thanh thản trong tâm hồn, bớt đi những âu lo và luôn an vui bên con cháu!`;

    case "Dì":
      return `Kính gửi ${greeting} thương quý! Trong ký ức của con, Dì luôn là người phụ nữ gần gũi, ấm áp và chu đáo nhất. Nhớ những bữa cơm Dì nấu, những lời dặn dò vừa như mẹ hiền vừa như một người bạn lớn có thể sẻ chia mọi vui buồn. Ngày 20/10, con chúc Dì luôn tươi trẻ, nụ cười rạng rỡ trên môi, gia đình luôn đầm ấm và mỗi ngày đều gom góp thêm thật nhiều niềm vui!`;

    case "Em":
      return `Gửi ${greeting} bé nhỏ! Chúc em ngày 20/10 thật rực rỡ và ngập tràn niềm vui! Hãy luôn giữ nụ cười trong trẻo, tự tin khám phá thế giới và kiêu hãnh bước đi trên con đường em chọn. Đừng bao giờ hoài nghi giá trị của bản thân, vấp ngã thì đứng dậy bước tiếp vì phía sau em luôn có người thân đồng hành và ủng hộ em vô điều kiện!`;

    case "Bạn":
      return `Chúc ${greeting} một ngày 20/10 ngập tràn hoa tươi và những điều ngọt ngào nhất! Cảm ơn cậu vì đã luôn là người bạn tri kỷ đáng quý, cùng tớ đi qua những năm tháng thanh xuân đầy ắp tiếng cười. Chúc cậu tuổi trẻ này sống kiêu hãnh, ăn ngon ngủ kỹ, kiếm thật nhiều tiền, tự do làm điều mình yêu và luôn là phiên bản hạnh phúc nhất nhé!`;

    case "Chị":
      return `Gửi ${greeting} yêu quý! Cảm ơn chị vì đã luôn bao dung, chở che và nhường nhịn em từ những ngày còn thơ bé. Chị đã vất vả nhiều rồi, ngày 20/10 này hãy gác lại mọi lo toan để chiều chuộng bản thân nhé. Chúc chị luôn xinh đẹp, an yên, công việc thuận lợi và luôn gặp được những điều xứng đáng nhất với tấm lòng của chị!`;

    case "Bà":
      return `Kính chúc ${greeting} ngày 20/10 thật nhiều niềm vui, sống lâu trăm tuổi, bình an khỏe mạnh bên con cháu! Nụ cười từ bi và sự che chở của bà là phúc lành lớn nhất cho cả gia đình.`;

    case "Cô":
    case "Bác":
      return `Kính chúc ${greeting} một ngày 20/10 dồi dào sức khỏe, vạn sự như ý, gia đình luôn hòa thuận ấm êm và mỗi khoảnh khắc đều ngập tràn niềm vui, tiếng cười!`;

    case "Đồng nghiệp":
      return `Chúc ${greeting} ngày 20/10 tràn đầy năng lượng tích cực, luôn duyên dáng, bản lĩnh và gặt hái thật nhiều thành công mới trong công việc cũng như cuộc sống! Cảm ơn bạn vì sự đồng hành tuyệt vời mỗi ngày.`;

    default:
      return `Chúc ${greeting} một ngày 20/10 trọn vẹn yêu thương, ngập tràn tiếng cười và luôn được nâng niu, hạnh phúc mỗi ngày!`;
  }
}
