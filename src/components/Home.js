import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import { Modal, Button } from 'react-bootstrap';

import firebase from 'firebase/app';
import 'firebase/database';

import avatar from '../img/avatar.jpg';
import ConnectPage from './Connect';
import ProfilePage from './Profile';

export default function Accordionize(props) {
    return (
        <div className="home-page">
            <h2>Welcome, {props.user.displayName}!</h2>
            <div className="home-message">
                <p className="alert alert-info">
                    <em>New to UniteDawgs? Please click "Get Started" and complete your account:  </em>
                    <Link to='/account'><button className="btn btn-primary mt-1" aria-label="Get Started">Get Started</button></Link>
                </p>
            </div>
            <p><em>Note: Other users will not be able to find you if your account is incomplete!</em></p>
            <p>To begin your search for a roommate,</p>
            <ol>
                <li>Start filtering or jump straight to the results.</li>
                <li>To learn more about a person, click on their name or avatar.</li>
                <li>To connect and message someone on a third-party app, click on "Connect."</li>
            </ol>

            <Accordion preExpanded={['filter']}>
                <AccordionItem uuid="filter">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Filter Roommates
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <FilterForm user={props.user} />
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="results">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Results
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <Results user={props.user} />
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

function FilterForm(props) {
    const [showSuccessAlert, setSucessAlert] = useState(null);
    const [countSuccess, setCountSuccess] = useState(1);
    const [showResetAlert, setResetAlert] = useState(null);
    const [countReset, setCountReset] = useState(1);

    //stores all filter values in a single object
    const [filterValues, setFilterValues] = useState({
        'month_type_filter': '',
        'building_type_filter': '',
        'location_type_filter': '',
        'room_type_filter': '',
        'bathroom_type_filter': '',
        'class_standing_filter': '',
        'morning_filter': '',
        'weeknights_filter': '',
        'weekends_filter': '',
        'drinking_filter': '',
        'smoking_filter': '',
        'organizing_filter': '',
        'cleaning_filter': ''
    })

    //update state for a specific filter
    const handleFilter = (event) => {
        let field = event.target.name;
        let value = event.target.value;

        let copy = {...filterValues};
        copy[field] = value;
        setFilterValues(copy);
    }

    useEffect(() => {
        const formRef = firebase.database().ref("filter/" + props.user.uid);
        formRef.on('value', (snapshot) => {
            const theValueObj = snapshot.val();
            if (theValueObj !== null) {
                setFilterValues(theValueObj);
            } else {
                setFilterValues({
                    'month_type_filter': '',
                    'building_type_filter': '',
                    'location_type_filter': '',
                    'room_type_filter': '',
                    'bathroom_type_filter': '',
                    'class_standing_filter': '',
                    'morning_filter': '',
                    'weeknights_filter': '',
                    'weekends_filter': '',
                    'drinking_filter': '',
                    'smoking_filter': '',
                    'organizing_filter': '',
                    'cleaning_filter': ''
                })
            }
        })
    })

    //handle submitting filter button
    const handleFilterSubmit = (event) => {
        event.preventDefault();
        const filterRef = firebase.database().ref("filter/" + props.user.uid);
        filterRef.update(filterValues);

        setCountSuccess(countSuccess + 1);
        setSucessAlert(<p className="alert alert-success"><em>Success #{countSuccess}!</em> You can now begin to search for a roommate by tapping on the 'Results' tab below.</p>);
    }

    const handleFilterReset = (event) => {
        event.preventDefault();
        setFilterValues({
            'month_type_filter': '',
            'building_type_filter': '',
            'location_type_filter': '',
            'room_type_filter': '',
            'bathroom_type_filter': '',
            'class_standing_filter': '',
            'morning_filter': '',
            'weeknights_filter': '',
            'weekends_filter': '',
            'drinking_filter': '',
            'smoking_filter': '',
            'organizing_filter': '',
            'cleaning_filter': ''
        });    
        setCountReset(countReset + 1);
        setResetAlert(<p className="alert alert-danger"><em>Reset #{countReset}!</em> The form has been reset. To access previous information, refresh the page.</p>);
    }

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Housing Preferences</legend>
                    <section className="form-section-container">
                        <label htmlFor="month_type_filter">9-month or 12-month?</label>
                        <select id="month_type_filter" name="month_type_filter" value={filterValues.month_type_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="9-month">9-month</option>
                            <option value="12-month">12-month</option>
                        </select>

                        <label htmlFor="building_type_filter">Residence Hall or Apartment Communities?</label>
                        <select id="building_type_filter" name="building_type_filter" value={filterValues.building_type_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Residence Hall">Residence Hall</option>
                            <option value="Apartment Communities">Apartment Communities</option>
                        </select>

                        <label htmlFor="location_type_filter">North Campus or West Campus?</label>
                        <select id="location_type_filter" name="location_type_filter" value={filterValues.location_type_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="North Campus">North Campus</option>
                            <option value="West Campus">West Campus</option>
                        </select>

                        <label htmlFor="room_type_filter">Room Type</label>
                        <select id="room_type_filter" name="room_type_filter" value={filterValues.room_type_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Double">Double</option>
                            <option value="Triple">Triple</option>
                            <option value="3 or 4 Person Room/Suite">3 or 4 Person Room/Suite</option>
                            <option value="Single in a Shared Apartment">Single in a Shared Apartment</option>
                        </select>

                        <label htmlFor="bathroom_type_filter">Bathroom Type</label>
                        <select id="bathroom_type_filter" name="bathroom_type_filter" value={filterValues.bathroom_type_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Private">Private</option>
                            <option value="Semi-private">Semi-private</option>
                            <option value="Community - single gender">Community - single gender</option>
                            <option value="Community - all gender">Community - all gender</option>
                        </select>
                    </section>
                </fieldset>

                <fieldset>
                    <legend>School Information</legend>
                    <section className="form-section-container">
                        <label htmlFor="class_standing_filter">Class Standing</label>
                        <select id="class_standing_filter" name="class_standing_filter" value={filterValues.class_standing_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Freshman">Freshman</option>
                            <option value="Sophomore">Sophomore</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                            <option value="Graduate">Graduate</option>
                        </select>
                    </section>
                </fieldset>

                <fieldset>
                    <legend>Personal Habits</legend>
                    <section className="form-section-container">
                        <label htmlFor="morning_filter">Morning Wake Up</label>
                        <select id="morning_filter" name="morning_filter" value={filterValues.morning_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="5 AM or earlier">5 AM or earlier</option>
                            <option value="Between 5 AM and 8 AM">Between 5 AM and 8 AM</option>
                            <option value="Between 8 AM and Noon">Between 8 AM and Noon</option>
                            <option value="Noon or later">Noon or later</option>
                        </select>

                        <label htmlFor="weeknights_filter">Sleep Schedule on Weeknights</label>
                        <select id="weeknights_filter" name="weeknights_filter" value={filterValues.weeknights_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="10 PM or earlier">10 PM or earlier</option>
                            <option value="Between 10 PM and Midnight">Between 10 PM and Midnight</option>
                            <option value="Around Midnight">Around Midnight</option>
                            <option value="2 AM or later">2 AM or later</option>
                        </select>

                        <label htmlFor="weekends_filter">Sleep Schedule on Weekends</label>
                        <select id="weekends_filter" name="weekends_filter" value={filterValues.weekends_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="10 PM or earlier">10 PM or earlier</option>
                            <option value="Between 10 PM and Midnight">Between 10 PM and Midnight</option>
                            <option value="Around Midnight">Around Midnight</option>
                            <option value="2 AM or later">2 AM or later</option>
                        </select>

                        <label htmlFor="drinking_filter">Alcohol?</label>
                        <select id="drinking_filter" name="drinking_filter" value={filterValues.drinking_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Sometimes">Sometimes</option>
                        </select>

                        <label htmlFor="smoking_filter">Smoke/vape?</label>
                        <select id="smoking_filter" name="smoking_filter" value={filterValues.smoking_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Sometimes">Sometimes</option>
                        </select>

                        <label htmlFor="organizing_filter">Bedroom Organization</label>
                        <select id="organizing_filter" name="organizing_filter" value={filterValues.organizing_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Very organized">Very organized</option>
                            <option value="Organized">Organized</option>
                            <option value="Neither organized or disorganized">Neither organized or disorganized</option>
                            <option value="Disorganized">Disorganized</option>
                            <option value="Very disorganized">Very disorganized</option>
                        </select>

                        <label htmlFor="cleaning_filter">Bedroom/Bathroom Cleaning</label>
                        <select id="cleaning_filter" name="cleaning_filter" value={filterValues.cleaning_filter} onChange={handleFilter}>
                            <option hidden="">Select one</option>
                            <option value="Always">Always</option>
                            <option value="Often">Often</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Rarely">Rarely</option>
                            <option value="Never">Never</option>
                        </select>
                    </section>
                </fieldset>
            </form>

            <section className="submit-home">
                <form>
                    {showSuccessAlert}
                    {showResetAlert}
                    <button className="btn btn-success" onClick={handleFilterSubmit} aria-label="submit filters">Submit Filters</button>
                    <button className="btn btn-danger" onClick={handleFilterReset} aria-label="reset filters">Reset Filters</button>
                </form>
            </section>
        </div>
    )
}

function Results(props) {
    const [dawgs, setDawgs] = useState([]);

    useEffect(() => {
        const usersRef = firebase.database().ref();
        usersRef.on('value', (snapshot) => {
            const dawgsObj = snapshot.val();
            console.log(dawgsObj);
        })
        
        // usersRef.on('value', (snapshot) => {
        //     const dawgsObj = snapshot.val(); //all current users
            
        //     const filterRef = firebase.database().ref("filter/" + props.user.uid);
        //     filterRef.on('value', (snapshot) => { 
        //         let filterObj = snapshot.val(); //user selected filters
        //         if (filterObj == null) {
        //             filterObj = {
        //                 'month_type_filter': '',
        //                 'building_type_filter': '',
        //                 'location_type_filter': '',
        //                 'room_type_filter': '',
        //                 'bathroom_type_filter': '',
        //                 'class_standing_filter': '',
        //                 'morning_filter': '',
        //                 'weeknights_filter': '',
        //                 'weekends_filter': '',
        //                 'drinking_filter': '',
        //                 'smoking_filter': '',
        //                 'organizing_filter': '',
        //                 'cleaning_filter': ''
        //             }
        //         }

        //         let objectKeyArray = Object.keys(dawgsObj);
        //         let dawgsArray = objectKeyArray.map((key) => {
        //             let singleDawgObj = dawgsObj[key];
        //             singleDawgObj.key = key;
        //             return singleDawgObj;
        //         })

        //         const newDawgsArray = [];

        //         for (let dawgObj of dawgsArray) {
        //             if(
        //                 (dawgObj.month_type === filterObj.month_type_filter || filterObj.month_type_filter === "" || filterObj.month_type_filter === "Select one") &&

        //                 (dawgObj.building_type === filterObj.building_type_filter || filterObj.building_type_filter === "" || filterObj.building_type_filter === "Select one") && 

        //                 (dawgObj.location_type === filterObj.location_type_filter || filterObj.location_type_filter === "" || filterObj.location_type_filter === "Select one") && 

        //                 (dawgObj.room_type === filterObj.room_type_filter || filterObj.room_type_filter === "" || filterObj.room_type_filter === "Select one") &&

        //                 (dawgObj.bathroom_type === filterObj.bathroom_type_filter || filterObj.bathroom_type_filter === "" || filterObj.bathroom_type_filter === "Select one") && 

        //                 (dawgObj.class_standing === filterObj.class_standing_filter || filterObj.class_standing_filter === "" || filterObj.class_standing_filter === "Select one") &&

        //                 (dawgObj.morning === filterObj.morning_filter || filterObj.morning_filter === "" || filterObj.morning_filter === "Select one") &&

        //                 (dawgObj.weeknights === filterObj.weeknights_filter || filterObj.weeknights_filter === "" || filterObj.weeknights_filter === "Select one") && 

        //                 (dawgObj.weekends === filterObj.weekends_filter || filterObj.weekends_filter === "" || filterObj.weekends_filter === "Select one") &&

        //                 (dawgObj.drinking === filterObj.drinking_filter || filterObj.drinking_filter === "" || filterObj.drinking_filter === "Select one") &&

        //                 (dawgObj.smoking === filterObj.smoking_filter || filterObj.smoking_filter === "" || filterObj.smoking_filter === "Select one") &&
                        
        //                 (dawgObj.organizing === filterObj.organizing_filter || filterObj.organizing_filter === "" || filterObj.organizing_filter === "Select one") &&

        //                 (dawgObj.cleaning === filterObj.cleaning_filter || filterObj.cleaning_filter === "" || filterObj.cleaning_filter === "Select one") &&

        //                 !newDawgsArray.includes(dawgObj)) {
        //                 newDawgsArray.push(dawgObj);
        //             }
        //         }
        //         setDawgs(newDawgsArray);
        //     })
        // })
    })

    let dawgsArray = [];
    dawgsArray = dawgs.filter((userObj) => {
        if (
            userObj.preferred_name !== '' &&
            userObj.pronouns !== '' &&
            userObj.class_standing !== '' &&
            userObj.major !== '' &&
            userObj.city !== '' &&
            userObj.state !== '' &&
            userObj.country !== ''
        ) {
            return true;
        }
        //skip entry
        return false;
    }).map((userObj) => {
        let uniqueID = userObj.preferred_name + userObj.class_standing + userObj.major + userObj.city + userObj.state + userObj.country;

        return (
            <ResultsEntry user={props.user} dawg={userObj} key={uniqueID} />
        )
    })

    if (dawgsArray.length === 0) { 
        return (
            <div className="results-page-container">
                <p className="alert alert-dark">No results found</p>
            </div>
        )
    } else {
        return (
            <div className="results-page-container">
                {dawgsArray}
            </div>
        )
    }
}

export function ResultsEntry(props) {
    const [profileImgShow, setImgProfileShow] = React.useState(false);
    const [profileNameShow, setProfileNameShow] = React.useState(false);
    const [connectShow, setConnectShow] = React.useState(false);

    let ariaProfile = props.dawg.preferred_name + "'s profile";
    let ariaConnect = props.dawg.preferred_name + "'s contacts";

    return (
        <div className="border border-dark results-entry-container">
            <div className="pfp-results">
                <Button variant="secondary" onClick={() => setImgProfileShow(true)} aria-label={ariaProfile}>
                    <img className="pfp" src={avatar} alt="the user's avatar"/>
                </Button>
    
                <ProfileModal
                    show={profileImgShow}
                    onHide={() => setImgProfileShow(false)}
                    dawg={props.dawg}
                />
            </div>

            <div className="results-important">
                <Button variant="primary" onClick={() => setProfileNameShow(true)} aria-label={ariaProfile}>
                    {props.dawg.preferred_name}
                </Button>
        
                <ProfileModal
                    show={profileNameShow}
                    onHide={() => setProfileNameShow(false)}
                    dawg={props.dawg}
                />

                <p>{props.dawg.pronouns}</p>
                <p>{props.dawg.class_standing}</p>
                <p>{props.dawg.major}</p>
                <p>{props.dawg.city}, {props.dawg.state}, {props.dawg.country}</p>
            </div>

            <div className="results-connect">
                <Button variant="primary" onClick={() => setConnectShow(true)} aria-label={ariaConnect}>
                    Connect
                </Button>
        
                <ConnectModal
                    show={connectShow}
                    onHide={() => setConnectShow(false)}
                    dawg={props.dawg}
                />
            </div>
        </div>
    )
}

function ProfileModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ProfilePage dawg={props.dawg} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide} aria-label="close">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ConnectModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Connect</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ConnectPage dawg={props.dawg} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide} aria-label="close">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}