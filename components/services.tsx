"use client";
import  { useEffect, useState, useRef, type ReactElement } from "react";
import { servicesData } from "./data";
import { Roboto } from "next/font/google";
import { gsap } from "gsap";
import Image, { type StaticImageData } from "next/image";
 
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});



export default function Services() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const [hoveredPoint, setHoveredPoint] = useState<{
    image: StaticImageData | string | undefined;
    description: string;
  } | null>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const preloadedImages = useRef<Set<string>>(new Set());

  // Preload images for the active service and nearby services
  useEffect(() => {
    const preloadImage = (imageSrc: StaticImageData | string) => {
      if (!imageSrc) return;
      const src = typeof imageSrc === 'string' ? imageSrc : (imageSrc as StaticImageData).src;
      if (preloadedImages.current.has(src)) return;
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      preloadedImages.current.add(src);
    };

    // Preload images for active service and next service
    const activeService = servicesData.find((s) => s.id === activeId);
    const nextService = servicesData.find((s) => s.id === activeId + 1);
    
    if (activeService) {
      activeService.points.forEach((point) => {
        if (point.image) preloadImage(point.image);
      });
    }
    
    if (nextService) {
      nextService.points.forEach((point) => {
        if (point.image) preloadImage(point.image);
      });
    }
  }, [activeId]);

  // Preload all service icons on mount for instant switching
  useEffect(() => {
    const preloadServiceIcon = (iconElement: ReactElement) => {
      try {
        const props = (iconElement as ReactElement<{ src?: string | StaticImageData }>)?.props;
        if (props && props.src) {
          const src = typeof props.src === 'string' 
            ? props.src 
            : (props.src as StaticImageData)?.src;
          if (src && !preloadedImages.current.has(src)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
            preloadedImages.current.add(src);
          }
        }
      } catch {
        // Silently fail if icon structure is unexpected
      }
    };

    // Preload all service icons
    servicesData.forEach((service) => {
      preloadServiceIcon(service.icon as ReactElement);
    });

    // Preload first service hover images
    const firstService = servicesData[0];
    if (firstService) {
      firstService.points.slice(0, 2).forEach((point) => {
        if (point.image) {
          const src = typeof point.image === 'string' ? point.image : point.image.src;
          if (!preloadedImages.current.has(src)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
            preloadedImages.current.add(src);
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(Number(entry.target.getAttribute("data-id")));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".service-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Listen for hover events to update state
  useEffect(() => {
    const handlePointHover = (e: CustomEvent) => {
      setHoveredPoint({ image: e.detail.image, description: e.detail.description });
    };
    
    const handlePointLeave = () => {
      setHoveredPoint(null);
    };

    window.addEventListener('pointHover', handlePointHover as EventListener);
    window.addEventListener('pointLeave', handlePointLeave);

    return () => {
      window.removeEventListener('pointHover', handlePointHover as EventListener);
      window.removeEventListener('pointLeave', handlePointLeave);
    };
  }, []);

  useEffect(() => {
    if (!descriptionRef.current) return;

    const descriptionEl = descriptionRef.current;
    let firstEnter = true;
    let isFollowing = false;

    // Set initial position
    gsap.set(descriptionEl, { yPercent: -50, xPercent: -50 });

    // Shared functions for all point items
    const setX = gsap.quickTo(descriptionEl, "x", { duration: 0.4, ease: "power3" });
    const setY = gsap.quickTo(descriptionEl, "y", { duration: 0.4, ease: "power3" });
    
    const align = (e: MouseEvent) => {
      if (firstEnter) {
        setX(e.clientX, e.clientX);
        setY(e.clientY, e.clientY);
        firstEnter = false;
      } else {
        setX(e.clientX);
        setY(e.clientY);
      }
    };

    const startFollow = () => {
      if (!isFollowing) {
        isFollowing = true;
        document.addEventListener("mousemove", align);
      }
    };
    
    const stopFollow = () => {
      if (isFollowing) {
        document.removeEventListener("mousemove", align);
        isFollowing = false;
      }
      firstEnter = true;
    };

    const fade = gsap.to(descriptionEl, {
      autoAlpha: 1,
      ease: "none",
      paused: true,
      duration: 0.1,
      onReverseComplete: stopFollow,
    });

    const pointItems = document.querySelectorAll(".point-item");
    const eventHandlers: Array<{
      element: Element;
      mouseenter: (e: Event) => void;
      mouseleave: () => void;
    }> = [];
    
    pointItems.forEach((el) => {
      const mouseenterHandler = (e: Event) => {
        firstEnter = true;
        const serviceId = el.getAttribute("data-service-id");
        const pointIndex = el.getAttribute("data-point-index");
        
        // Find the point from servicesData
        if (serviceId && pointIndex) {
          const service = servicesData.find(s => s.id === Number(serviceId));
          const point = service?.points[Number(pointIndex)];
          
          if (point) {
            window.dispatchEvent(new CustomEvent('pointHover', { 
              detail: { image: point.image, description: point.description } 
            }));
          }
        }
        
        fade.play();
        startFollow();
        align(e as MouseEvent);
      };

      const mouseleaveHandler = () => {
        window.dispatchEvent(new CustomEvent('pointLeave'));
        fade.reverse();
      };

      el.addEventListener("mouseenter", mouseenterHandler);
      el.addEventListener("mouseleave", mouseleaveHandler);

      eventHandlers.push({
        element: el,
        mouseenter: mouseenterHandler,
        mouseleave: mouseleaveHandler,
      });
    });

    return () => {
      eventHandlers.forEach(({ element, mouseenter, mouseleave }) => {
        element.removeEventListener("mouseenter", mouseenter);
        element.removeEventListener("mouseleave", mouseleave);
      });
      if (isFollowing) {
        document.removeEventListener("mousemove", align);
      }
      fade.kill();
    };
  }, []);

  const activeService =
    servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section
      id="ourservices"
      className={`w-full min-h-screen flex flex-col md:flex-row relative z-30 bg-[#f3f4f5] dark:bg-black  shadow-[10px_0px_30px_rgba(0,0,0,0.1)]
        ${roboto.className}`}
    >
      {/* Fixed description element that follows cursor */}
      <div
        ref={descriptionRef}
        className="fixed top-0 left-0 w-[350px] max-w-[90vw] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-[9999] opacity-0 invisible pointer-events-none flex flex-col gap-3"
      >
        {hoveredPoint?.image && (
          <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
            <Image
              src={hoveredPoint.image}
              alt="Service point"
              fill
              className="object-cover"
              sizes="350px"
              loading="eager"
            />
          </div>
        )}
        {hoveredPoint?.description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {hoveredPoint.description}
          </p>
        )}
      </div>
      {/* Left Side - Scrollable Content */}
      <div className="w-full md:w-1/2 py-20 px-[8%] flex flex-col gap-20">
        <div className="mb-10">
          <h4 className="text-sm font-normal text-black text-light tracking-widest dark:text-gray-400 mb-2">
            (Our Service)
          </h4>
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight ">
            Expert Care for Your Specific Needs
          </h2>
          <p className="text-black dark:text-gray-300 text-base leading-relaxed">
            Comprehensive IT solutions designed to elevate your business
            operations and drive growth in the digital age.
          </p>
        </div>

        {servicesData.map((service) => (
          <div
            key={service.id}
            data-id={service.id}
            className="service-item flex flex-col justify-center group min-h-[65vh]"
          >
            <div className="md:hidden mb-4 text-[#000] dark:text-white">
              {service.icon}
            </div>

            <h3 className="text-3xl font-bold mb-2 text-[#000] dark:text-[#5fa8e6]">
              {service.title}
            </h3>

            <h4 className="text-lg font-semibold mb-4 text-[#000] dark:text-gray-200">
              {service.heading}
            </h4>

            <p className="text-md text-black dark:text-gray-300 leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3 mt-3">
              <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                {service.points.map((point, index) => (
                  <>
                    {index !== 0 && (
                      <div className="bg-gray-400 h-[1px] w-full" />
                    )}

                    <li
                      key={index}
                      className="point-item flex flex-col gap-1 text-gray-700 dark:text-gray-300"
                      data-service-id={service.id}
                      data-point-index={index}
                    >
                      <span className="font-light hover:font-bold cursor-pointer">{point.title}</span>
                    </li>
                    {index === service.points?.length - 1 && (
                      <div className="bg-gray-400 h-[1px] w-full" />
                    )}
                  </>
                ))}
              </ul>
            </ul>
          </div>
        ))}

        <div className="h-20"></div>
      </div>

      <div className="hidden md:flex w-1/2  h-screen sticky top-12 z-30 bg-[#f3f4f5] dark:bg-[#111] items-center justify-center border-none">
        <div className="text-[#155480] z-30 dark:text-white mb-8 transition-all duration-500 transform scale-110">
          {activeService.icon}
        </div>
      </div>
    </section>
  );
}
