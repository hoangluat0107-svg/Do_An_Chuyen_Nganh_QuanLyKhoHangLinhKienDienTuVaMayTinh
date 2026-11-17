// Kết nối MySQL bằng thư viện mysql2
import mysql from "mysql2/promise";

// Pool = "hồ" kết nối: tạo sẵn vài kết nối để dùng lại, không phải mở/đóng mỗi lần truy vấn
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

export default db;