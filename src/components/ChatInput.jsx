 import React, { useState } from 'react';
import './ChatInput.css'; // Make sure this path matches your CSS file

export const ChatInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    // 1. If the input is empty, do nothing (prevent blank messages)
    if (inputValue.trim() === "") return;

    // 2. Send the text up to App.jsx
    onSendMessage(inputValue);

    // 3. Clear the input box
    setInputValue("");
  };

  // Optional: Allow pressing "Enter" to send
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type a message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
};