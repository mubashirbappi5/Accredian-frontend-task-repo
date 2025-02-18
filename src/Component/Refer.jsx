import { Button } from "@mui/material";
import img1 from '../assets/18512590-ai (1) 1.png'

const Refer = () => {
    return (
        <div className="bg-[#EEF5FF] my-10 p-6">
        <div className="container px-6 mx-auto flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold">How Do I <span className="text-blue-500">Refer?</span></h3>


<img src={img1} alt="" />

<Button variant="contained" style={{ textTransform: "capitalize" }}>Refer Now</Button>
</div>
        </div>
    );
};

export default Refer;