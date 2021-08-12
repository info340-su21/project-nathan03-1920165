import React from 'react';

function App() {
  return (
    <div>
        <Header />
        <main>
            <Accodionize />
        </main>
        <footer>
            <address>
                Contact us at <a href="mailto:findahusky@uw.edu">findahusky@uw.edu</a>, or at <a href="tel:206-543-2100">(206) 543-2100</a>
            </address>
            <p>&copy; 2021 Juliane De Los Santos & Nathaniel Sy Su</p>
        </footer>
    </div>
  );
}

function Header() {
  return (
    <div className="banner">
        <header>
            <h1><a href="onboard.html">UW Roommate Finder</a></h1>
        </header>
        <nav>
            <div className="mobile">
                <ul>
                    <li><a href="index.html"><i className="fas fa-home" aria-label="Home"></i></a></li>
                    <li><a href="about.html"><i className="fas fa-info-circle" aria-label="About"></i></a></li>
                    <li><a href="account.html"><i className="fas fa-user-circle" aria-label="User"></i></a></li>
                </ul>
            </div>
            <div className="desktop">
                <ul>
                    <li><a href="index.html">Home <i className="fas fa-home" aria-label="Home"></i></a></li>
                    <li><a href="about.html">About <i className="fas fa-info-circle" aria-label="About"></i></a></li>
                    <li><a href="account.html">My Profile <i className="fas fa-user-circle" aria-label="User"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

function Accodionize() {
  return (
    <div className="accordion" id="accordionExample">
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
    </div>
  );
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
            <input type="submit" value="Submit Form" name="submit"></input>
            <input type="reset" value="Reset Form" name="reset"></input>
        </form>
    </div>
 );
}

function Results() {
    return (
        <div className="results-page-container">
            <h2>Results</h2>
            <div className="pfp-results">
                <a href="profile.html"><img className="pfp" src="img/avatar.jpg" alt="the user's profile picture"></img></a>
            </div>

            <div className="results-important">
                <a href="profile.html"><p>Name</p></a>
                <p>Pronouns</p>
            </div>

            <div className="results-sub">
                <p>Class Standing</p>
                <p>Major</p>
                <p>Hometown</p>
            </div>

            <div className="results-connect">
                <button onclick="window.location.href='connect.html';">Connect</button>
            </div>
        </div>
    );
}

export default App;