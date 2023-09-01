import React from 'react'
import {useSelector} from 'react-redux'

function PageThreeComp() {


    const data = useSelector((state)=>{
        return state.users
    })
 
  return (
    <div className='w-[100vw] h-[100vh]  flex items-center justify-center bg-[#2898ec]'>
      <h1 className='text-5xl '>{`Name of the user is ${data.name} and the age is ${data.age} `}</h1>
    </div>
  )
}

export default PageThreeComp
