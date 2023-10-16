import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Recommendation from "../../components/recommendation/Recommendation";
const AccountantDetails = () => {
  const data = useLoaderData();
  console.log(data);
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
  } = data;
  console.log(about?.services);
  return (
    <div className="main-container bg-[#FAFBFC]">
      <div className="lg:w-[1280px] mx-auto lg:flex justify-between lg:pt-40 pt-5 px-8 lg:px-0">
        <div className="lg:w-[515px]">
          <div className="flex flex-col gap-y-2">
            <p className="lg:text-4xl text-2xl font-bold">{name}</p>
            <p className="text-xl font-normal">{intro}</p>
          </div>

          <div className="flex gap-1 mt-6 font-bold">
            <FaStar className="text-sky-700 mt-1" />
            <p className="text-sky-700">{rating}</p>
            <p>({reviewCount})</p>
          </div>
          <div className="shadow-xl shadow-gray-300 text-xl px-12 py-8 mt-3 mx-left   rounded-[20px]">
            <p className="flex justify-between">
              Basic to complex tasks
              <span className="font-bold">{price}</span>
            </p>
            <p className="mt-6">{deliveryTime}</p>
            <div className="flex justify-between mt-10 gap-x-2">
              <button className="border-2 border-sky-600 text-white bg-sky-600 px-4 py-2 rounded-md font-semibold text-sm">
                Request Proposal
              </button>
              <button className="border-2 border-sky-600 px-4 py-2 rounded-md text-sky-600 font-semibold text-sm">
                {" "}
                Chat With Me
              </button>
            </div>
          </div>
          <div className="shadow-xl shadow-gray-300 text-xl px-12 py-8 mt-10 mx-left rounded-[20px]">
            <p className="lg:text-4xl font-bold">What people say</p>
            <p className="text-xl font-normal  mt-8">{testimonial?.text}</p>
            <div className="flex justify-center">
              <div className="flex gap-5 pt-5">
                <div className="h-2 w-5 rounded-full bg-sky-500"></div>
                <div className="h-2 w-2 rounded-full bg-slate-500"></div>
                <div className="h-2 w-2 rounded-full bg-slate-500"></div>
                <div className="h-2 w-2 rounded-full bg-slate-500"></div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="lg:w-[733px]">
          <div className="mt-14 lg:mt-0">
            <figure className="lg:w-[733px] lg:h-[412px] rounded-[20px] lg:mb-40">
              <img src={image} alt={`${name}`} className="rounded-[20px]" />
            </figure>

            <div>
              <p className="lg:text-4xl font-bold">About {name}</p>

              <div className="grid lg:grid-cols-3 grid-cols-1 mt-10">
                <div className="flex flex-col gap-y-4">
                  <p className="text-[#999999] text-base font-bold">FROM</p>
                  <p>{about?.from}</p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-4">
                  <p className="text-[#999999] text-base font-bold">
                    PARTNER SINCE
                  </p>
                  <p>{about?.partnerSince}</p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-4">
                  <p className="text-[#999999] text-base font-bold">
                    AVERAGE RESPONSE TIME
                  </p>
                  <p>{about?.averageResponseTime}</p>
                </div>
              </div>
              <div className="lg:mt-20">
                <p className="text-[#999999] text-base font-bold">ABOUT</p>
                <p className="text-xl font-semibold mt-2">
                  {about?.description}. {intro}
                </p>
              </div>
              <div className="lg:mt-10 ">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  <div className="text-xl font-semibold mt-2 ">
                    <p className="text-[#999999] text-base font-bold">
                      SERVICES
                    </p>
                    <div className="mt-3">
                      <ul className="list-disc text-xl ml-5">
                        {about?.services.map((service, index) => (
                          <li key={index}>
                            <h3>{service}</h3>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-xl font-semibold mt-2">
                    <p className="text-[#999999] text-base font-bold">WHY ME</p>
                    <div className="mt-3">
                      <ul className="list-disc text-xl ml-5">
                        {about?.benefits.map((benefit, index) => (
                          <li key={index}>
                            <h3>{benefit}</h3>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <Recommendation id={data.id} />{" "}
      </div>
    </div>
  );
};

export default AccountantDetails;
