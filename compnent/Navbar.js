"use client";
// components/Navbar.js
import Link from "next/link";
import styles from "@/compnent/Navbar.module.css";
import "tailwindcss";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
  return (
    <nav id="navbar" className={styles.navbar}>
      <br />
      <div className="hidden md:flex md:w-[60%] flex pl-3">
        <img src="/next.svg" alt="Logo" className="w-[70%]" />
      </div>
<br />
<br />
      <ul className={styles.navLinks}>
        <li className="  text-white">
          <Link className="md:hidden md:block" href="/home">
        <i className="bi px-3 bi-house-door-fill"></i>
          </Link>
        <i className="bi hidden md:flex px-3 bi-house-door-fill"></i>
          <Link className="hidden md:block" href="/home">Home</Link>
        </li>


        <li className=" text-white">
          <Link className="md:hidden md:block" href="/about">
        <i className="bi px-3 bi-search"></i>
          </Link>
        <i className="bi hidden md:flex px-3 bi-globe-americas"></i>
          <Link className="hidden md:block" href="/about">Explore</Link>
        </li>


        <li className=" text-white">
          <Link className="md:hidden md:block" href="/contact">
        <i className="bi px-3 bi-chat-left-fill"></i>
          </Link>
        <i className="bi hidden md:flex px-3 bi-chat-left-fill"></i>
          <Link className="hidden md:block" href="/contact">Messages</Link>
        </li>

        <li className="bg-gray-900 md:bg-[#272623] text-white">
          <Link className="md:hidden md:block" href="/">
          <i className="bi   px-3  bi-person-fill"></i>
          </Link>
          <i className="bi hidden md:flex   px-3  bi-person-fill"></i>
          <Link className="hidden md:block" href="/">Switch Account</Link>
        </li>

      </ul>


      <div className=" hidden w-[60%] xl:w-[80%] h-[50%] md:flex justify-start items-end py-4">
        
        <div className="xl:rounded-2xl 2xl:p-3 w-full hidden md:flex xl:bg-gray-900  hover:bg-gray-950">
          <i className="bi md:text-[40px] bg-black rounded-full flex p-2 bi-person-fill"></i>
        <div className="hidden md:block pl-2 text-gray-400">
          <h1 className="hidden xl:block font-bold">Rizwan Ahmed</h1>
          <h1 className="text-[15px] hidden 2xl:block">@rizwanahmee</h1>
        </div>
 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
