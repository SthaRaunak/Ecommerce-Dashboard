import React,{useState} from 'react'

const SignUp = () =>{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    const collectData= () =>{
        console.log(name,email,password)
    }


    return(
        <div className='signUp'>
            <h1>Create an Account</h1>
            <input className="inputBox" type="text"
             value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username"/>
            <input className="inputBox" type="email" 
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <input className="inputBox" type="password"
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
            <button type="button" onClick={collectData}>Sign Up</button>
            </div>
    )
}

export default SignUp