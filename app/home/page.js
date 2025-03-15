"use client";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent Font Awesome from auto-adding CSS
import Swal from "sweetalert2";
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(" 0");
  function like() {
    if (num === " 0") setNum(" 1");
    else {
      setNum(" 0");
    }
  }
  function display() {
    let y = document.getElementById("follwing");
    y.style.display = "none";

    let x = document.getElementById("foryou");
    x.style.display = "flex";

    let b = document.getElementById("foryoubutton");
    b.style.backgroundColor = "rgb(17, 16, 16)";

    let bb = document.getElementById("follwingbutton");
    bb.style.backgroundColor = "black";
  }
  function display2() {
    let y = document.getElementById("follwing");
    y.style.display = "flex";

    let x = document.getElementById("foryou");
    x.style.display = "none";

    let b = document.getElementById("foryoubutton");
    b.style.backgroundColor = "black";

    let bb = document.getElementById("follwingbutton");
    bb.style.backgroundColor = "rgb(17, 16, 16)";
  }

  function createPost() {
    let a = document.createElement("div");
    a.className =
      " border-b border-gray-500 py-7 pl-4 pr-2 md:pr-6 w-full mt-13 flex";

    let b = document.createElement("div");
    b.className = " md:w-1/15 flex justify-end items-start";
    a.appendChild(b);

    let image = document.createElement("img");
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SGd3hrFih4myNDpd3LKAMkKlUGD3sOiHaQ&s";
    image.className = "w-[45px] h-[40px] md:w-[50px] md:h-[50px] rounded-full";
    b.appendChild(image);

    let c = document.createElement("div");
    c.className = " w-full pl-3";
    a.appendChild(c);

    // this is the child
    let d = document.createElement("div");
    d.className = " w-full flex justify-between";
    c.appendChild(d);

    let e = document.createElement("div");
    e.className = "flex items-baseline";
    d.appendChild(e);

    let f = document.createElement("p");
    f.className = "font-bold hover:underline cursor-pointer active:underline";
    e.appendChild(f);
    f.innerHTML = "Rizwan Ahmed";

    let g = document.createElement("p");
    g.className = "px-3 text-[12px] text-gray-400";
    e.appendChild(g);
    g.innerHTML = "@irizwanahmed";

    let h = document.createElement("div");
    d.appendChild(h);
    let i = document.createElement("i");
    i.className = "bi bi-three-dots px-4 text-gray-300 hover:text-white";
    h.appendChild(i);
    let j = document.createElement("i");
    j.className = "bi bi-x px-4 text-gray-300 hover:text-white";
    h.appendChild(j);

    let k = document.createElement("p");
    k.className =
      "  leading-4 text-[13px] md:text-[16px] md:leading-5 tracking-wider pt-5 pb-3";
    c.appendChild(k);
    let text = document.getElementById("post");
    k.innerHTML = text.value;
    text.value = "";

    let l = document.createElement("div");
    l.className = "  cursor-pointer flex justify-between border border-gray-700 px-3 py-2  ";
    c.appendChild(l);

    let m = document.createElement("i");
    let n = document.createElement("i");
    let o = document.createElement("i");
    let p = document.createElement("i");
    m.className = "bi bi-hand-thumbs-up-fill not-italic";
    m.innerHTML = `${num}`;
    m.onclick = {like};
    n.className = "bi bi-chat-fill no-italic";
    o.className = "bi bi-repeat no-italic";
    p.className = "bi bi-share no-italic";
    l.appendChild(m);
    l.appendChild(n);
    l.appendChild(o);
    l.appendChild(p);

    let z = document.getElementById("foryou");
    z.appendChild(a);
  }

  

  return (
    <div className=" justify-center items-start">
      <div className=" bg-black flex justify-around item sticky top-0 w-full">
        <p
          id="foryoubutton"
          onClick={display}
          className=" bg-[#171616] shadow-inner shadow-blackr p-[10px] text-center  w-1/2"
        >
          For you
        </p>
        <p
          id="follwingbutton"
          onClick={display2}
          className=" p-[10px] text-center w-1/2"
        >
          Follwing
        </p>
      </div>

      <div className=" w-[100%]">
        <div id="foryou" className="flex flex-col   w-full">
          <div className="w-full p-3 md:px-9">
            <div className=" flex">
              <img
                className="w-13 h-13 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SGd3hrFih4myNDpd3LKAMkKlUGD3sOiHaQ&s"
                alt=""
              />
              <textarea
                name="post"
                id="post"
                placeholder="What's in Your Mind?"
                className="flex flex-wrap text-start w-full px-3 py-5 pb-3 outline-none border-b border-gray-500"
              ></textarea>
            </div>

            <div className="flex border-b pb-7 border-gray-500 w-full justify-between md:justify-start">
              <div className=" px-9 mt-1 flex justify-center">
                <i className="text-blue-800 bi bi-image text-2xl -z-3 h-full flex items-center justify-center translate-x-6"></i>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  className="text-blue-800 w-6   border-white opacity-0"
                />
              </div>

              <div className="  mt-1">
                <button
                  onClick={createPost}
                  className="bg-blue-600 px-6 text-[10px] py-2 rounded-full hover:bg-blue-700"
                >
                  Post
                </button>
              </div>
            </div>

            <div
              id="post2"
              className=" border-b border-gray-500 py-3 px-2 w-full mt-13 flex"
            >
              <div className=" md:w-1/15 flex justify-end items-start">
                <img
                  className="w-[45px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SGd3hrFih4myNDpd3LKAMkKlUGD3sOiHaQ&s"
                  alt=""
                />
              </div>

              <div className=" w-full pl-3">
                <div className=" w-full flex justify-between">
                  <div className="flex items-baseline">
                    <h1 className="font-bold hover:underline cursor-pointer active:underline">
                      Rizwan Ahmed
                    </h1>
                    <p className="px-3 text-[12px] text-gray-400">
                      @rizwanahmed
                    </p>
                  </div>

                  <div>
                    <i className="bi bi-three-dots px-4 text-gray-300 hover:text-white"></i>
                    <i className="bi bi-x px-4 text-gray-300 hover:text-white"></i>
                  </div>
                </div>
                <p className=" leading-4 text-[13px] md:text-[16px] md:leading-5 py-2 tracking-wider ">
                  Quetta Gladiators owner Nadeem Omar has announced Pakistan’s
                  Champions Trophy winning captain Sarfaraz Ahmad as Team
                  Director of the franchise. Sarfaraz led Gladiators to their
                {num}</p>

                <div className="flex justify-between border border-gray-700 px-3 py-2 ">
                  <i
                    onClick={like}
                    className="bi bi-hand-thumbs-up-fill not-italic"
                  >
                    {num}
                  </i>
                  <i className="bi bi-chat-fill"></i>
                  <i className="bi bi-repeat"></i>
                  <i className="bi bi-bookmark"></i>
                  <i className="bi bi-share "></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="follwing" className="  hidden w-full">
          follwing
        </div>
      </div>
    </div>
  );
}
