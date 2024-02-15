import React, { useContext } from 'react'
import './login.css'
import { useRef } from 'react'
import {Logincall} from "../../apicalls"
import { UserContext } from '../../UserContext';
import {Link} from "react-router-dom"

export default function login() {

    const email=useRef()
    const { user, setUser } = useContext(UserContext);

    const password=useRef()
    const handleclick = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        try {
          const response = await Logincall({
            email: email.current.value,
            password: password.current.value
      
          });
         await setUser(response.data)

      

        } catch (err) {
          console.error('Login failed:', err);
        }
      };
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
                     ref={password}/>
                    <button className="loginbutton" >Log in</button>
                    <span className="loginForgot">Forgot Password</span>
                   <Link to="register"> <button className="loginregisterbutton">Create a new account</button></Link>

                </form>
            </div>


        </div>


    </div>
  )
}
