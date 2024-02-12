import React, { useContext } from 'react'
import './login.css'
import { useRef } from 'react'
import {Logincall} from "../../apicalls"
import {Autcontext} from "../../context/authcontext"
export default function login() {
    const email=useRef()
    const pass=useRef()
    const {user,isFetching,error,dispatch}=useContext(Autcontext)

    const handleclick=(e)=>{
        e.preventDefault()
        console.log("clicked")
        Logincall({email:email.current.value,pass:pass.current.value},dispatch)
        
    }
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginleft">

                <h3 className="loginlogo">Lamasocial</h3>
                <span className="logindesc">Connect with freinds and the world arround you</span>
           
            </div>
            <div className="loginright">
                <form className="loginbox" onSubmit={handleclick}>
                    <input type="Email" required
                     placeholder='Email' className="logininput" 
                    ref={email} />

                    <input type="Password" 
                    required
                    minLength={6}
                    className="logininput" placeholder='Password'
                     ref={pass}/>
                    <button className="loginbutton" >Log in</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginregisterbutton">Create a new account</button>

                </form>
            </div>


        </div>


    </div>
  )
}
