"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

function profile() {
  return (
    <div className="flex flex-col">
      <div className="group  flex border-b bg-gray-950 md:h-90 flex-col justify-end items-end p-3 md:p-12 md:pb-0">
        <img
          className="hover:brightness-40 duration-750 rounded-2xl"
          src="/images/Coverimage.png"
          alt=""
          />
        <i className="bi bi-camera-fill text-2xl -translate-x-5 -translate-y-9 group-hover:-translate-x-120 group-hover:-translate-y-40 duration-500"></i>
      </div>
      <div className="border-b border-gray-500 w-full h-40">
        <img className="w-30 md:w-50 rounded-full border-10 -translate-y-30 md:translate-x-20 translate-x-10" src="/images/profile.jpg" alt="proifle.png" />
          <h1 className=" text-2xl -translate-y-25 md:translate-x-26 translate-x-10">Rizwan Ahmed</h1>
          <p className="md:w-130 md:-translate-y-50 md:translate-x-86   -translate-y-20 translate-x-10">Front-End Developer | BSIT | Expert in Next.js, JavaScript, Tailwind CSS and Bootstrap | Always learning and growing!</p>
      </div>
    </div>
  );
}
export default profile;
