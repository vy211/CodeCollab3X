import React, { useState } from "react";
import Chat from "./Chat";

export default function ChatSection() {
  const [newMessage, setNewMessage] = useState<string>("");
  const [sentMessage, setSentMessage] = useState<string | undefined>(undefined);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setSentMessage(newMessage); // send to Chat
      setNewMessage(""); // clear input
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <Chat newIncomingMessage={sentMessage} />
      </div>
      <div className="flex items-center border-t border-black p-2 bg-blue-200">
        <input
          type="text"
          placeholder="Type..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 rounded-md border text-black border-gray-400"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
