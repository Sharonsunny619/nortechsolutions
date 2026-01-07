import NortechCanvas from "@/components/nortech-canvas";
import ContactUs from "@/components/contact_us";
import Footer from "@/components/footer";
import HomePage from "@/components/home";
import Services from "@/components/services";
import AboutUs from "@/components/about_us";
import Image from "next/image";
import BGImage from "@/components/images/gel7.jpg";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="min-h-screen flex flex-col items-center justify-center p-6 min-[330px]:p-8 relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="fixed inset-0 mt-20 w-[400px] min-[400px]:w-full h-full z-20 pointer-events-none">
          <Image
            src={BGImage}
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
         <div className="absolute inset-0 z-20 pointer-events-none">
          <NortechCanvas />
        </div>
         <div className="relative z-20 ">
          <HomePage />
        </div>
         <div className="absolute inset-0 z-20 pointer-events-none">
          <NortechCanvas isBottom={true} />
        </div>
      </main>
      {/* <AboutUs /> */}
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
