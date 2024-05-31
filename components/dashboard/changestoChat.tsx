"use client";
import { useState } from "react";

const ChatWindow = () => {
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [userMessageColor, setUserMessageColor] = useState<string>("#d1e7dd");
  const [chatbotMessageColor, setChatbotMessageColor] =
    useState<string>("#f8d7da");

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Customize Chat Window</h2>

      <label className="mb-2">Background Color</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        className="mb-4"
      />

      <label className="mb-2">User Message Color</label>
      <input
        type="color"
        value={userMessageColor}
        onChange={(e) => setUserMessageColor(e.target.value)}
        className="mb-4"
      />

      <label className="mb-2">Chatbot Message Color</label>
      <input
        type="color"
        value={chatbotMessageColor}
        onChange={(e) => setChatbotMessageColor(e.target.value)}
        className="mb-4"
      />

      <div
        className="w-80 h-96 p-4 rounded-lg mt-4"
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="mb-2 p-2 rounded-lg"
          style={{ backgroundColor: chatbotMessageColor }}
        >
          Chatbot: Hello! How can I assist you today?
        </div>
        <div
          className="mb-2 p-2 rounded-lg self-end"
          style={{ backgroundColor: userMessageColor }}
        >
          User: I'm looking for some information.
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
