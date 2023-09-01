import React, { useState } from "react";

const GotItComp = (props) => {
  const [visible, setVisible] = useState(true);
  const handelClick = () => {
    props?.actions?.clientMessage("Got it");
    props?.actions.chatBotMessage("Enter your name", "Name");
    // const message = createClientMessage('Got It');
    setVisible(false);
  };
  return (
    <div>
      {visible && (
        <button
          onClick={handelClick}
          className="border-2 border-black p-2 w-[45%] rounded-md hover:translate-y-[-2px] transition-all ease-out cursor-pointer text-base"
        >
          Got it
        </button>
      )}
    </div>
  );
};

export default GotItComp;
