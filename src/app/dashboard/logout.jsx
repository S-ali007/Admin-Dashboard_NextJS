import React from "react";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";
import { removeUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const router = useRouter();
  const cookies = new Cookies();
  const dispatch = useDispatch(); 

  const handleSubmit = (e,id) => {
    e.preventDefault();
    cookies.remove("userToken");
   
    dispatch(removeUser({id})); 
    router.push("/");
    toast.success("Successfully logged out!");
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="w-full h-12 flex flex-col items-center justify-center transition-all duration-300 ease-in-out mt-6 text-base font-medium leading-4 text-center text-white bg-blue-700 rounded hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
