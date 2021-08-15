import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect, useParams } from 'react-router-dom';

import AboutPage from './components/About';
import AccountPage from './components/Account';
import Accordionize from './components/Home';
import ConnectPage from './components/Connect';
import CreateUserPage from './components/CreateUser';
import Header from './components/Header';
import LoginPage from './components/Login';
import OnboardPage from './components/Onboard';
import ProfilePage from './components/Profile';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const uiConfig = {
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
    ],
    credentialHelper: 'none',
    signInFlow: 'popup',
    signInSuccessUrl: '/home',
};

function App() {
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser)
                setIsLoading(false)
            } else {
                setUser(null)
                setIsLoading(false)
            }
        })

        return function cleanup() {
            authUnregisterFunction()
        }
    }, [])

    const handleSignOut = () => {
        firebase.auth().signOut()
    }

    if (isLoading) {
        return (
            <div className="loading text-center">
                <i className="fas fa-circle-notch fa-spin fa-3x" aria-label="Connecting..."></i>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Header user={user} signout={handleSignOut} />

            <Switch>
                <Route exact path="/">
                    <OnboardPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/login">
                    <LoginPage uiConfig={uiConfig} />
                </Route>
                <Route path="/register">
                    <CreateUserPage />
                </Route>

                <Route path="/home"> {/* "/home/:username" */}
                    <Accordionize />
                </Route>
                <Route path="/profile"> {/* "/home/:username/:student/profile" */}
                    <ProfilePage />
                </Route>
                <Route path="/connect"> {/* "/home/:username/:student/connect" */}
                    <ConnectPage />
                </Route>
                <Route path="/account"> {/* "/home/:username/account" */}
                    <AccountPage user={user} />
                </Route>

                <Route path="/">
                    <Redirect to="/"/>
                </Route>
            </Switch>

            <div className="footer-container">
                <footer>
                    <address>
                        Contact us at <a href="mailto:findahusky@uw.edu">findahusky@uw.edu</a>, or at <a href="tel:206-543-2100">(206) 543-2100</a>
                    </address>
                    <p>&copy; 2021 Juliane De Los Santos & Nathaniel Sy Su</p>
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default App;
