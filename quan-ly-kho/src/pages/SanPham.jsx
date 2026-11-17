import { sanPham } from "../data.js";
import ONhapTim from "../components/ONhapTim.jsx";

// Trang quản lý sản phẩm - hiện chỉ dựng giao diện, chưa xử lý tìm kiếm/thêm/sửa/xóa.
function SanPham() {
  return (
    <div>
      <h2 className="tieu-de-trang">Quản lý sản phẩm</h2>

      <div className="dong-cong-cu">
        <ONhapTim goiY="Tìm theo tên hoặc mã sản phẩm" />
        <button className="nut nut-xanh">+ Thêm sản phẩm</button>
      </div>

      <div className="khung">
        <table className="bang">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên sản phẩm</th>
              <th>Giá nhập</th>
              <th>Giá bán</th>
              <th>Tồn kho</th>
              <th>Thông số kỹ thuật</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {sanPham.length > 0 ? sanPham.map((sp) => (
              <tr key={sp.ma}>
                <td>{sp.ma}</td><td>{sp.ten}</td><td>{sp.giaNhap}</td>
                <td>{sp.giaBan}</td><td>{sp.ton}</td>
                <td><span className="lien-ket">Xem thông số</span></td>
                <td>Sửa / Xóa</td>
              </tr>
            )) : (
              <tr><td colSpan="7" className="trong-du-lieu">Chưa có dữ liệu sản phẩm</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SanPham;
