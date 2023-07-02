import React from "react";
import { Footer, Header } from "../../blocks";
import { Outlet } from "react-router-dom";

const Homelayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Homelayouts;
