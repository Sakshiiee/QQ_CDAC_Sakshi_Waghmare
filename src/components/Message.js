// Message.js
import React from "react";

const Message = ({ message, user }) => { // Add user prop
  // Format the time to display in HH:MM format
  const formattedTime = new Date(message.createdAt.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
        <span className="message-time">{formattedTime}</span> {/* Display the time */}
      </div>
    </div>
  );
};

export default Message;
