import { sanPhamBan } from "../data.js";
import ONhapTim from "../components/ONhapTim.jsx";

// Trang bán hàng - chỉ dựng bố cục giao diện, chưa xử lý tìm kiếm hay giỏ hàng.
function BanHang() {
  return (
    <div>
      <h2 className="tieu-de-trang">Bán hàng</h2>

      <div className="ban-hang">
        <div>
          <ONhapTim goiY="Tìm sản phẩm theo tên hoặc mã sản phẩm" rong="100%" />

          <div className="luoi-san-pham">
            {sanPhamBan.length > 0 ? sanPhamBan.map((sp) => (
              <div className="the-san-pham" key={sp.id}>
                <div className={"anh-sp nen-" + sp.mau}>{sp.icon}</div>
                <p className="ten-sp">{sp.ten}</p>
                <div className="gia-dong">
                  <b className="gia">{sp.gia.toLocaleString("vi-VN")}đ</b>
                  <button className="nut-tron" aria-label="Thêm sản phẩm">+</button>
                </div>
              </div>
            )) : (
              <div className="trong-danh-sach">
                Chưa có sản phẩm. Danh sách sản phẩm sẽ hiển thị tại đây.
              </div>
            )}
          </div>
        </div>

        <div className="khung gio-hang">
          <div className="dong-tieu-de">
            <h3>Giỏ hàng</h3>
            <span className="vien-luc">0 món</span>
          </div>

          <p className="trong-gio">Giỏ hàng đang trống</p>

          <div className="tong-ket">
            <div className="dong-tong"><span>Tạm tính</span><b>0đ</b></div>
            <div className="dong-tong lon"><span>Tổng tiền</span><b className="chu-xanh">0đ</b></div>
            <button className="nut nut-xanh nut-rong">Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BanHang;
