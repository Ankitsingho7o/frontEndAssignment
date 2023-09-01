import React, { useState, useRef, useEffect } from "react";
import {useDispatch } from 'react-redux'
import { addUserName } from "../store/slice/UserSlice";

const NameWidgetComponent = (props) => {
  // const [visible, setVisible] = useState(true);
  const reference = useRef()
  const dispatch = useDispatch();
  function handelSubmit(e) {
    e.preventDefault();
    dispatch(addUserName(e.target[0].value))
    
    props?.actions?.clientMessage(`${e.target[0].value}`);
    props?.actions?.chatBotMessage('Enter your Age?', "Age")
    reference.current.style.display="none";
    // setVisible(false);
  }
  
  useEffect(()=>{
    reference.current.focus()
  })
   
  return (
    <div>
     
        <form action="" onSubmit={(e) => handelSubmit(e)}>
          <input
            ref={reference}
            type="text"
            name=""
            id=""
            className="border-2 border-black rounded-sm p-2 ml-6"
          />
        </form>
      
    </div>
  );
};

export default NameWidgetComponent;
