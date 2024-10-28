"use client";
import { useEffect } from "react";
import { useAuth } from "../authContext";
import React from "react";
import MustBePro from "./MustBePro";
import ProProfiles from "./ProProfiles";
import Dashboard from "./Dashboard";
import { useRouter } from "next/navigation";

export default function ProSignUpAuth() {
  const { isPro } = useAuth();
  const router = useRouter();

 
    // Redirect to /dashboard
  ;


    let children = (
      <MustBePro text={" join the Directory" } />
    );

    if (isPro) {
          router.push("/dashboard");
    }

  return <div>{children}</div>;
}
