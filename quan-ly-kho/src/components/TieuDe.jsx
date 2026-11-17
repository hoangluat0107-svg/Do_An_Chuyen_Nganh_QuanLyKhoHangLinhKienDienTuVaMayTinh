// Thanh trên cùng: logo + tên hệ thống + nút Đăng nhập
function TieuDe({ onDangNhap }) {
  return (
    <header className="tieu-de">
      <div className="logo-nhom">
        <div className="logo">▦</div>
        <h1>HỆ THỐNG QUẢN LÝ KHO HÀNG LINH KIỆN ĐIỆN TỬ VÀ MÁY TÍNH</h1>
      </div>
      <button className="nut nut-vien" onClick={onDangNhap}>
        Đăng nhập
      </button>
    </header>
  );
}

export default TieuDe;
