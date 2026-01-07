"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; 

export default function NotFound() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigation = () => {
    setLoading(true);
    router.push("/");
  };

  return (
    <div className="flex flex-col text-3xl font-black justify-center items-center h-screen">
      <h1>Page not found</h1>
      <p>Try for a valid path</p>

      <Button
        disabled={loading}
        className="w-40 rounded-lg cursor-pointer h-[40px] mt-5 bg-[#2563EB] text-white hover:bg-blue-500 dark:bg-[#BEDBFE] dark:text-[#172554] dark:hover:bg-[#95afd3] duration-200 transform active:scale-95 transition-transform"
        onClick={handleNavigation}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" />
            Loading...
          </div>
        ) : (
          "Go to HomePage"
        )}
      </Button>
    </div>
  );
}
