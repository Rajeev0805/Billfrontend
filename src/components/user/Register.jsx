import React from 'react'

const Register = () => {
  let [formData,setFormData] = useState({
    name : "",
    username : "",
    email : "",
    password : ""
  })
   let handleChange = (e) => {
        let {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className='text-blue-900'>Register</div>
  )
}

export default Register
