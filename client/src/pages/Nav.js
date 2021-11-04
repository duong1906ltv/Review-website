import React, {useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';

function Nav() {
       
    const { authState, setAuthState } = useContext(AuthContext);
    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({
            username: "",
            id: 0,
            nickname: "",
            status: false
        })
    }
    return (
        <header class="nav-header">
            <AuthContext.Provider>
            <div class="nav-logo-box">
                <Link to="/" class="nav-logo">404-NOT FOUND</Link>
            </div>
            <div class="nav-nav">
                <div class="nav-nav__item">
                    <Link to="/WriteReview" class="nav-nav__link">Write a Review</Link>
                </div>
                <div class="nav-nav__item">
                    <Link to="/" class="nav-nav__link">Upload a service</Link>
                </div>
                <div class="nav-nav__item">
                    <Link to="/" class="nav-nav__link">Alerts</Link>
                </div>
                {!authState.status && (
                    <div class="nav-nav__item nav__signin-item">
                    <Link to="/Login" class="nav-nav__link">Sign in</Link>
                    </div>
                )}
                {authState.status && (
                    <div class="nav-nav__item">
                        <input type="checkbox" class="nav__checkbox" id="nav-toggle"/>
                        <label class="acc__shape" for="nav-toggle">
                           <img src="https://danangfantasticity.com/wp-content/uploads/2018/03/da-nang-thanh-pho-cua-nhung-cay-cau-07.jpg" alt="" class="acc__ava"/>
                        </label>
                        <div class="nav-acc">
                            <a href="#" class="nav-acc__link">View Profile</a>
                            <a href="#" class="nav-acc__link">Bookings</a>
                            <a href="#" class="nav-acc__link">Account Info</a>
                            <Link to="/" class="nav-acc__link" onClick = {logout}>Log out</Link>
                        </div>
                    </div>
                )}
                
            </div>
            </AuthContext.Provider>
        </header>
        
    )
}

export default Nav
