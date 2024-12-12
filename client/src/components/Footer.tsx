import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import LogoImg from "../public/images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-400 p-6 rounded-xl flex flex-col items-center shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              CONNECT WITH US
            </h3>
            <p className="flex items-center space-x-2 text-gray-500">
              <span>📞</span>
              <span>+91 9567843340</span>
            </p>
            <p className="flex items-center space-x-2 mt-2 text-gray-500">
              <span>✉️</span>
              <span>info@deepnetsoft.com</span>
            </p>
          </div>

          <div className="border border-gray-400 p-6 rounded-xl shadow-lg text-center relative">
            <img
              src={LogoImg}
              alt="Deep Net Soft Logo"
              className="h-16 mb-4 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2"
            />
            <h1 className="md:text-3xl hidden md:block font-semibold my-2">
              <span className="text-blue-500">DEEP </span>NET{" "}
              <span className="text-gray-400">SOFT</span>
            </h1>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaFacebook size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaTwitter size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin size={15} />
              </a>
            </div>
          </div>

          <div className="border border-gray-400 p-6 rounded-xl flex flex-col items-center shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              FIND US
            </h3>
            <p className="text-gray-500">
              First floor, Geo infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>

        <div className="mt-8 text-center flex pt-16 justify-between">
          <p className="text-sm text-gray-500">
            © 2024 Deepnetsoft Solutions. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-500 ">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
