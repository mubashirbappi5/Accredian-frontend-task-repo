import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import logo from '../assets/accredainnew.webp.png'
import supportbtn from '../assets/Link.png'
export default function Footer() {
    return (
      <footer className="bg-[#282828] text-white py-10 px-6 md:px-20 relative">
        <div className="flex justify-between items-center border-b-2 border-gray-600 pb-6 mb-6">
          <div>
<img src={logo} alt="" />
          </div>
          <div>
           <button className="px-10 py-2 bg-blue-500 rounded-xl border border-white">Schedule 1-on-1 Call Now</button>
           <h5 className="text-white">Speak with our Learning Advisor</h5>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Programs Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Programs</h2>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <p key={index} className="flex justify-between text-gray-400 hover:text-white cursor-pointer">
                {program} <span>+</span>
              </p>
            ))}
          </div>
  
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-400">Email us (For Data Science Queries): admissions@accredian.com</p>
            <p className="text-gray-400">Email us (For Product Management Queries): pm@accredian.com</p>
            <p className="text-gray-400">Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
            <p className="text-gray-400">Product Management Admission Helpline: +91 9625811095</p>
            <p className="text-gray-400">Enrolled Student Helpline: +91 7969322507</p>
            <p className="text-gray-400">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
            <h2 className="text-lg font-semibold mt-4">Follow Us</h2>
            <div className="flex space-x-3 mt-2">
              <span className="cursor-pointer"><FaFacebookSquare /></span>
              <span className="cursor-pointer"><FaLinkedin /></span>
              <span className="cursor-pointer"><FaTwitterSquare/></span>
              <span className="cursor-pointer"><FaInstagramSquare /></span>
              <span className="cursor-pointer"><TiSocialYoutube /></span>
            </div>
          </div>
  
          {/* Accredian Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Accredian</h2>
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms Of Service",
              "Master FAQs",
            ].map((link, index) => (
              <p key={index} className="text-gray-400 hover:text-white cursor-pointer">
                {link}
              </p>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
        <img className="absolute bottom-20 right-10" src={supportbtn} alt="" />
      </footer>
    );
  }
  