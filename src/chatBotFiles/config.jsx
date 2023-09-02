import { createChatBotMessage } from "react-chatbot-kit";
import GotItComp from "../chatBotWidgets/GotItComp";
import AgeWidgetComp from "../chatBotWidgets/AgeWidgetComp";
import NameWidgetComponent from "../chatBotWidgets/NameWidgetComponent";
import CountDownComponent from "../chatBotWidgets/CountDownComponent";

const botName = "Ankit's Bot"
const config = {
  initialMessages: [
    createChatBotMessage(`Enter into Student Info System`, {
      widget: "GotIt",
    }),
  ],
 botName:botName,
  widgets: [
    {
      widgetName: "GotIt",
      widgetFunc: (props) => <GotItComp {...props} />,
    },
    {
      widgetName: "Age",
      widgetFunc: (props) => <AgeWidgetComp {...props} />,
    },
    {
      widgetName :"Name",
      widgetFunc: (props)=> <NameWidgetComponent {...props}/>
    },
    {
      widgetName:"CountDown",
      widgetFunc:(props)=><CountDownComponent {...props}/>
    }
  ],
};

export default config;
