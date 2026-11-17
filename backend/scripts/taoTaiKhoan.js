// Script tạo 4 tài khoản mẫu (mỗi vai trò 1 tài khoản).
// Chạy 1 lần bằng lệnh: node scripts/taoTaiKhoan.js
import "dotenv/config";
import bcrypt from "bcryptjs";
import db from "../src/db.js";

// ma_vai_tro: 1 = Admin, 2 = Thủ kho, 3 = Kỹ thuật, 4 = Bán hàng (đã tạo ở Bước 2)
const danhSach = [
  { ten_dang_nhap: "admin",     ho_ten: "Quản trị viên",      ma_vai_tro: 1 },
  { ten_dang_nhap: "thukho01",  ho_ten: "Nguyễn Văn Kho",     ma_vai_tro: 2 },
  { ten_dang_nhap: "kythuat01", ho_ten: "Trần Văn Kỹ Thuật",  ma_vai_tro: 3 },
  { ten_dang_nhap: "banhang01", ho_ten: "Lê Thị Bán Hàng",    ma_vai_tro: 4 },
];
const MAT_KHAU_CHUNG = "123456";

// Mã hóa mật khẩu: "123456" -> chuỗi dài khó đoán, không giải ngược lại được
const matKhauMaHoa = await bcrypt.hash(MAT_KHAU_CHUNG, 10);

for (const tk of danhSach) {
  // INSERT IGNORE: nếu tên đăng nhập đã có thì bỏ qua, không báo lỗi
  await db.query(
    "INSERT IGNORE INTO tai_khoan (ten_dang_nhap, mat_khau, ho_ten, ma_vai_tro) VALUES (?, ?, ?, ?)",
    [tk.ten_dang_nhap, matKhauMaHoa, tk.ho_ten, tk.ma_vai_tro]
  );
  console.log("Đã tạo tài khoản:", tk.ten_dang_nhap);
}
console.log("Xong! Mật khẩu của cả 4 tài khoản là:", MAT_KHAU_CHUNG);
process.exit();