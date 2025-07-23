import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div>
      <p><strong>{message.author}</strong>: {message.text}</p>
    </div>
  );
};

export default ChatMessage;
