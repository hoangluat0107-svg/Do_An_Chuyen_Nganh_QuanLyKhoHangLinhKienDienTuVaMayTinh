import { bieuDo, canhBao } from "../data.js";

// Trang 1: Tổng quan (4 thẻ số liệu + biểu đồ + cảnh báo + truy cập nhanh)
function TongQuan({ chonTrang }) {
  return (
    <div>
      <div className="dong-tieu-de">
        <h2 className="tieu-de-trang">Tổng quan</h2>
        <div className="o-thang">Tháng 11 / 2026 📅</div>
      </div>

      {/* 4 thẻ số liệu */}
      <div className="luoi-4">
        <div className="the-so">
          <div className="icon-vuong nen-xanh">▦</div>
          <div>
            <p className="nhan">TỔNG SẢN PHẨM</p>
            <p className="so chu-xanh">0</p>
          </div>
        </div>
        <div className="the-so">
          <div className="icon-vuong nen-luc">☰</div>
          <div>
            <p className="nhan">SỐ LƯỢNG TỒN KHO</p>
            <p className="so chu-luc">0</p>
          </div>
        </div>
        <div className="the-so">
          <div className="icon-vuong nen-tim">◎</div>
          <div>
            <p className="nhan">DOANH THU THÁNG</p>
            <p className="so chu-tim">0đ</p>
          </div>
        </div>
        <div className="the-so">
          <div className="icon-vuong nen-do">!</div>
          <div>
            <p className="nhan">SẢN PHẨM SẮP HẾT</p>
            <p className="so chu-do">0</p>
          </div>
        </div>
      </div>

      {/* Biểu đồ + bảng cảnh báo */}
      <div className="hai-cot">
        <div className="khung">
          <div className="dong-tieu-de">
            <h3>Tình hình nhập – xuất hàng</h3>
            <span className="chu-xam">2026</span>
          </div>

          {/* Biểu đồ cột vẽ bằng CSS: mỗi cột là 1 thẻ div, cao thấp theo % */}
          <div className="bieu-do">
            {bieuDo.length > 0 ? bieuDo.map((t) => (
              <div className="nhom-cot" key={t.thang}>
                <div className="cac-cot">
                  <div className="cot cot-nhap" style={{ height: t.nhap + "%" }}></div>
                  <div className="cot cot-xuat" style={{ height: t.xuat + "%" }}></div>
                </div>
                <span className="ten-thang">{t.thang}</span>
              </div>
            )) : <span className="trong-bieu-do">Chưa có dữ liệu thống kê</span>}
          </div>
          <div className="chu-thich">
            <span><i className="cham cot-nhap"></i> Nhập kho</span>
            <span><i className="cham cot-xuat"></i> Xuất kho</span>
          </div>
        </div>

        <div className="khung khung-canh-bao">
          <div className="dong-tieu-de dau-canh-bao">
            <h3>❗ Cảnh báo tồn kho</h3>
            <span className="vien-do">0 cần xem</span>
          </div>
          <table className="bang-nho">
            <thead>
              <tr><th>SẢN PHẨM</th><th>TỒN KHO</th></tr>
            </thead>
            <tbody>
              {canhBao.length > 0 ? canhBao.map((sp) => (
                <tr key={sp.ma}>
                  <td><span className={"cham-mau " + sp.mau}></span><small>{sp.ma}</small><br /><b>{sp.ten}</b></td>
                  <td><span className="vien-do">{sp.con} còn</span></td>
                </tr>
              )) : <tr><td colSpan="2" className="trong-du-lieu">Chưa có dữ liệu cảnh báo</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {/* Truy cập nhanh */}
      <h3 className="tieu-de-nho">Truy cập nhanh</h3>
      <div className="luoi-4">
        <button className="the-nhanh" onClick={() => chonTrang("sanpham")}>
          <span className="vong nen-xanh-nhat">▦</span> Sản phẩm <span className="mui-ten">›</span>
        </button>
        <button className="the-nhanh" onClick={() => chonTrang("nhapxuat")}>
          <span className="vong nen-luc-nhat">⇄</span> Nhập / Xuất <span className="mui-ten">›</span>
        </button>
        <button className="the-nhanh" onClick={() => chonTrang("tonkho")}>
          <span className="vong nen-tim-nhat">☰</span> Tồn kho <span className="mui-ten">›</span>
        </button>
        <button className="the-nhanh" onClick={() => chonTrang("banhang")}>
          <span className="vong nen-cam-nhat">🛒</span> Bán hàng <span className="mui-ten">›</span>
        </button>
      </div>
    </div>
  );
}

export default TongQuan;
