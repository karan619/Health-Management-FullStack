import moment from "moment";

export const COLUMNS = [
  { Header: "Patient HCN#", accessor: "patient_HCN" },
  { Header: "Doctor Name", accessor: "doctor_name" },
  { Header: "Doctor Notes", accessor: "doctors_notes" },
  {
    Header: "Created Time",
    accessor: (row) =>
      moment(row.last_updated).format("MMMM Do YYYY, h:mm:ss a"),
  },
];
