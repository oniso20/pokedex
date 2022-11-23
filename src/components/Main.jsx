import React from "react";
import { Outlet } from "react-router-dom";

import classes from "../components/Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Outlet />
    </main>
  );
};

export default Main;
