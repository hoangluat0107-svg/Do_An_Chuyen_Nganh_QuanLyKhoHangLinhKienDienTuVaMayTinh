// Ô nhập tìm kiếm dùng để hoàn thiện giao diện.
// Hiện tại người dùng có thể nhập chữ nhưng chưa có xử lý tìm kiếm/lọc.
function ONhapTim({ goiY, rong = 370 }) {
  return (
    <div className="o-tim" style={{ width: rong }}>
      <span className="kinh-lup">🔍</span>
      <input placeholder={goiY} />
    </div>
  );
}

export default ONhapTim;
