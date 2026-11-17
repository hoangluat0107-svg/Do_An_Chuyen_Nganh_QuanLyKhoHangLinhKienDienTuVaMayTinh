import { useState } from "react";
import { nhaCungCap, lichSuNhapHang } from "../data.js";
import ONhapTim from "../components/ONhapTim.jsx";
import BangTab from "../components/BangTab.jsx";

// Trang 3: Nhà cung cấp (có 2 tab)
function NhaCungCap() {
  const [tab, setTab] = useState(0); // 0 = Danh sách, 1 = Lịch sử nhập hàng

  return (
    <div>
      <h2 className="tieu-de-trang">Quản lý nhà cung cấp</h2>

      <BangTab
        danhSach={["Danh sách nhà cung cấp", "Lịch sử nhập hàng"]}
        dangChon={tab}
        chon={setTab}
      />

      <div className="dong-cong-cu">
        <ONhapTim goiY="Tìm tên hoặc mã nhà cung cấp" />
        {tab === 0 && <button className="nut nut-xanh">+ Thêm nhà cung cấp</button>}
      </div>

      <div className="khung">
        {tab === 0 ? (
          <table className="bang">
            <thead>
              <tr>
                <th>Mã NCC</th><th>Tên nhà cung cấp</th><th>Người liên hệ</th>
                <th>Số điện thoại</th><th>Email</th><th>Địa chỉ</th><th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {nhaCungCap.length ? nhaCungCap.map((n) => (
                <tr key={n.ma}>
                  <td>{n.ma}</td><td>{n.ten}</td><td>{n.nguoiLienHe}</td>
                  <td>{n.sdt}</td><td>{n.email}</td><td>{n.diaChi}</td>
                  <td>Sửa / Xóa</td>
                </tr>
              )) : <tr><td colSpan="7" className="trong-du-lieu">Chưa có dữ liệu nhà cung cấp</td></tr>}
            </tbody>
          </table>
        ) : (
          <table className="bang">
            <thead>
              <tr>
                <th>Mã phiếu</th><th>Ngày nhập</th><th>Nhà cung cấp</th>
                <th>Sản phẩm</th><th>Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {lichSuNhapHang.length ? lichSuNhapHang.map((p) => (
                <tr key={p.maPhieu}>
                  <td>{p.maPhieu}</td><td>{p.ngay}</td><td>{p.ncc}</td>
                  <td>{p.sanPham}</td><td>{p.soLuong}</td>
                </tr>
              )) : <tr><td colSpan="5" className="trong-du-lieu">Chưa có lịch sử nhập hàng</td></tr>}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default NhaCungCap;
