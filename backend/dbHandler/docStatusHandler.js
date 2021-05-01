import { poolConnection } from "./dbConnection";

/** add doctor status */
const addStatus = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO cms.doctors_log SET ?",
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

/**update docStatus */

const updPatient = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "UPDATE cms.doctors_log SET doctors_id = ?, status = ? WHERE id =?",
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

/** To show all the doctor status */
const getDocStatus = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT doctors_id,name,status,login_time FROM cms.doctor JOIN cms.doctors_log ON doctors_id = emp_id",
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

export { getDocStatus, addStatus, updPatient };
