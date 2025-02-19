import { Button } from "@mui/material";
import img1 from "../assets/div.w-full.png";
import bg1 from "../assets/cta-circle.d94f7e66bfe364d78b6e.svg.png";
const Support = () => {
  return (
    <div className="container px-6 mx-auto">
      <div className="bg-[#1A73E8] relative rounded-xl p-10 flex justify-between my-10 ">
        <div className=" flex items-center gap-9">
          <img src={img1} alt="" />
          <div>
            <h2 className="text-white font-semibold">
              Want to delve deeper into the program?
            </h2>
            <p className="text-white relative z-20">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <button className="bg-white px-4 py-2 rounded-lg font-semibold text-[#3B82F6]" >
          Get in touch
          </button>
        </div>
        <img className="absolute w-[500px] right-0 bottom-0" src={bg1} alt="" />
      </div>
    </div>
  );
};

export default Support;
