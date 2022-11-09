import React, { useState } from 'react';
import '../styles/SignUp.css';
import axios from 'axios';

const Login = () => {

    const [input, setInputs] = useState({ email: "", password: ""});

    const handleInput = (e) => {
        setInputs({ ...input, [e.target.name]: e.target.value })
    }

    const sendRequest = async () => {
        await axios.post("https://an2sldwgo0.execute-api.ap-south-1.amazonaws.com/stage1/user/login",input)
        .then((res) => console.log(res)).catch((err) => console.log(err))
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
    }


    return (
        <div className='signupContainer'>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    {/* <label className='inp'>First Name</label> */}
                    <input type="text" className='lab' name='email' placeholder='email' onChange={handleInput} required></input>
                    {/* <label className='inp'>Last Name</label> */}
                    <input type="text" className='lab' name='password' placeholder='password' onChange={handleInput} required></input>
                    {/* <label className='inp'>Phone no</label> */}
                    {/* <label className='inp'>Email</label> */}
                    <button type="submit" className='sb-btn'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login