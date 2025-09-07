import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 right-0 h-screen w-16 bg-[#2B2F36] flex flex-col items-center justify-between py-6 shadow-lg z-50">
      {/* Ligne verticale + icônes du haut */}
      <div className="flex flex-col items-center space-y-6">
        <div className="w-px h-24 bg-gray-500" />
       
        <Link href="https://www.linkedin.com/in/yann-ouafete-12475132b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 hover:text-blue-600 cursor-pointer text-xl" />
        </Link>
        
        <Link href="https://github.com/yann-bot"  target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-400 hover:text-white cursor-pointer text-xl" />
        </Link>

        <Link href="https://www.instagram.com/yannduboisouafete?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-pink-500 cursor-pointer text-xl" />
        </Link>
      </div>

      
    </div>
  );
}
