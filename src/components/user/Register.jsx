import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";

const Register = () => {
  let [formData,setFormData] = useState({
    name : "",
    username : "",
    email : "",
    password : ""
  })
  let [password,setpassword]=useState()
   let handleChange = (e) => {
        let {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className=' bg-[#4f722f75] w-full h-full flex items-center justify-center '>
     <form action="" className='w-1/2 h-[90%] flex items-center justify-center flex-col gap-4 bg-white py-15 rounded-3xl px-20 max-sm:w-[90%] overflow-scroll ' onSubmit={handleSubmit} >
      <div className='w-full  flex justify-center items-center h-10 '>
        <h1 className='text-2xl font-bold max-sm:text-xl'>Register Form</h1>
      </div>
      <div className='w-full flex justify-center items-center h-10 border-[2px]  '>
        <input type="text" name="name" placeholder='Enter Name' className='w-full outline-0 text-md px-5 font-bold p'onChange={handleChange}/>
        <span><CgNametag /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 border-[2px]'>
        <input type="text" name="username" placeholder='Enter Username' className='w-full outline-0 text-md px-5 font-bold p' onChange={handleChange}/>
        <span><MdOutlineDriveFileRenameOutline /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 border-[2px] '>
        <input type="email" name="email" placeholder='Enter Your email'  className='w-full outline-0 text-md px-5 font-bold p'onChange={handleChange}/>
        <span><MdAttachEmail /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 border-[2px]'>
        <input type="password" name='password' placeholder='Enter Password'  className='w-full outline-0 text-md px-5 font-bold p'onChange={handleChange}/>
        <span><TbPassword /></span>
      </div>
      <div className='w-full  flex justify-center items-center h-10 border-[2px] '>
        <input type="password" placeholder='Re-type your password'  className='w-full outline-0 text-md px-5 font-bold p'/>
        <span><FaRepeat /></span>
      </div>
      <div className='w-full  flex justify-center items-center h-10 bg-black text-amber-50 '>
        <button className='font-bold tracking-widest'>click</button>
      </div>
     </form>
    </div>
  )
}

export default Register