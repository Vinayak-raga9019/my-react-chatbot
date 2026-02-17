import React from 'react';
import ChatMessage from './ChatMessage';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((item) => (
        <ChatMessage key={item.id} data={item} />
      ))}
    </div>
  );
};

export default MessageList;