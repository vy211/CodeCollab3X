import React, { useState, useEffect } from "react";

interface ChatProps {
  newIncomingMessage?: string;
}

const Chat: React.FC<ChatProps> = ({ newIncomingMessage }) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (newIncomingMessage) {
      setMessages((prevMessages) => [...prevMessages, newIncomingMessage]);
    }
  }, [newIncomingMessage]);

  return (
    <div className="flex flex-col w-full h-full">
      <h3 className="text-xl font-semibold mb-4 text-blue-600">Group Chat</h3>
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-gray-100 p-2 rounded-md shadow-sm"
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
