import React, { useState } from 'react'

const LoginPage = () => {
    // const [email , setEmail] = useState("")
    // const [password , setPassword] = useState("")
    const [data , setData] = useState({
        email : "",
        password  : "",
    })
    const [error, setError] = useState("")
    console.log(data)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(data)
        if(data.email== "" || data.password == "") {
           return setError("Please fill in all fields")
        }else{
            console.log("Email:", data.email)
            console.log("Password:", data.password)
            // setEmail("")
            // setPassword("")
            setData({
                email:"",
                password:""
            })
            setError("")
        }
        
    }
  return (
    <div>
        <div className=' flex flex-col items-center justify-center h-screen'>
            <h1 className=' text-4xl font-bold mb-8'>Login Page</h1>
            <form type="submit" onSubmit={handleLogin}
            className=' w-full max-w-sm bg-white p-8 rounded shadow-md'>
                {error && <p className=' text-red-500 mb-4'>{error}</p>}
            <input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-gray-300 rounded px-4 py-2 mb-4"
                // value={email}
                value={data.email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => setData({...data,email:e.target.value})}
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="border-2 border-gray-300 rounded px-4 py-2 mb-4"
                value={data.password}
                // value={password}
                onChange={(e) => setData({...data,password:e.target.value})}
                // onChange = { (e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
            </button>
            </form>
        </div>
            
    </div>
  )
}

export default LoginPage