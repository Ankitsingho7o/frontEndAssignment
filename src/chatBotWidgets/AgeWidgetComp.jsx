import React, { useState } from "react";
import {useDispatch } from 'react-redux'
import { addUserAge } from "../store/slice/UserSlice";

const AgeWidgetComp = (props) => {
  const nums = [];
  const[visible, setVisible]= useState(true)
 const dispatch= useDispatch();
  for (let i = 18; i <= 40; i++) {
    nums.push(i);
  }
  function handelChange(e) {
    dispatch(addUserAge(e.target.value))

    setVisible(false)
    props?.actions?.clientMessage(`${e.target.value}`)
    props?.actions?.chatBotMessage("Thanks for filling the information, The bot will exit in 5 Sec", "CountDown")
  }

  return (
    <div>
      {visible && <select name="" id="" onChange={(e)=>handelChange(e)}  size={5} className="p-2 border-2 border-black">
        {nums.map((num, index) => {
          return (
            <option value={num} key={index}>
              {num}
            </option>
          );
        })}
      </select>}
      
    </div>
  );
};

export default AgeWidgetComp;
