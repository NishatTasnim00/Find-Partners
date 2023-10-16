import React from "react";
import Nav from "./components/shared/nav/Nav";
import Home from "./pages/Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";

const App = () => {
  return (
    <div className="">
      <Nav />
      <div className="-mt-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
