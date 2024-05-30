"use client";
import React, {useState, useEffect} from "react";
import {Input} from "@/components/ui/input";
import {BiSend} from "react-icons/bi";
import {RiRobot3Fill} from "react-icons/ri";
import {FaUser} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import Navbar from "./navbar";
import io from "socket.io-client";

interface Message {
    text: string;
    sender: string;
}

export function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState("");

    useEffect(() => {
        const socket = io("http://localhost:5000", {
            transports: ["websocket", "polling"],
        });

        socket.on("response", (chunk: string) => {
            // setCurrentBotMessage((prev) => (prev ? prev + chunk : chunk));
            setMessages((prevMessages) => [
                ...prevMessages.filter((msg) => msg.sender !== "bot"),
                {text: chunk, sender: "bot"},
            ]);
        });


        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {text: inputMessage, sender: "user"},
        ]);
        setInputMessage("");
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-10">
                <Navbar/>
            </div>
            <div className="flex flex-col h-screen bg-gradient-to-r from-purple-300 to-pink-300">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-16 mb-16">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.sender === "user" ? "justify-end" : ""}`}
                        >
                            {message.sender === "bot" ? (
                                <div className="flex items-start">
                                    <RiRobot3Fill className="h-10 w-10 mr-2"/>
                                    <div className="p-3 rounded-2xl max-w-[80%] bg-purple-700 text-white">
                                        {/* Use ReactMarkdown to render the bot's message */}
                                        <ReactMarkdown>{message.text}</ReactMarkdown>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-start justify-end">
                                    <div className="p-3 rounded-2xl max-w-[80%] bg-pink-500 text-white">
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                    <FaUser className="h-10 w-10 ml-2"/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div
                    className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-purple-200 to-pink-300 p-4 flex gap-2 border-t-0 rounded-full bg-gradient-to-r from-white to-gray-100">
                    <Input
                        className="flex-1 rounded-full py-2 px-4 bg-white-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <BiSend
                        className="h-8 w-8 text-white-500 cursor-pointer"
                        onClick={sendMessage}
                    />
                </div>
            </div>
        </>
    );
}
