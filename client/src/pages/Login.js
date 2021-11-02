import React,{useContext, useState} from 'react'
import axios from 'axios'
import {Link, useHistory} from "react-router-dom";
import { AuthContext } from '../helpers/AuthContext';

function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const {AuthState,setAuthState} = useContext(AuthContext);
  let history = useHistory();
  axios.defaults.withCredentials = true;
  const login = () => {
  
    const data = {username:username, password: password}
    axios.post("http://localhost:3001/login",data).then((response) => {
        
        if (response.data.error) {
            alert(response.data.error)
          }
        localStorage.setItem("accessToken",response.data.token)
        setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
    })
    history.push('/')
  }
  const test = () =>{
    history.push('/')
  }
  

    return (
      <div class ="login">
        <main>
            <section class="form_login">
                <form action="">
                    <div class="form-title">
                        <div class="form_name">
                            <h2>Sign in</h2>
                        </div>
                        <div class="icon-social-box">
                            <i class="fab fa-facebook-square icon-social"></i>
                            <i class="fab fa-google-plus-square icon-social"></i>
                            <i class="fab fa-twitter-square icon-social"></i>
                        </div>
                    </div>
                    <div class="input-element">
                        <i class="fas fa-envelope icon-login"></i>
                        <input class="input-field" type="text" name="email" placeholder="email" required onChange = {(e) => {
                            setUsername(e.target.value);
                          }} />
                    </div>
                    <div class="input-element">
                        <i class="fas fa-key icon-login"></i>
                        <input class="input-field" type="password" name="psw" placeholder="password" required minlength="3" maxlength="20" onChange = {(e) => {
                            setPassword(e.target.value);
                          }}/>
                    </div>
                    <div class="input-element">
                        <input type="checkbox" id="remember_me" name="remember_me" checked/>
                        <label for="remember_me">Remember me</label>
                    </div>
                    <button type="submit" class="btn" onClick = {login}>Login</button>
                    <div class="suggest">
                        <span>Don't you have an account <Link to="/Signup">Sign up</Link></span>
                        <span><a href="#" onClick={test}>Forgot you password?</a></span>
                    </div>
                </form>
            </section>
            <section>
                <div class="row">
                    <div class="col-1-of-2">
                        <h3>FOOTER TEXT</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Login
