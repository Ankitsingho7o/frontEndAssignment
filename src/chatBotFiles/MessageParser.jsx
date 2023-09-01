import React from "react";
import { createClientMessage } from "react-chatbot-kit";
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
  
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
