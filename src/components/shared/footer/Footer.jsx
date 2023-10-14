import React from "react";
import facebook from "../../../assets/icons/facebook.png";
import instagram from "../../../assets/icons/instagram.png";
import linkedin from "../../../assets/icons/linkedin.png";
import whatsapp from "../../../assets/icons/whatsapp.png";
import logo1 from "../../../assets/footer/logo1.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" text-white ">
      <div className="h-[341px] bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
        <div className="lg:w-[1280px] mx-auto">
          <div className="flex justify-between">
            <div>
              <img src={logo1} alt="" height={45} width={138} />
              <p>
                India's first platform dedicated to
                <br /> simplifying partner search
              </p>
            </div>
      
              <div>
                <Link href="">COMPANY</Link>
              </div>
              <div>
                <Link href="">SOLUTIONS</Link>
              </div>
              <div>
                <Link href="">SUPPORTS</Link>
              </div>
              <div>
                <Link href="">LEGAL</Link>
              </div>
            </div>
     

          <hr className="h-[2px]" />
          <div className="flex justify-between">
            <p className="font-normal text-sm text-white">
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
            <div className="flex gap-5">
              <Link href="">
                <img src={facebook} />
              </Link>
              <Link href="">
                <img src={instagram} />
              </Link>{" "}
              <Link href="">
                <img src={linkedin} />
              </Link>{" "}
              <Link href="">
                <img src={whatsapp} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[57px] bg-black flex items-center justify-center">
        <p className="text-center font-normal text-xs">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
