import { useState } from "react";
import { tonKho, canhBao } from "../data.js";
import ONhapTim from "../components/ONhapTim.jsx";
import BangTab from "../components/BangTab.jsx";

// Trang theo dõi tồn kho - chỉ dựng giao diện, chưa có tìm kiếm/lọc dữ liệu.
function TonKho() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <h2 className="tieu-de-trang">Theo dõi tồn kho</h2>

      <BangTab
        danhSach={["Tất cả sản phẩm", "Cảnh báo tồn kho"]}
        dangChon={tab}
        chon={setTab}
      />

      <div className="dong-cong-cu can-trai">
        <ONhapTim goiY="Tìm theo tên hoặc mã sản phẩm" rong={360} />
        <ONhapTim goiY="Kho / vị trí" rong={230} />
        <button className="nut nut-luc">Lọc</button>
      </div>

      <div className="khung">
        {tab === 0 ? (
          <table className="bang">
            <thead>
              <tr>
                <th>Mã SP</th><th>Tên sản phẩm</th><th>Vị trí</th><th>Tồn đầu</th>
                <th>Nhập</th><th>Xuất</th><th>Đã bán</th><th>Tồn hiện tại</th>
              </tr>
            </thead>
            <tbody>
              {tonKho.length ? tonKho.map((t) => (
                <tr key={t.ma}>
                  <td>{t.ma}</td><td>{t.ten}</td><td>{t.viTri}</td><td>{t.tonDau}</td>
                  <td>{t.nhap}</td><td>{t.xuat}</td><td>{t.daBan}</td><td>{t.tonHienTai}</td>
                </tr>
              )) : <tr><td colSpan="8" className="trong-du-lieu">Chưa có dữ liệu tồn kho</td></tr>}
            </tbody>
          </table>
        ) : (
          <table className="bang">
            <thead>
              <tr><th>Mã SP</th><th>Tên sản phẩm</th><th>Tồn hiện tại</th></tr>
            </thead>
            <tbody>
              {canhBao.length ? canhBao.map((c) => (
                <tr key={c.ma}>
                  <td>{c.ma}</td><td>{c.ten}</td>
                  <td><span className="vien-do">{c.con} còn</span></td>
                </tr>
              )) : <tr><td colSpan="3" className="trong-du-lieu">Chưa có dữ liệu cảnh báo</td></tr>}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TonKho;
