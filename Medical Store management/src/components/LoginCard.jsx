
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
  
  export default function LoginCard() {
    const [loading, setLoading] = useState(false)
    const [ authScreen,setAuthScreen] = useState("login")
    const [signUp, setSignUp] = useState({
       name: "",
       email: "",
       password: "",
       password_confirmation: "",
    })
    const [login, setLogin] = useState({
      email: "",
      password: "",
    })
    const navigate = useNavigate()
    const toast = useToast()

    const handleSignUp =async(e)=>{
        e.preventDefault()
        setLoading(true)
        try{
          const url = "https://medicalstore.mashupstack.com/api/register"
          const res = await fetch(url,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(signUp),
          })
          let data = await res.json()
          console.log(data)
          if(res.status === 200){
            setLoading(false)
            navigate("/")
            toast({
              title: "Account created successfully",
              status: "success",
              duration: 2500,
              isClosable: true,
            })
          }else{
            setLoading(false)
            if(data.errors.name || data.errors.email || data.errors.password || data.errors.password_confirmation){
              toast({
                title: `${data.errors.name || data.errors.email || data.errors.password || data.errors.password_confirmation}` ,
                status: "error",
                duration: 2500,
                isClosable: true,
              })
            }
           
          }
        }catch(err){
          console.log(err)
        
           
          
        }
        
    }
    
    const handleLogin =async(e)=>{
        e.preventDefault()
        setLoading(true)
      try{
        const url = "https://medicalstore.mashupstack.com/api/login"
        const res = await fetch(url,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        })
        let data = await res.json()
       if(res.status === 200){
        setLoading(false)
         localStorage.setItem("token", data.token)
        navigate("/users")
        toast({
          title: "Logged in successfully",
          status: "success",
          duration: 2500,
          isClosable: true,
        })
       }else{
        setLoading(false)
        console.log(data)
              toast({
                title: data.errors,
                status: "error",
                duration: 2500,
                isClosable: true,
              })
       } 
      }catch(err){
        console.log(err)
      }
          
    }
  
    return (
      <div className={authScreen==="login" ? "container1 ":"container1 sign-up-mode" }>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Email" value={login.email} 
              onChange={(e)=>setLogin({...login,email:e.target.value})} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={login.password} 
              onChange={(e)=>setLogin({...login,password:e.target.value})}/>
            </div>
            <button className="btn1 solid" 
            onClick={handleLogin}
            >{loading? <Loader size={8} color={"#fff"}/>: "Login"}</button>
            
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={signUp.name} 
              onChange={(e)=>setSignUp({...signUp,name:e.target.value})}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={signUp.email} 
              onChange={(e)=>setSignUp({...signUp,email:e.target.value})} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={signUp.password} 
              onChange={(e)=>setSignUp({...signUp,password:e.target.value})}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" value={signUp.password_confirmation} 
              onChange={(e)=>setSignUp({...signUp,password_confirmation:e.target.value})}/>
            </div>
            <button  className="btn1"  
            onClick={handleSignUp}
            >{loading? <Loader size={8} color={"#fff"}/>: "SignUp"}</button>
           
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <button className="btn transparent" id="sign-up-btn"
            onClick={()=>{
              setAuthScreen("signup")
            }}
            >
              Sign up
            </button>
          </div>
          <img src="/login.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already a user?</h3>
            <button className="btn transparent" id="sign-in-btn"
            onClick={()=>{
              setAuthScreen("login")
            }}
            >
              Sign in
            </button>
          </div>
          <img src="/register.png" className="image" alt="" />
        </div>
      </div>
    </div>

    )
  }