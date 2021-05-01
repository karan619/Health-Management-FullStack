import { poolConnection } from "./dbConnection";

/**patient SignIn */
const patSignIn = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM cms.patient_login  WHERE username = ? ",
        data,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
    return rows;
  });
  return result;
};

export { patSignIn };
