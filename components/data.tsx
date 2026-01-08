import Image from "next/image";
import { House, PhoneCall, UsersRound, Wrench } from "lucide-react";
import Development from "./images/development.png";
import Networking from "./images/networking.png";
import Security from "./images/security.png";
import Communication from "./images/comminication.png";
import ITSupport from "./images/it_support.png";
import AudioVisual from "./images/audio_visual.png";
import ManagedIT from "./images/managed_it.png";
import AMC from "./images/AMC.png";
import DigitalMarketing from "./images/digital_marketing.png";
import NetworkingStructure from "./images/networking/networking_and_structuring.png";
import CenterDesign from "./images/networking/center_design_and_deployment.png";
import PointToPoint from "./images/networking/pointtopoint.png";
import PowerBackup from "./images/networking/powerbackup.png";
import Firewall from "./images/security and surveillance/firewall.png";
import Antivirus from "./images/security and surveillance/antivirus.png";
import Biometric from "./images/security and surveillance/biometric.png";
import CCTV from "./images/security and surveillance/cctv.png";
import ElvWorks from "./images/security and surveillance/elvworks.png";
import BarrierGate from "./images/security and surveillance/barrier.png";
import Fare from "./images/security and surveillance/fare.png";
import Cloud from "./images/security and surveillance/cloud.png";
import WifiNetwork from "./images/communication_and_connectivity/wifi_network.png";
import IPSolutions from "./images/communication_and_connectivity/ip_telephony.png";
import ThreecxSolutions from "./images/communication_and_connectivity/3cx_solutions.png";
import Laptops from "./images/supply hardware/laptops.png";
import Mobiles from "./images/supply hardware/mobiles.png";
import Consumables from "./images/supply hardware/consumables.png";
import AVAutomation from "./images/audio visual/avautomation.jpeg";
import BoardRoom from "./images/audio visual/boardroom.jpeg";
import DigitalSignage from "./images/audio visual/digital_signage.jpeg";
import DisplaySystem from "./images/audio visual/displaysystem.jpeg";
import InteractiveBoard from "./images/audio visual/interactiveboard.jpeg";
import Multizone from "./images/audio visual/multizone.jpeg";
import VideoConference from "./images/audio visual/videoconference.jpeg";
import VideoMatrix from "./images/audio visual/videomatrix.jpeg";
import DedicatedOnsite from "./images/managed it services/dedicatedonsite.jpeg";
import EmergencyOnCall from "./images/managed it services/emergencyoncall.jpeg";
import ProActive from "./images/managed it services/proactive.jpeg";
import Strategic from "./images/managed it services/strategicict.jpeg";
import Preventive from "./images/annual maintenance/preventive.jpeg";
import Priority from "./images/annual maintenance/priority.jpeg";
import TwentyFourSeven from "./images/annual maintenance/24:7.jpeg";
import OnSite from "./images/annual maintenance/onsite.jpeg";
import Replacement from "./images/annual maintenance/replacement.jpeg";
import Frontend from "./images/web development/frontend.jpeg";
import Backend from "./images/web development/backend.jpeg";
import Maintenence from "./images/web development/maintenance.jpeg";
import SEO from "./images/Digital marketing/seo.jpeg";
import SocialMedia from "./images/Digital marketing/socialmedia.jpeg";
import Email from "./images/Digital marketing/email.jpeg";
import Paid from "./images/Digital marketing/paid.jpeg";

export const nav = [
  {
    name: "Home",
    href: "#",
    icon: <House className="min-[555px]:h-4 min-[555px]:w-4 h-6 w-6" />,
  },
  {
    name: "Our Services",
    href: "#ourservices",
    icon: <Wrench className="min-[555px]:h-4 min-[555px]:w-4 h-6 w-6" />,
  },
  {
    name: "About Us",
    href: "#aboutus",
    icon: <UsersRound className="min-[555px]:h-4 min-[555px]:w-4 h-6 w-6" />,
  },
  {
    name: "Contact Us",
    href: "#contactus",
    icon: <PhoneCall className="min-[555px]:h-4 min-[555px]:w-4 h-6 w-6" />,
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Networking & Infrastructure Solutions",
    heading: "Reliable, scalable, and enterprise-ready infrastructure",
    description:
      "Comprehensive networking and infrastructure services designed to support high-performance, secure, and future-ready IT environments.",
    points: [
      {
        title: "Networking & Structured Cabling",
        description:
          "Design and install copper/fiber cabling, switches, patch panels, and Wi-Fi points with clean layouts, low latency, and scalable setup.",
        image: NetworkingStructure,
      },
      {
        title: "Data Center Design & Deployment",
        description:
          "From rack layouts to cooling systems, we engineer efficient, resilient environments tailored to your workload.",
        image: CenterDesign,
      },
      {
        title: "Point-to-Point Extenders",
        description:
          "Extend HDMI, VGA, or network signals over long distances using fiber or CAT6 — ideal for large campuses and multi-floor buildings.",
        image: PointToPoint,
      },
      {
        title: "Power Backup & UPS Solutions",
        description:
          "Protect your systems from outages and voltage fluctuations with reliable UPS setups and power redundancy planning.",
        image: PowerBackup,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={Networking}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 2,
    title: "Security & Surveillance Systems",
    heading: "Advanced protection for people, assets, and infrastructure",
    description:
      "End-to-end security and surveillance solutions designed to protect enterprises, campuses, and commercial spaces with intelligent monitoring and access control.",
    points: [
      {
        title: "Firewall Solutions & IT Security",
        description:
          "Next-generation firewalls, intrusion prevention systems, and endpoint protection to safeguard your network.",
        image: Firewall,
      },
      {
        title: "Antivirus Software",
        description:
          "Enterprise-grade protection from brands like Sophos, Bitdefender, and Kaspersky—centralized management and real-time threat detection.",
        image: Antivirus,
      },
      {
        title: "Biometric Security & Access Control",
        description:
          "Fingerprint, facial recognition, RFID, and keypad systems for secure entry and attendance tracking.",
        image: Biometric,
      },
      {
        title: "Surveillance & CCTV Solutions",
        description:
          "IP-based camera systems with remote monitoring, motion detection, and centralized storage.",
        image: CCTV,
      },
      {
        title: "ELV Works",
        description:
          "Complete Extra Low Voltage solutions including intercoms, public address systems, paging, and audio distribution.",
        image: ElvWorks,
      },
      {
        title: "Barrier Gates – Supply, Install & Service",
        description:
          "Automated gate systems for parking lots, residential complexes, and commercial facilities—integrated with access control and surveillance.",
        image: BarrierGate,
      },
      {
        title: "Automated Fare Gate Systems",
        description:
          "Secure, efficient, and scalable access control for transit environments.",
        image: Fare,
      },
      {
        title: "Cloud & Software Solutions",
        description:
          "Cloud and software solutions to help you work smarter and faster, including Microsoft licensing and centralized system management.",
        image: Cloud,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={Security}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 3,
    title: "Communication & Connectivity",
    heading: "Reliable wireless and voice communication solutions",
    description:
      "End-to-end communication and connectivity solutions to ensure seamless wireless access and enterprise-grade voice communication.",
    points: [
      {
        title: "Wi-Fi Network Installation",
        description:
          "High-speed, secure wireless connectivity tailored for offices, campuses, and commercial spaces.",
        image: WifiNetwork,
      },
      {
        title: "IP Telephony & PABX Systems",
        description:
          "VoIP-based communication platforms with call routing, voicemail-to-email, conferencing, and mobile integration.",
        image: IPSolutions,
      },
      {
        title: "3CX Solutions",
        description:
          "Advanced 3CX phone system solutions enabling flexible VoIP communication, remote work support, video calls, and seamless CRM integration.",
        image: ThreecxSolutions,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={Communication}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 4,
    title: "Supply of IT Hardware",
    heading: "Reliable IT hardware supply for businesses of all sizes",
    description:
      "We supply genuine, high-quality IT hardware products from leading global brands, tailored to meet your business requirements.",
    points: [
      {
        title: "Sales of Laptops, Desktops, Workstations & Servers",
        description:
          "We supply high-performance computing devices from top brands like Dell, HP, Lenovo, and Apple, tailored for your business needs.",
        image: Laptops,
      },
      {
        title: "Sales of Mobiles & Tablets",
        description:
          "Stay connected with the latest smartphones and tablets from Apple, Samsung, Huawei, and more—ideal for mobile teams, executives, and field operations.",
        image: Mobiles,
      },
      {
        title: "Toners & Consumables",
        description:
          "Genuine cartridges and consumables for all major brands including HP, Canon, Epson, and Brother.",
        image: Consumables,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={ITSupport}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 5,
    title: "Audio Visual Solutions",
    heading: "Smart, integrated AV solutions for modern spaces",
    description:
      "End-to-end audio visual solutions designed to enhance collaboration, communication, and immersive experiences across corporate, commercial, and public environments.",
    points: [
      {
        title: "Boardroom & Meeting Room Systems",
        description:
          "Smart displays, wireless presentation tools, and integrated control panels for smooth, professional meetings.",
        image: BoardRoom,
      },
      {
        title: "Video Conferencing Solutions",
        description:
          "HD cameras, microphones, and conferencing platforms for clear, reliable remote collaboration.",
        image: VideoConference,
      },
      {
        title: "Digital Signage & Content Displays",
        description:
          "Smart displays and content management systems for dynamic advertising, information sharing, and branding.",
        image: DigitalSignage,
      },
      {
        title: "Interactive Whiteboards & Smart Panels",
        description:
          "Touch-enabled displays for training, education, and brainstorming—boosting engagement and productivity.",
        image: InteractiveBoard,
      },
      {
        title: "Multi-Zone Audio Systems",
        description:
          "Background music, paging, and public address systems tailored for offices, malls, and event venues.",
        image: Multizone,
      },
      {
        title: "Projection & Display Systems",
        description:
          "Laser projectors, LED walls, and large-format displays for auditoriums, control rooms, and exhibitions.",
        image: DisplaySystem,
      },
      {
        title: "Video Matrix & Control Systems",
        description:
          "Route multiple video sources to multiple screens with centralized control—ideal for surveillance centers and large venues.",
        image: VideoMatrix,
      },
      {
        title: "AV Automation & Integration",
        description:
          "Unified control of lighting, sound, and visuals via tablet, mobile, or voice—customized for each space.",
        image: AVAutomation,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={AudioVisual}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 6,
    title: "Managed IT Services",
    heading:
      "Expert support that keeps your business running—without interruptions",
    description:
      "We provide comprehensive, ongoing IT support tailored to your business needs. Our managed services ensure your systems stay secure, optimized, and fully operational—so you can focus on growth, not glitches.",
    points: [
      {
        title: "Dedicated On-site & Remote Support",
        description:
          "Dedicated on-site engineers combined with a responsive remote helpdesk to ensure fast issue resolution.",
        image: DedicatedOnsite,
      },
      {
        title: "Proactive Monitoring & Maintenance",
        description:
          "Monthly diagnostics, system monitoring, and preventive maintenance to avoid downtime before it happens.",
        image: EmergencyOnCall,
      },
      {
        title: "Emergency On-Call Support",
        description:
          "Rapid-response support for critical system failures and business-impacting issues.",
        image: ProActive,
      },
      {
        title: "Strategic ICT Consulting",
        description:
          "IT audits, technology planning, and vendor coordination to align your IT strategy with business goals.",
        image: Strategic,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={ManagedIT}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 7,
    title: "Annual Maintenance Contracts (AMC)",
    heading: "Your systems stay sharp. Your business stays focused.",
    description:
      "With our Annual Maintenance Contracts, you get proactive care, fast technical support, and peace of mind all year round. We take full responsibility for keeping your IT infrastructure running at peak performance.",
    points: [
      {
        title: "Preventive Maintenance Visits",
        description:
          "Scheduled preventive maintenance to ensure optimal performance and reduce unexpected breakdowns.",
        image: Preventive,
      },
      {
        title: "24/7 Technical Support",
        description:
          "Round-the-clock technical assistance to resolve issues whenever they arise.",
        image: TwentyFourSeven,
      },
      {
        title: "Priority Service Response",
        description:
          "Faster response times and priority handling for AMC customers.",
        image: Priority,
      },
      {
        title: "On-site & Remote Troubleshooting",
        description:
          "Comprehensive troubleshooting support covering on-site and remote assistance.",
        image: OnSite,
      },
      {
        title: "Replacement of Faulty Parts",
        description:
          "Replacement of defective components as per contract terms to minimize downtime.",
        image: Replacement,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={AMC}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 8,
    title: "Web Development Solutions",
    heading: "Modern, responsive, and scalable web applications",
    description:
      "End-to-end web development services to build responsive websites and robust web applications that drive business growth and provide excellent user experiences.",
    points: [
      {
        title: "Frontend Development",
        description:
          "Create responsive, fast, and interactive interfaces using React, Vue, or Angular, ensuring seamless user experiences across devices.",
        image: Frontend,
      },
      {
        title: "Backend Development",
        description:
          "Design and implement secure, scalable, and high-performance server-side solutions using Node.js, Django, or Laravel.",
        image: Backend,
      },
      {
        title: "Website Maintenance & Optimization",
        description:
          "Ensure websites remain up-to-date, secure, and fast with ongoing maintenance, performance optimization, and SEO best practices.",
        image: Maintenence,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className=" object-cover cursor-pointer active:scale-110 transition duration-400"
        src={Development}
        alt="Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
  {
    id: 9,
    title: "Digital Marketing Solutions",
    heading: "Data-driven strategies that grow your brand online",
    description:
      "End-to-end digital marketing services focused on increasing visibility, engagement, and conversions across all major digital channels.",
    points: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Improve search rankings and organic traffic with technical SEO, keyword strategy, on-page optimization, and performance tracking.",
        image: SEO,
      },
      {
        title: "Social Media Marketing",
        description:
          "Build brand presence and audience engagement across platforms like Instagram, Facebook, LinkedIn, and X with targeted campaigns.",
        image: SocialMedia,
      },
      {
        title: "Performance & Paid Advertising",
        description:
          "Run high-converting ad campaigns on Google, Meta, and other platforms with precise targeting, A/B testing, and ROI optimization.",
        image: Paid,
      },
      {
        title: "Content & Email Marketing",
        description:
          "Create compelling content and automated email campaigns that nurture leads, retain customers, and drive consistent growth.",
        image: Email,
      },
    ],
    icon: (
      <Image
        height={550}
        width={550}
        className="object-cover cursor-pointer active:scale-110 transition duration-400"
        src={DigitalMarketing}
        alt="Digital Marketing Services"
        loading="eager"
        sizes="(max-width: 768px) 0px, 550px"
      />
    ),
  },
];
