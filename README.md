### Source Code

The front end of this project is developed on reactjs, the backend is developed on Nodejs and for database we have used MySql.

# SetUp

Copy .env.example and rename to .env inside backend folder.

## Available Scripts

To start the backend and frontend, you can run:

### `npm start`

when running the backend file if you run into error then try install all these things

### `npm i esm`, `npm i dotenv`, `npm i cors`, `npm i jsonwebtoken`, `npm i bcryptjs`, `npm i mysql`

when running the react app if you run into error then run:

### `npm install`

############

### For Admin login USERNAME is admin and PASSWORD is password@123

### For Doctor login USERNAME is 101 and PASSWORD is password@123

### For patient login USERNAME is testpatient and PASSWORD is password@123

Most of our SQL statement is in the dbhandler folder under backend folder.

## mysql USERNAME is root and PASSWORD is password.

All the sql files are under dbHandler folder

Sql code in admindbHandler

### Line 3 creating admin username and password `INSERT INTO cms.admin SET ?`

### Line 20 For admin login `SELECT * FROM cms.admin WHERE username = ?`

#### Line 43 to assign doctor to the appointemt `UPDATE cms.appointment SET assigned_doctor = ?,appointment_status =? WHERE appointment_id = ?`

### Line 64 to show all the appointments `SELECT * FROM cms.appointment`

Sql code in appointmentdbHandler

### Line 3 create a new appointment `INSERT INTO cms.appointment SET ?`

### Line 24 Delete an appointment `DELETE FROM cms.appointment WHERE appointment_id = ?`

### Line 44 Update an appointment `UPDATE cms.appointment SET appointment_date_time = ?, type_of_appointment = ? WHERE appointment_id = ?`

Sql code in contactdbHandler

### Line 3 to add contact us form entry in data base `INSERT INTO cms.contact_us SET ?`

Sql code in doctordbHandler

### Line 4 to create doctor login `INSERT INTO cms.doctor_login SET ?`

### Line 25 to register doctor `INSERT INTO cms.doctor SET ?`

#### line 41 to delete doctor from data base `DELETE FROM cms.doctor WHERE emp_id = ?`

### line 63 to update doctor info `UPDATE cms.doctor SET name = ?, position = ? WHERE emp_id = ?`

### line 85 to display all doctors `SELECT * FROM cms.doctor`

### line 123 for doctor sign `SELECT * FROM cms.doctor_login WHERE emp_id = ?`

Sql code in patientChartHandler

### To show patient details by using HealthCard number

/\*_details of patient including chart _/

### line 10 `SELECT HealthCard,name,address,gender,DOB,Email,assigned_doctor,doctor_name,appointment_date_time,type_of_appointment,blood_type,height,weight,allergies,blood_pressure FROM cms.patient JOIN cms.appointment ON patient_id = HealthCard JOIN cms.patient_chart ON patient_healthcard = HealthCard WHERE HealthCard = ?`

/\*_patients doctors notes _/

### line 25 `SELECT patient_HCN,doctor_empid,doctor_name, doctors_notes, last_updated FROM cms.doctor_notes WHERE patient_HCN = ? ORDER BY (last_updated = 0) DESC,last_updated DESC`

/\*_patients medical history _/

### `SELECT medical_condition,date_of_diagnosis,ongoing_treatment,history_notes FROM cms.patient_medicalhistory WHERE patient_id_5 = ?`

/\*_patients medication details _/

### line 55 `SELECT medication_name,medi_date_started,ongoing_medication,medi_date_stopped,medication_notes FROM cms.patient_medication WHERE patient_id_2 = ?`

/\*_patients imaging test details _/

### line 67 `SELECT imaging_name,date_started,images FROM cms.patient_imaging WHERE patient_id_3 = ?`

/\*_patients immunization details _/

### line 85 `SELECT immunization_name,recieved,immunization_notes,last_updated FROM cms.patient_immunization WHERE patient_id_4 = ?`

/\*_patients lab result _/

### line 98 `SELECT test_name,test_date,test_result,test_notes FROM cms.patient_lab_result WHERE patient_id_1 = ?`

/\*_ add doctor note _/

### line 146 `INSERT INTO cms.doctor_notes SET ?`

Sql code in patientdbHandler

### line 6 to create a patient login `INSERT INTO cms.patient_login SET ?`

### line 25 to register a new patient `INSERT INTO cms.patient SET ?`

### line 44 to delete a new patient `DELETE FROM cms.patient WHERE HealthCard = ?`

### line 66 updatepatient `UPDATE cms.patient SET address = ? WHERE HealthCard =?`

### line 88 to get all patient record `SELECT * FROM cms.patient`

Sql code in patientSigndbHandler

### line 4 for patient sigin `SELECT * FROM cms.patient_login WHERE username = ?`

Sql code in revisionHistory

### line 4 patient revision history `INSERT INTO cms.revision_note SET ?`
