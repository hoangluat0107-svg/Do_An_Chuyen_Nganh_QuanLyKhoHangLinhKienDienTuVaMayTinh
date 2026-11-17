// Trang 9: Đăng nhập
function DangNhap({ onDangNhap }) {
  return (
    <div className="nen-dang-nhap">
      <div className="the-dang-nhap">
        <div className="dau-the">
          <div className="chu-k">K</div>
        </div>

        <h2>ĐĂNG NHẬP HỆ THỐNG</h2>

        <div className="form-dang-nhap">
          <label>Tên đăng nhập</label>
          <input placeholder="Nhập tên đăng nhập" />

          <label>Mật khẩu</label>
          <input type="password" placeholder="Nhập mật khẩu" />

          <button className="nut nut-xanh nut-rong" onClick={onDangNhap}>
            Đăng nhập
          </button>
        </div>

        <p className="chan-the">HỆ THỐNG QUẢN LÝ KHO HÀNG LINH KIỆN ĐIỆN TỬ VÀ MÁY TÍNH</p>
      </div>
    </div>
  );
}

export default DangNhap;
