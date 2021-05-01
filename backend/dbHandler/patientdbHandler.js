import { poolConnection } from "./dbConnection";

/**username and login for patient*/

const patientlogin = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO cms.patient_login SET ?",
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

/** register patient */
const registerPatient = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("INSERT INTO cms.patient SET ?", data, (err, rows) => {
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

/**Delete patient */
const delPatient = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM cms.patient WHERE HealthCard = ?",
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

/**update patient */

const updPatient = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "UPDATE cms.patient SET address = ? WHERE HealthCard =?",
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

/** get all the patient records */
const getPatientRecord = async () => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM cms.patient", (err, rows) => {
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

/** get patient by ID  */
const getPatientById = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT address FROM cms.patient WHERE HealthCard =?",
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

/** get all the patient login info */
const getPatientlogin = async () => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM cms.patient_login", (err, rows) => {
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

export {
  patientlogin,
  registerPatient,
  delPatient,
  updPatient,
  getPatientRecord,
  getPatientlogin,
  getPatientById,
};
