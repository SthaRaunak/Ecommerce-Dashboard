import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user')
        console.log(auth)
        if (auth) {
            navigate('/')
        }
    })
    const collectData = async () => {
        console.log(name, email, password)
        let result = await fetch('http://localhost:4000/signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result))
        if (result) { navigate('/') }

    }

    return (
        <div className='signUp'>
            <h1>Create an Account</h1>
            <input className="inputBox" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" />
            <input className="inputBox" type="email"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className="inputBox" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}


export default SignUp