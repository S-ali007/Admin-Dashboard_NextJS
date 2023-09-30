'use client'
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import React from "react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cookies = new Cookies();
    cookies.remove("userToken");

    router.push("/");
    toast.success("Successfully logged out!");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="p-12 m-auto max-w-[547px] border-slate-300 border border-rounded w-full shadow rounded bg-white text-red">
        <div className="mx-auto head-logo">
          <p className="pt-6 text-2xl font-semibold leading-6 text-center text-slate-800">
            Dashboard
          </p>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full h-12 flex flex-col items-center justify-center transition-all duration-300 ease-in-out mt-6 text-base font-medium leading-4 text-center text-white bg-blue-700 rounded hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
