import { poolConnection } from "./dbConnection";

/** creating admin login */
const addAdmin = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("INSERT INTO cms.admin SET ?", data, (err, rows) => {
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

/** Admin signin */
const whereAdmin = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM cms.admin  WHERE username = ? ",
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

/**appoint doctor to an appointment */

const addDoctorAppoint = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "UPDATE cms.appointment SET  assigned_doctor = ?,appointment_status =? WHERE appointment_id = ?",
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

/** To show all the appointments */
const getPatientAppointment = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM cms.appointment", data, (err, rows) => {
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

export { addAdmin, whereAdmin, addDoctorAppoint, getPatientAppointment };
