// https://mariadb.com/docs/server/connect/programming-languages/nodejs/promise/example/
const mariadb = require("mariadb");

export async function adam_var_mi(eposta: any, sifre: any) {
  try {
    const querySql =
      "SELECT * FROM giris WHERE email='" +
      eposta +
      "' and password='" +
      sifre +
      "'";

    const sonuc = await main(querySql);
    console.log("Data : " + sonuc);
    if (sonuc) return true;
    else return false;
  } catch (error) {
    console.log("Hata : " + error);
    return false;
  }
  return false;
}

// Main function
async function main(sorgu: any) {
  let conn;

  try {
    conn = await mariadb.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "sensor",
    });

    // Use Connection to get contacts data
    var rows = await sorgula(conn, sorgu);
    console.log("Sorgu Sonuc : " + sorgu);
    if (rows.length > 0) return true;
    else return false;
  } catch (err) {
    // Manage Errors
    console.log(err);
  } finally {
    // Close Connection
    if (conn) conn.close();
  }
}

function sorgula(conn: any, sorgu: any) {
  return conn.query(sorgu);
}
