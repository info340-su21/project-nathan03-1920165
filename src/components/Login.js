import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function LoginPage(props) {
    return (
        <div className="login">
            <main className="main-login">
                <div className='sign-up'>
                    <h2>Sign In</h2>
                    <div className="authenticate">
                        <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                </div>

                    {/* <div className="google">
                        <button>Sign in with Google</button>
                    </div>
                    <p>or</p>
                    <div className="login-info">
                        <label for="uname">Username:</label>
                        <input type="text" id="uname" name="uname" required />
                        <label for="pwd">Password:</label>
                        <input type="password" id="pwd" name="pwd" required />
                        <p>(case sensitive)</p>
                        <button><Link exact to='/home'>LOG IN</Link></button>
                    </div>
                    <div className="new-user">
                        <p>New user?</p>
                        <Link exact to='/register'>Create an Account</Link>
                    </div> */}
            </main>
        </div>
    )
}