import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import asmitaLogo from '../assets/asmitaLogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#4a4a4a] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Leftmost Logo */}
          <div className="flex justify-center md:justify-start" style={{ width: "20%", height: "100%", margin: "0px auto" }}>
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png" alt="Asmita Logo Left" className="w-24 h-auto" />
          </div>
          
          {/* FOLLOW US ON */}
          <div className="space-y-4 space-x-4">
            <p className="text-l font-medium">FOLLOW US ON</p>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <a href="#" className="text-sm hover:text-gray-300 flex gap-1 items-center">
                <FaFacebookF />
                facebook
              </a>
              <a href="#" className="text-sm hover:text-gray-300 flex gap-1 items-center">
                <FaLinkedin />
                Linkedin
              </a>
              <a href="#" className="text-sm hover:text-gray-300 flex gap-1 items-center">
                <FaYoutube />
                youtube
              </a>
            </div>
          </div>

          {/* Emails */}
          <div className="space-y-4 space-x-4">
            <p className="text-xl font-medium space-x-4" >Emails</p>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <a href="#" className="text-sm hover:text-gray-300">ayushikumari@iiita.ac.in</a>
              <a href="#" className="text-sm hover:text-gray-300">hratnamkumari104@iiita.ac.in</a>
              <a href="#" className="text-sm hover:text-gray-300">hratnamkumari104@iiita.ac.in</a>
            </div>
          </div>

          {/* Rightmost Logo */}
          <div className="flex justify-center md:justify-end">
            <img src={asmitaLogo} alt="Asmita Logo Right" className="w-24 h-auto" />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Asmita. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
