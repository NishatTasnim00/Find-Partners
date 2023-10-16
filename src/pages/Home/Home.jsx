import React from "react";
import Footer from "../../components/shared/footer/Footer";
import Nav from "../../components/shared/nav/Nav";
import Banner from "../../components/banner/Banner";
import JoinUsSection from "../../components/joinUsSection/JoinUsSection";
import AllInOne from "../../components/allInOne/AllInOne";
import vectorJoin from "../../assets/vectorJoin.png";

const Home = () => {
  return (
    <div className="main-container ">
      <Banner />
      <div className="bg-[#FAFBFC] relative -z-20">
        <div className="lg:w-[1280px] mx-auto z-10">
          <JoinUsSection />
        </div>
        <img src={vectorJoin} alt="" className="absolute bottom-20 -z-10" />
      </div>
      <div className="lg:w-[1280px] mx-auto">
        <AllInOne />
      </div>
    </div>
  );
};

export default Home;
