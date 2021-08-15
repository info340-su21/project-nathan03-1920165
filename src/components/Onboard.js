import React from 'react';
import { Link } from 'react-router-dom';

export default function OnboardPage() {
    return (
        <div className="onboard">
            <div className="main-container">
                <main className="main-onboard">
                    <div className="welcome">
                        <h2>Welcome!</h2>
                        <p>Your place to find a roommate at the University of Washington.</p>
                    </div>

                    <div className="join-login">
                        <div>
                            <p>New to UniteDawgs?</p>
                            <button><Link exact to='/register'>Create an Account</Link></button>
                        </div>
                        <div>
                            <button><Link exact to='/login'>Log In</Link></button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}