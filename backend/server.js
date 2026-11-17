// File chạy chính của backend
import "dotenv/config";            // đọc các biến trong file .env
import express from "express";
import cors from "cors";
import db from "./src/db.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();

// Cho phép giao diện React (chạy ở cổng 5173) gọi API của backend
app.use(cors({ origin: "http://localhost:5173" }));
// Cho phép backend đọc dữ liệu JSON mà giao diện gửi lên
app.use(express.json());

// Gắn nhóm API đăng nhập vào đường dẫn /api/auth
app.use("/api/auth", authRoutes);

// API thử 1: kiểm tra backend có chạy không
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend đang chạy" });
});

// API thử 2: kiểm tra backend có kết nối được MySQL không
app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT COUNT(*) AS so_san_pham FROM san_pham");
    res.json({ message: "Kết nối MySQL thành công", so_san_pham: rows[0].so_san_pham });
  } catch (err) {
    res.status(500).json({ message: "Lỗi kết nối MySQL", loi: err.message });
  }
});

// Bắt mọi lỗi chưa xử lý (ví dụ mất kết nối MySQL) -> trả về JSON thay vì trang lỗi HTML
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Lỗi máy chủ", loi: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend đang chạy tại http://localhost:${PORT}`);
});