import React, { useState } from 'react';

const Chatbot = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([{ text: "Hi! How can I help you today?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Bot reply (dummy logic)
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thanks for your message. We’ll get back to you!", sender: "bot" }]);
    }, 1000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-6 w-72 bg-white rounded shadow-lg z-50 border overflow-hidden">
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <h4 className="font-bold">Chat Support</h4>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="p-2 h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`my-2 text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-3 py-2 rounded ${msg.sender === "user" ? "bg-blue-100" : "bg-gray-200"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-3 py-1 rounded">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
