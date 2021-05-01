import { poolConnection } from "./dbConnection";

const addUsers = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO cms.contact_us SET ?",
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

const getUsers = async () => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM cms.contact_us", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    return rows;
  });
  return result;
};

const updUsers = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "UPDATE cms.contact_us SET name = ?,phoneNumber = ?, email = ? WHERE id = ?",
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

export { addUsers, getUsers, updUsers };
