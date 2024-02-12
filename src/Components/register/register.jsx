import React from 'react'
import './register.css'
export default function Register () {
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginleft">

                <h3 className="loginlogo">Lamasocial</h3>
                <span className="logindesc">Connect with freinds and the world arround you</span>
           
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input  placeholder='Username' className="logininput" />
                    <input type="Email" placeholder='Email' className="logininput" />
                    <input type="Password" className="logininput" placeholder='Password' />
                    <input type="Password" className="logininput" placeholder='Password Again' />
                    <button className="loginbutton">signup</button>
                    <button className="loginregisterbutton">
                        Log into Accounts</button>

                </div>
            </div>


        </div>


    </div>
  )
}
