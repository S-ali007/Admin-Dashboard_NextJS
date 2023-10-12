"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";
import { useContext } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    try {
      const cookies = new Cookies();
      const userToken = cookies.get("userToken");

      fetch("https://dummyjson.com/auth/RESOURCE", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${userToken}`,
          "Content-Type": "application/json",
          body: JSON.stringify(),
        },
      })

      fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      
    })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // setUser(...data);
        })
       
    } catch (error) {
      // toast.error(`Error in loading current user: ${error.message}`);
      console.error("Error in loading current user:", error);
      // setUser(undefined)
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
// const {user , setuser } = useContext()
