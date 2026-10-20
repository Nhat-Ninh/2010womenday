# 🌸 Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10

> **Thiết kế & gửi tặng bởi Hàn Nhật Ninh ❤️**  
> Một website một-trang cảm xúc, tinh tế, vừa xem vừa chơi để tôn vinh phái đẹp: người bà, người mẹ, cô, dì, bác, chị em, bạn bè và đồng nghiệp nữ.

---

## 🌟 Trải Nghiệm & Tính Năng Nổi Bật

1. **Màn Mở Đầu (Hero Envelope)**:
   - Phong bì thư phát sáng êm dịu với hướng dẫn "Chạm để mở".
   - Hiệu ứng mở nắp 3D (`rotateX: 180deg`), ánh sáng bung tỏa kèm pháo hoa cánh hoa bay lên bằng vật lý lò xo (spring physics).
   - Bức thư trượt lên hé lộ thông điệp tri ân đầu tiên.

2. **Cá Nhân Hóa Lời Chúc (Personalization Engine)**:
   - Chọn xưng hô thân mật (Mẹ, Bà, Cô, Dì, Bác, Chị, Em, Bạn, Đồng nghiệp) + Nhập tên người nhận.
   - Hiệu ứng hiển thị từng từ (stagger text reveal) sống động.
   - Tự động lưu và đồng bộ URL query: `?to=Tên&as=Xưng_hô` để người gửi sao chép đường link gửi riêng cho từng người.

3. **Vườn Hoa Tương Tác (Interactive Flower Garden)**:
   - Mỗi lần chạm/click vào nền là một đóa hoa mới nở rộ (Hoa Hồng, Hoa Sen, Tulip, Cúc Họa Mi, Mẫu Đơn) với hiệu ứng scale + rotate + spring.
   - Từng bông hoa có thể kéo thả (`drag`) tự do khắp khu vườn, có hiệu ứng gesture hover/tap.
   - Nút "Nở rộ cả vườn" và "Làm mới vườn".

4. **Lời Chúc Sâu Sắc Theo Nhóm (Wishes Carousel)**:
   - Carousel dạng thẻ xếp chồng vuốt được (swipe / drag x).
   - 8 bộ lời chúc tiếng Việt sâu sắc, chân thành, văn phong trang nhã dành cho: Mẹ yêu, Bà kính yêu, Cô/Dì/Bác, Chị gái, Em gái, Nữ đồng nghiệp, Bạn bè tri kỷ và Toàn thể phụ nữ Việt Nam.

5. **Cuộn Có Hiệu Ứng (Scroll Parallax & SVG Path Length)**:
   - Dây hoa tự vẽ uốn lượn theo tiến độ cuộn trang (`useScroll`, `useTransform`, `pathLength`).
   - Cánh hoa bay lững lờ theo hiệu ứng parallax khi cuộn chuột.
   - Khối câu chuyện về 3 phẩm chất cao đẹp của phụ nữ Việt Nam.

6. **Tấm Thiệp Chia Sẻ (Digital Greeting Card)**:
   - Thiệp mừng cao cấp hiển thị tên người nhận và chữ ký tác giả Hàn Nhật Ninh.
   - Nút "Sao chép liên kết" (giữ nguyên query param cá nhân hóa).
   - Nút "Chia sẻ" (tích hợp Web Share API cho mobile, fallback copy link trên desktop).
   - Nút "Tải ảnh thiệp (PNG)" tạo ảnh chất lượng cao 1200x800 từ Canvas hoàn toàn offline, 100% ổn định.

7. **Đại Kết Cục (Grand Finale) & Bản Quyền**:
   - Màn mưa pháo hoa cánh hoa rơi nhẹ nhàng khi cuộn đến cuối trang.
   - Lời cảm ơn sâu sắc.
   - Dòng bản quyền bắt buộc: **"Thiết kế & gửi tặng bởi Hàn Nhật Ninh ❤️"**.

8. **Âm Thanh Nền (Ambient Audio Synth)**:
   - Tích hợp bộ tạo âm giai điệu du dương bằng Web Audio API thuần (không phụ thuộc file âm thanh ngoài).
   - Nút bật/tắt ở góc màn hình, **mặc định tắt tiếng** để tôn trọng người dùng.

---

## 🛠️ Công Nghệ Sử Dụng

- **Next.js 16** (App Router) + **React 19** + **TypeScript**.
- **Tailwind CSS v4** với thiết kế Mobile-First, gradient pastel, glassmorphism, và hỗ trợ Dark Mode.
- Thư viện chuyển động **`motion`** (chỉ import từ `motion/react`, tuyệt đối không dùng `framer-motion`).
- Sử dụng `LazyMotion` với `domMax` và bọc toàn bộ bằng `<MotionConfig reducedMotion="user">` để tôn trọng thiết lập giảm chuyển động của người dùng.
- **100% Vector SVG Thuần Khiết**: Toàn bộ hoa sen, hoa hồng, tulip, cúc họa mi, mẫu đơn, cánh hoa đào, phong bì thư vẽ bằng SVG, không dùng hình ảnh ngoài.
- **Typography Google Fonts** (`next/font/google`): `Playfair Display` (serif tiêu đề) + `Be Vietnam Pro` (sans-serif nội dung) hỗ trợ tiếng Việt đầy đủ dấu.

---

## 🚀 Hướng Dẫn Chạy Tại Máy (Local Development)

### Yêu Cầu Môi Trường
- **Node.js**: Phiên bản `>= 20.9.0` (khuyên dùng Node 22.x).

### Các Bước Thực Hiện
```bash
# 1. Di chuyển vào thư mục dự án
cd 2010womenday

# 2. Cài đặt các gói phụ thuộc (nếu chưa cài)
npm install

# 3. Khởi chạy máy chủ phát triển
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:3000` (hoặc thử nghiệm cá nhân hóa: `http://localhost:3000?to=Lan&as=Chị`).

### Kiểm Tra Mã Nguồn & Đóng Gói
```bash
# Kiểm tra định dạng mã nguồn (0 errors, 0 warnings)
npm run lint

# Tạo bản dựng production
npm run build
```

---

## 💌 Danh Sách Đường Dẫn Gửi Tặng Từng Người (Không Cần Nhập Liệu)

Người nhận chỉ cần nhấp vào link là được trải nghiệm toàn bộ website được nắn nót riêng cho mình:

| Đối tượng | Ý nghĩa lời chúc | Ví dụ đường link gửi tặng |
| :--- | :--- | :--- |
| **Em Yêu / Người Yêu** | Lời tỏ tình dịu dàng, che chở, chân thành sâu sắc | `http://localhost:3000/?to=Hà&as=người-yêu` |
| **Mẹ Kính Yêu** | Tri ân đức hy sinh, đôi bàn tay tảo tần, lắng đọng lòng biết ơn | `http://localhost:3000/?to=Mẹ&as=mẹ` |
| **Dì Thân Thương** | Sự ân cần, gần gũi, bao dung như người mẹ thứ hai | `http://localhost:3000/?to=Dung&as=dì` |
| **Các Em (Em gái / Đàn em)** | Bông hoa tự do, kiêu hãnh, tiếp thêm dũng khí theo đuổi ước mơ | `http://localhost:3000/?to=Mai+Anh&as=các-em` |
| **Bạn Bè / Bạn Thân** | Đồng hành qua năm tháng thanh xuân, tự do, kiêu hãnh | `http://localhost:3000/?to=Linh&as=bạn` |
| **Chị Gái** | Người bạn đồng hành bao dung, che chở từ thuở ấu thơ | `http://localhost:3000/?to=Lan&as=chị` |
| **Bà Kính Yêu** | Miền ký ức êm đềm, nụ cười từ bi, cầu chúc an khang trường thọ | `http://localhost:3000/?to=Bà&as=bà` |
| **Cô & Bác** | Tình thân gia đình nồng hậu, ấm áp | `http://localhost:3000/?to=Mai&as=cô` |
| **Nữ Đồng Nghiệp** | Bản lĩnh, thông tuệ, nhiệt huyết truyền cảm hứng | `http://localhost:3000/?to=Hương&as=đồng-nghiệp` |

---

Dự án được tối ưu hóa sẵn cho nền tảng Vercel:

1. **Đẩy mã nguồn lên GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete 20/10 celebration website by Han Nhat Ninh"
   git push origin main
   ```

2. **Kết nối và Triển khai trên Vercel**:
   - Truy cập [Vercel Dashboard](https://vercel.com/new).
   - Chọn kho lưu trữ `2010womenday` (hoặc `Nhat-Ninh/2010womenday`).
   - Vercel sẽ tự động phát hiện Framework là **Next.js**.
   - Thư mục gốc (Root Directory): `./` (mặc định).
   - Nhấn **Deploy**.

Sau khoảng 1 phút, website sẽ sẵn sàng hoạt động với chứng chỉ SSL miễn phí và tốc độ tải trang toàn cầu!

---

## 📜 Bản Quyền & Tác Giả

- **Tác giả**: Hàn Nhật Ninh
- **Dành tặng**: Toàn thể phụ nữ Việt Nam nhân ngày 20/10.
- **Copyright**: © 2026 Hàn Nhật Ninh. All rights reserved.
