import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/database';

export default function AccountPage(props) {
    let fullname = props.user.displayName;
    let message = "Hello, " + fullname + "!";

    const [showSuccessAlert, setSucessAlert] = useState(null);
    const [countSuccess, setCountSuccess] = useState(1);

    //stores all form values in a single object
    const [formValues, setFormValues] = useState({
        'pronouns': null,
        'city': null,
        'state': null,
        'country': null,
        'primary_lang': null,
        'second_lang': null,

        'phone': null,
        'email': null,
        'facebook': null,
        'instagram': null,
        'snapchat': null,
        'wechat': null,
        'discord': null,

        'major': null,
        'class_standing': null,
        'graduation': null,
        'month_type': null,
        'building_type': null,
        'location_type': null,
        'room_type': null,
        'bathroom_type': null,
        'bldg_one': null,
        'bldg_two': null,
        'bldg_three': null,

        'morning': null,
        'weeknights': null,
        'weekends': null,
        'drinking': null,
        'smoking': null,
        'organizing': null,
        'cleaning': null,
        'study': null,
        'music_listening': null,

        'hobbies': null,
        'adjectives': null,
        'social_rank': null,
        'music': null,
        'artist': null,
        'movie': null,
        'favorite_movie': null,
        'television': null,
        'streaming': null,

        'description': null
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
            console.log(theValueObj)
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
                            <label htmlFor="pronouns_dropdown">Personal Pronoun:</label>
                            <select id="pronouns_dropdown" name="pronouns" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="she/her/hers">she/her/hers</option>
                                <option value="he/him/his">he/him/his</option>
                                <option value="they/them/their">they/them/their</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="city_field">Hometown City:</label>
                            <input type="text" id="city_field" name="city" onChange={handleChange} placeholder="Seattle" required />
                        </div>
                        <div>
                            <label htmlFor="state_field">Hometown State:</label>
                            <input type="text" id="state_field" name="state" onChange={handleChange} placeholder="WA" required />
                        </div>
                        <div>
                            <label htmlFor="country_field">Hometown Country:</label>
                            <input type="text" id="country_field" name="country" onChange={handleChange} placeholder="USA" required />
                        </div>
                        <div>
                            <label htmlFor="primary_lang_field">Primary Language:</label>
                            <input type="text" id="primary_lang_field" name="primary_lang" onChange={handleChange} placeholder="English" required />
                        </div>
                        <div>
                            <label htmlFor="second_lang_field">Secondary Language:</label>
                            <input type="text" id="second_lang_field" name="second_lang" onChange={handleChange} placeholder="Chinese" required />
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
                            <input type="tel" id="phone" name="phone" onChange={handleChange} placeholder="206-543-2100" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" name="email" onChange={handleChange} placeholder="example@domain.com" />
                        </div>
                        <div>
                            <label htmlFor="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                            <input type="text" id="facebook" name="facebook" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                            <input type="text" id="instagram" name="instagram" onChange={handleChange} placeholder="@handle" />
                        </div>
                        <div>
                            <label htmlFor="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                            <input type="text" id="snapchat" name="snapchat" onChange={handleChange} placeholder="@handle" />
                        </div>
                        <div>
                            <label htmlFor="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                            <input type="text" id="wechat" name="wechat" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                            <input type="text" id="discord" name="discord" onChange={handleChange} placeholder="@discord#0000" />
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
                            <input type="text" id="major" name="major" onChange={handleChange} placeholder="Informatics" />
                        </div>
                        <div>
                            <label htmlFor="class_standing">Class Standing</label>
                            <select id="class_standing" name="class_standing" onChange={handleChange}>
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
                            <input type="month" id="graduation" name="graduation" onChange={handleChange} />
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
                            <select id="month_type" name="month_type" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="9-month">9-month</option>
                                <option value="12-month">12-month</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="building_type">Residence Hall or Apartment Communities?</label>
                            <select id="building_type" name="building_type" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Residence Hall">Residence Hall</option>
                                <option value="Apartment Communities">Apartment Communities</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="location_type">North Campus or West Campus?</label>
                            <select id="location_type" name="location_type" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="North Campus">North Campus</option>
                                <option value="West Campus">West Campus</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="room_type">Room Type</label>
                            <select id="room_type" name="room_type" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Double">Double</option>
                                <option value="Triple">Triple</option>
                                <option value="3 or 4 Person Room/Suite">3 or 4 Person Room/Suite</option>
                                <option value="Single in a Shared Apartment">Single in a Shared Apartment</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bathroom_type">Bathroom Type</label>
                            <select id="bathroom_type" name="bathroom_type" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Private">Private</option>
                                <option value="Semi-private">Semi-private</option>
                                <option value="Community - single gender">Community - single gender</option>
                                <option value="Community - all gender">Community - all gender</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bldg_1">1st Building Preference</label>
                            <select id="bldg_1" name="bldg_one"onChange={handleChange} >
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
                            <select id="bldg_2" name="bldg_two" onChange={handleChange}>
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
                            <select id="bldg_3" name="bldg_three" onChange={handleChange}>
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
                            <select id="morning_dropdown" name="morning" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="5 AM or earlier">5 AM or earlier</option>
                                <option value="Between 5 AM and 8 AM">Between 5 AM and 8 AM</option>
                                <option value="Between 8 AM and Noon">Between 8 AM and Noon</option>
                                <option value="Noon or later">Noon or later</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="weeknights_dropdown">What time do you go to bed on weeknights?</label>
                            <select id="weeknights_dropdown" name="weeknights" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="10 PM or earlier">10 PM or earlier</option>
                                <option value="Between 10 PM and Midnight">Between 10 PM and Midnight</option>
                                <option value="Around Midnight">Around Midnight</option>
                                <option value="2 AM or later">2 AM or later</option>
                            </select>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="weekends_dropdown">What time do you go to bed on weekends?</label>
                            <select id="weekends_dropdown" name="weekends" onChange={handleChange}>
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
                            <select id="drinking_dropdown" name="drinking" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Sometimes">Sometimes</option>
                            </select>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="smoking_dropdown">Do you smoke/vape?</label>
                            <select id="smoking_dropdown" name="smoking" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Sometimes">Sometimes</option>
                            </select>
                        </div>

                        <h3>Room Environment</h3>
                        <div>
                            <label htmlFor="organizing_dropdown">How would you describe your own bedroom?</label>
                            <select id="organizing_dropdown" name="organizing" onChange={handleChange}>
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
                            <select id="cleaning_dropdown" name="cleaning" onChange={handleChange}>
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
                            <select id="study_dropdown" name="study" onChange={handleChange}>
                                <option hidden="">Select one</option>
                                <option value="At my desk">At my desk</option>
                                <option value="At the library">At the library</option>
                                <option value="In a study lounge">In a study lounge</option>
                                <option value="Anywhere">Anywhere</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="music_dropdown">When studying in your bedroom, do you like listening to music?</label>
                            <select id="music_dropdown" name="music_listening" onChange={handleChange}>
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
                            <textarea className="form-control" id="hobbies" name="hobbies" onChange={handleChange} placeholder="List down some of your hobbies."></textarea>
                        </div>
                        <div>
                            <label htmlFor="adjective_field">What are three adjectives that describe you?</label>
                            <input type="text" id="adjective_field" name="adjectives" onChange={handleChange} placeholder="1, 2, 3" />
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="social_rank_dropdown">How social are you?</label>
                            <select id="social_rank_dropdown" name="social_rank" onChange={handleChange}>
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
                            <input type="text" id="music_field" name="music" onChange={handleChange} />
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="artist_field">Who is your favorite artist?</label>
                            <input type="text" id="artist_field" name="artist" onChange={handleChange} />
                        </div>

                        <h3>Movies</h3>
                        <div>
                            <label htmlFor="movie_field">What movie genres do you like to watch?</label>
                            <input type="text" id="movie_field" name="movie" onChange={handleChange} />
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="fav_movie_field">What is your favorite movie of all time?</label>
                            <input type="text" id="fav_movie_field" name="favorite_movie" onChange={handleChange} />
                        </div>

                        <h3>TV Show/Series</h3>
                        <div>
                            <label htmlFor="series_field">What TV show/series is your favorite?</label>
                            <input type="text" id="series_field" name="television" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="streaming">If you had to pick one streaming service to binge watch, which would you choose?</label>
                            <select id="streaming" name="streaming" onChange={handleChange}>
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
                        <textarea className="form-control" id="description" name="description" onChange={handleChange} placeholder="Please feel free to make any other comments that you think might be important to someone making a decision about being your roommate."></textarea>
                    </div>
                </form>
            </section>

            <section className="submit-account">
                <form>
                    {showSuccessAlert}
                    <button className="btn btn-success" onClick={handleSubmit}>Submit Form</button>
                    <button className="btn btn-danger">Reset Form</button>
                </form>
            </section>
        </main>
    )
}

    //stores all form values in a single object
    // const [formValues, setFormValues] = useState({
    //         'pronouns': this.theValuesObj.pronouns,
    //         'city': this.theValuesObj.city,
    //         'state': this.theValuesObj.state,
    //         'country': this.theValuesObj.country,
    //         'primary_lang': this.theValuesObj.primary_lang,
    //         'second_lang': this.theValuesObj.second_lang,
    
    //         'phone': this.theValuesObj.phone,
    //         'email': this.theValuesObj.email,
    //         'facebook': this.theValuesObj.facebook,
    //         'instagram': this.theValuesObj.instagram,
    //         'snapchat': this.theValuesObj.snapchat,
    //         'wechat': this.theValuesObj.wechat,
    //         'discord': this.theValuesObj.discord,
    
    //         'major': this.theValuesObj.major,
    //         'class_standing': this.theValuesObj.class_standing,
    //         'graduation': this.theValuesObj.graduation,
    //         'month_type': this.theValuesObj.month_type,
    //         'building_type': this.theValuesObj.building_type,
    //         'location_type': this.theValuesObj.location_type,
    //         'room_type': this.theValuesObj.room_type,
    //         'bathroom_type': this.theValuesObj.bathroom_type,
    //         'bldg_one': this.theValuesObj.bldg_one,
    //         'bldg_two': this.theValuesObj.bldg_two,
    //         'bldg_three': this.theValuesObj.bldg_three,
    
    //         'morning': this.theValuesObj.morning,
    //         'weeknights': this.theValuesObj.weeknights,
    //         'weekends': this.theValuesObj.weekends,
    //         'drinking': this.theValuesObj.drinking,
    //         'smoking': this.theValuesObj.smoking,
    //         'organizing': this.theValuesObj.organizing,
    //         'cleaning': this.theValuesObj.cleaning,
    //         'study': this.theValuesObj.study,
    //         'music_listening': this.theValuesObj.music_listening,
    
    //         'hobbies': this.theValuesObj.hobbies,
    //         'adjectives': this.theValuesObj.adjectives,
    //         'social_rank': this.theValuesObj.social_rank,
    //         'music': this.theValuesObj.music,
    //         'artist': this.theValuesObj.artist,
    //         'movie': this.theValuesObj.movie,
    //         'favorite_movie': this.theValuesObj.favorite_movie,
    //         'television': this.theValuesObj.television,
    //         'streaming': this.theValuesObj.streaming,
    
    //         'description': this.theValuesObj.description