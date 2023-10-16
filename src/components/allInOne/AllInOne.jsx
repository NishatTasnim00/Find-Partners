import search from "../../assets/all-in-one/search.png";
import connect from "../../assets/all-in-one/connect.png";
import research from "../../assets/all-in-one/research.png";
import academy from "../../assets/all-in-one/academy.png";
import teacher from "../../assets/all-in-one/teacher.png";
import student from "../../assets/all-in-one/student.png";

const AllInOne = () => {
  return (
    <div className="mt-28 mb-96 lg:mb-60 px-8 lg:px-0">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <p className="lg:text-6xl text-2xl font-bold">
            <span className="color-text">All-in-One</span> platform that Makes Easier
          </p>

          <p className="text-lg font-semibold mt-5">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-10 text-lg font-semibold">
            <div className=" flex items-center gap-2">
              <div>
                <img src={search} alt="" className="h-12 w-12" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">SEARCH</span> for vital
                company information{" "}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={connect} alt="" className="h-16 w-16" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">CONNECT</span> with the
                resources to meet your business needs
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={research} alt="" className="h-12 w-12" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">RESEARCH</span> and
                generate reports that drive growth{" "}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={academy} alt="" className="h-14 w-[74px]" />
              </div>
              <p className="text-slate-400">
                <span className="font-bold text-black">ACADEMY</span> to give
                you the skills for success in your career
              </p>
            </div>
          </div>
        </div>
        {/* right-side */}

        <div className="mt-16 lg:mt-0 relative">
          <div className="">
            <div className="absolute right-0 z-20  mt-20 lg:mt-0">
              <img src={student} alt="" className="w-[270px] h-[347px]" />
            </div>
            <div className="absolute space-y-6 right-64 top-14 font-semibold text-right">
              <h3>
                <span className="pink-comment">
                  Hey, check out loreumipsum services.{" "}
                </span>
              </h3>
              <h3>
                <span className="pink-comment">
                  I learned from their videos, got my first job.{" "}
                </span>
              </h3>
              <h3>
                <span className="pink-comment">
                  You won't be disappointed with .{" "}
                </span>
              </h3>
              <h3>
                <span className="sky-comment">
                  I got a perfect analysis report from{" "}
                </span>
              </h3>

              <h3>
                <span className="sky-comment">Oh, that's great. </span>
              </h3>
            </div>
          </div>

          <div className="absolute lg:top-56  hidden lg:block">
            <img src={teacher} alt="" className="w-[306.6px] h-[345.53px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
