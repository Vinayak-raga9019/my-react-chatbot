 import React from 'react';
import './ChatMessage.css';

// 1. IMPORT YOUR IMAGES HERE
// (Make sure these names match exactly what is in your folder)
import robotImage from '../assets/robot.jpg';
import userImage from '../assets/user.webp';

const ChatMessage = ({ data }) => {
  const isRobot = data.sender === 'robot';

  return (
    <div className={`message-item ${isRobot ? 'robot' : 'user'}`}>
      
      {/* 2. USE AN IMAGE TAG INSTEAD OF EMOJIS */}
      <img 
        src={isRobot ? robotImage : userImage} 
        alt={isRobot ? "Robot" : "User"} 
        className="avatar-img"
      />

      {/* The Message Bubble */}
      <div className="bubble">
        <p>{data.message}</p>
      </div>
      
    </div>
  );
};

export default ChatMessage;