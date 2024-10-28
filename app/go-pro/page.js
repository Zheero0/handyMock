"use client";
import GoPro from "@/app/components/GoPro";
import { useAuth } from "@/app/authContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoProPage() {
  const { isPro } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isPro) {
      // Redirect to dashboard if user is a Pro
      router.push("/dashboard");
    }
  }, [isPro, router]);

  return (
    <div className="flex flex-1">
      {/* Render GoPro component if user is not a Pro */}
      {!isPro && <GoPro />}
    </div>
  );
}
