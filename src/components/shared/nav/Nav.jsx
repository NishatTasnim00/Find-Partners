import { Link } from "react-router-dom";
import logo from "../../../assets/nav/logo.png";
const Nav = () => {
  return (
    <div className="main-container lg:h-[85px] bg-transparent">
      <div className="lg:w-[1280px] mx-auto">
        <div className="flex justify-between align-middle">
          <div className="lg:w-7/12 flex justify-between align-middle">
            <img src={logo} alt="" height={45} width={138} />
            <Link href="" className="font-bold text-lg">
              Solutions{" "}
            </Link>
            <Link href="" className="font-bold text-lg">
              Features
            </Link>
            <Link href="" className="font-bold text-lg">
              Blogs
            </Link>
            <Link href="" className="font-bold text-lg">
              About{" "}
            </Link>
          </div>
          <div className="flex gap-3 font-bold text-base">
            <button className="border-2 border-sky-600  text-sky-600  bg-white rounded-[10px] px-5 py-3">
              Login
            </button>
            <button className="bg-[#0076CE] text-white border-1.5 rounded-[10px] px-5 py-3">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
