import React from 'react'
import config from '../chatBotFiles/config.jsx';
import MessageParser from '../chatBotFiles/MessageParser.jsx';
import ActionProvider from '../chatBotFiles/ActionProvider.jsx';
import AgeWidgetComp from '../chatBotWidgets/AgeWidgetComp';
import NameWidgetComponent from '../chatBotWidgets/NameWidgetComponent';
import Chatbot from 'react-chatbot-kit';
import './chatBot.css'
import 'react-chatbot-kit/build/main.css';
function ChatBotComp() {
  return (
    <div className='chatBotConatiner w-[100vw] h-[100vh] flex items-center justify-center bg-[#2898ec]'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        
      />
      {false && <AgeWidgetComp/>}
      {false && <NameWidgetComponent/>}
    </div>
  )
}

export default ChatBotComp
