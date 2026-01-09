import { Quote } from "lucide-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import AboutUsImg from "./images/about_us/about_us.png";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className={`flex flex-col items-center pt-10  w-full z-30 relative bg-[#f3f4f5] ${roboto.className}`}
    >
      <p className="text-5xl pb-10 text-[#0b4369] font-bold md:flex hidden">
        About <span className="text-[#494a4d] ml-2"> Us</span>
      </p>
      <div className="min-[555px]:flex hidden  flex-col min-[555px]:flex-row w-full  min-h-[500px]">
        {/* Left Column - Image */}
        <div className="w-full md:w-[420px] relative min-h-[500px] mx-auto">
          <Image
            src={AboutUsImg}
            alt="About Us"
            fill
            priority
            className="object-contain min-[768px]:object-cover min-[762px]:rounded-2xl min-[1210px]:rounded-t-2xl min-[1210px]:rounded-b-none"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2  flex flex-col justify-center p-8 md:p-16 text-white relative">
          {/* Decorative Quote Icon */}
          <div className="absolute top-8 left-8 text-[#494a4d]/20">
            <Quote size={120} />
          </div>

          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-[#0b4369] text-4xl md:text-5xl font-bold mb-2">
                Athul
                <br />
                Krishna Ambatt
              </h2>
              <span className="text-black text-xs tracking-[0.2em] font-light uppercase ml-1">
                Founder & CEO
              </span>
            </div>

            <div className="text-[#0b4369] mb-6">
              <Quote size={48} className="fill-current" />
            </div>

            <p className="text-gray-900 text-sm md:text-base leading-relaxed tracking-wide">
              Back when we were in college, like most friends, we used to talk
              about starting our own tech startup. At that time, it felt like
              just another fun idea we joked about. But slowly, that idea turned
              into a dream—and today, it’s something we’re truly proud to have
              made real. Nortech isn’t just a company for us; it’s a place where
              we put our heart into building great solutions and making sure our
              users are genuinely happy with what we create.
            </p>
          </div>
        </div>
      </div>

      <div className="min-[555px]:hidden w-full relative h-[600px] rounded-t-4xl overflow-hidden shadow-lg mx-auto">
        {/* Background Image */}
        <Image
          src={AboutUsImg}
          alt="About Us"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b4369] via-[#494a4d]/50 to-transparent"></div>

        {/* 'About Us' Vertical Text on Right Side */}
        <p className="absolute top-10 right-0 z-10 text-5xl font-bold text-[#0b4369] [writing-mode:vertical-rl] rotate-180 opacity-80">
          About <span className="text-white">Us</span>
        </p>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
          <div className="mb-4">
            <h2 className="text-white text-3xl font-bold mb-1">
              Athul
              <br />
              Krishna Ambatt
            </h2>
            <span className="text-gray-200 text-xs tracking-[0.2em] font-light uppercase">
              Founder & CEO
            </span>
          </div>

          <p className="text-gray-100 text-sm leading-relaxed tracking-wide opacity-90">
            Back when we were in college, like most friends, we used to talk
            about starting our own tech startup. At that time, it felt like just
            another fun idea we joked about. But slowly, that idea turned into a
            dream—and today, it’s something we’re truly proud to have made real.
          </p>
        </div>

        {/* Decorative Quote Icon - Positioned softly in background (Moved to Left) */}
        <div className="absolute bottom-80 min-[315px]:bottom-1/2 min-[415px]:bottom-3/7 left-4 text-white/20">
          <Quote size={60} />
        </div>
      </div>
    </section>
  );
}
