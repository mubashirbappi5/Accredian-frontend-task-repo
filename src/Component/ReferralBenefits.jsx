import { Button,  } from "@mui/material";
import icon from '../assets/Group.png'
const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrer: 7000,
    referee: 9000,
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrer: 9000,
    referee: 11000,
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Advanced Certification in Product Management",
    referrer: 10000,
    referee: 10000,
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrer: 10000,
    referee: 10000,
  },
];

const Sidebar = () => {
  return (
    <div className="bg-white text-black w-64 rounded-xl  shadow-xl">
      <h2 className="text-lg font-bold mb-4 bg-[#1A73E8] text-white px-4 py-2 rounded-t-md">
        ALL PROGRAMS
      </h2>
      <ul className="space-y-2 m-4">
        {[
          "Product Management",
          "Strategy & Leadership",
          "Business Management",
          "Fintech",
          "Senior Management",
          "Data Science",
          "Digital Transformation",
          "Business Analytics",
        ].map((category) => (
          <li key={category} className="cursor-pointer text-[#3C4852] border-[#00000069] hover:text-gray-600 border-b-2 py-2 font-semibold">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ReferralBenefits() {
  return (
    <div className="container px-6 mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-4">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h1>
      <div className="flex px-7 justify-end">
      <h3>Enrolled</h3>
     
      </div>
      <div className="flex   p-6 space-x-6">
        <Sidebar />
        <div className="flex-1">
        <div className="bg-white rounded-xl  shadow-xl">
            <table className="w-full bg-[#EBF3FF59] ">
              <thead>
                <tr className="bg-[#1A73E859]   text-[#1350A0] font-semibold">
                  <th className="p-3 text-left ">Programs</th>
                  <th className="p-3 border-l-2 border-gray-300">
                    Referrer Bonus
                  </th>
                  <th className="p-3 border-l-2 border-gray-300">
                    Referee Bonus
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr key={index}>
                    <td className="p-3 py-5 border-r-2 border-gray-300 flex gap-2">
                    <img src={icon} alt="" /> {program.name}
                    </td>
                    <td className="p-3 border-r-2 border-gray-300">
                      ₹ {program.referrer.toLocaleString()}
                    </td>
                    <td className="p-3">
                      ₹ {program.referee.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
        </div>
      </div>
      <div className="mt-4 flex justify-center">
      <Button variant="contained" style={{ textTransform: "capitalize" }}>Refer Now</Button>
          </div>
    </div>
  );
}
