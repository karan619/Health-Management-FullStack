import { poolConnection } from "./dbConnection";

/**Create Login for doctor */
const doclLogin = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO cms.doctor_login SET ?",
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

/**Register new Doctor */
const regDoc = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("INSERT INTO cms.doctor SET ?", data, (err, rows) => {
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

/**Delete Doctor from db */

const delDoc = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM cms.doctor WHERE emp_id = ?",
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

/**Update  Doctor info */
const updDoc = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "UPDATE cms.doctor SET name = ?, position = ? WHERE emp_id = ?",
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

/**To display all the doctor's record */
const getDocRecord = async () => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM cms.doctor", (err, rows) => {
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

/**To display all the doctor's record by id  */
const getDoctorById = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT name,position FROM cms.doctor WHERE emp_id =?",
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

/**Doctor signin */
const docSignIn = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM cms.doctor_login  WHERE emp_id = ? ",
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

export {
  doclLogin,
  regDoc,
  delDoc,
  updDoc,
  getDocRecord,
  docSignIn,
  getDoctorById,
};
