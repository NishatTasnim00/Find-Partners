import img1 from "../../assets/banner/pic1.png";
import img2 from "../../assets/banner/pic2.png";
import img3 from "../../assets/banner/pic3.png";

const BannerRight = () => {
  return (
    <div className="flex gap-3">
      <img src={img1} alt="" className="pt-20 w-48 max-h-96" />

      <img src={img2} alt="" className="w-48 max-h-96 mt top-0 " />

      <img src={img3} alt="" className="pt-10 w-48 max-h-96" />
    </div>
  );
};

export default BannerRight;
