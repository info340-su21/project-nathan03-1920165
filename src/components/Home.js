import React from 'react';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

export default function Accordionize() {
    return (
        // <div className="home-page">
        // <Collapsible trigger="Filter Roommates" open={true}>
        //     <FilterForm />
        // </Collapsible>

        // <Collapsible trigger="Results">
        //     <Results />
        // </Collapsible>
        // </div>
      
      
        <div className="accordion">
            <div className="accordion-item">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Filter Roommates
                </button>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <FilterForm />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Results
                </button>
                {/*add className "collapse to following div for content to disappear*/}
                <div id="collapseTwo" className="accordion-collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <Results />
                    </div>
                </div>
            </div>
        </div>
    )
}

function FilterForm() {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Housing Preferences</legend>

                    <label htmlFor="housing-type">Resident Housing</label>
                    <p>Select all that apply</p>
                    <select id="housing-type" name="housing">
                        <option value="9-month">9-month</option>
                        <option value="12-month">12-month</option>
                        <option value="residence">Residence Hall</option>
                        <option value="apartment">Apartment Communities</option>
                        <option value="north">North Campus</option>
                        <option value="west">West Campus</option>
                    </select>

                    <label htmlFor="room-type">Room Type</label>
                    <p>Select all that apply</p>
                    <select id="room-type" name="room-type">
                        <option value="double">Double</option>
                        <option value="triple">Triple</option>
                        <option value="3-4-person-suite">3 or 4 Person Room/Suite</option>
                        <option value="apartment-style">Single in a Shared Apartment</option>
                    </select>

                    <label htmlFor="bathroom-type">Bathroom Type</label>
                    <p>Select all that apply</p>
                    <select id="bathroom-type" name="Bathroom-type">
                        <option value="private">Private</option>
                        <option value="semi-private">Semi-private</option>
                        <option value="community-single">Community - single gender</option>
                        <option value="community-all">Community - all gender</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>School Information</legend>

                    <label htmlFor="className-standing">className Standing</label>
                    <p>Select all that apply</p>
                    <select id="className-standing" name="className-standing">
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>Personal Habits</legend>

                    <label htmlFor="morning">Morning Wake Up</label>
                    <p>Select one</p>
                    <select id="morning" name="morning">
                        <option value="5am-or-earlier">5 AM or earlier</option>
                        <option value="5am-to-8am">Between 5 AM and 8 AM</option>
                        <option value="8am-to-noon">Between 8 AM and Noon</option>
                        <option value="noon-or-later">Noon or later</option>
                    </select>

                    <label htmlFor="weeknights">Sleep Schedule on Weeknights</label>
                    <p>Select one</p>
                    <select id="weeknights" name="weeknights">
                        <option value="5pm-or-earlier">10 PM or earlier</option>
                        <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                        <option value="around-midnight">Around Midnight</option>
                        <option value="2am-or-later">2 AM or later</option>
                    </select>

                    <label htmlFor="weekends">Sleep Schedule on Weekends</label>
                    <p>Select one</p>
                    <select id="weekends" name="weekends">
                        <option value="5pm-or-earlier">10 PM or earlier</option>
                        <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                        <option value="around-midnight">Around Midnight</option>
                        <option value="2am-or-later">2 AM or later</option>
                    </select>

                    <label htmlFor="drinking">Alcohol?</label>
                    <p>Select one</p>
                    <select id="drinking" name="drinking">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="sometimes">Sometimes</option>
                    </select>

                    <label htmlFor="smoking">Smoke/vape?</label>
                    <p>Select one</p>
                    <select id="smoking" name="smoking">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="sometimes">Sometimes</option>
                    </select>

                    <label htmlFor="organizing">Bedroom Organization</label>
                    <p>Select one</p>
                    <select id="organizing" name="organizing">
                        <option value="very-organized">Very organized</option>
                        <option value="organized">Organized</option>
                        <option value="neither">Neither organized or disorganized</option>
                        <option value="disorganized">Disorganized</option>
                        <option value="very-disorganized">Very disorganized</option>
                    </select>

                    <label htmlFor="cleaning">Bedroom/Bathroom Cleaning</label>
                    <p>Select one</p>
                    <select id="cleaning" name="organizing">
                        <option value="never">Never</option>
                        <option value="rarely">Rarely</option>
                        <option value="sometimes">Sometimes</option>
                        <option value="often">Often</option>
                        <option value="always">Always</option>
                    </select>
                </fieldset>
            </form>

            <section className="submit">
                <form>
                    <input className="btn btn-success" type="submit" value="Submit Form" name="submit" />
                    <input className="btn btn-danger" type="reset" value="Reset Form" name="reset" />
                </form>
            </section>
        </div>
    )
}

function Results() {
    return (
        <div className="results-page-container">
            <div className="results-entry-container">
                <div className="pfp-results">
                    <Link to='/profile'><img className="pfp" src="../img/avatar.jpg" alt="the user's avatar"/></Link>
                </div>

                <div className="results-important">
                    <Link to='/profile'>Name</Link>
                    <p>Pronouns</p>
                </div>

                <div className="results-sub">
                    <p>Class Standing</p>
                    <p>Major</p>
                    <p>Hometown</p>
                </div>

                <div className="results-connect">
                    <Link to='/connect'><button class="btn btn-primary">Connect</button></Link>
                </div>
            </div>
            <div className="results-entry-container">
                <div className="pfp-results">
                    <Link to='/profile'><img className="pfp" src="../img/avatar.jpg" alt="the user's avatar"/></Link>
                </div>

                <div className="results-important">
                    <Link to='/profile'>Name</Link>
                    <p>Pronouns</p>
                </div>

                <div className="results-sub">
                    <p>Class Standing</p>
                    <p>Major</p>
                    <p>Hometown</p>
                </div>

                <div className="results-connect">
                    <Link to='/connect'><button class="btn btn-primary">Connect</button></Link>
                </div>
            </div>
        </div>
    )
}