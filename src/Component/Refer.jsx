import { Button } from "@mui/material";
import img1 from '../assets/18512590-ai (1) 1.png'
import img2 from '../assets/Layer_2_00000166652077678251612620000003541000192939887504_.png'
const Refer = () => {
    return (
        <div className="bg-[#EEF5FF] my-10 p-6">
        <div className="container px-6 mx-auto flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold">How Do I <span className="text-blue-500">Refer?</span></h3>


     <div className="relative border-2">
     <img className="relative" src={img1} alt="" />
     <div className="text-center absolute flex flex-col justify-center items-center top-0 "> 
        <img src={img2} alt="" />
        <p>Submit referrals easily via <br /> our website’s referral <br /> section.</p>
     </div>
     </div>

<Button variant="contained" style={{ textTransform: "capitalize" }}>Refer Now</Button>
</div>
        </div>
    );
};

export default Refer;