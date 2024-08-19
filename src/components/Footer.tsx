import React from "react";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
import { FaInstagram, FaPhone, FaClock, FaLocationDot } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi2";
import logo from "../assets/upskill-logo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="w-11/12 lg:w-4/5 mx-auto">
      <hr />
      <div className="lg:flex lg:justify-between flex-grow mt-10">
        <div className="mb-8 w-fit mx-auto lg:mx-0 lg:flex-1">
          <a href="">
            <img className="w-24 mx-auto" src={logo} alt="Upskill Logo" />
          </a>
          <div className="social-media-profiles flex gap-3">
            <a
              className="p-3 bg-primary-color rounded-full text-white transform transition-transform duration-500 hover:translate-y-[-10px]"
              href=""
            >
              <IoLogoFacebook />
            </a>
            <a
              className="p-3 bg-primary-color rounded-full text-white transform transition-transform duration-500 hover:translate-y-[-10px]"
              href=""
            >
              <IoLogoLinkedin />
            </a>
            <a
              className="p-3 bg-primary-color rounded-full text-white transform transition-transform duration-500 hover:translate-y-[-10px]"
              href=""
            >
              <FaInstagram />
            </a>
            <a
              className="p-3 bg-primary-color rounded-full text-white transform transition-transform duration-500 hover:translate-y-[-10px]"
              href=""
            >
              <IoLogoTwitter />
            </a>
          </div>
        </div>
        <div className="address lg:flex-1 px-4 lg:px-6 mb-8">
          <h5 className="text-xl mb-4">Our Address</h5>
          <div className="mb-3">
            <FaLocationDot className="text-indigo-400 text-2xl" />
            <p className="text-gray-500 text-sm font-light">
              Karta Char, 3rd Division Opposite Street, Sun Tower Plaza
            </p>
          </div>
          <div className="mb-3">
            <FaPhone className="text-indigo-400 text-2xl" />
            <p className="text-gray-500 text-sm font-light">+93 765000185</p>
          </div>
          <div className="mb-3">
            <FaClock className="text-indigo-400 text-2xl" />
            <p className="text-gray-500 text-sm font-light">08.00 - 9.00</p>
          </div>
        </div>
        <div className="quick-links lg:flex-1 px-4 lg:px-6">
          <h5 className="text-xl mb-4">Quick links</h5>
          <div className="mb-3">
            <GoProjectRoadmap className="text-indigo-400 text-2xl" />
            <a href="" className="text-gray-500 text-sm font-light">
              Learning path
            </a>
          </div>
          <div className="mb-3">
            <HiOutlineHome className="text-indigo-400 text-2xl" />
            <a href="" className="text-gray-500 text-sm font-light">
              Home
            </a>
          </div>
          <div className="mb-3">
            <IoMailOutline className="text-indigo-400 text-2xl" />
            <a href="" className="text-gray-500 text-sm font-light">
              info@upskillbootcamp.tech
            </a>
          </div>
        </div>
        <div className="lg:flex-1 px-4 lg:px-6">
          <h5 className="text-xl mb-4">Newsletter</h5>
        </div>
        <hr />
      </div>
      <hr />
      <div className="text-gray-400 text-sm font-light text-center flex flex-col gap-2 py-6">
        <div className="lg:flex justify-between mb-5">
          <div className="flex justify-center order-2 mb-4">
            <div>
              <a href="">Privacy Policy</a>
            </div>
            <div>
              <a href="">Terms & Services</a>
            </div>
          </div>
          <div className="flex-grow order-1">
            <p className="mx-auto lg:mx-0 lg:w-fit">
              Upskill © 2024 All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between">
          <div className="flex-grow leading-7">
            <p className="w-fit">Join UpSkill’s immersive 6-month bootcamps, available both in-person
            and online.</p>
          </div>
          <div className="flex-grow">
            <p className="mx-auto lg:mr-0 lg:w-fit">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
