import React from 'react'
import Swal from 'sweetalert2';
import { icon } from '@fortawesome/fontawesome-svg-core';


const about = () => {


  return (
   <div className="flex flex-wrap justify-center items-center">
  
  <div className="border-b border-gray-500 gap-2 md:gap-0 w-full py-2 pt-9 px-6 md:p-9 flex justify-center items-center">
 
    <input type="text" name="searchbar" id="searchbar" placeholder="Enter username here!" className="border border-gray-400 p-2 px-6 rounded-full w-full" />
   <button>
   <i className='bi bi-search text-2xl text-gray-400 font-bold p-3  hover:border active:bg-gray-600  md:mx-4 duration-100 '></i>
   </button>
   </div>
   </div>
  );
}

export default about
