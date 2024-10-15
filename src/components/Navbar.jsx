import React from "react";
import logo from "../assets/MaheshRautLogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
        {/* <div className="flex gap-3">
        <span>Home</span>
        <span>About</span>
        <span>TechStack</span>
        <span>Experience</span>
        <span>Projects</span>
        <span>Connect</span>
        </div> */}
      </div>
      <div className="m-8 flex flex-wrap items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mahesh-raut-96aa59228/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/maheshraut07" target="_blank"><FaGithub /></a>
        <a href="https://x.com/maheshraut_07" target="_blank"><FaTwitterSquare /></a>
        <a href="https://www.instagram.com/maheshraut_07/" target="_blank"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
