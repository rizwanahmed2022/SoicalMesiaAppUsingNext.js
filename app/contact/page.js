"use client";
import { submitAction } from "./actions/form";
import Swal from "sweetalert2";

import "bootstrap-icons/font/bootstrap-icons.css";

function contact() {
  function chageheight() {
    let x = document.getElementById("user1");
    let y = document.getElementById("arrow");
    if (x.style.height != "auto") {
      x.style.height = "auto";
      y.style.display = "block";
    } else {
      x.style.height = "70px";
      y.style.display = "none";
    }
  }
  function chageheight2() {
    let x = document.getElementById("user2");
    let y = document.getElementById("arrow2");
    if (x.style.height != "auto") {
      x.style.height = "auto";
      y.style.display = "block";
    } else {
      x.style.height = "70px";
      y.style.display = "none";
    }
  }

  function create() {
    let z = document.getElementById("message");
    let x = document.createElement("div");

    x.innerHTML = z.value;
    let y = document.getElementById("add");
    y.appendChild(x);
    x.className = "bg-green-900 px-5 py-1 rounded-xl rounded-tr-none";

    z.value = "";
  }
  function create2() {
    let z = document.getElementById("message2");
    let x = document.createElement("div");

    x.innerHTML = z.value;
    let y = document.getElementById("add2");
    y.appendChild(x);
    x.className = "bg-green-900 px-5 py-1 rounded-xl rounded-tr-none";

    z.value = "";
  }




  return (
    <div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="border-b border-gray-500 gap-2 md:gap-0 w-full py-2 pt-9 px-2 md:p-9 flex justify-center items-center">
          <div className=" flex">
            <img
              className="w-[50px] mr-9 h-[50px] rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SGd3hrFih4myNDpd3LKAMkKlUGD3sOiHaQ&s"
              alt=""
            />
          </div>
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="You want to message?"
            className="border border-gray-400 p-2 px-6 rounded-full w-full"
          />
          <button>
            <i className="bi bi-search text-2xl text-gray-400 font-bold p-3  hover:border active:bg-gray-600  md:mx-4 duration-100 "></i>
          </button>
        </div>
      </div>

      <h1 className="my-8 bg-blue-950 p-2">inbox</h1>

      <div
        id="user1"
        className="border-b border-gray-500 w-auto h-[70px] p-3 overflow-hidden  duration-750 flex justify-start flex-col items-start md:mx-12 hover:bg-gray-800 active:bg-gray-800 rounded"
      >
        <div
          onClick={chageheight}
          className=" flex justify-start w-full items-center"
        >
          <i id="arrow" className="bi bi-arrow-left mr-5 hidden"></i>
          <img
            className="w-[40px] mr-9 h-[40px] rounded-full"
            src="https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE="
            alt=""
          />
          <div className="w-[70%]">
            <h1 className="font-bold text-gray-200">Rehan Manzoor</h1>
            <h1 className="text-sm text-gray-500">say Hi!</h1>
          </div>
          <div className="text-white flex gap-5 px-7 py-3">
            <i className="bi bi-telephone-fill"></i>
            <i className="bi bi-camera-video-fill"></i>
          </div>
        </div>
        <br />
        <div className="bg-gray-900 w-full flex flex-col justify-center items-center ">
          <br />
          <p className=" bg-black px-3 py-1 text-sm text-gray-500 rounded ">
            Today
          </p>

          <div
            id="add"
            className=" w-full flex flex-col gap-3 justify-center items-end mt-7"
          >
            {/* this is the cantainer where Messages appear */}
          </div>

          <br />
          <div className=" w-full bg-gray-800  p-3  gap-4 flex justify-between items-baseline ">
            <div className="flex gap-3 ">
              <i className="bi bi-image"></i>
              <i className="bi bi-emoji-smile-fill"></i>
            </div>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Send Message.."
              className="px-3 py-1 text-sm border rounded-full w-full border-gray-700 "
            />
            <i className="bi bi-mic-fill"></i>
            <button className=" p-3" onClick={create}>
              <i className="bi bi-send "></i>
            </button>
          </div>
        </div>
      </div>

      <div
        id="user2"
        className="border-b border-gray-500 w-auto h-[70px] p-3 overflow-hidden  duration-750 flex justify-start flex-col items-start md:mx-12 hover:bg-gray-800 active:bg-gray-800 rounded"
      >
        <div
          onClick={chageheight2}
          className=" flex justify-start w-full items-center"
        >
          <i id="arrow2" className="bi bi-arrow-left mr-5 hidden"></i>
          <img
            className="w-[40px] mr-9 h-[40px] rounded-full"
            src="https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE="
            alt=""
          />
          <div className="w-[70%]">
            <h1 className="font-bold text-gray-200">Abdul Malik</h1>
            <h1 className="text-sm text-gray-500">say Hi!</h1>
          </div>
          <div className="text-white flex gap-5 px-7 py-3">
            <i className="bi bi-telephone-fill"></i>
            <i className="bi bi-camera-video-fill"></i>
          </div>
        </div>
        <br />
        <div className="bg-gray-900 w-full flex flex-col justify-center items-center ">
          <br />
          <p className=" bg-black px-3 py-1 text-sm text-gray-500 rounded ">
            Today
          </p>

          <div
            id="add2"
            className=" w-full flex flex-col gap-3 justify-center items-end mt-7"
          >
            {/* this is the cantainer where Messages appear */}
          </div>

          <br />
          <div className=" w-full bg-gray-800  p-3  gap-4 flex justify-between items-baseline ">
            <div className="flex gap-3 ">
              <i className="bi bi-image"></i>
              <i className="bi bi-emoji-smile-fill"></i>
            </div>
            <input
              type="text"
              name="message2"
              id="message2"
              placeholder="Send Message.."
              className="px-3 py-1 text-sm border rounded-full w-full border-gray-700 "
            />
            <i className="bi bi-mic-fill"></i>
            <button className=" p-3" onClick={create2}>
              <i className="bi bi-send "></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default contact;

// Metadata moved to a separate file for client-side rendering compatibility
