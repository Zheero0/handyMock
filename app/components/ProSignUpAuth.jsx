"use client";
import { useAuth } from "../authContext";
import React from "react";
import MustBePro from "./MustBePro";
import ProProfiles from "./ProProfiles";
import Dashboard from "./Dashboard";

export default function ProSignUpAuth() {
  const { isPro } = useAuth();

    let children = (
      <MustBePro text={" join the Directory" } />
    );

    if (isPro) {
        children = <Dashboard/>
    }

  return <div>{children}</div>;
}
