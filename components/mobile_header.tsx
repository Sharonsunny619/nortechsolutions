// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import gsap from "gsap";
// import { nav } from "./data";

// export function MobileNav({
//   isScrolled,
// }: {
//   isScrolled: {
//     scrolled: boolean;
//   };
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("");
//   const menuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const menu = menuRef.current;
//     if (!menu) return;

//     if (isOpen) {
//       // Fade in animation
//       gsap.fromTo(
//         menu,
//         {
//           opacity: 0,
//           y: -10,
//           scale: 0.95,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [isOpen]);

//   const handleClose = () => {
//     const menu = menuRef.current;
//     if (!menu) {
//       setIsOpen(false);
//       return;
//     }

//     // Fade out animation
//     gsap.to(menu, {
//       opacity: 0,
//       y: -10,
//       scale: 0.95,
//       duration: 0.2,
//       ease: "power2.in",
//       onComplete: () => {
//         setIsOpen(false);
//       },
//     });
//   };

//   return (
//     <div className="lg:hidden ">
//       <Button
//         variant="ghost"
//         size="sm"
//         onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
//         className={`cursor-pointer rounded-full hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300`}
//       >
//         {isOpen ? (
//           <X
//             className={`h-5 w-5 ${
//               isScrolled?.scrolled ? "text-black" : "text-white"
//             }`}
//           />
//         ) : (
//           <Menu
//             className={`h-5 w-5 ${
//               isScrolled?.scrolled ? "text-black" : "text-white"
//             }`}
//           />
//         )}
//       </Button>

//       {isOpen && (
//         <div
//           ref={menuRef}
//           className="absolute top-14 w-auto left-0 right-0 mx-4 rounded-2xl bg-gradient-to-tr from-[#155480] via-transparent to-[#8a8b8a] backdrop-blur-xl border border-[1px] border-gray-400 p-3"
//         >
//           {nav.map((item) => {
//             const isActive = activeTab === item.name;
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => {
//                   setActiveTab(item.name);
//                   handleClose();
//                 }}
//                 className={`relative px-4 y-2.p5 text-[14px] xl2:text-[15px] font-medium rounded-full transition-colors
//   before:absolute before:left-1/2 before:bottom-0 before:h-[3px] before:-translate-x-1/2
//   before:rounded-full before:transition-all before:duration-300  text-white flex flex-col  py-2
//   ${
//     isActive
//       ? `bg-clip-text text-transparent
//                      before:w-0  transition duration-400 tracking-[3px]`
//       : `  before:w-0  `
//   }

//               `}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { nav } from "./data";

export function MobileNav() {
  const [active, setActive] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const match = nav.find((n) => n.href === hash);
      if (match) return match.name;
    }
    return nav[0]?.name ?? "";
  });
  const portalTarget = typeof window !== "undefined" ? document.body : null;
  if (!portalTarget) return null;

  const homeHref =
    nav.find((n) => n.name.toLowerCase() === "home")?.href || "#home";

  const bar = (
    <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-full px-0 pb-[env(safe-area-inset-bottom)] pointer-events-none">
      <div className="relative bg-white/70 backdrop-blur-lg shadow-[0_2px_30px_rgba(120,140,190,0.35)] rounded-t-[40px] rounded-b-none px-4 py-5 border-none flex items-center justify-between gap-2 border border-gray-200 pointer-events-auto overflow-visible">
        {/* Center floating Nortech icon */}
        <button
          type="button"
          onClick={() => {
            setActive(nav.find((n) => n.href === homeHref)?.name || "Home");
            window.location.href = homeHref;
          }}
          className="absolute -top-8 min-[553px]:-top-9 ml-0 min-[553px]:ml-1 min-[670px]:ml-0 min-[670px]:-top-7 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-[#f3f4f5]/80 backdrop-blur-3xl  shadow-[0_20px_28px_rgba(120,140,190,0.35)]
 border-4 border-white flex items-center justify-center transition-transform active:scale-95"
        >
          <Image
            src="/nortechicon.png"
            alt="Nortech Home"
            width={28}
            height={28}
            className="h-9 w-9 "
            priority
          />
        </button>

        {nav.map((item) => {
          const isActive = active === item.name;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className="relative flex-1 flex items-center justify-center px-1"
            >
              <span
                className={`flex gap-2 relative text-[15px] min-[670px]:text-[16px] font-medium transition-colors before:absolute before:left-1/2 before:bottom-0 before:h-[3px] before:-translate-x-1/2 before:rounded-full before:transition-all before:duration-300 ${
                  isActive
                    ? "bg-clip-text text-transparent bg-linear-to-r from-blue-300 via-blue-500 to-blue-900 before:w-11/12 before:bg-linear-to-r before:from-blue-250 before:via-blue-300 before:to-blue-500  before:-mb-1"
                    : "text-gray-600 before:w-0"
                }`}
              >
               <span className={`${isActive && "text-blue-400"} mt-1`}> {item.icon}</span>
                <span className="min-[555px]:flex hidden">{item.name}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return createPortal(bar, portalTarget);
}
