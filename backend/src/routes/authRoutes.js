// Các API về đăng nhập
import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";
import { xacThuc } from "../middleware/auth.js";

const router = Router();

// POST /api/auth/dang-nhap  -> đăng nhập, trả về token
router.post("/dang-nhap", async (req, res) => {
  const { ten_dang_nhap, mat_khau } = req.body;

  // 1. Kiểm tra để trống
  if (!ten_dang_nhap || !mat_khau) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin" });
  }

  // 2. Tìm tài khoản theo tên đăng nhập (kèm tên vai trò)
  const [rows] = await db.query(
    `SELECT tk.ma_tai_khoan, tk.ten_dang_nhap, tk.mat_khau, tk.ho_ten, vt.ten_vai_tro
     FROM tai_khoan tk JOIN vai_tro vt ON tk.ma_vai_tro = vt.ma_vai_tro
     WHERE tk.ten_dang_nhap = ?`,
    [ten_dang_nhap]
  );
  const tk = rows[0];

  // 3. So khớp mật khẩu người dùng nhập với mật khẩu đã mã hóa trong CSDL
  const dung = tk && (await bcrypt.compare(mat_khau, tk.mat_khau));
  if (!dung) {
    return res.status(401).json({ message: "Sai tên đăng nhập hoặc mật khẩu" });
  }

  // 4. Tạo token (giống "thẻ ra vào"), hết hạn sau 8 tiếng
  const nguoiDung = {
    ma_tai_khoan: tk.ma_tai_khoan,
    ten_dang_nhap: tk.ten_dang_nhap,
    ho_ten: tk.ho_ten,
    vai_tro: tk.ten_vai_tro,
  };
  const token = jwt.sign(nguoiDung, process.env.JWT_SECRET, { expiresIn: "8h" });

  res.json({ message: "Đăng nhập thành công", token, nguoiDung });
});

// GET /api/auth/toi  -> xem thông tin người đang đăng nhập (cần token)
router.get("/toi", xacThuc, (req, res) => {
  res.json(req.nguoiDung);
});

export default router;