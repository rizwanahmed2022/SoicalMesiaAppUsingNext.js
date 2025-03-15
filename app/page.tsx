
import Link from "next/link";

export default function Home() {


  return (
    <div className=" justify-center items-start">
      <div className=" flex justify-center items-center w-full absolute left-0 top-0 h-full bg-gray-800">
        <div className="w-[96%] md:w-[40%] py-9 rounded-xl shadow-2xl bg-black  flex flex-col justify-center px-9">
<div className="flex justify-center items-center ">
  <img className="w-35 md:w-49 rounded-full " src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R180466800&ga=GA1.1.62610198.1735049720&semt=ais_hybrid" alt="" />
</div>
          <br />
          <br />
          <br />
          <input className="bg-gray-700 py-2 px-4 rounded shadow shadow-white" type="text" name="fullName" id="fullName" placeholder="Enter Your Full Name"  required/>
          <br />
          <input className="bg-gray-700 py-2 px-4 rounded shadow shadow-white" type="text" name="fullName" id="fullName" placeholder=" username  @example123"  required />
          <br />
          <h1 className="font-bold tracking-widest leading-9  px-2 shadow shadow-white ">
            Upload Picture
          </h1>
          <input type="file"  id="profilePicture" className="bg-black text-blue-600 hover:underline border border-t-0 border-gray-500 px-2" required />
          <br />
          <Link className=" md:block  bg-blue-800 text-center py-2 md:py-3  hover:shadow-xl duration-750 shadow-blue-900" href="/home">Sign up</Link>
          <br />
          <Link className=" md:block  bg-blue-800 text-center py-2 md:py-3  hover:shadow-xl duration-750 shadow-blue-900" href="/home">Guest Account</Link>

        </div>
      </div>
    </div>

  );
}

