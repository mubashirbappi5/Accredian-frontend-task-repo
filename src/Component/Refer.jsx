import { Button } from "@mui/material";
import img1 from '../assets/18512590-ai (1) 1.png'
import img2 from '../assets/Layer_2_00000166652077678251612620000003541000192939887504_.png'
import img3 from '../assets/Vector.png'
import img4 from '../assets/Vector (1).png'
const Refer = () => {
    return (
        <div className="bg-[#EEF5FF] my-10 p-6">
        <div className="container px-6 mx-auto flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold">How Do I <span className="text-blue-500">Refer?</span></h3>


     <div className="relative ">
     <img className="relative rotate-90 md:rotate-0 my-40 md:my-10" src={img1} alt="" />
     <div className="text-center absolute flex flex-col justify-center items-center lg:top-[200px] lg:left-[230px] top-20 left-[220px] "> 
        <img src={img2} className="w-10 lg:w-32" alt="" />
        <p className="text-[6px] md:text-lg">Submit referrals easily via <br /> our website’s referral <br /> section.</p>
     </div>
     <div className="text-center absolute flex flex-col justify-center items-center top-[210px] left-[220px] md:top-[210px] md:left-[670px] "> 
        <img className="w-10 lg:w-20" src={img3} alt="" />
        <p className="text-[6px] md:text-lg">Submit referrals easily via <br /> our website’s referral <br /> section.</p>
     </div>
     <div className="text-center absolute flex flex-col justify-center items-center top-[370px] right-[220px] md:top-[200px] md:right-[230px] "> 
        <img className="w-10 lg:w-20"src={img4} alt="" />
        <p className="text-[6px] md:text-lg">Submit referrals easily via <br /> our website’s referral <br /> section.</p>
     </div>
     </div>

<Button variant="contained" style={{ textTransform: "capitalize" }}>Refer Now</Button>
</div>
        </div>
    );
};

export default Refer;