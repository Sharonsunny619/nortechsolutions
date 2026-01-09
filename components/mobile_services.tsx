"use client";
import React, { useState, type ReactElement } from "react";
import { servicesData } from "./data";
import Image, { type StaticImageData } from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

function MobileServices() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<{
    serviceId: number;
    pointIndex: number;
  } | null>(null);

  const getIconSrc = (icon: ReactElement): StaticImageData | null => {
    try {
      const props = (icon as ReactElement<{ src?: string | StaticImageData }>)
        ?.props;
      if (props && props.src) {
        return props.src as StaticImageData;
      }
    } catch {
      // Silently fail if icon structure is unexpected
    }
    return null;
  };

  const handleServiceClick = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setSelectedPoint(null);
    } else {
      setExpandedId(id);
      setSelectedPoint(null);
    }
  };

  const handlePointClick = (serviceId: number, pointIndex: number) => {
    if (
      selectedPoint?.serviceId === serviceId &&
      selectedPoint?.pointIndex === pointIndex
    ) {
      setSelectedPoint(null);
    } else {
      setSelectedPoint({ serviceId, pointIndex });
    }
  };

  return (
    <section
      className={`min-[1210px]:hidden w-full py-8 px-4 bg-[#f3f4f5] z-30 relative dark:bg-black ${roboto.className}`}
    >
      <div className="mb-10">
        <h4 className="text-sm font-normal text-black text-light tracking-widest dark:text-gray-400 mb-2">
          (Our Service)
        </h4>
        <h2 className="text-4xl font-bold text-black dark:text-white mb-6 leading-tight">
          Expert Care for Your Specific Needs
        </h2>
        <p className="text-black dark:text-gray-300 text-base leading-relaxed">
          Comprehensive IT solutions designed to elevate your business
          operations and drive growth in the digital age.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {servicesData.map((service) => {
          const isExpanded = expandedId === service.id;
          const isPointSelected = selectedPoint?.serviceId === service.id;

          return (
            <div
              key={service.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-1000 ease-in-out relative hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:border-blue-400 border border-transparent ${
                isExpanded ? "shadow-xl" : ""
              }`}
            >
              {/* Header / Collapsed View - Click to toggle */}
              <div
                className={`flex gap-4 p-4 cursor-pointer transition-all duration-[400ms] ease-in-out transform ${
                  isExpanded
                    ? "max-h-0 opacity-0 overflow-hidden scale-95"
                    : "max-h-[200px] opacity-100 scale-100"
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Image on left */}
                <div className="w-24 h-24 flex-shrink-0 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  {(() => {
                    const iconSrc = getIconSrc(service.icon as ReactElement);
                    return iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    ) : null;
                  })()}
                </div>

                {/* Title and description on right */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-black dark:text-white line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Expanded Content Container */}
              <div
                className={`transition-all duration-[400ms] ease-in-out ${
                  isExpanded
                    ? "max-h-[5000px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {/* Expanded Service View */}
                <div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <div className="w-full px-4 pt-4 relative">
                      <div className="w-full relative overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-xl min-[1050px]:w-[500px] min-[1050px]:h-[500px] min-[900px]:w-[450px] min-[900px]:h-[450px] min-[610px]:w-[400px] min-[610px]:h-[400px] min-[610px]:mx-auto">
                        {(() => {
                          const iconSrc = getIconSrc(
                            service.icon as ReactElement
                          );
                          return iconSrc ? (
                            <Image
                              src={iconSrc}
                              alt={service.title}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="w-full h-auto min-[610px]:h-full min-[610px]:w-full min-[610px]:object-contain object-contain"
                            />
                          ) : null;
                        })()}
                      </div>
                    </div>

                    <div className="px-4 pt-4">
                      <h3 className="text-2xl font-bold mb-2 text-black dark:text-[#5fa8e6]">
                        {service.title}
                      </h3>

                      <h4 className="text-lg font-semibold mb-3 text-black dark:text-gray-200">
                        {service.heading}
                      </h4>

                      <p className="text-base text-black dark:text-gray-300 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-6">
                    {/* Service Points */}
                    <div className="space-y-3">
                      {service.points.map((point, index) => {
                        const isThisPointSelected =
                          isPointSelected && selectedPoint.pointIndex === index;

                        return (
                          <div
                            key={index}
                            className={`rounded-lg border transition-all duration-1000 overflow-hidden hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:border-blue-300 ${
                              isThisPointSelected
                                ? "border-none dark:border-none bg-gray-50 dark:bg-gray-700/50"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                            }`}
                          >
                            {/* Point Header (Title) */}
                            <div
                              className="px-3 pt-3 pb-1 font-medium text-gray-700 dark:text-gray-300 flex justify-between items-center cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePointClick(service.id, index);
                              }}
                            >
                              <span>{point.title}</span>
                              {/* Optional Chevron or indicator could go here */}
                            </div>

                            {/* Point Content (Accordion Body) */}
                            <div
                              className={`transition-all duration-[400ms] ease-in-out ${
                                isThisPointSelected
                                  ? "max-h-[1000px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="p-4 pt-0">
                                {point.image && (
                                  <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-4 mt-2">
                                    <Image
                                      src={point.image}
                                      alt={point.title}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                  </div>
                                )}
                                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {point.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Removed Close Button */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MobileServices;
