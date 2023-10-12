"use client";
import React, { useEffect } from "react";
import Logout from "./logout";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Cookies } from "react-cookie";
import { data } from "autoprefixer";
const Dashboard = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="p-12 m-auto max-w-[547px] border-slate-300 border border-rounded w-full shadow rounded bg-white text-red">
        <div className="w-full flex "></div>
        {userData.map((item, id) => {
          return (
            <div key={id} className="flex  items-center justify-between">
              <div className="flex flex-wrap">
                <div>Logged In As :</div>
                <div className="font-bold">{item.name.firstName}</div>
              </div>
              <div className="border">
                {" "}
                <Image
                  src={item.name.image}
                  width={100}
                  height={100}
                  alt=""
                  priority={true}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-12 m-auto max-w-[547px] border-slate-300 border border-rounded w-full shadow rounded bg-white text-red">
        <div className="mx-auto head-logo">
          <p className="pt-6 text-2xl font-semibold leading-6 text-center text-slate-800">
            Dashboard
          </p>
        </div>
        <Logout />
      </div>
    </main>
  );
};

export default Dashboard;
