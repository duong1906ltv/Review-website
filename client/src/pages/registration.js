import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom";
function Registration() {
        
    const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");
    let history = useHistory();
    const signup = () =>{
        const data = {username:usernameReg, password: passwordReg}
        axios.post("http://localhost:3001/register",data).then((response) => {
                alert(response.data)
                history.push('/Login')
            
        })
    }
         return (
        <div class ="signup">
        <main>
        <section>
            <form action="">
                <div class="form-title">
                    <div class="form_name">
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account.</p>
                    </div>
                </div>
                <div class="input-element">
                    <label for="accname">Account Name</label>
                    <input class="input-field" 
                        type="text" id="accname" 
                        name="accname" 
                        placeholder="Account Name" 
                        required 
                        onChange = {(e) => {
                            setUsernameReg(e.target.value);
                        }} />
                </div>
                <div class="input-element">
                    <label for="psw">Password</label>
                    <input class="input-field" type="password" id="psw" name="psw" placeholder="Password" required minlength="3" maxlength="8"/>
                </div>
                <div class="input-element">
                    <label for="psw-confirm">Confirm Password</label>
                    <input class="input-field" 
                        type="password" 
                        id="psw-confirm" 
                        name="psw-confirm" 
                        placeholder="Confirm Password" 
                        required minlength="3" 
                        maxlength="20"
                        onChange = {(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                </div>
                <div class="input-element">
                    <input type="checkbox" id="policy" name="policy"/>
                    <label for="policy">By creating an account you agree to our <a href="#">Terms & Privacy</a></label>
                </div>
                <button type="submit" class="btn" onClick = {signup}>OK</button>
            </form>
        </section>
    </main>
        </div>
    )
}
export default Registration
