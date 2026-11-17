import { phieuNhapXuat } from "../data.js";
import ONhapTim from "../components/ONhapTim.jsx";

// Trang 5: Nhập kho / Xuất kho
function NhapXuat() {
  return (
    <div>
      <h2 className="tieu-de-trang">Quản lý nhập kho và xuất kho</h2>

      <div className="dong-cong-cu can-trai">
        <ONhapTim goiY="Ngày tháng" rong={185} />
        <ONhapTim goiY="Nhà cung cấp / Mục đích" rong={300} />
        <ONhapTim goiY="Mã phiếu" rong={240} />
        <button className="nut nut-luc">Lọc</button>
      </div>

      <div className="khung khung-co-nut-duoi">
        <table className="bang">
          <thead>
            <tr>
              <th>Mã phiếu</th><th>Thời gian</th><th>Loại phiếu</th>
              <th>Nhà cung cấp / Mục đích</th><th>Chi tiết hàng hóa</th>
              <th>Người tạo</th><th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {phieuNhapXuat.length ? phieuNhapXuat.map((p) => (
              <tr key={p.ma}>
                <td>{p.ma}</td><td>{p.ngay}</td><td>{p.loai}</td>
                <td>{p.doiTuong}</td>
                <td><a className="lien-ket">Xem chi tiết</a></td>
                <td>{p.nguoiTao}</td>
                <td>Sửa / Xóa</td>
              </tr>
            )) : <tr><td colSpan="7" className="trong-du-lieu">Chưa có phiếu nhập / xuất</td></tr>}
          </tbody>
        </table>

        <div className="nut-duoi">
          <button className="nut nut-xanh">+ Tạo phiếu nhập</button>
        </div>
      </div>
    </div>
  );
}

export default NhapXuat;
