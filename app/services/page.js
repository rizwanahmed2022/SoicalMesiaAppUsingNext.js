import React from 'react'
import Swal from "sweetalert2";

const services = () => {
 
 function rizwan(){

   Swal.fire({
     title: "All Good!",
     icon: "success",
     draggable: true
    });
  }




  return (
   <div className="flex flex-wrap justify-center items-center">
  
    <button  onClick={rizwan()} className="bg-red-600 text-white py-2 px-14 rounded-[5px]  font-bold my-30 mx-auto cursor-pointer hover:bg-green-600 duration-200 active:bg-black focus:bg-yellow-300 "> Click Me</button>
    <button  onClick={rizwan()} className="bg-red-600 text-white py-2 px-14 rounded-[5px]  font-bold my-30 mx-auto cursor-pointer hover:bg-green-600 duration-200 active:bg-black focus:bg-yellow-300 "> Click Me</button>
    <button  onClick={rizwan()} className="bg-red-600 text-white py-2 px-14 rounded-[5px]  font-bold my-30 mx-auto cursor-pointer hover:bg-green-600 duration-200 active:bg-black focus:bg-yellow-300 "> Click Me</button>
  
   </div>
  );
}

export default services
