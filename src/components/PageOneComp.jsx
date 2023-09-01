import React from "react";
import { useNavigate } from "react-router-dom";
function PageOneComp() {
  const naviagte = useNavigate();
       function handelClick(){
           naviagte("/chatBot")
       }
  return (
    <div className="oneContainer w-[100vw] h-[100vh] flex flex-col gap-8 bg-blue-400 items-center justify-center ">
      <h1 className="text-5xl ">Enter into Student Info System</h1>
      <button onClick={handelClick} className="border-[0.3rem]  p-4 text-4xl rounded-full bg-blue-300 border-blue-800 hover:translate-y-[-9px]  transition-all duration-100 ease-in-out hover:shadow-md hover:shadow-white">Enroll Now</button>
    </div>
  );
}

export default PageOneComp;
