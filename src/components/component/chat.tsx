"use client";
import { Input } from "@/components/ui/input";
import { BiSend } from "react-icons/bi";
import { RiRobot3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Navbar from "./navbar";

interface Message {
  text: string;
  sender: string;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentBotMessage, setCurrentBotMessage] = useState<string | null>(
    null
  );

  useEffect(() => {
    const socket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
    });

    socket.on("response", (chunk: string) => {
      setCurrentBotMessage((prev) => (prev ? prev + chunk : chunk));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentBotMessage) {
      setMessages((prevMessages) => [
        ...prevMessages.filter((msg) => msg.sender !== "bot"),
        { text: currentBotMessage, sender: "bot" },
      ]);
    }
  }, [currentBotMessage]);

  const sendMessage = () => {
    const socket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
    });
    socket.emit("message", inputMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputMessage, sender: "user" },
    ]);
    setInputMessage("");
    setCurrentBotMessage(null);
  };
  
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="flex flex-col h-screen bg-gradient-to-r from-white to-gray-100">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-16 mb-16">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : ""
              }`}
            >
              {message.sender === "bot" ? (
                <>
                  <RiRobot3Fill className="h-10 w-10 mr-2" />
                  <div
                    className="p-3 rounded-full max-w-[80%] self-start text-white"
                    style={{ backgroundColor: "rgba(88, 28, 135, 0.8)" }}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="p-3 rounded-full max-w-[80%] self-end text-white"
                    style={{ backgroundColor: "rgba(255, 59, 170, 0.8)" }}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <FaUser className="h-10 w-10 ml-2" />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 flex gap-2 border-t-0 rounded-full bg-gradient-to-r from-white to-gray-100">
          <Input
            className="flex-1 rounded-full py-2 px-4 bg-gray-100"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <BiSend
            className="h-8 w-8 text-pink-500 cursor-pointer"
            onClick={sendMessage}
          />
        </div>
      </div>
    </>
  );
}
