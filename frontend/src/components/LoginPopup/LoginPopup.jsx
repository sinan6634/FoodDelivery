import { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {

  const {url, setToken} = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data)=>({...data, [name]:value}));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if(currentState==="Login") {
      newURL += "/api/user/login";
    } else {
      newURL += "/api/user/register";
    }
    const response = await axios.post(newURL, data);

    if(response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=''
          />
        </div>
        <div className='login-popup-inputs'>
          {currentState === "Login" ? (
            <></>
          ) : (
            <input onChange={onChangeHandler} name="name" value={data.name} type='text' placeholder='Your name' required />
          )}

          <input onChange={onChangeHandler} name="email" value={data.email} type='email' placeholder='Your email' required />
          <input onChange={onChangeHandler} name="password" value={data.password} type='password' placeholder='Password' required />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Log in here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
