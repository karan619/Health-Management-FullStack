import { poolConnection } from "./dbConnection";

/** get all the patient records */
const getPatientChart = async (data) => {
  console.log("this is data", data);
  const result = await poolConnection(async (connection) => {
    /**details of patient including chart */
    const patient_row = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT HealthCard,name,address,gender,DOB,Email,assigned_doctor,doctor_name,appointment_date_time,type_of_appointment,blood_type,height,weight,allergies,blood_pressure FROM cms.patient JOIN cms.appointment ON  patient_id = HealthCard JOIN cms.patient_chart ON patient_healthcard = HealthCard WHERE HealthCard = ? ",
        data,
        (err, patient_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(patient_row);
          }
        }
      );
    });

    /**patients doctors */
    const doctor_notes_row = await new Promise((resolve, reject) => {
      connection.query(
        " SELECT patient_HCN,doctor_empid,doctor_name, doctors_notes, last_updated FROM cms.doctor_notes WHERE patient_HCN = ? ORDER BY (last_updated = 0) DESC,last_updated DESC  ",
        data,
        (err, doctor_notes_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(doctor_notes_row);
          }
        }
      );
    });

    /**patients medical history */
    const medicalHistory_row = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT medical_condition,date_of_diagnosis,ongoing_treatment,history_notes FROM cms.patient_medicalhistory WHERE patient_id_5 = ?  ",
        data,
        (err, medicalHistory_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(medicalHistory_row);
          }
        }
      );
    });

    /**patients medication details */
    const medication_row = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT medication_name,medi_date_started,ongoing_medication,medi_date_stopped,medication_notes FROM cms.patient_medication WHERE patient_id_2 = ?  ",
        data,
        (err, medication_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(medication_row);
          }
        }
      );
    });

    /**patients imaging test details */
    const imaginig_row = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT imaging_name,date_started,images FROM cms.patient_imaging WHERE patient_id_3 = ?  ",
        data,
        (err, imaginig_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(imaginig_row);
          }
        }
      );
    });

    /**patients immunization details */
    const immunization_row = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT immunization_name,recieved,immunization_notes,last_updated FROM cms.patient_immunization WHERE patient_id_4 = ?  ",
        data,
        (err, immunization_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(immunization_row);
          }
        }
      );
    });

    /**patients lab result */
    const labResult_row = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT test_name,test_date,test_result,test_notes FROM cms.patient_lab_result WHERE patient_id_1 = ?  ",
        data,
        (err, immunization_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(immunization_row);
          }
        }
      );
    });

    /**patients lab result */
    const history_row = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT  doctor_name,patient_name,note,created_time FROM cms.revision_note WHERE HealthCard = ? ORDER BY (created_time = 0) DESC,created_time DESC   ",
        data,
        (err, history_row) => {
          if (err) {
            reject(err);
          } else {
            resolve(history_row);
          }
        }
      );
    });

    return {
      patient_row,
      doctor_notes_row,
      medicalHistory_row,
      medication_row,
      imaginig_row,
      immunization_row,
      labResult_row,
      history_row,
    };
  });
  return result;
};

/** add doctor note */
const addDocNote = async (data) => {
  const result = await poolConnection(async (connection) => {
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO cms.doctor_notes SET ?",
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

export { getPatientChart, addDocNote };
