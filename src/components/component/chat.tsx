import { Input } from "@/components/ui/input";
import { BiSend } from 'react-icons/bi'; // Importing icons from react-icons
import { RiRobot3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { JSX, SVGProps } from "react";
import Navbar from "./Navbar";

export function Chat() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="flex flex-col h-screen bg-gradient-to-r from-white to-gray-100">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-16 mb-16"> {/* Adjust margins for fixed elements */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <RiRobot3Fill  className="h-10 w-10 mr-2" /> {/* Avatar icon for the sender */}
              <div className="p-3 rounded-full max-w-[80%] self-start text-white" style={{ backgroundColor: 'rgba(88, 28, 135, 0.8)' }}>
                <p className="text-sm">Hello, how can I assist you today?</p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full max-w-[80%] self-end text-white" style={{ backgroundColor: 'rgba(255, 59, 170, 0.8)' }}>
                <p className="text-sm">Hi there! I'm just looking to chat and get to know you better.</p>
              </div>
              <FaUser  className="h-10 w-10 ml-2" /> {/* Avatar icon for the author */}
            </div>
            {/* Other messages */}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 flex gap-2 border-t-0 rounded-full bg-gradient-to-r from-white to-gray-100">
          <Input className="flex-1 rounded-full py-2 px-4 bg-gray-100" placeholder="Type your message..." />
          <BiSend className="h-8 w-8 text-pink-500 cursor-pointer" /> {/* Using BiSend icon */}
        </div>
      </div>
    </>
  );
}
