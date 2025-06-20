import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEventRepeat } from "react-icons/md";
import { FaRepeat } from 'react-icons/fa6';


const Register = () => {
  const [formData,setFormData]=useState({ })
  const [repeatPassword,setRepeatPassword]=useState(true)
  const [errorMessage,seterrorMessage] = useState("")
  const handlePassword=(e)=>{
    let {value} = e.target
    formData.password!=value?setRepeatPassword(false):setRepeatPassword(true)
    value==""&&setRepeatPassword(true)
  }
  const handelChange=e=>{
    let {name,value}=e.target
    setFormData((preVal)=>({...preVal,[name]:value}))
  }
  const handelSubmit=e=>{
    e.preventDefault()
    
  }
  return (
    <div className='bg-[#3a922ca1] size-full flex justify-center items-center'>
      <form action="" className='w-1/2 h-[90%]  rounded-2xl bg-white shadow-2xl flex  items-center flex-col gap-4 px-[80px] py-10 max-sm:w-[90%]' onSubmit={handelSubmit}>
        <div className='font-bold w-full flex justify-center items-center'>
          <h1 className='text-3xl max-lg:text-sm'>Registration Form</h1>
        </div>

        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="name" placeholder='Enter Name' className='w-full outline-none px-4 h-10'  onChange={handelChange}/>
          <span><CgNametag /></span>
        </div>

         <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="userName" placeholder='Enter Username' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
            <span><CgRename /></span>
        </div>


        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="email" name="email" placeholder='Enter Email' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
            <span><MdAlternateEmail /></span>
        </div>


        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="password" placeholder='Enter password' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
            <span><RiLockPasswordLine /></span>
        </div>

        
        <div className={`border-2  w-full flex justify-center items-center px-3 rounded-sm ${repeatPassword?`border-black`:`bg-red-600`}`}>
          <input type="password" name="repeatPassword" placeholder='Re-type passoword' className='w-full outline-none px-4 h-10' onChange={handlePassword}/>
            <span><FaRepeat /></span>
        </div>

        
        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black'>
         <button className='h-10 text-white text-md tracking-widest'>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register