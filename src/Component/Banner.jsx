import { Button } from "@mui/material";
import money from "../assets/Anniversary (8) 1.png";
import bannerImg1 from "../assets/Anniversary (7) 1.png";
const Banner = () => {
  return (
    <div className="container   px-6 py-0  mx-auto my-10">
      <div className="grid relative z-10 bg-[#EEF5FF] grid-cols-2 py-0 px-5 rounded-3xl shadow-2xl items-center">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold mb-10">
            Let’s Learn <br /> & Earn
          </h1>
          <h3 className="text-4xl mb-6 ">
            Get a chance to win <br />
            up-to{" "}
            <span className="text-[#1A73E8] font-semibold">Rs.15,000</span>
          </h3>
          <Button variant="contained" style={{ textTransform: "capitalize" }}>
            Refer Now
          </Button>
        </div>
        <div>
          <img className="z-10 relative" src={bannerImg1} alt="" />
        </div>

        <img className="absolute left-[770px] z-20 top-[430px]" src={money} alt="" />
        <img className="absolute left-0 rotate-180 -top-5" src={money} alt="" />
        <img className="absolute  right-0 rotate-180 " src={money} alt="" />
        <img className="absolute  right-0 top-0 -rotate-90 w-20 " src={money} alt="" />
        <img className="absolute  right-[415px] top-0 -rotate-90  " src={money} alt="" />
      </div>
    </div>
  );
};

export default Banner;
