import React from "react";
import { createClientMessage } from "react-chatbot-kit";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const chatBotMessage = (message, widget) => {
    const newMessage = createChatBotMessage(message, { widget: widget });
    updateMessage(newMessage);
  };
  const clientMessage = (message) => {
    const newMessage = createClientMessage(message);
    updateMessage(newMessage);
  };

  const updateMessage = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            chatBotMessage,
            clientMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
