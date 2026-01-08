"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomePage() {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // image animation
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    gsap.set(el, { transformStyle: "preserve-3d" });

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y - rect.height / 2) / rect.height) * -35;
      const rotateY = ((x - rect.width / 2) / rect.width) * 35;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6 });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Character-wise text animation
  useEffect(() => {
    const animateText = (element: HTMLElement | null, preserveGradient = false) => {
      if (!element) return;
      
      const text = element.textContent || "";
      const chars = text.split("");
      
      if (preserveGradient) {
        // For gradient text, wrap each char but keep the gradient
        element.innerHTML = chars
          .map(char => `<span style="display: inline-block; background: linear-gradient(to right, #155480, #3c76a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${char === " " ? "&nbsp;" : char}</span>`)
          .join("");
      } else {
        element.innerHTML = chars
          .map(char => `<span style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`)
          .join("");
      }

      const charElements = element.querySelectorAll("span");

      gsap.from(charElements, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4",
        stagger: 0.04,
      });
    };

    animateText(titleRef.current, true); // Pass true for gradient text
    animateText(subtitleRef.current);
    animateText(taglineRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-2 ">
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-2 min-[550px]:gap-6">
          <div
            ref={imageRef}
            className="will-change-transform"
            style={{ perspective: "800px" }}
          >
            <Image
              src="/nortechicon.png"
              alt="Nortech Solutions"
              width={120}
              height={120}
              className="h-[60px] w-[60px] min-[380px]:h-[65px] min-[380px]:w-[65px] min-[550px]:h-[80px] min-[550px]:w-[80px] min-[768px]:h-[120px] min-[768px]:w-[120px] z-50"
              priority
              sizes="(max-width: 380px) 60px, (max-width: 550px) 65px, (max-width: 768px) 80px, 120px"
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="flex flex-col gap-0 min-[550px]:gap-1 -mt-2 min-[550px]:mt-0">
            <h1
              ref={titleRef}
              className="text-[32px] -mb-2 min-[550px]:mb-0 min-[380px]:text-[40px] min-[550px]:text-5xl min-[768px]:text-7xl font-bold tracking-wider text-[#155480]"
            >
              NOR-TECH
            </h1>

            <h2
              ref={subtitleRef}
              className="text-lg min-[380px]:text-xl min-[550px]:text-2xl min-[768px]:text-4xl font-medium tracking-wide text-[#505154]"
            >
              IT Solutions
            </h2>
          </div>
        </div>

        <p
          ref={taglineRef}
          className="text-gray-500 text-[9px] min-[380px]:text-[11px] min-[550px]:text-sm min-[768px]:text-base tracking-[0.3em] uppercase font-medium ml-2"
        >
          SMART, LOGIC, SIMPLE SOLUTIONS
        </p>
      </div>
    </div>
  );
}