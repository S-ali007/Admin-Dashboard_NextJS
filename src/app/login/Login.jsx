"use client";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { loginUser } from "../redux/slice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch(); // Initialize useDispatch

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userDispatch = async (e) => {
    // Make userDispatch an async function
    e.preventDefault();

    if (formData.username.trim() === "") {
      return toast.error("Please enter an email.");
    }
    if (formData.password.trim() === "") {
      return toast.error("Please enter a password.");
    }

    const cookies = new Cookies();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        cookies.set("userToken", data.token);
        router.push("/dashboard");
        toast.success("Successfully logged in!");
        dispatch(loginUser(data)); 
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-12 m-auto max-w-[547px] border-slate-300 border border-rounded w-full shadow rounded bg-white text-red">
        <div className="mx-auto head-logo">
          <p className="pt-6 text-2xl font-semibold leading-6 text-center text-slate-800">
            Sign In Now
          </p>
        </div>
        <form onSubmit={userDispatch}>
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
