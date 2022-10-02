import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import './Login.css';


const Login = () => {

    const clientId = "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>



            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                {showloginButton ?
                                    <GoogleLogin
                                        clientId={clientId}
                                        buttonText="Sign In"
                                        onSuccess={onLoginSuccess}
                                        onFailure={onLoginFailure}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                    /> : null}

                                {showlogoutButton ?
                                    <GoogleLogout
                                        clientId={clientId}
                                        buttonText="Sign Out"
                                        onLogoutSuccess={onSignoutSuccess}
                                    >
                                    </GoogleLogout> : null
                                }

                               signIn
                            </button>


                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a to="/">password?</a>
                        </p>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default Login
