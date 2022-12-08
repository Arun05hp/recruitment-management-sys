import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/common/Footer";
import HeaderNav from "./components/common/HeaderNav";
import SideDrawer from "./components/common/SideDrawer";
import AppRoutes from "./router/AppRoutes";

// import Technologies from './1-technologies/Technologies';
// import TechnologyDetails from './1-technologies/TechnologyDetails';

// import Employees from './1-employees/Employees';
// import EmployeeDetails from './1-employees/EmployeeDetails';

// import Companies from './1-companies/Companies';
// import CompanyDetails from './1-companies/CompanyDetails';

const useStyles = makeStyles((theme) => ({
  wrapper: { height: "100vh", display: "flex", flexDirection: "column" },
  root: { display: "flex", flex: 1 },
  container: {
    flex: 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  contentBox: { display: "flex", flexDirection: "column", flex: 1 },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleToggleDrawer() {
    setOpen((prev) => !prev);
  }

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <CssBaseline />
        <HeaderNav open={open} handleToggleDrawer={handleToggleDrawer} />
        <div className={classes.root}>
          <SideDrawer open={open} handleToggleDrawer={handleToggleDrawer} />
          <div className={classes.contentBox}>
            <Container maxWidth="lg" className={classes.container}>
              <AppRoutes />
            </Container>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
