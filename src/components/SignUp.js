import React, { useState } from 'react';
import '../styles/SignUp.css';
import axios from 'axios';

const SignUp = () => {

    const [input, setInputs] = useState({ firstname: '', lastname: '', phoneNumber: '',accountName:'', email:'',accountType:'',password:''});

    const handleInput = (e) => {
        setInputs({ ...input, [e.target.name]: e.target.value })
    }

    const sendRequest = async () => {
        await axios.post("https://an2sldwgo0.execute-api.ap-south-1.amazonaws.com/stage1/onboarding/signup",input)
        .then((res) => console.log(res)).catch((err) => console.log(err))
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
                    <input type="text" className='lab' name='firstname' placeholder='First Name' onChange={handleInput} required></input>
                    {/* <label className='inp'>Last Name</label> */}
                    <input type="text" className='lab' name='lastname' placeholder='Last Name' onChange={handleInput} required></input>
                    {/* <label className='inp'>Phone no</label> */}
                    <input type="text" className='lab' name='accountName' placeholder='Account Name' onChange={handleInput} required></input>
                    {/* <label className='inp'>Email</label> */}
                    <input className='lab' type='email' name='email' placeholder='Email' onChange={handleInput}></input>
                    {/* <label className='inp'>Password</label> */}
                    <input className='lab' type='password' name='password' placeholder='Password' onChange={handleInput}></input>
                    <input type="number" className='lab' name='phoneNumber' placeholder='Phone no' onChange={handleInput} required></input>
                    {/* <label className='inp'>Infulncer</label> */}
                    {/* <input type="text" className='lab' name='infulncer' placeholder='Infulncer' ></input> */}
                    <select class="form-select" aria-label="Default select example" name='accountType' onChange={handleInput}>
                        <option selected>Select Account type</option>
                        <option value="INFLUENCER">INFLUENCER</option>
                        <option value="PARTNER">PARTNER</option>
                        <option value="COMPANY">COMPANY</option>
                    </select>
                    <input type="checkbox" className='check' name='allow'></input>
                    <lable>Allow Permission</lable>
                    <button type="submit" className='sb-btn'>Sign Up</button>
                </form>

                {/* <input className='lab' type='number' name='otp' placeholder='Enter your OTP' ></input>
                <button type="submit" className='sb-btn'>Verify</button> */}
            </div>
        </div>
    )
}

export default SignUp