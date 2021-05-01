import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "cms",
  port: "3306",
  multipleStatements: true,
});

const poolConnection = async (actionAsync) => {
  const connection = await new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
  try {
    return await actionAsync(connection);
  } finally {
    connection.release();
  }
};

export { poolConnection };
