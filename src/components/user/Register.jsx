import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEventRepeat } from "react-icons/md";
import { FaRepeat } from 'react-icons/fa6';
import {validatePassword} from "val-pass"
import toast from 'react-hot-toast';


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
    if(name=="password"){
      let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
      validateAll()?seterrorMessage(""):seterrorMessage(getAllValidationErrorMessage())
      value==""&&seterrorMessage("")
    }
    setFormData((preVal)=>({...preVal,[name]:value}))
  }
  const handelSubmit=e=>{
    e.preventDefault()
    let {name,userName,password,email}=formData
    if(!name||!userName||!password||!email){
      toast.error("All feilds are mandatory")
      return
    }
    let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
    if(!validateAll()){
      toast.error(`${getAllValidationErrorMessage()}`)
    }
    if(!matched){
      toast.error("passsword and confirm password did not match")
      return
    }
     console.log(formData);
    
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

         <div className={errorMessage?'w-full flex justify-center items-center px-3 rounded-sm':'hidden'}>
          <span className='text-red-700'>*{errorMessage}</span>
        </div>

        
        <div className={`border-2  w-full flex justify-center items-center px-3 rounded-sm ${repeatPassword?`border-black`:`bg-red-600`}`}>
          <input type="password" name="repeatPassword" placeholder='Re-type passoword' className='w-full outline-none px-4 h-10' onChange={handlePassword}/>
            <span><FaRepeat /></span>
        </div>

        
        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#3a922ca1] active:bg-lime-500 active:scale-[0.95]'>
         <button className='h-10 max-w-full text-white text-md tracking-widest'>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register