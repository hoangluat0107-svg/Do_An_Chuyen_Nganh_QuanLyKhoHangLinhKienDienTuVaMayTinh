import { viTriKho } from "../data.js";
import ONhapTim from "../components/ONhapTim.jsx";

// Trang 4: Kho và vị trí lưu trữ
function KhoViTri() {
  return (
    <div>
      <h2 className="tieu-de-trang">Quản lý kho và vị trí lưu trữ</h2>

      <div className="dong-cong-cu can-trai">
        <ONhapTim goiY="Tên sản phẩm" rong={330} />
        <ONhapTim goiY="Kho" rong={210} />
        <ONhapTim goiY="Kệ" rong={210} />
        <button className="nut nut-luc">Lọc</button>
      </div>

      <div className="khung khung-co-nut-duoi">
        <table className="bang">
          <thead>
            <tr>
              <th>Mã kho</th><th>Tên kho</th><th>Kệ</th><th>Ngăn</th>
              <th>Tên sản phẩm</th><th>Số lượng</th><th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {viTriKho.length ? viTriKho.map((v, i) => (
              <tr key={i}>
                <td>{v.maKho}</td><td>{v.tenKho}</td><td>{v.ke}</td><td>{v.ngan}</td>
                <td>{v.sanPham}</td><td>{v.soLuong}</td><td>Xóa</td>
              </tr>
            )) : <tr><td colSpan="7" className="trong-du-lieu">Chưa có dữ liệu vị trí kho</td></tr>}
          </tbody>
        </table>

        <div className="nut-duoi">
          <button className="nut nut-vien">Sơ đồ vị trí</button>
          <button className="nut nut-xanh">Di chuyển hàng</button>
        </div>
      </div>
    </div>
  );
}

export default KhoViTri;
