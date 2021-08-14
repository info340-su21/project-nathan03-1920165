import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect, useParams } from 'react-router-dom';

import mcmahon from './img/mcmahon-room.jpg';
import students from './img/students.jpg';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};

function App() {
    const [user, setUser] = useState(undefined);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser)
            } else {
                setUser(null)
            }
        })
    })

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/">
                    <OnboardPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
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
                    <AccountPage />
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

function Header() {
    return (
        <div className="banner">
            <header>
                <h1><Link exact to='/'>UniteDawgs</Link></h1>
            </header>
            <nav>
                <div className="mobile">
                    <ul>
                        <li><NavLink to='/home' activeClassName=""><i className="fas fa-home" aria-label="Home"></i></NavLink></li>
                        <li><NavLink to='/about' activeClassName=""><i className="fas fa-info-circle" aria-label="About"></i></NavLink></li>
                        <li><NavLink to='/account' activeClassName=""><i className="fas fa-user-circle" aria-label="User"></i></NavLink></li>
                    </ul>
                </div>
                <div className="desktop">
                    <ul>
                        <li><NavLink to='/home' activeClassName="">Home <i className="fas fa-home" aria-label="Home"></i></NavLink></li>
                        <li><NavLink to='/about' activeClassName="">About <i className="fas fa-info-circle" aria-label="About"></i></NavLink></li>
                        <li><NavLink to='/account' activeClassName="">My Profile <i className="fas fa-user-circle" aria-label="User"></i></NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

function OnboardPage() {
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

function AboutPage() {
    return (
        <div className="about">
            <div className="main-container main-about">
                <main className="main-about">
                    <h2>About Us</h2>
                    <div className="about-text">
                        <div>
                            <p>Your place to find a roommate at the University of Washington.</p>
                            <p>Searching for a roommate is challenging, risky, and it is difficult to “match” with other students with the same preferences before room assignment. This problem is unaddressed and there is not a platform offered by the university to help university students out. Some problems related to finding a roommate on-campus include the lack of being informed of living habits, common interests, communication barriers, and the consolidation/organization of student information.</p>
                            <p>Students who use <em>UniteDawgs</em> will hopefully help students find and connect with compatible roommate(s) for on-campus housing. Each student will be able to input their information to the web application and be able to filter through other students who have similar interests.</p>
                        </div>
                    </div>

                    <div className="about-images">
                        <figure>
                            <img src={mcmahon} alt="McMahon room with two roommates" />
                            <figcaption>Caption: This image is taken from a room in McMahon Hall and is provided by <cite><a href="https://hfs.uw.edu/Live/Undergraduate-Housing-Rates-and-Information/McMahon-Hall">UW Housing & Food Services</a></cite></figcaption>
                        </figure>
                        <figure>
                            <img src={students} alt="students walking in West Campus" />
                            <figcaption>Caption: This image is taken from West Campus and is provided by <cite><a href="https://www.flickr.com/photos/90311612@N05/16044345764/">UW Housing & Food Services via Tumblr</a></cite></figcaption>
                        </figure>
                    </div>
                </main>
            </div>
        </div>
    )
}

function LoginPage() {
    return (
        <div className="login">
            <div className="main-container">
                <main className="main-login">
                    <h2>Sign In</h2>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

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
        </div>
    )
}

{/* function FormSection(props) { //array of objects (input field names)
    let labelsArray = props.arrayOfObj;

    const [inputValue, setInputtedValue] = useState('');
    const handleChange = (event) => {
        let newValue = event.target.value
        setInputtedValue(newValue);
    }

    let elementsArray = labelsArray.map((SingleObj) => {
        let transformedValue = (
            <div>
                <label for={SingleObj.ID}>{SingleObj.Label}</label>
                <input type="text" onChange={handleChange} value={inputValue} id={SingleObj.ID} name={SingleObj.ID} required />
            </div>
        )
        return transformedValue;
    })

    return (
        <div>
            {elementsArray}
        </div>
    )
} */}

function CreateUserPage(props) {
    // let registerLabels = [
    //     {ID: 'fname', Label: 'First Name:'},
    //     {ID: 'lname', Label: 'Last Name:'},
    //     {ID: 'uname', Label: 'Username:'},
    //     {ID: 'pwd', Label: 'Password:'}
    // ]

    //stores all form values in a single object
    const [formValues, setFormValues] = useState({
        'firstname': undefined,
        'lastname': undefined,
        'username': undefined,
        'password': undefined,
        'picture': undefined,
        'pronouns': undefined,
        'city': undefined,
        'state': undefined,
        'country': undefined,
        'primary_lang': undefined,
        'second_lang': undefined,
        'phone': undefined,
        'email': undefined,
        'facebook': undefined,
        'instagram': undefined,
        'snapchat': undefined,
        'wechat': undefined,
        'discord': undefined
    })

    //update state for a specific field
    const handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;

        let copy = {...formValues};
        copy[field] = value;
        setFormValues(copy);
    }

    //handle createAccount button
    const handleCreateAccount = (event) => {
        event.preventDefault();
        props.signUpCallback(
            formValues.firstname,
            formValues.lastname,
            formValues.username,
            formValues.password,
            formValues.picture,
            formValues.pronouns,
            formValues.city,
            formValues.state,
            formValues.country,
            formValues.primary_lang,
            formValues.second_lang,
            formValues.phone,
            formValues.email,
            formValues.facebook,
            formValues.instagram,
            formValues.snapchat,
            formValues.wechat,
            formValues.discord
        )
    }

    return (
        <main className="main-createUser">
            <section className="profile">
                <form className="createUser-text">
                    <h2 className="createUser-text">Create an Account</h2>

                    {/* <FormSection arrayOfObj={registerLabels} /> */}
                
                    <div>
                        <label for="fname_field">First Name:</label>
                        <input type="text" id="fname_field" name="firstname" onChange={handleChange} required />
                    </div>
                    <div>
                        <label for="lname_field">Last Name:</label>
                        <input type="text" id="lname_field" name="lastname" onChange={handleChange} required />
                    </div>
                    <div>
                        <label for="uname_field">Username:</label>
                        <input type="text" id="uname_field" name="username" pattern=".{8,}" placeholder="8 character requirement" onChange={handleChange} required />
                    </div>
                    <div>
                        <label for="pwd_field">Password:</label>
                        <input type="password" id="pwd_field" name="password" pattern=".{8,}" placeholder="8 character requirement" onChange={handleChange} required />
                    </div>
                </form>
            </section>

            <section className="aboutMe">
                <form className="createUser-text">
                    <h2 className="createUser-text">About Me</h2>
                    <em>Tell us all about you.</em>
                    <div>
                        <label for="picture_upload">Choose a profile picture:</label>
                        <input type="file" id="picture_upload" name="picture" onChange={handleChange} accept=".png, .jpg, .jpeg" />
                    </div>
                    <div>
                        <label for="pronouns_dropdown">Personal Pronoun:</label>
                        <select id="pronouns_dropdown" name="pronouns" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="she">she/her/hers</option>
                            <option value="he">he/him/his</option>
                            <option value="they">they/them/their</option>
                        </select>
                    </div>
                    <div>
                        <label for="city_field">Hometown City:</label>
                        <input type="text" id="city_field" name="city" onChange={handleChange} placeholder="Seattle" required />
                    </div>
                    <div>
                        <label for="state_field">Hometown State:</label>
                        <input type="text" id="state_field" name="state" onChange={handleChange} placeholder="WA" required />
                    </div>
                    <div>
                        <label for="country_field">Hometown Country:</label>
                        <input type="text" id="country_field" name="country" onChange={handleChange} placeholder="USA" required />
                    </div>
                    <div>
                        <label for="primary_lang_field">Primary Language:</label>
                        <input type="text" id="primary_lang_field" name="primary_lang" onChange={handleChange} placeholder="English" required />
                    </div>
                    <div>
                        <label for="second_lang_field">Secondary Language:</label>
                        <input type="text" id="second_lang_field" name="second_lang" onChange={handleChange} placeholder="Chinese" required />
                    </div>
                </form>
            </section>

            <section className="contacts">
                <form className="createUser-text">
                    <h2 className="createUser-text">Contact Information</h2>
                    <em>Provide your contact information to be reached by other students.</em>
                    <div>
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" onChange={handleChange} placeholder="206-543-2100" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                    <div>
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" onChange={handleChange} placeholder="example@domain.com" required />
                    </div>
                    <div>
                        <label for="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                        <input type="text" id="facebook" name="facebook" onChange={handleChange} />
                    </div>
                    <div>
                        <label for="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                        <input type="text" id="instagram" name="instagram" onChange={handleChange} placeholder="@handle" />
                    </div>
                    <div>
                        <label for="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                        <input type="text" id="snapchat" name="snapchat" onChange={handleChange} placeholder="@handle" />
                    </div>
                    <div>
                        <label for="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                        <input type="text" id="wechat" onChange={handleChange} name="wechat" />
                    </div>
                    <div>
                        <label for="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                        <input type="text" id="discord" name="discord" onChange={handleChange} placeholder="@discord#0000" />
                    </div>
                </form>
            </section>

            <div>
                <button type="submit">Create an Account</button>
            </div>

            <div className="createUser-text">
                <p><em>Already have an account?</em></p>
                <button><Link exact to='/login'>Log In</Link></button>
            </div>
        </main>
    )
}

function Accordionize() {
    return (
        <div className="accordion" id="accordionExample">
            <main>
                <div className="accordion-item">
                    <h2 id="headingOne">
                        <button className="accordion-button accordion-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></button>
                    </h2>
                    <FilterForm />
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></button>
                    </h2>
                    <Results />
                </div>
            </main>
        </div>
    )
}

function FilterForm() {
    return (
        <div>
            <h2>Filter Roommates</h2>
            <form>
                <fieldset>
                    <legend>Housing Preferences</legend>

                    <label for="housing-type">Resident Housing</label>
                    <p>Select all that apply</p>
                    <select id="housing-type" name="housing" size="6" multiple>
                        <option value="9-month">9-month</option>
                        <option value="12-month">12-month</option>
                        <option value="residence">Residence Hall</option>
                        <option value="apartment">Apartment Communities</option>
                        <option value="north">North Campus</option>
                        <option value="west">West Campus</option>
                    </select>

                    <label for="room-type">Room Type</label>
                    <p>Select all that apply</p>
                    <select id="room-type" name="room-type" size="4" multiple>
                        <option value="double">Double</option>
                        <option value="triple">Triple</option>
                        <option value="3-4-person-suite">3 or 4 Person Room/Suite</option>
                        <option value="apartment-style">Single in a Shared Apartment</option>
                    </select>

                    <label for="bathroom-type">Bathroom Type</label>
                    <p>Select all that apply</p>
                    <select id="bathroom-type" name="Bathroom-type" size="4" multiple>
                        <option value="private">Private</option>
                        <option value="semi-private">Semi-private</option>
                        <option value="community-single">Community - single gender</option>
                        <option value="community-all">Community - all gender</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>School Information</legend>

                    <label for="className-standing">className Standing</label>
                    <p>Select all that apply</p>
                    <select id="className-standing" name="className-standing" size="5" multiple>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>Personal Habits</legend>

                    <label for="morning">Morning Wake Up</label>
                    <p>Select one</p>
                    <select id="morning" name="morning" size="4">
                        <option value="5am-or-earlier">5 AM or earlier</option>
                        <option value="5am-to-8am">Between 5 AM and 8 AM</option>
                        <option value="8am-to-noon">Between 8 AM and Noon</option>
                        <option value="noon-or-later">Noon or later</option>
                    </select>

                    <label for="weeknights">Sleep Schedule on Weeknights</label>
                    <p>Select one</p>
                    <select id="weeknights" name="weeknights" size="4">
                        <option value="5pm-or-earlier">10 PM or earlier</option>
                        <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                        <option value="around-midnight">Around Midnight</option>
                        <option value="2am-or-later">2 AM or later</option>
                    </select>

                    <label for="weekends">Sleep Schedule on Weekends</label>
                    <p>Select one</p>
                    <select id="weekends" name="weekends" size="4">
                        <option value="5pm-or-earlier">10 PM or earlier</option>
                        <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                        <option value="around-midnight">Around Midnight</option>
                        <option value="2am-or-later">2 AM or later</option>
                    </select>

                    <label for="drinking">Alcohol?</label>
                    <p>Select one</p>
                    <select id="drinking" name="drinking" size="3">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="sometimes">Sometimes</option>
                    </select>

                    <label for="smoking">Smoke/vape?</label>
                    <p>Select one</p>
                    <select id="smoking" name="smoking" size="3">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="sometimes">Sometimes</option>
                    </select>

                    <label for="organizing">Bedroom Organization</label>
                    <p>Select one</p>
                    <select id="organizing" name="organizing" size="5">
                        <option value="very-organized">Very organized</option>
                        <option value="organized">Organized</option>
                        <option value="neither">Neither organized or disorganized</option>
                        <option value="disorganized">Disorganized</option>
                        <option value="very-disorganized">Very disorganized</option>
                    </select>

                    <label for="cleaning">Bedroom/Bathroom Cleaning</label>
                    <p>Select one</p>
                    <select id="cleaning" name="organizing" size="5">
                        <option value="never">Never</option>
                        <option value="rarely">Rarely</option>
                        <option value="sometimes">Sometimes</option>
                        <option value="often">Often</option>
                        <option value="always">Always</option>
                    </select>
                </fieldset>
            </form>

            <form>
                <input type="submit" value="Submit Form" name="submit" />
                <input type="reset" value="Reset Form" name="reset" />
            </form>
        </div>
    )
}

function Results() {
    return (
        <div className="results-page-container">
            <h2>Results</h2>
            <div className="pfp-results">
                <Link exact to='/profile'><img className="pfp" src="img/avatar.jpg" alt="the user's avatar"></img></Link>
            </div>

            <div className="results-important">
                <Link exact to='/profile'>Name</Link>
                <p>Pronouns</p>
            </div>

            <div className="results-sub">
                <p>Class Standing</p>
                <p>Major</p>
                <p>Hometown</p>
            </div>

            <div className="results-connect">
                <button><Link exact to='/connect'>Connect</Link></button>
            </div>
        </div>
    )
}

function ProfilePage() {
    return (
        <div>
            <main class="main-profile">
                <section class="profile">
                    <form>
                        <h2>Profile</h2>
                        <div>
                            <label for="picture_upload">Picture:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="fname_field">First Name:</label>
                            <output></output>

                            <label for="lname_field">Last Name:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="pronouns_dropdown">Personal Pronoun:</label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <section class="aboutMe">
                    <form>
                        <h2>About Me</h2>
                        <div>
                            <label for="city_field">Hometown City:</label>
                            <output></output>

                            <label for="state_field">Hometown State:</label>
                            <output></output>

                            <label for="country_field">Hometown Country:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="primary_lang_field">Primary Language:</label>
                            <output></output>

                            <label for="second_lang_field">Secondary Language:</label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <section class="academics">
                    <h2>Academic Life</h2>
                    <form>
                        <div>
                            <label for="major">(Intended) Major:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="class-standing">Class Standing:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="graduation">Expected Graduation Month and Year:</label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <section class="housing">
                    <h2>Housing Preferences</h2>
                    <form>
                        <div>
                            <label for="housing_type">Resident Housing</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="room_type">Room Type</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="bathroom_type">Bathroom Type</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="bldg_1">1st Building Preference:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="bldg_2">2nd Building Preference:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="bldg_3">3rd Building Preference:</label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <section class="habits">
                    <h2>Habits</h2>
                    <form>
                        <h3>Sleep/Wake Up</h3>
                        <div>
                            <label for="morning_dropdown">Morning Wake Up:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="weeknights_dropdown">Sleep Schedule on Weeknights:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="weekends_dropdown">Sleep Schedule on Weekends:</label>
                            <output></output>
                        </div>

                        <h3>Alcohol/Smoking</h3>
                        <div>
                            <label for="drinking_dropdown">Alcohol?</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="smoking_dropdown">Smoke/vape?</label>
                            <output></output>
                        </div>

                        <h3>Room Environment</h3>
                        <div>
                            <label for="organizing_dropdown">Bedroom Organization:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="cleaning_dropdown">Bedroom/Bathroom Cleaning:</label>
                            <output></output>
                        </div>

                        <h3>Study Time</h3>
                        <div>
                            <label for="study_dropdown">I usually study at:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="music_dropdown">When studying in my bedroom:</label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <section class="interest">
                    <form>
                        <h2>Personality & Interests</h2>
                        <div>
                            <label for="hobbies">Hobbies:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="adjective_field">Three Adjectives to Describe Me:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="social_rank_dropdown">Sociable?</label>
                            <output></output>
                        </div>

                        <h3>Music</h3>
                        <div>
                            <label for="music_field">The music genres I listen to:</label>
                            <output></output>

                            <label for="artist_field">My favorite artist is:</label>
                            <output></output>
                        </div>

                        <h3>Movies</h3>
                        <div>
                            <label for="movie_field">The movie genres I watch are:</label>
                            <output></output>

                            <label for="fav_movie_field">My favorite movie of all time is:</label>
                            <output></output>
                        </div>

                        <h3>TV Show/Series</h3>
                        <div>
                            <label for="series_field">My favorite TV show/series is:</label>
                            <output></output>

                            <label for="streaming">If I had to pick one streaming service to binge watch, I would choose:</label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <section class="moreInfo">
                    <h2>More Information</h2>
                    <form>
                        <div>
                            <label for="description">Description:</label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <button onclick="window.location.href='index.html';">Go Back</button>

            </main>
        </div>
    )
}

function ConnectPage() {
    return (
        <div>
            <main className="main-connect">
                <section className="contacts">
                    <form>
                        <h2>Contact Information</h2>
                        <div>
                            <label for="phone">Phone Number:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="email">Email Address:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <div>
                    <button onclick="window.location.href='index.html';">Go Back</button>
                </div>
            </main>
        </div>
    )
}

function AccountPage() {
    return (
        <main className="main-account">
            <section className="profile">
                <form>
                    <h2>Account Information</h2>
                    <div>
                        <label for="fname_field">First Name:</label>
                        <input type="text" id="fname_field" name="fname" required />
                    </div>
                    <div>
                        <label for="lname_field">Last Name:</label>
                        <input type="text" id="lname_field" name="lname" required />
                    </div>
                    <div>
                        <label for="uname_field">Username:</label>
                        <input type="text" id="uname_field" name="uname" pattern=".{8,}" placeholder="8 character requirement" required />
                    </div>
                    <div>
                        <label for="pwd_field">Password:</label>
                        <input type="password" id="pwd_field" name="pwd" pattern=".{8,}" placeholder="8 character requirement" required />
                    </div>
                </form>
            </section>

            <section className="aboutMe">
                <form>
                    <h2>About Me</h2>
                    <em>Tell us all about you.</em>
                    <div>
                        <label for="picture_upload">Choose a profile picture:</label>
                        <input type="file" id="picture_upload" name="picture" accept=".png, .jpg, .jpeg" />
                    </div>
                    <div>
                        <label for="pronouns_dropdown">Personal Pronoun:</label>
                        <select id="pronouns_dropdown" name="pronouns">
                            <option hidden="">Select one</option>
                            <option value="she">she/her/hers</option>
                            <option value="he">he/him/his</option>
                            <option value="they">they/them/their</option>
                        </select>
                    </div>
                    <div>
                        <label for="city_field">Hometown City:</label>
                        <input type="text" id="city_field" name="city" placeholder="Seattle" required />
                    </div>
                    <div>
                        <label for="state_field">Hometown State:</label>
                        <input type="text" id="state_field" name="state" placeholder="WA" required />
                    </div>
                    <div>
                        <label for="country_field">Hometown Country:</label>
                        <input type="text" id="country_field" name="country" placeholder="USA" required />
                    </div>
                    <div>
                        <label for="primary_lang_field">Primary Language:</label>
                        <input type="text" id="primary_lang_field" name="primary_lang" placeholder="English" required />
                    </div>
                    <div>
                        <label for="second_lang_field">Secondary Language:</label>
                        <input type="text" id="second_lang_field" name="second_lang" placeholder="Chinese" required />
                    </div>
                </form>
            </section>

            <section className="contacts">
                <form>
                    <h2>Contact Information</h2>
                    <em>Provide your contact information to be reached by other students.</em>
                    <div>
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder="206-543-2100" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div>
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="example@domain.com" />
                    </div>
                    <div>
                        <label for="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                        <input type="text" id="facebook" name="facebook" />
                    </div>
                    <div>
                        <label for="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                        <input type="text" id="instagram" name="instagram" placeholder="@handle" />
                    </div>
                    <div>
                        <label for="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                        <input type="text" id="snapchat" name="snapchat" placeholder="@handle" />
                    </div>
                    <div>
                        <label for="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                        <input type="text" id="wechat" name="wechat" />
                    </div>
                    <div>
                        <label for="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                        <input type="text" id="discord" name="discord" placeholder="@discord#0000" />
                    </div>
                </form>
            </section>

            <section className="academics">
                <h2>Academic Life</h2>
                <em>Provide your academic history or future ambitions</em>
                <form>
                    <div>
                        <label for="major">(Intended) Major:</label>
                        <input type="text" id="major" name="major" placeholder="Informatics" />
                    </div>
                    <div>
                        <label for="class-standing">Class Standing</label>
                        <select id="class-standing" name="class-standing">
                            <option hidden="">Select one</option>
                            <option value="freshman">Freshman</option>
                            <option value="sophomore">Sophomore</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                            <option value="graduate">Graduate</option>
                        </select>
                    </div>
                    <div>
                        <label for="graduation">Expected Graduation Month and Year:</label>
                        <input type="month" id="graduation" name="graduation" />
                    </div>
                </form>
            </section>

            <section className="housing">
                <h2>Housing Preferences</h2>
                <em>Describe your housing preferences. (Select all that apply)</em>
                <em>For window users – hold down + CTRL key to select multiple options</em>
                <em>For mac users – hold down command key to select multiple option</em>

                <form>
                    <div>
                        <label for="housing_type">Resident Housing</label>
                        <p>What type of housing are you looking for?</p>
                        <select id="housing_type" name="housing_type" size="6" multiple>
                            <option value="9_month">9-month</option>
                            <option value="12_month">12-month</option>
                            <option value="residence">Residence Hall</option>
                            <option value="apartment">Apartment Communities</option>
                            <option value="north">North Campus</option>
                            <option value="west">West Campus</option>
                        </select>
                    </div>
                    <div>
                        <label for="room_type">Room Type</label>
                        <p>What type of room are you looking for?</p>
                        <select id="room_type" name="room_type" size="4" multiple>
                            <option value="double">Double</option>
                            <option value="triple">Triple</option>
                            <option value="3_4_person_suite">3 or 4 Person Room/Suite</option>
                            <option value="apartment_style">Single in a Shared Apartment</option>
                        </select>
                    </div>
                    <div>
                        <label for="bathroom_type">Bathroom Type</label>
                        <p>What type of bathroom are you looking for?</p>
                        <select id="bathroom_type" name="bathroom_type" size="4" multiple>
                            <option value="private">Private</option>
                            <option value="semi_private">Semi-private</option>
                            <option value="community_single">Community - single gender</option>
                            <option value="community_all">Community - all gender</option>
                        </select>
                    </div>
                    <div>
                        <label for="bldg_1">1st Building Preference</label>
                        <select id="bldg_1" name="building_preference_one">
                            <option hidden="">Select one</option>
                            <option value="alder">Alder Hall</option>
                            <option value="cedar">Cedar Apartments</option>
                            <option value="elm">Elm Hall</option>
                            <option value="haggett">Haggett Hall</option>
                            <option value="hansee">Hansee Hall</option>
                            <option value="lander">Lander Hall</option>
                            <option value="madrona">Madrona Hall</option>
                            <option value="maple">Maple Hall</option>
                            <option value="mccarty">McCarty Hall</option>
                            <option value="mcmahon">McMahon Hall</option>
                            <option value="mercer">Mercer Court</option>
                            <option value="nordheim">Nordheim Court</option>
                            <option value="oak">Oak Hall</option>
                            <option value="poplar">Poplar Hall</option>
                            <option value="stevens">Stevens Court</option>
                            <option value="terry">Terry Hall</option>
                            <option value="willow">Willow Hall</option>
                        </select>
                    </div>
                    <div>
                        <label for="bldg_2">2nd Building Preference</label>
                        <select id="bldg_2" name="building_preference_two">
                            <option hidden="">Select one</option>
                            <option value="alder">Alder Hall</option>
                            <option value="cedar">Cedar Apartments</option>
                            <option value="elm">Elm Hall</option>
                            <option value="haggett">Haggett Hall</option>
                            <option value="hansee">Hansee Hall</option>
                            <option value="lander">Lander Hall</option>
                            <option value="madrona">Madrona Hall</option>
                            <option value="maple">Maple Hall</option>
                            <option value="mccarty">McCarty Hall</option>
                            <option value="mcmahon">McMahon Hall</option>
                            <option value="mercer">Mercer Court</option>
                            <option value="nordheim">Nordheim Court</option>
                            <option value="oak">Oak Hall</option>
                            <option value="poplar">Poplar Hall</option>
                            <option value="stevens">Stevens Court</option>
                            <option value="terry">Terry Hall</option>
                            <option value="willow">Willow Hall</option>
                        </select>
                    </div>
                    <div>
                        <label for="bldg_3">3rd Building Preference</label>
                        <select id="bldg_3" name="building_preference_three">
                            <option hidden="">Select one</option>
                            <option value="alder">Alder Hall</option>
                            <option value="cedar">Cedar Apartments</option>
                            <option value="elm">Elm Hall</option>
                            <option value="haggett">Haggett Hall</option>
                            <option value="hansee">Hansee Hall</option>
                            <option value="lander">Lander Hall</option>
                            <option value="madrona">Madrona Hall</option>
                            <option value="maple">Maple Hall</option>
                            <option value="mccarty">McCarty Hall</option>
                            <option value="mcmahon">McMahon Hall</option>
                            <option value="mercer">Mercer Court</option>
                            <option value="nordheim">Nordheim Court</option>
                            <option value="oak">Oak Hall</option>
                            <option value="poplar">Poplar Hall</option>
                            <option value="stevens">Stevens Court</option>
                            <option value="terry">Terry Hall</option>
                            <option value="willow">Willow Hall</option>
                        </select>
                    </div>
                </form>
            </section>

            <section className="habits">
                <h2>Habits</h2>
                <em>Specify your personal and study habits.</em>
                <form>
                    <h3>Sleep/Wake Up</h3>
                    <div>
                        <label for="morning_dropdown">What time do you usually wake up in the morning?</label>
                        <select id="morning_dropdown" name="morning">
                            <option hidden="">Select one</option>
                            <option value="5am-or-earlier">5 AM or earlier</option>
                            <option value="5am-to-8am">Between 5 AM and 8 AM</option>
                            <option value="8am-to-noon">Between 8 AM and Noon</option>
                            <option value="noon-or-later">Noon or later</option>
                        </select>
                    </div>
                    <div>
                        <label for="weeknights_dropdown">What time do you go to bed on weeknights?</label>
                        <select id="weeknights_dropdown" name="weeknights">
                            <option hidden="">Select one</option>
                            <option value="5pm-or-earlier">10 PM or earlier</option>
                            <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                            <option value="around-midnight">Around Midnight</option>
                            <option value="2am-or-later">2 AM or later</option>
                        </select>
                    </div>
                    <div>
                        <label for="weekends_dropdown">What time do you go to bed on weekends?</label>
                        <select id="weekends_dropdown" name="weekends">
                            <option hidden="">Select one</option>
                            <option value="5pm-or-earlier">10 PM or earlier</option>
                            <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                            <option value="around-midnight">Around Midnight</option>
                            <option value="2am-or-later">2 AM or later</option>
                        </select>
                    </div>

                    <h3>Alcohol/Smoking</h3>
                    <div>
                        <label for="drinking_dropdown">Do you drink alcohol?</label>
                        <select id="drinking_dropdown" name="drinking">
                            <option hidden="">Select one</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="sometimes">Sometimes</option>
                        </select>
                    </div>
                    <div>
                        <label for="smoking_dropdown">Do you smoke/vape?</label>
                        <select id="smoking_dropdown" name="smoking">
                            <option hidden="">Select one</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="sometimes">Sometimes</option>
                        </select>
                    </div>

                    <h3>Room Environment</h3>
                    <div>
                        <label for="organizing_dropdown">How would you describe your own bedroom?</label>
                        <select id="organizing_dropdown" name="organizing">
                            <option hidden="">Select one</option>
                            <option value="very-organized">Very organized</option>
                            <option value="organized">Organized</option>
                            <option value="neither">Neither organized or disorganized</option>
                            <option value="disorganized">Disorganized</option>
                            <option value="very-disorganized">Very disorganized</option>
                        </select>
                    </div>
                    <div>
                        <label for="cleaning_dropdown">How often do you clean your room/bathroom?</label>
                        <select id="cleaning_dropdown" name="organizing">
                            <option hidden="">Select one</option>
                            <option value="never">Never</option>
                            <option value="rarely">Rarely</option>
                            <option value="sometimes">Sometimes</option>
                            <option value="often">Often</option>
                            <option value="always">Always</option>
                        </select>
                    </div>

                    <h3>Study Time</h3>
                    <div>
                        <label for="study_dropdown">Where do you usually study?</label>
                        <select id="study_dropdown" name="study">
                            <option hidden="">Select one</option>
                            <option value="desk">At my desk</option>
                            <option value="library">At the library</option>
                            <option value="study-lounge">In a study lounge</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label for="music_dropdown">When studying in your bedroom, do you like listening to music?</label>
                        <select id="music_dropdown" name="music">
                            <option hidden="">Select one</option>
                            <option value="yes-speakers">Yes, I play music on my speakers.</option>
                            <option value="yes-headphones">Yes, I listen using headphones.</option>
                            <option value="sometimes">Sometimes, it depends.</option>
                            <option value="no">No, I like it quiet.</option>
                        </select>
                    </div>
                </form>
            </section>

            <section className="interest">
                <form>
                    <h2>Personality & Interests</h2>
                    <em>Describe yourself and what your interests are.</em>
                    <div>
                        <label for="hobbies">Hobbies:</label>
                        <textarea className="form-control" id="hobbies" name="hobbies" placeholder="List down some of your hobbies."></textarea>
                    </div>
                    <div>
                        <label for="adjective_field">What are three adjectives that describe you?</label>
                        <input type="text" id="adjective_field" name="adjective" placeholder="adj1, adj2, adj3" />
                    </div>
                    <div>
                        <label for="social_rank_dropdown">How social are you?</label>
                        <select id="social_rank_dropdown" name="social_rank">
                            <option hidden="">Select one</option>
                            <option value="vsocial">Very social</option>
                            <option value="social">Social</option>
                            <option value="neither">Neither social or shy</option>
                            <option value="shy">Shy</option>
                            <option value="vshy">Very shy</option>
                        </select>
                    </div>

                    <h3>Music</h3>
                    <div>
                        <label for="music_field">What music genres do you listen to?</label>
                        <input type="text" id="music_field" name="music" />
                    </div>
                    <div>
                        <label for="artist_field">Who is your favorite artist?</label>
                        <input type="text" id="artist_field" name="artist" />
                    </div>

                    <h3>Movies</h3>
                    <div>
                        <label for="movie_field">What movie genres do you like to watch?</label>
                        <input type="text" id="movie_field" name="movie" />
                    </div>
                    <div>
                        <label for="fav_movie_field">What is your favorite movie of all time?</label>
                        <input type="text" id="fav_movie_field" name="favorite_movie" />
                    </div>

                    <h3>TV Show/Series</h3>
                    <div>
                        <label for="series_field">What TV show/series is your favorite?</label>
                        <input type="text" id="series_field" name="movie" />
                    </div>
                    <div className="streaming">
                        <label for="streaming">If you had to pick one streaming service to binge watch, which would you choose?</label>
                        <div>
                            <input type="radio" id="netflix_radio" name="streaming" value="Netflix" />
                            <label for="netflix_radio">Netflix</label>
                        </div>
                        <div>
                            <input type="radio" id="hulu_radio" name="streaming" value="Hulu" />
                            <label for="hulu_radio">Hulu</label>
                        </div>
                        <div>
                            <input type="radio" id="disneyplus_radio" name="streaming" value="Disney+" />
                            <label for="disneyplus_radio">Disney+</label>
                        </div>
                        <div>
                            <input type="radio" id="hbomax_radio" name="streaming" value="HBO Max" />
                            <label for="hbomax_radio">HBO Max</label>
                        </div>
                        <div>
                            <input type="radio" id="primevideo_radio" name="streaming" value="Amazon Prime Video" />
                            <label for="primevideo_radio">Amazon Prime Video</label>
                        </div>
                        <div>
                            <input type="radio" id="peacock_radio" name="streaming" value="Peacock" />
                            <label for="peacock_radio">Peacock</label>
                        </div>
                        <div>
                            <input type="radio" id="none_radio" name="streaming" value="None of the above" />
                            <label for="none_radio">I am not subscribed to any streaming service</label>
                        </div>
                    </div>
                </form>
            </section>

            <section className="moreInfo">
                <h2>Anything else?</h2>
                <em>Is there anything else you would like someone to know about you?</em>
                <form>
                    <div>
                        <label for="description">Description:</label>
                        <textarea className="form-control" id="description" name="description" placeholder="Please feel free to make any other comments that you think might be important to someone making a decision about being your roommate."></textarea>
                    </div>
                </form>
            </section>

            <section className="submit">
                <h2>Complete Questionnaire</h2>
                <form>
                    <input type="submit" value="Submit Form" name="submit" />
                    <input type="reset" value="Reset Form" name="reset" />
                </form>
            </section>
        </main>
    )
}

export default App;