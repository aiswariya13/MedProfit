import React, { useState, useEffect, useRef } from "react";
import "../Styles/Chatbot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "🤖 I'm here to help! What do you need?" }
      ]);
    }, 1200);

    setInput("");
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        {/* Chatbot Header */}
        <div className="chatbot-header">
          <FontAwesomeIcon icon={faHeartbeat} className="chatbot-icon" />
          <div className="chatbot-header-text">
            <span className="chatbot-title">Health AI Chatbot</span>
            <span className="chatbot-subtitle">Your Smart Healthcare Assistant</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
