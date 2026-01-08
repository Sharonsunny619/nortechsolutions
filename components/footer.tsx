import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Section */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              src="/nortechicon.png"
              alt="Nortech Solutions"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#155480] tracking-wider">NOR-TECH</span>
            <span className="text-xs font-medium text-[#505154] tracking-widest uppercase">IT Solutions</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 font-light tracking-wide order-3 md:order-2">
          &copy; 
          {/* {new Date().getFullYear()}  */}
          2025
          Nor-Tech Solutions. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 order-2 md:order-3">
            <Link 
              href="https://www.facebook.com/share/1Bo7k3rSpg/" 
              target="_blank"
              className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300 transform hover:scale-110"
            >
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link 
              href="https://www.instagram.com/nortechsolutions.me?igsh=MTZuNmE0NHU2a2Y1bw%3D%3D&utm_source=qr" 
              target="_blank"
              className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300 transform hover:scale-110"
            >
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link 
              href="https://www.linkedin.com/company/nor-tech-it-solutions/" 
              target="_blank"
              className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300 transform hover:scale-110"
            >
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
        </div>
      </div>
    </footer>
  );
}
