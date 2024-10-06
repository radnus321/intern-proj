import React from 'react';
import './message.css';

const Message = ({ user }) => {
  const isUser = user.name === "sundar";

  return (
    <div
      className='message-container'
      style={{
        flexDirection: isUser ? 'row-reverse' : 'row',
        backgroundColor: isUser ? 'lightblue' : 'lightgreen'
      }}
    >
      {isUser ? <div className="profile-image"></div> : <div className="profile-image"></div>}
      
      <div className="text-component">
        <div className="body">
          <div className="user-name">{user.name}</div>
          <div className="message-content">{user.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
