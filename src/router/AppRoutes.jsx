import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Dashboard from "../features/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      {/* <Route exact path="/technologies" element={Technologies} />
    <Route exact path="/technologies/:techId/:techName" element={TechnologyDetails} />
    <Route exact path="/employees" element={Employees} />
    <Route exact path="/employees/:empId/:empName" element={EmployeeDetails} />
    <Route exact path="/companies" element={Companies} />
    <Route exact path="/companies/:compId/:compName" element={CompanyDetails} /> */}
      <Route exact path="/*" render={() => <Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
