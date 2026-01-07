"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MobileNav } from "./mobile_header";
import { nav } from "./data";

export function SiteHeader() {
 
  const [activeTab, setActiveTab] = useState("");
  const [isScrolled, setIsScrolled] = useState({
    scrolled: false,
  });

  useEffect(() => {
    const sectionIds = nav.map((item) => item.href.replace("#", ""));
    const sections: HTMLElement[] = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(
              nav.find((item) => item.href === `#${entry.target.id}`)?.name ||
                ""
            );
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScrollTopReset = () => {
      if (window.scrollY <= 20) {
        setActiveTab("");
      }
    };

    window.addEventListener("scroll", handleScrollTopReset);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTopReset);
    };
  }, [nav]);

  useEffect(() => {
    const initializeScroll = () => {
      const scrollThreshold = 110;
      setIsScrolled((prev) => ({
        ...prev,
        scrolled: window.scrollY > scrollThreshold,
      }));
    };

    initializeScroll();

    const handleScroll = () => {
      const scrollThreshold = 110;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled((prev) => ({ ...prev, scrolled: true }));
      } else {
        setIsScrolled((prev) => ({ ...prev, scrolled: false }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 px-4 md:px-6 lg:px-12 py-4 transition-colors duration-300 ${
        isScrolled?.scrolled
          ? "bg-white/20 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between gap-4">
        {/* Combined Logo and Nav (left) */}
        <div className="group items-center justify-center gap-2 md:flex hidden">
          <Link
            href="/"
            onClick={(e) => {
               setActiveTab("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/NortechIcon.png"
              alt="Nortech Solutions"
              width={10}
              height={10}
              className="h-9 w-10 transition-all duration-300 hover:drop-shadow-[-1px_-1px_6px_#225b85,1px_1px_6px_#666668]"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center bg-transparent">
            <div className="w-px h-6 bg-slate-300/50 mx-2"></div>
            <nav className="flex items-center">
              {nav.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                     onClick={() => setActiveTab(item.name)}
                    className={`relative px-2.5 xl:px-5 py-2.5 text-[14px] xl2:text-[15px] font-medium rounded-full transition-colors
  before:absolute before:left-1/2 before:bottom-0 before:h-[3px] before:-translate-x-1/2
  before:rounded-full before:transition-all before:duration-300 
  ${
    isActive
      ? `bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 
                     before:w-0 hover:before:w-4/5 before:bg-gradient-to-r before:from-blue-100 before:via-blue-300 before:to-blue-500`
      : `${
          isScrolled?.scrolled ? "text-black" : "text-white"
        } before:w-0 hover:before:w-4/5 before:bg-gradient-to-r before:from-blue-100 before:via-blue-300 before:to-blue-500`
  }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="w-px h-6 bg-slate-300/50 mx-2"></div>
          </div>
        </div>
        <div className="w-px h-6 bg-transparent mx-2"></div>

        {/* Mobile Logo */}
        <div className="md:hidden flex">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/NortechIcon.png"
              alt="Nortech Solutions"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
            <span
              className={`text-lg font-semibold ${
                isScrolled?.scrolled ? "text-black" : "text-white"
              }`}
            >
              Nortech
            </span>
          </Link>
        </div>

        {/* Mobile: logo left stays, actions replaced with compact menu */}
        <div className="md:hidden justify-self-end">
          {/* <MobileNav isScrolled={isScrolled} /> */}
          <MobileNav />

        </div>
      </div>
    </header>
  );
}
