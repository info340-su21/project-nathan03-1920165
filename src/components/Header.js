import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    if (!props.user) { //if logged out
        return (
            <div className="banner">
                <header>
                    <h1><Link exact to='/'>UniteDawgs</Link></h1>
                </header>
                <nav>
                    <div className="mobile">
                        <ul>
                            <li><Link to='/'><i className="fas fa-home" aria-label="Home"></i></Link></li>
                            <li><Link to='/about'><i className="fas fa-info-circle" aria-label="About"></i></Link></li>
                            <li><Link to='/login'><i className="fas fa-user-circle" aria-label="Login"></i></Link></li>
                        </ul>
                    </div>
                    <div className="desktop">
                        <ul>
                            <li><Link to='/'>Home <i className="fas fa-home" aria-label="Home"></i></Link></li>
                            <li><Link to='/about'>About <i className="fas fa-info-circle" aria-label="About"></i></Link></li>
                            <li><Link to='/login'>Account <i className="fas fa-user-circle" aria-label="Login"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
            <div className="banner">
                <header>
                    <h1><Link exact to='/home'>UniteDawgs</Link></h1>
                </header>
                <nav>
                    <div className="mobile">
                        <ul>
                            <li><Link to='/home'><i className="fas fa-home" aria-label="Home"></i></Link></li>
                            <li><Link to='/about'><i className="fas fa-info-circle" aria-label="About"></i></Link></li>
                            <li><Link to='/account'><i className="fas fa-user-circle" aria-label="Account"></i></Link></li>
                            <li onClick={props.signout}><Link to='/'><i className="fas fa-sign-out-alt" aria-label="Log Out"></i></Link></li>
                        </ul>
                    </div>
                    <div className="desktop">
                        <ul>
                            <li><Link to='/home'>Home <i className="fas fa-home" aria-label="Home"></i></Link></li>
                            <li><Link to='/about'>About <i className="fas fa-info-circle" aria-label="About"></i></Link></li>
                            <li><Link to='/account'>Account <i className="fas fa-user-circle" aria-label="Account"></i></Link></li>
                            <li onClick={props.signout}><Link to='/'>Log Out <i className="fas fa-sign-out-alt" aria-label="Log Out"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}