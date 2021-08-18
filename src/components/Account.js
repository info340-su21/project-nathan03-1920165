import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/database';

export default function AccountPage(props) {
    let fullname = props.user.displayName;
    let message = "Hello, " + fullname + "!";

    const [showSuccessAlert, setSucessAlert] = useState(null);
    const [countSuccess, setCountSuccess] = useState(1);

    const [showResetAlert, setResetAlert] = useState(null);
    const [countReset, setCountReset] = useState(1);

    //stores all form values in a single object
    const [formValues, setFormValues] = useState({
        'preferred_name': '',
        'pronouns': '',
        'city': '',
        'state': '',
        'country': '',
        'primary_lang': '',
        'second_lang': '',

        'phone': '',
        'email': '',
        'facebook': '',
        'instagram': '',
        'snapchat': '',
        'wechat': '',
        'discord': '',

        'major': '',
        'class_standing': '',
        'graduation': '',
        'month_type': '',
        'building_type': '',
        'location_type': '',
        'room_type': '',
        'bathroom_type': '',
        'bldg_one': '',
        'bldg_two': '',
        'bldg_three': '',

        'morning': '',
        'weeknights': '',
        'weekends': '',
        'drinking': '',
        'smoking': '',
        'organizing': '',
        'cleaning': '',
        'study': '',
        'music_listening': '',

        'hobbies': '',
        'adjectives': '',
        'social_rank': '',
        'music': '',
        'artist': '',
        'movie': '',
        'favorite_movie': '',
        'television': '',
        'streaming': '',

        'description': ''
    })

    //update state for a specific field
    const handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;

        let copy = {...formValues};
        copy[field] = value;
        setFormValues(copy);
    }

    useEffect(() => {
        const formRef = firebase.database().ref("users/" + props.user.uid);
        formRef.on('value', (snapshot) => {
            const theValueObj = snapshot.val();
            setFormValues(theValueObj);
        })
    }, [])

    //handle submitting form button
    const handleSubmit = (event) => {
        event.preventDefault();
        const formRef = firebase.database().ref("users/" + props.user.uid);
        formRef.update(formValues);

        setCountSuccess(countSuccess + 1);
        setSucessAlert(<p className="alert alert-success"><em>Success #{countSuccess}!</em> You can now begin to search for a roommate on the <Link to="/home" className="alert-link">homepage</Link>.</p>);
    }

    //handle resetting form button
    const handleReset = (event) => {
        event.preventDefault();
        setFormValues({
            'preferred_name': '',
            'pronouns': '',
            'city': '',
            'state': '',
            'country': '',
            'primary_lang': '',
            'second_lang': '',

            'phone': '',
            'email': '',
            'facebook': '',
            'instagram': '',
            'snapchat': '',
            'wechat': '',
            'discord': '',

            'major': '',
            'class_standing': '',
            'graduation': '',
            'month_type': '',
            'building_type': '',
            'location_type': '',
            'room_type': '',
            'bathroom_type': '',
            'bldg_one': '',
            'bldg_two': '',
            'bldg_three': '',

            'morning': '',
            'weeknights': '',
            'weekends': '',
            'drinking': '',
            'smoking': '',
            'organizing': '',
            'cleaning': '',
            'study': '',
            'music_listening': '',

            'hobbies': '',
            'adjectives': '',
            'social_rank': '',
            'music': '',
            'artist': '',
            'movie': '',
            'favorite_movie': '',
            'television': '',
            'streaming': '',

            'description': ''
        });

        setCountReset(countReset + 1);
        setResetAlert(<p className="alert alert-danger"><em>Reset #{countReset}!</em> The form has been reset. To access previous information, refresh the page.</p>);
    }

    return (
        <main className="main-account">
            <section className="profile">
                <h2>{message}</h2>
                <div>
                    <em>To connect with other students, please complete this questionnaire about who you are, along with your contact information, and anything else you would like someone to know about you below.</em>
                </div>
            </section>

            <section className="aboutMe">
                <h2>About Me</h2>
                <div>
                    <em>Tell us all about you.</em>
                </div>
                <form>
                    <section className="form-section-container">
                        <div>
                            <label htmlFor="preferred_name_field">Preferred Name:</label>
                            <input type="text" id="preferred_name_field" name="preferred_name" value={formValues.preferred_name} onChange={handleChange} placeholder="First & Last Name" required />
                        </div>
                        <div>
                            <label htmlFor="pronouns_dropdown">Personal Pronoun:</label>
                            <select id="pronouns_dropdown" name="pronouns" value={formValues.pronouns} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="she/her/hers">she/her/hers</option>
                                <option value="he/him/his">he/him/his</option>
                                <option value="they/them/their">they/them/their</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="city_field">Hometown City:</label>
                            <input type="text" id="city_field" name="city" value={formValues.city} onChange={handleChange} placeholder="Seattle" required />
                        </div>
                        <div>
                            <label htmlFor="state_field">Hometown State:</label>
                            <input type="text" id="state_field" name="state" value={formValues.state} onChange={handleChange} placeholder="WA" required />
                        </div>
                        <div>
                            <label htmlFor="country_field">Hometown Country:</label>
                            <input type="text" id="country_field" name="country" value={formValues.country} onChange={handleChange} placeholder="USA" required />
                        </div>
                        <div>
                            <label htmlFor="primary_lang_field">Primary Language:</label>
                            <input type="text" id="primary_lang_field" name="primary_lang" value={formValues.primary_lang} onChange={handleChange} placeholder="English" required />
                        </div>
                        <div>
                            <label htmlFor="second_lang_field">Secondary Language:</label>
                            <input type="text" id="second_lang_field" name="second_lang" value={formValues.second_lang} onChange={handleChange} placeholder="Chinese" required />
                        </div>
                    </section>
                </form>
            </section>

            <section className="contacts">
                <h2>Contact Information</h2>
                <div>
                    <em>Provide your contact information to be reached by other students.</em>
                </div>
                <form>
                    <section className="form-section-container">
                        <div>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" value={formValues.phone} onChange={handleChange} placeholder="206-543-2100" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} placeholder="example@domain.com" />
                        </div>
                        <div>
                            <label htmlFor="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                            <input type="text" id="facebook" name="facebook" value={formValues.facebook} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                            <input type="text" id="instagram" name="instagram" value={formValues.instagram} onChange={handleChange} placeholder="@handle" />
                        </div>
                        <div>
                            <label htmlFor="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                            <input type="text" id="snapchat" name="snapchat" value={formValues.snapchat} onChange={handleChange} placeholder="@handle" />
                        </div>
                        <div>
                            <label htmlFor="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                            <input type="text" id="wechat" name="wechat" value={formValues.wechat} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                            <input type="text" id="discord" name="discord" value={formValues.discord} onChange={handleChange} placeholder="@discord#0000" />
                        </div>
                    </section>
                </form>
            </section>

            <section className="academics">
                <h2>Academic Life</h2>
                <div>
                    <em>Provide your academic history or future ambitions</em>
                </div>
                <form>
                    <section className="form-section-container">
                        <div>
                            <label htmlFor="major">(Intended) Major:</label>
                            <input type="text" id="major" name="major" value={formValues.major} onChange={handleChange} placeholder="Informatics" />
                        </div>
                        <div>
                            <label htmlFor="class_standing">Class Standing</label>
                            <select id="class_standing" name="class_standing" value={formValues.class_standing} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                                <option value="Graduate">Graduate</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="graduation">Expected Graduation Month and Year:</label>
                            <input type="month" id="graduation" name="graduation" value={formValues.graduation} onChange={handleChange} />
                        </div>
                    </section>
                </form>
            </section>

            <section className="housing">
                <h2>Housing Preferences</h2>
                <div>
                    <em>Describe your housing preferences.</em>
                </div>
                <form>
                    <section className="form-section-container">
                        <div>
                            <label htmlFor="month_type">9-month or 12-month?</label>
                            <select id="month_type" name="month_type" value={formValues.month_type} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="9-month">9-month</option>
                                <option value="12-month">12-month</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="building_type">Residence Hall or Apartment Communities?</label>
                            <select id="building_type" name="building_type" value={formValues.building_type} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Residence Hall">Residence Hall</option>
                                <option value="Apartment Communities">Apartment Communities</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="location_type">North Campus or West Campus?</label>
                            <select id="location_type" name="location_type" value={formValues.location_type} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="North Campus">North Campus</option>
                                <option value="West Campus">West Campus</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="room_type">Room Type</label>
                            <select id="room_type" name="room_type" value={formValues.room_type} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Double">Double</option>
                                <option value="Triple">Triple</option>
                                <option value="3 or 4 Person Room/Suite">3 or 4 Person Room/Suite</option>
                                <option value="Single in a Shared Apartment">Single in a Shared Apartment</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bathroom_type">Bathroom Type</label>
                            <select id="bathroom_type" name="bathroom_type" value={formValues.bathroom_type} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Private">Private</option>
                                <option value="Semi-private">Semi-private</option>
                                <option value="Community - single gender">Community - single gender</option>
                                <option value="Community - all gender">Community - all gender</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bldg_1">1st Building Preference</label>
                            <select id="bldg_1" name="bldg_one" value={formValues.bldg_one} onChange={handleChange} >
                                <option hidden="">Select one</option>
                                <option value="Alder Hall">Alder Hall</option>
                                <option value="Cedar Apartments">Cedar Apartments</option>
                                <option value="Elm Hall">Elm Hall</option>
                                <option value="Haggett Hall">Haggett Hall</option>
                                <option value="Hansee Hall">Hansee Hall</option>
                                <option value="Lander Hall">Lander Hall</option>
                                <option value="Madrona Hall">Madrona Hall</option>
                                <option value="Maple Hall">Maple Hall</option>
                                <option value="McCarty Hall">McCarty Hall</option>
                                <option value="McMahon Hall">McMahon Hall</option>
                                <option value="Mercer Court">Mercer Court</option>
                                <option value="Nordheim Court">Nordheim Court</option>
                                <option value="Oak Hall">Oak Hall</option>
                                <option value="Poplar Hall">Poplar Hall</option>
                                <option value="Stevens Court">Stevens Court</option>
                                <option value="Terry Hall">Terry Hall</option>
                                <option value="Willow Hall">Willow Hall</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bldg_2">2nd Building Preference</label>
                            <select id="bldg_2" name="bldg_two" value={formValues.bldg_two} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Alder Hall">Alder Hall</option>
                                <option value="Cedar Apartments">Cedar Apartments</option>
                                <option value="Elm Hall">Elm Hall</option>
                                <option value="Haggett Hall">Haggett Hall</option>
                                <option value="Hansee Hall">Hansee Hall</option>
                                <option value="Lander Hall">Lander Hall</option>
                                <option value="Madrona Hall">Madrona Hall</option>
                                <option value="Maple Hall">Maple Hall</option>
                                <option value="McCarty Hall">McCarty Hall</option>
                                <option value="McMahon Hall">McMahon Hall</option>
                                <option value="Mercer Court">Mercer Court</option>
                                <option value="Nordheim Court">Nordheim Court</option>
                                <option value="Oak Hall">Oak Hall</option>
                                <option value="Poplar Hall">Poplar Hall</option>
                                <option value="Stevens Court">Stevens Court</option>
                                <option value="Terry Hall">Terry Hall</option>
                                <option value="Willow Hall">Willow Hall</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bldg_3">3rd Building Preference</label>
                            <select id="bldg_3" name="bldg_three" value={formValues.bldg_three} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Alder Hall">Alder Hall</option>
                                <option value="Cedar Apartments">Cedar Apartments</option>
                                <option value="Elm Hall">Elm Hall</option>
                                <option value="Haggett Hall">Haggett Hall</option>
                                <option value="Hansee Hall">Hansee Hall</option>
                                <option value="Lander Hall">Lander Hall</option>
                                <option value="Madrona Hall">Madrona Hall</option>
                                <option value="Maple Hall">Maple Hall</option>
                                <option value="McCarty Hall">McCarty Hall</option>
                                <option value="McMahon Hall">McMahon Hall</option>
                                <option value="Mercer Court">Mercer Court</option>
                                <option value="Nordheim Court">Nordheim Court</option>
                                <option value="Oak Hall">Oak Hall</option>
                                <option value="Poplar Hall">Poplar Hall</option>
                                <option value="Stevens Court">Stevens Court</option>
                                <option value="Terry Hall">Terry Hall</option>
                                <option value="Willow Hall">Willow Hall</option>
                            </select>
                        </div>
                    </section>
                </form>
            </section>

            <section className="habits">
                <h2>Habits</h2>
                <div>
                    <em>Specify your personal and study habits.</em>
                </div>
                <form>
                    <section className="form-section-container">
                        <h3>Sleep/Wake Up</h3>
                        <div>
                            <label htmlFor="morning_dropdown">What time do you usually wake up in the morning?</label>
                            <select id="morning_dropdown" name="morning" value={formValues.morning} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="5 AM or earlier">5 AM or earlier</option>
                                <option value="Between 5 AM and 8 AM">Between 5 AM and 8 AM</option>
                                <option value="Between 8 AM and Noon">Between 8 AM and Noon</option>
                                <option value="Noon or later">Noon or later</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="weeknights_dropdown">What time do you go to bed on weeknights?</label>
                            <select id="weeknights_dropdown" name="weeknights" value={formValues.weeknights} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="10 PM or earlier">10 PM or earlier</option>
                                <option value="Between 10 PM and Midnight">Between 10 PM and Midnight</option>
                                <option value="Around Midnight">Around Midnight</option>
                                <option value="2 AM or later">2 AM or later</option>
                            </select>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="weekends_dropdown">What time do you go to bed on weekends?</label>
                            <select id="weekends_dropdown" name="weekends" value={formValues.weekends} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="10 PM or earlier">10 PM or earlier</option>
                                <option value="Between 10 PM and Midnight">Between 10 PM and Midnight</option>
                                <option value="Around Midnight">Around Midnight</option>
                                <option value="2 AM or later">2 AM or later</option>
                            </select>
                        </div>

                        <h3>Alcohol/Smoking</h3>
                        <div>
                            <label htmlFor="drinking_dropdown">Do you drink alcohol?</label>
                            <select id="drinking_dropdown" name="drinking" value={formValues.drinking} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Sometimes">Sometimes</option>
                            </select>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="smoking_dropdown">Do you smoke/vape?</label>
                            <select id="smoking_dropdown" name="smoking" value={formValues.smoking} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Sometimes">Sometimes</option>
                            </select>
                        </div>

                        <h3>Room Environment</h3>
                        <div>
                            <label htmlFor="organizing_dropdown">How would you describe your own bedroom?</label>
                            <select id="organizing_dropdown" name="organizing" value={formValues.organizing} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Very organized">Very organized</option>
                                <option value="Organized">Organized</option>
                                <option value="Neither organized or disorganized">Neither organized or disorganized</option>
                                <option value="Disorganized">Disorganized</option>
                                <option value="Very disorganized">Very disorganized</option>
                            </select>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="cleaning_dropdown">How often do you clean your room/bathroom?</label>
                            <select id="cleaning_dropdown" name="cleaning" value={formValues.cleaning} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Always">Always</option>
                                <option value="Often">Often</option>
                                <option value="Sometimes">Sometimes</option>
                                <option value="Rarely">Rarely</option>
                                <option value="Never">Never</option>
                            </select>
                        </div>

                        <h3>Study Time</h3>
                        <div>
                            <label htmlFor="study_dropdown">Where do you usually study?</label>
                            <select id="study_dropdown" name="study" value={formValues.study} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="At my desk">At my desk</option>
                                <option value="At the library">At the library</option>
                                <option value="In a study lounge">In a study lounge</option>
                                <option value="Anywhere">Anywhere</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="music_dropdown">When studying in your bedroom, do you like listening to music?</label>
                            <select id="music_dropdown" name="music_listening" value={formValues.music_listening} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Yes, I play music on my speakers.">Yes, I play music on my speakers.</option>
                                <option value="Yes, I listen using headphones.">Yes, I listen using headphones.</option>
                                <option value="Sometimes, it depends.">Sometimes, it depends.</option>
                                <option value="No, I like it quiet.">No, I like it quiet.</option>
                            </select>
                        </div>
                    </section>
                </form>
            </section>

            <section className="interest">
                <h2>Personality & Interests</h2>
                <div>
                    <em>Describe yourself and what your interests are.</em>
                </div>
                <form>
                    <section className="form-section-container">
                        <div>
                            <label htmlFor="hobbies">Hobbies:</label>
                            <textarea className="form-control" id="hobbies" name="hobbies" value={formValues.hobbies} onChange={handleChange} placeholder="List down some of your hobbies."></textarea>
                        </div>
                        <div>
                            <label htmlFor="adjective_field">What are three adjectives that describe you?</label>
                            <input type="text" id="adjective_field" name="adjectives" value={formValues.adjectives} onChange={handleChange} placeholder="1, 2, 3" />
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="social_rank_dropdown">How social are you?</label>
                            <select id="social_rank_dropdown" name="social_rank" value={formValues.social_rank} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Very social">Very social</option>
                                <option value="Social">Social</option>
                                <option value="Neither social or shy">Neither social or shy</option>
                                <option value="Shy">Shy</option>
                                <option value="Very shy">Very shy</option>
                            </select>
                        </div>

                        <h3>Music</h3>
                        <div>
                            <label htmlFor="music_field">What music genres do you listen to?</label>
                            <input type="text" id="music_field" name="music" value={formValues.music} onChange={handleChange} />
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="artist_field">Who is your favorite artist?</label>
                            <input type="text" id="artist_field" name="artist" value={formValues.artist} onChange={handleChange} />
                        </div>

                        <h3>Movies</h3>
                        <div>
                            <label htmlFor="movie_field">What movie genres do you like to watch?</label>
                            <input type="text" id="movie_field" name="movie" value={formValues.movie} onChange={handleChange} />
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="fav_movie_field">What is your favorite movie of all time?</label>
                            <input type="text" id="fav_movie_field" name="favorite_movie" value={formValues.favorite_movie} onChange={handleChange} />
                        </div>

                        <h3>TV Show/Series</h3>
                        <div>
                            <label htmlFor="series_field">What TV show/series is your favorite?</label>
                            <input type="text" id="series_field" name="television" value={formValues.television} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="streaming">If you had to pick one streaming service to binge watch, which would you choose?</label>
                            <select id="streaming" name="streaming" value={formValues.streaming} onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Netflix">Netflix</option>
                                <option value="Hulu">Hulu</option>
                                <option value="Disney+">Disney+</option>
                                <option value="HBO Max">HBO Max</option>
                                <option value="Amazon Prime Video">Amazon Prime Video</option>
                                <option value="N/A">I am not subscribed to any streaming service</option>
                            </select>
                        </div>
                    </section>
                </form>
            </section>

            <section className="moreInfo">
                <h2>Anything else?</h2>
                <div>
                    <em>Is there anything else you would like someone to know about you?</em>
                </div>
                <form>
                    <div className="sub-section-end">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" name="description" value={formValues.description} onChange={handleChange} placeholder="Please feel free to make any other comments that you think might be important to someone making a decision about being your roommate."></textarea>
                    </div>
                </form>
            </section>

            <section className="submit-account">
                <form>
                    {showSuccessAlert}
                    {showResetAlert}
                    <button className="btn btn-success" onClick={handleSubmit}>Submit Form</button>
                    <button className="btn btn-danger" onClick={handleReset}>Reset Form</button>
                </form>
            </section>
        </main>
    )
}