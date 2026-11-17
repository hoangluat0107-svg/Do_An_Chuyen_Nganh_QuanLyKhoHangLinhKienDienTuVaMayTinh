import { useState } from "react";
import { taiKhoan, phanQuyen } from "../data.js";
import ONhapTim from "../components/ONhapTim.jsx";
import BangTab from "../components/BangTab.jsx";

// Trang 8: Tài khoản và phân quyền (tab 1: danh sách, tab 2: bảng phân quyền)
function TaiKhoan() {
  const [tab, setTab] = useState(0);

  // Hiển thị dấu ✔ hoặc ✘ cho bảng phân quyền
  const dau = (duocPhep) => (duocPhep ? <span className="co">✔</span> : <span className="khong">✘</span>);

  return (
    <div>
      <h2 className="tieu-de-trang">Quản lý tài khoản và phân quyền</h2>

      <BangTab
        danhSach={["Danh sách tài khoản", "Vai trò và phân quyền"]}
        dangChon={tab}
        chon={setTab}
      />

      {tab === 0 && (
        <div className="dong-cong-cu">
          <ONhapTim goiY="Tìm tên đăng nhập" />
          <button className="nut nut-xanh">+ Thêm tài khoản</button>
        </div>
      )}

      <div className="khung">
        {tab === 0 ? (
          <table className="bang">
            <thead>
              <tr><th>Tên đăng nhập</th><th>Vai trò</th><th>Quyền chính</th><th>Thao tác</th></tr>
            </thead>
            <tbody>
              {taiKhoan.length ? taiKhoan.map((t) => (
                <tr key={t.ten}>
                  <td>{t.ten}</td><td>{t.vaiTro}</td><td>{t.quyen}</td><td>Sửa / Xóa</td>
                </tr>
              )) : <tr><td colSpan="4" className="trong-du-lieu">Chưa có dữ liệu tài khoản</td></tr>}
            </tbody>
          </table>
        ) : (
          <table className="bang">
            <thead>
              <tr>
                <th>Chức năng</th><th>Thủ kho</th><th>Kỹ thuật</th><th>Bán hàng</th><th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {phanQuyen.length ? phanQuyen.map((q) => (
                <tr key={q.chucNang}>
                  <td>{q.chucNang}</td>
                  <td>{dau(q.thuKho)}</td><td>{dau(q.kyThuat)}</td>
                  <td>{dau(q.banHang)}</td><td>{dau(q.admin)}</td>
                </tr>
              )) : <tr><td colSpan="5" className="trong-du-lieu">Chưa có dữ liệu phân quyền</td></tr>}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TaiKhoan;
