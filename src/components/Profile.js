import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfilePage(props) {
    return (
        <div>
            <main class="main-profile">
                <section class="profile">
                    <form>
                        <h2>Profile</h2>
                        <div>
                            <label htmlFor="preferred_name_field">Name:</label>
                            <p>{props.dawg.preferred_name}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="pronouns_dropdown">Personal Pronoun:</label>
                            <p>{props.dawg.pronouns}</p>
                        </div>
                    </form>
                </section>

                <section class="aboutMe">
                    <form>
                        <h2>About Me</h2>
                        <div>
                            <label htmlFor="city_field">Hometown City:</label>
                            <p>{props.dawg.city}</p>

                            <label htmlFor="state_field">Hometown State:</label>
                            <p>{props.dawg.state}</p>

                            <label htmlFor="country_field">Hometown Country:</label>
                            <p>{props.dawg.country}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="primary_lang_field">Primary Language:</label>
                            <p>{props.dawg.primary_lang}</p>

                            <label htmlFor="second_lang_field">Secondary Language:</label>
                            <p>{props.dawg.second_lang}</p>
                        </div>
                    </form>
                </section>

                <section class="academics">
                    <h2>Academic Life</h2>
                    <form>
                        <div>
                            <label htmlFor="major">(Intended) Major:</label>
                            <p>{props.dawg.major}</p>
                        </div>
                        <div>
                            <label htmlFor="class_standing">Class Standing:</label>
                            <p>{props.dawg.class_standing}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="graduation">Expected Graduation Month and Year:</label>
                            <p>{props.dawg.graduation}</p>
                        </div>
                    </form>
                </section>

                <section class="housing">
                    <h2>Housing Preferences</h2>
                    <form>
                        <div>
                            <label htmlFor="month_type">9-month or 12-month?</label>
                            <p>{props.dawg.month_type}</p>
                        </div>
                        <div>
                            <label htmlFor="building_type">Residence Hall or Apartment Communities?</label>
                            <p>{props.dawg.building_type}</p>
                        </div>
                        <div>
                            <label htmlFor="location_type">North Campus or West Campus?</label>
                            <p>{props.dawg.location_type}</p>
                        </div>
                        <div>
                            <label htmlFor="room_type">Room Type</label>
                            <p>{props.dawg.room_type}</p>
                        </div>
                        <div>
                            <label htmlFor="bathroom_type">Bathroom Type</label>
                            <p>{props.dawg.bathroom_type}</p>
                        </div>
                        <div>
                            <label htmlFor="bldg_1">1st Building Preference:</label>
                            <p>{props.dawg.bldg_one}</p>
                        </div>
                        <div>
                            <label htmlFor="bldg_2">2nd Building Preference:</label>
                            <p>{props.dawg.bldg_two}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="bldg_3">3rd Building Preference:</label>
                            <p>{props.dawg.bldg_three}</p>
                        </div>
                    </form>
                </section>

                <section class="habits">
                    <h2>Habits</h2>
                    <form>
                        <h3>Sleep/Wake Up</h3>
                        <div>
                            <label htmlFor="morning_dropdown">Morning Wake Up:</label>
                            <p>{props.dawg.morning}</p>
                        </div>
                        <div>
                            <label htmlFor="weeknights_dropdown">Sleep Schedule on Weeknights:</label>
                            <p>{props.dawg.weeknights}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="weekends_dropdown">Sleep Schedule on Weekends:</label>
                            <p>{props.dawg.weekends}</p>
                        </div>

                        <h3>Alcohol/Smoking</h3>
                        <div>
                            <label htmlFor="drinking_dropdown">Alcohol?</label>
                            <p>{props.dawg.drinking}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="smoking_dropdown">Smoke/vape?</label>
                            <p>{props.dawg.smoking}</p>
                        </div>

                        <h3>Room Environment</h3>
                        <div>
                            <label htmlFor="organizing_dropdown">Bedroom Organization:</label>
                            <p>{props.dawg.organizing}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="cleaning_dropdown">Bedroom/Bathroom Cleaning:</label>
                            <p>{props.dawg.cleaning}</p>
                        </div>

                        <h3>Study Time</h3>
                        <div>
                            <label htmlFor="study_dropdown">I usually study at:</label>
                            <p>{props.dawg.study}</p>
                        </div>
                        <div className="sub-section-end">
                            <label htmlFor="music_dropdown">When studying in my bedroom:</label>
                            <p>{props.dawg.music}</p>
                        </div>
                    </form>
                </section>

                <section class="interest">
                    <form>
                        <h2>Personality & Interests</h2>
                        <div>
                            <label htmlFor="hobbies">Hobbies:</label>
                            <p>{props.dawg.hobbies}</p>
                        </div>
                        <div>
                            <label htmlFor="adjective_field">Three Adjectives to Describe Me:</label>
                            <p>{props.dawg.adjectives}</p>
                        </div>
                        <div>
                            <label htmlFor="social_rank_dropdown">Sociable?</label>
                            <p>{props.dawg.social_rank}</p>
                        </div>

                        <h3>Music</h3>
                        <div className="sub-section-end">
                            <label htmlFor="music_field">The music genres I listen to:</label>
                            <p>{props.dawg.music}</p>

                            <label htmlFor="artist_field">My favorite artist is:</label>
                            <p>{props.dawg.artist}</p>
                        </div>

                        <h3>Movies</h3>
                        <div className="sub-section-end">
                            <label htmlFor="movie_field">The movie genres I watch are:</label>
                            <p>{props.dawg.movie}</p>

                            <label htmlFor="fav_movie_field">My favorite movie of all time is:</label>
                            <p>{props.dawg.favorite_movie}</p>
                        </div>

                        <h3>TV Show/Series</h3>
                        <div className="sub-section-end">
                            <label htmlFor="series_field">My favorite TV show/series is:</label>
                            <p>{props.dawg.television}</p>

                            <label htmlFor="streaming">If I had to pick one streaming service to binge watch, I would choose:</label>
                            <p>{props.dawg.streaming}</p>
                        </div>
                    </form>
                </section>

                <section class="moreInfo">
                    <h2>More Information</h2>
                    <form>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <p>{props.dawg.description}</p>
                        </div>
                    </form>
                </section>

                <Link to='/home'><button class="btn btn-secondary">Go Back</button></Link>

            </main>
        </div>
    )
}