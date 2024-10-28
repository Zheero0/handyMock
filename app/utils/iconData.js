// icons.js
import { FaCarAlt, FaGlobe } from "react-icons/fa";
import { FaToolbox, FaScrewdriverWrench, FaCameraRetro } from "react-icons/fa6";
import { GiLipstick } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";


// Array of icons with corresponding names and relevant data
export const iconArray = [
  {
    name: "All",
    icon: <FaGlobe size={35} />,
    description: "",
    category: "All",
  },
  // {
  //   name: "Auto",
  //   icon: <FaCarAlt size={35} />,
  //   description: "Car-related services, automotive industry, and vehicles.",
  //   category: "auto",
  // },
  {
    name: "Renovation",
    icon: <FaToolbox size={35} />,
    description: "DIY tools, home improvement, and repairs.",
    category: "Renovation",
  },
  {
    name: "Repairs",
    icon: <FaScrewdriverWrench size={35} />,
    description: "Mechanic services, maintenance, and repairs.",
    category: "repairs",
  },
  {
    name: "Media",
    icon: <FaCameraRetro size={35} />,
    description: "Photography, cameras, and media-related services.",
    category: "media",
  },
  {
    name: "Beauty",
    icon: <GiLipstick size={35} />,
    description: "Beauty and cosmetic products like lipstick and makeup.",
    category: "beauty",
  },
  {
    name: "Remote",
    icon: <MdComputer size={35} />,
    description: "Technology, computer services, and IT-related fields.",
    category: "remote",
  },
  {
    name: "Other",
    icon: <FaEllipsisH size={35} />,
    description: "Technology, computer services, and IT-related fields.",
    category: "other",
  },
];
