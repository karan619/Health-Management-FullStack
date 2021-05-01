import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import AdminInterface from "./pages/AdminInterface";
import AdminLogin from "./pages/AdminLogin";
import AdminPortal from "./pages/AdminPortal";
import ProtectedRoute from "./components/ProtectedRoute";
import DoctorPrivateRoute from "./components/DoctorPrivateRoute";
import PatientPrivateRoute from "./components/PatientPrivateRoute";
import AppointmentPortal from "./pages/AppointmentPortal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DocLogin from "./pages/DocLogin";
import DocPortal from "./pages/DocPortal";
import PatientLogin from "./pages/PatientLogin";
import NewPatientLogin from "./pages/NewPatientLogin";
import PatientUserName from "./pages/PatientUserName";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin-interface" component={AdminInterface} />

        <Route path="/admin-login">
          <AdminLogin />
        </Route>
        <Route path="/doc-login">
          <DocLogin />
        </Route>
        <Route path="/patient-login">
          <PatientLogin />
        </Route>
        <Route path="/register-patient">
          <NewPatientLogin />
        </Route>
        <Route path="/complete-register-patient">
          <PatientUserName />
        </Route>

        <PatientPrivateRoute path="/patient-portal">
          <AppointmentPortal />
        </PatientPrivateRoute>

        <DoctorPrivateRoute path="/doc-portal">
          <DocPortal />
        </DoctorPrivateRoute>
        <ProtectedRoute path="/admin-portal">
          <AdminPortal />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
