import React, { useState } from 'react';
import './message-box.css';
import Message from '../message/Message';
import Input from '../input/Input';

const initialMessages = [
  {
    name: "sundar",
    message: "Hello notSundar! How is it going ?"
  },
  {
    name: "notSundar",
    message: "I'm doing good, what's up with you ?"
  },
];

const MessageBox = () => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = (newMessage) => {
    console.log('Message sent:', newMessage);
    const msg = {
        name: "sundar",
        message: newMessage
    }
    setMessages([...messages, msg]);
  };

  return (
    <div className='main-container'>
      {messages.map((user, index) => (
        <Message key={index} user={user}/>
      ))}
      <Input onSend={handleSend} />
    </div>
  );
};

export default MessageBox;
