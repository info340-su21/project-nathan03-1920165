import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
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
                        <div className="sub-section-end">
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
                        <div className="sub-section-end">
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
                        <div className="sub-section-end">
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
                        <div className="sub-section-end">
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
                        <div className="sub-section-end">
                            <label for="weekends_dropdown">Sleep Schedule on Weekends:</label>
                            <output></output>
                        </div>

                        <h3>Alcohol/Smoking</h3>
                        <div>
                            <label for="drinking_dropdown">Alcohol?</label>
                            <output></output>
                        </div>
                        <div className="sub-section-end">
                            <label for="smoking_dropdown">Smoke/vape?</label>
                            <output></output>
                        </div>

                        <h3>Room Environment</h3>
                        <div>
                            <label for="organizing_dropdown">Bedroom Organization:</label>
                            <output></output>
                        </div>
                        <div className="sub-section-end">
                            <label for="cleaning_dropdown">Bedroom/Bathroom Cleaning:</label>
                            <output></output>
                        </div>

                        <h3>Study Time</h3>
                        <div>
                            <label for="study_dropdown">I usually study at:</label>
                            <output></output>
                        </div>
                        <div className="sub-section-end">
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
                        <div className="sub-section-end">
                            <label for="music_field">The music genres I listen to:</label>
                            <output></output>

                            <label for="artist_field">My favorite artist is:</label>
                            <output></output>
                        </div>

                        <h3>Movies</h3>
                        <div className="sub-section-end">
                            <label for="movie_field">The movie genres I watch are:</label>
                            <output></output>

                            <label for="fav_movie_field">My favorite movie of all time is:</label>
                            <output></output>
                        </div>

                        <h3>TV Show/Series</h3>
                        <div className="sub-section-end">
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

                <Link to='/home'><button class="btn btn-secondary">Go Back</button></Link>

            </main>
        </div>
    )
}