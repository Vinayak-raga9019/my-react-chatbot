 import { useState } from 'react'
import { ChatInput } from './components/ChatInput.jsx';
import MessageList from './components/MessageList.jsx';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      message: 'Hello! How can I help you today?',
      sender: 'robot',
      id: 'welcome-msg'
    }
  ]);

  const handleSendMessage = (newMessage) => {
    const userMsg = {
      message: newMessage,
      sender: 'user',
      id: Date.now() + '-user'
    };
    
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    setTimeout(() => {
      let botResponse = "I don't understand that.";
      const lowerCaseMessage = newMessage.toLowerCase();

      if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        botResponse = "Hello there! I am your friendly React Robot.";
      } else if (lowerCaseMessage.includes('date')) {
        botResponse = "Today is " + new Date().toLocaleDateString();
      } else if (lowerCaseMessage.includes('time')) {
        botResponse = "The current time is " + new Date().toLocaleTimeString();
      } else if (lowerCaseMessage.includes('name')) {
        botResponse = "My name is ChatBot v1.0";
      }

      const botMsg = {
        message: botResponse,
        sender: 'robot',
        id: Date.now() + '-robot'
      };
      
      setMessages((prev) => [...prev, botMsg]);
    }, 1000); 
  };

  return (
    <div className="app-container">
      {/* NO Header */}
      
      <MessageList messages={messages} />
      
      <ChatInput onSendMessage={handleSendMessage} />

      {/* NO Footer */}
    </div>
  );
}

export default App;