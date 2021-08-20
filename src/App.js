import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AboutPage from './components/About';
import AccountPage from './components/Account';
import Accordionize from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/Login';
import OnboardPage from './components/Onboard';

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
            <div className="page-container">
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
                    <Route path="/home">
                        <Accordionize user={user} />
                    </Route>
                    <Route path="/account">
                        <AccountPage user={user} />
                    </Route>

                    <Route path="/">
                        <Redirect to="/"/>
                    </Route>
                </Switch>

                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;
