import React from 'react';

export default function AccountPage(props) {
    let fullname = props.user.displayName;
    let message = "Hello, " + fullname + "!";

    return (
        <main className="main-account">
            <section className="profile">
                <form>
                    <h2>{message}</h2>
                    <p>To connect with other students, please complete this questionnaire about who you are, along with your contact information, and anything else you would like someone to know about you below.</p>
                    {/* <div>
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
                    </div> */}
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
                        <em>What type of housing are you looking for?</em>
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
                        <em>What type of room are you looking for?</em>
                        <select id="room_type" name="room_type" size="4" multiple>
                            <option value="double">Double</option>
                            <option value="triple">Triple</option>
                            <option value="3_4_person_suite">3 or 4 Person Room/Suite</option>
                            <option value="apartment_style">Single in a Shared Apartment</option>
                        </select>
                    </div>
                    <div>
                        <label for="bathroom_type">Bathroom Type</label>
                        <em>What type of bathroom are you looking for?</em>
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