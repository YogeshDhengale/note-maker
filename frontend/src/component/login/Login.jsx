import React from 'react'
//import './login.css'

const Login = () => {
    return (
        <div className='login-card'>
            <h2 className="header">Sign In</h2>
            <form action="" className='login-form'>
                <div className='input'>
                    <label htmlFor="" className="email">Email:</label>
                    <input type="text" className='email' placeholder='Enter Email' />
                </div>
                <div className="input">
                    <lable className="password">Password:</lable>
                    <input type="text" className="password" placeholder='Enter Password'/>
                </div>
                <label htmlFor="" className='remember'><input type="checkbox" name="Remember me" id="remember" />Remember me</label>
                <button>Submit</button>
                <p className='signup'>New user please <span> Sign Up</span> first</p>
                <p className="forgetpassword">Forget <span>Password</span>?</p>
            </form>
        </div>
    )
}

export default Login