import React from "react";

const RecommendationCard = ({ accountant }) => {
  const {
    name,
    image,
    intro,
    price,
    rating,
    reviewCount,
    testimonial,
    deliveryTime,
    about,
  } = accountant;
  return (
    <div className="shadow-md shadow-slate-500 pb-8 rounded-[20px] h-[477px] w-[405px]">
      <div>
      <figure className="h-[244px] w-[405px] rounded-t-[20px]">
      <img
          src={image}
          alt={`${name}`}
          className="h-full w-full rounded-t-[20px]"
        />
      </figure>
      </div>
      <div className="px-6">
        <p className="lg:text-2xl font-bold mt-4">{name}</p>
        <p className="mt-2 font-serif">{intro}</p>
        <div className="flex gap-2 mt-6 font-bold">
          <p className="text-sky-700 ">{rating}</p>
          <p>({reviewCount})</p>
        </div>
        <div>
          <button className="border-2 w-full mt-5 border-sky-600 text-white bg-sky-600 px-4 py-1 rounded-lg font-semibold ">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
