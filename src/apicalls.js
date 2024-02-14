import axios from "axios"
export const Logincall =async (user,dispatch)=>{
 dispatch({type:"LOGIN_START"})
 try{
   
    const res=await axios.post("/auth/login",user)
   console.log(res) 
   console.log("dsad") 

    dispatch({type: "LOGIN_SUCCESS",payload:res.data})
    console.log(res.data)
 }catch(err){
    dispatch({type: "LOGIN_FAILURE",payload:err})
    console.log("dsad") 

 }
 
 }