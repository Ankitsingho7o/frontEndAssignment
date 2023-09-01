import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CountDownComponent() {
    const[counter, setCounter] = useState(5);
    const navigate = useNavigate();

    useEffect(()=>{
        if(counter==0){
            navigate("/StudentDetails")
        }
        const timer = 
    
        counter>0 && setInterval(()=> setCounter(counter-1),1000)
        return ()=>{clearInterval(timer);}
    }, [counter]);

  return (
    <div className='w-[85%] border-2 border-red-600 flex items-center justify-center m-auto p-2 rounded-full'>
      <h1 className='text-xl text-red-600'>{counter}</h1>
    </div>
  )
}

export default CountDownComponent
