import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign up")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />

                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required></input>}

                    <input type='email' placeholder='Your email' required></input>
                    <input type='password' placeholder='placeholder' required></input>
                </div>
                <button>{currentState === "Sign up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required>
                    </input>
                    <p>I agree to the terms and condition</p>
                </div>
                {currentState === "Login" ?
                    <p>Create a new account? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p>
                    : <p>Already have an account <span onClick={() => setCurrentState("Login")}>Click here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup
