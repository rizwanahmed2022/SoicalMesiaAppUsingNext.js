"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

function profile() {
  return (
    <div className="flex flex-col">
      <div className="group flex flex-col justify-end items-end p-3 md:p-12 md:pb-0">
        <img
          className="hover:brightness-40 duration-750 rounded-2xl"
          src="/images/Coverimage.png"
          alt=""
          />
        <i className="bi bi-camera-fill text-2xl -translate-x-5 -translate-y-9 group-hover:-translate-x-120 group-hover:-translate-y-40 duration-500"></i>
      </div>
      <div className="border-b border-gray-500 w-full ">
        <img className="w-30 md:w-50 rounded-full border-10 -translate-y-30 md:translate-x-20 translate-x-10" src="/images/profile.jpg" alt="proifle.png" />
          
      </div>
    </div>
  );
}
export default profile;
