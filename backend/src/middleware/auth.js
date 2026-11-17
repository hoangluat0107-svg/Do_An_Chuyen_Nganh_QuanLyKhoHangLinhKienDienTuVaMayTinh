// Middleware = "người gác cổng": chạy TRƯỚC các API cần bảo vệ
import jwt from "jsonwebtoken";

// 1) Kiểm tra người dùng đã đăng nhập chưa (có token hợp lệ không)
export function xacThuc(req, res, next) {
  // Giao diện gửi token trong header: Authorization: Bearer <token>
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Bạn chưa đăng nhập" });
  }
  try {
    // Giải mã token -> lấy lại thông tin người dùng đã gói vào lúc đăng nhập
    req.nguoiDung = jwt.verify(token, process.env.JWT_SECRET);
    next(); // cho đi tiếp vào API
  } catch {
    return res.status(401).json({ message: "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại" });
  }
}

// 2) Kiểm tra vai trò có được phép dùng API này không
// Ví dụ: phanQuyen("Admin", "Thủ kho") -> chỉ Admin và Thủ kho được đi qua
export function phanQuyen(...cacVaiTro) {
  return (req, res, next) => {
    if (!cacVaiTro.includes(req.nguoiDung.vai_tro)) {
      return res.status(403).json({ message: "Bạn không có quyền sử dụng chức năng này" });
    }
    next();
  };
}