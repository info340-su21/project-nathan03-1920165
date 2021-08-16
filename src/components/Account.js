import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';

export default function AccountPage(props) {
    let fullname = props.user.displayName;
    let message = "Hello, " + fullname + "!";

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
        'housing_type': null,
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

    // useEffect(() => {
    //     const formRef = firebase.database().ref('user');
    //     formRef.on('value', (snapshot) => {
    //         const theValue = snapshot.val();
    //         console.log("value of message: " + theValue)
    //     })
    // }, [])

    //handle submitting form button
    const handleSubmit = (event) => {
        event.preventDefault();
        const formRef = firebase.database().ref(props.user.uid);
        formRef.set(formValues);
    }

    return (
        <main className="main-account">
            <section className="profile">
                <h2>{message}</h2>
                <div className="instructions">
                    <em>To connect with other students, please complete this questionnaire about who you are, along with your contact information, and anything else you would like someone to know about you below.</em>
                </div>
            </section>

            <section className="aboutMe">
                <h2>About Me</h2>
                <div className="instructions">
                    <em>Tell us all about you.</em>
                </div>
                <form>
                    {/* <div>
                        <label htmlFor="picture_upload">Choose a profile picture:</label>
                        <input type="file" id="picture_upload" name="picture" accept=".png, .jpg, .jpeg" />
                    </div> */}
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
                </form>
            </section>

            <section className="contacts">
                <h2>Contact Information</h2>
                <div className="instructions">
                    <em>Provide your contact information to be reached by other students.</em>
                </div>
                <form>
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
                </form>
            </section>

            <section className="academics">
                <h2>Academic Life</h2>
                <div className="instructions">
                    <em>Provide your academic history or future ambitions</em>
                </div>
                <form>
                    <div>
                        <label htmlFor="major">(Intended) Major:</label>
                        <input type="text" id="major" name="major" onChange={handleChange} placeholder="Informatics" />
                    </div>
                    <div>
                        <label htmlFor="class-standing">Class Standing</label>
                        <select id="class-standing" name="class-standing" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="freshman">Freshman</option>
                            <option value="sophomore">Sophomore</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                            <option value="graduate">Graduate</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="graduation">Expected Graduation Month and Year:</label>
                        <input type="month" id="graduation" name="graduation" onChange={handleChange} />
                    </div>
                </form>
            </section>

            <section className="housing">
                <h2>Housing Preferences</h2>
                <div className="instructions">
                    <em>Describe your housing preferences. (Select all that apply)</em><br /><br />
                    <em>For Windows users – hold down Ctrl key to select multiple options</em><br />
                    <em>For Mac users – hold down Command key to select multiple options</em>
                </div>
                <form>
                    <div>
                        <div>
                            <label htmlFor="housing_type">Resident Housing</label>
                            <p><em>What type of housing are you looking for?</em></p>
                        </div>
                        <div>
                            <select id="housing_type" name="housing_type" onChange={handleChange} size="6" multiple>
                                <option value="9_month">9-month</option>
                                <option value="12_month">12-month</option>
                                <option value="residence">Residence Hall</option>
                                <option value="apartment">Apartment Communities</option>
                                <option value="north">North Campus</option>
                                <option value="west">West Campus</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="room_type">Room Type</label>
                            <p><em>What type of room are you looking for?</em></p>
                        </div>
                        <div>
                            <select id="room_type" name="room_type" onChange={handleChange} size="4" multiple>
                                <option value="double">Double</option>
                                <option value="triple">Triple</option>
                                <option value="3_4_person_suite">3 or 4 Person Room/Suite</option>
                                <option value="apartment_style">Single in a Shared Apartment</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="bathroom_type">Bathroom Type</label>
                            <p><em>What type of bathroom are you looking for?</em></p>
                        </div>
                        <div>
                            <select id="bathroom_type" name="bathroom_type" onChange={handleChange} size="4" multiple>
                                <option value="private">Private</option>
                                <option value="semi_private">Semi-private</option>
                                <option value="community_single">Community - single gender</option>
                                <option value="community_all">Community - all gender</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="bldg_1">1st Building Preference</label>
                        <select id="bldg_1" name="bldg_one"onChange={handleChange} >
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
                        <label htmlFor="bldg_2">2nd Building Preference</label>
                        <select id="bldg_2" name="bldg_two" onChange={handleChange}>
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
                        <label htmlFor="bldg_3">3rd Building Preference</label>
                        <select id="bldg_3" name="bldg_three" onChange={handleChange}>
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
                <div className="instructions">
                    <em>Specify your personal and study habits.</em>
                </div>
                <form>
                    <h3>Sleep/Wake Up</h3>
                    <div>
                        <label htmlFor="morning_dropdown">What time do you usually wake up in the morning?</label>
                        <select id="morning_dropdown" name="morning" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="5am-or-earlier">5 AM or earlier</option>
                            <option value="5am-to-8am">Between 5 AM and 8 AM</option>
                            <option value="8am-to-noon">Between 8 AM and Noon</option>
                            <option value="noon-or-later">Noon or later</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="weeknights_dropdown">What time do you go to bed on weeknights?</label>
                        <select id="weeknights_dropdown" name="weeknights" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="5pm-or-earlier">10 PM or earlier</option>
                            <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                            <option value="around-midnight">Around Midnight</option>
                            <option value="2am-or-later">2 AM or later</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="weekends_dropdown">What time do you go to bed on weekends?</label>
                        <select id="weekends_dropdown" name="weekends" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="5pm-or-earlier">10 PM or earlier</option>
                            <option value="10pm-to-midnight">Between 10 PM and Midnight</option>
                            <option value="around-midnight">Around Midnight</option>
                            <option value="2am-or-later">2 AM or later</option>
                        </select>
                    </div>

                    <h3>Alcohol/Smoking</h3>
                    <div>
                        <label htmlFor="drinking_dropdown">Do you drink alcohol?</label>
                        <select id="drinking_dropdown" name="drinking" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="sometimes">Sometimes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="smoking_dropdown">Do you smoke/vape?</label>
                        <select id="smoking_dropdown" name="smoking" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="sometimes">Sometimes</option>
                        </select>
                    </div>

                    <h3>Room Environment</h3>
                    <div>
                        <label htmlFor="organizing_dropdown">How would you describe your own bedroom?</label>
                        <select id="organizing_dropdown" name="organizing" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="very-organized">Very organized</option>
                            <option value="organized">Organized</option>
                            <option value="neither">Neither organized or disorganized</option>
                            <option value="disorganized">Disorganized</option>
                            <option value="very-disorganized">Very disorganized</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cleaning_dropdown">How often do you clean your room/bathroom?</label>
                        <select id="cleaning_dropdown" name="cleaning" onChange={handleChange}>
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
                        <label htmlFor="study_dropdown">Where do you usually study?</label>
                        <select id="study_dropdown" name="study" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="desk">At my desk</option>
                            <option value="library">At the library</option>
                            <option value="study-lounge">In a study lounge</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="music_dropdown">When studying in your bedroom, do you like listening to music?</label>
                        <select id="music_dropdown" name="music_listening" onChange={handleChange}>
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
                <h2>Personality & Interests</h2>
                <div className="instructions">
                    <em>Describe yourself and what your interests are.</em>
                </div>
                <form>
                    <div>
                        <label htmlFor="hobbies">Hobbies:</label>
                        <textarea className="form-control" id="hobbies" name="hobbies" onChange={handleChange} placeholder="List down some of your hobbies."></textarea>
                    </div>
                    <div>
                        <label htmlFor="adjective_field">What are three adjectives that describe you?</label>
                        <input type="text" id="adjective_field" name="adjectives" onChange={handleChange} placeholder="adj1, adj2, adj3" />
                    </div>
                    <div>
                        <label htmlFor="social_rank_dropdown">How social are you?</label>
                        <select id="social_rank_dropdown" name="social_rank" onChange={handleChange}>
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
                        <label htmlFor="music_field">What music genres do you listen to?</label>
                        <input type="text" id="music_field" name="music" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="artist_field">Who is your favorite artist?</label>
                        <input type="text" id="artist_field" name="artist" onChange={handleChange} />
                    </div>

                    <h3>Movies</h3>
                    <div>
                        <label htmlFor="movie_field">What movie genres do you like to watch?</label>
                        <input type="text" id="movie_field" name="movie" onChange={handleChange} />
                    </div>
                    <div>
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
                            <option value="netflix">Netflix</option>
                            <option value="hulu">Hulu</option>
                            <option value="disneyplus">Disney+</option>
                            <option value="hbomax">HBO Max</option>
                            <option value="primevideo">Amazon Prime Video</option>
                            <option value="none">I am not subscribed to any streaming service</option>
                        </select>
                    </div>
                </form>
            </section>

            <section className="moreInfo">
                <h2>Anything else?</h2>
                <div className="instructions">
                    <em>Is there anything else you would like someone to know about you?</em>
                </div>
                <form>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" name="description" onChange={handleChange} placeholder="Please feel free to make any other comments that you think might be important to someone making a decision about being your roommate."></textarea>
                    </div>
                </form>
            </section>

            <section className="submit">
                <form>
                    <button className="btn btn-success" onClick={handleSubmit}>Submit Form</button>
                    <button className="btn btn-danger">Reset Form</button>
                </form>
            </section>
        </main>
    )
}