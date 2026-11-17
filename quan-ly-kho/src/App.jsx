import { useState } from "react";
import TieuDe from "./components/TieuDe.jsx";
import ThanhMenu from "./components/ThanhMenu.jsx";
import DangNhap from "./pages/DangNhap.jsx";
import TongQuan from "./pages/TongQuan.jsx";
import SanPham from "./pages/SanPham.jsx";
import NhaCungCap from "./pages/NhaCungCap.jsx";
import KhoViTri from "./pages/KhoViTri.jsx";
import NhapXuat from "./pages/NhapXuat.jsx";
import TonKho from "./pages/TonKho.jsx";
import BanHang from "./pages/BanHang.jsx";
import TaiKhoan from "./pages/TaiKhoan.jsx";

// App là "cái khung" của cả trang web.
// Nó nhớ xem đang ở trang nào (biến trang) và hiển thị đúng trang đó.
function App() {
  // useState: để React nhớ một giá trị. Khi giá trị đổi, giao diện tự vẽ lại.
  const [trang, setTrang] = useState("dangnhap"); // mở web lên là thấy trang đăng nhập

  // Nếu đang ở trang đăng nhập thì chỉ hiện form đăng nhập (không có menu)
  if (trang === "dangnhap") {
    return (
      <>
        <TieuDe onDangNhap={() => setTrang("dangnhap")} />
        <DangNhap onDangNhap={() => setTrang("tongquan")} />
      </>
    );
  }

  return (
    <>
      <TieuDe onDangNhap={() => setTrang("dangnhap")} />
      <ThanhMenu trang={trang} chonTrang={setTrang} />

      <main className="noi-dung">
        {/* Trang nào đang chọn thì hiện trang đó */}
        {trang === "tongquan" && <TongQuan chonTrang={setTrang} />}
        {trang === "sanpham" && <SanPham />}
        {trang === "nhacungcap" && <NhaCungCap />}
        {trang === "kho" && <KhoViTri />}
        {trang === "nhapxuat" && <NhapXuat />}
        {trang === "tonkho" && <TonKho />}
        {trang === "banhang" && <BanHang />}
        {trang === "taikhoan" && <TaiKhoan />}
      </main>
    </>
  );
}

export default App;
