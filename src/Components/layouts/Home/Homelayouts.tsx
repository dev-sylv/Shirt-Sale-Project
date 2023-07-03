import React from "react";
import { Header, Footer } from "../../blocks";
import { Outlet } from "react-router-dom";

const Homelayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homelayouts;
