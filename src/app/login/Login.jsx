"use client";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username.trim() == "") {
      return toast.error("please Enter email ");
    }
    if (formData.password.trim() == "") {
      return toast.error("please Enter password ");
    }
    const cookies = new Cookies();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.token) {
          cookies.set("userToken", data.token);
          router.push("/dashboard");
          toast.success("Successfully logged In!");
        } else {
          toast.error(" Invaild Credentials");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="p-12 m-auto max-w-[547px] border-slate-300 border border-rounded w-full shadow rounded bg-white text-red">
        <div className="mx-auto head-logo">
          <p className="pt-6 text-2xl font-semibold leading-6 text-center text-slate-800">
            Sign In Now
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-8">
            <p className="text-base font-medium leading-none text-slate-800">
              Email
            </p>
            <input
              autoComplete="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border rounded outline-none placeholder:text-base placeholder:text-slate-600 focus:bg-gray-50 border-slate-300"
            />
          </div>
          <div className="mt-8">
            <p className="text-base font-medium leading-none text-slate-800">
              Password
            </p>
            <input
              autoComplete="current-password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border rounded outline-none placeholder:text-base placeholder:text-slate-600 focus:bg-gray-50 border-slate-300"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 flex flex-col items-center justify-center transition-all duration-300 ease-in-out mt-6 text-base font-medium leading-4 text-center text-white bg-blue-700 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
