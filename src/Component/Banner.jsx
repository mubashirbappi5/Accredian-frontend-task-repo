import { Button } from "@mui/material";
import money from "../assets/Anniversary (8) 1.png";
import bannerImg1 from "../assets/Anniversary (7) 1.png";
import axios from "axios";
import { useForm } from "react-hook-form";


const Banner = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:5000/api/referral",
        data
      );
      alert("Referral submitted successfully!");
      document.getElementById("my_modal_5").close();
    } catch (error) {
      alert("Failed to submit referral.");
    }
  };
  
  return (
    <div className="container   px-6 py-0  mx-auto my-10">
      <div className="md:grid relative z-10 bg-[#EEF5FF] grid-cols-2 py-0 px-5 rounded-3xl shadow-2xl items-center">
        <div className="space-y-4 md:block flex flex-col justify-center items-center py-5">
          <h1 className="text-7xl  font-bold mb-10">
            Let’s Learn <br /> & Earn
          </h1>
          <h3 className="text-4xl mb-6 ">
            Get a chance to win <br />
            up-to{" "}
            <span className="text-[#1A73E8] font-semibold">Rs.15,000</span>
          </h3>
          <Button  onClick={()=>document.getElementById('my_modal_5').showModal()} variant="contained" style={{ textTransform: "capitalize" }}>
            Refer Now
          </Button>
       
        </div>
        <div>
          <img className="z-10 md:relative md:flex hidden" src={bannerImg1} alt="" />
        </div>

        <img className="absolute left-[770px] z-20 top-[430px]" src={money} alt="" />
        <img className="absolute left-0 rotate-180 md:w-40 w-20 -top-5" src={money} alt="" />
        <img className="absolute   right-[450px] bottom-[50px] md:bottom-40 md:right-0 w-20 md:w-40 rotate-180 " src={money} alt="" />
        <img className="absolute  right-0 top-0 -rotate-90 w-20 " src={money} alt="" />
        <img className="absolute  md:right-[415px] md:top-0 right-0 bottom-6 -rotate-90 w-20 md:w-40  " src={money} alt="" />
      </div>
 
      {/* modal */}
      

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <div className=" p-6 rounded-lg  w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Referral Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            {...register("referrer", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Your Name"
          />
          {errors.referrer && <p className="text-red-500">Required</p>}

          <input
            {...register("referee", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Friend's Name"
          />
          {errors.referee && <p className="text-red-500">Required</p>}

          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Friend's Email"
          />
          {errors.email && <p className="text-red-500">Required</p>}

          <input
            {...register("phone", { required: true })}
            type="tel"
            className="w-full p-2 border rounded"
            placeholder="Friend's Phone"
          />
          {errors.phone && <p className="text-red-500">Required</p>}

          <input
            {...register("course", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Course Name"
          />
          {errors.course && <p className="text-red-500">Required</p>}

          <div className="flex justify-between mt-4">
          
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default Banner;
