"use client";
import React from "react"; // Ensure React is imported correctly
import Login from "./Login";
import { useAuth } from "../authContext";
import Dashboard from "./Dashboard";


export default function DashboardAuth() {
    const { isAuthenticated} = useAuth()



    let children = <Login />;
    if (isAuthenticated) {
        children = <Dashboard/>
    }
    
  return (
    <div className="">
  {children}
    </div>
  );
}
