// Danh sách các mục menu: "id" để App biết trang nào, "ten" là chữ hiển thị
const cacMuc = [
  { id: "tongquan", ten: "Tổng quan" },
  { id: "sanpham", ten: "Sản phẩm" },
  { id: "nhacungcap", ten: "Nhà cung cấp" },
  { id: "kho", ten: "Kho & vị trí" },
  { id: "nhapxuat", ten: "Nhập / Xuất" },
  { id: "tonkho", ten: "Tồn kho" },
  { id: "banhang", ten: "Bán hàng" },
  { id: "taikhoan", ten: "Tài khoản" },
];

// Thanh menu màu xanh. Bấm vào mục nào thì gọi chonTrang(id) để đổi trang.
function ThanhMenu({ trang, chonTrang }) {
  return (
    <nav className="menu">
      {cacMuc.map((muc) => (
        <button
          key={muc.id}
          // Mục đang chọn sẽ có thêm class "dang-chon" (sáng hơn)
          className={trang === muc.id ? "muc-menu dang-chon" : "muc-menu"}
          onClick={() => chonTrang(muc.id)}
        >
          {muc.ten}
        </button>
      ))}
    </nav>
  );
}

export default ThanhMenu;
