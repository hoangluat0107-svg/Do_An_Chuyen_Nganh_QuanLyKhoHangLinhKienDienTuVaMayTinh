// Hai nút chuyển qua lại giữa các tab (ví dụ: "Danh sách" / "Lịch sử")
// danhSach: ["Tab 1", "Tab 2"], dangChon: số thứ tự tab đang chọn (0, 1, ...)
function BangTab({ danhSach, dangChon, chon }) {
  return (
    <div className="tab-nhom">
      {danhSach.map((ten, i) => (
        <button
          key={ten}
          className={dangChon === i ? "tab dang-chon" : "tab"}
          onClick={() => chon(i)}
        >
          {ten}
        </button>
      ))}
    </div>
  );
}

export default BangTab;
