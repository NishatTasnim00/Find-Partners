import axios from "axios";
import React, { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";

const Recommendation = ({ id }) => {
  const [accountants, setAccountants] = useState([]);

  useEffect(() => {
    axios
      .get("https://find-partners-server-rho.vercel.app/charteredAccountants")
      .then((response) => {
        console.log(response.data);
        console.log(id);
        const filteredAccountants = accountants.filter(
          (accountant) => accountant.id !== id
        );

        setAccountants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const filteredAccountants = accountants.filter(
    (accountant) => accountant.id !== id
  );
  console.log(filteredAccountants);
  return (
    <div className="main-container bg-[#FAFBFC]">
      <div className="lg:w-[1280px] mx-auto lg:pt-20 pt-5 px-8 lg:px-0">
        <p className="lg:text-4xl font-bold lg:mt-32 text-2xl">
          Recommended for you
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
          {filteredAccountants?.map((accountant) => {
            return (
              <RecommendationCard accountant={accountant} key={accountant.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Recommendation;
