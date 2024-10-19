"use client"
import React from "react";
import { useAuth } from "../authContext";
import ProListings from "./ProListings";
import MustBePro from "./MustBePro";



export default function ProAuth() {

  const { isPro } = useAuth();

    let children = (
        <MustBePro/>
    );
  
  if (isPro) {
    children = (
    <ProListings/>
  )    
  }
  
  return(
  <div>
    {children}
    </div>
  )
}
