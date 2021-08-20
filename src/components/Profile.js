import React from 'react';

export default function ProfilePage(props) {
    return (
        <div>
            <main className="main-profile">
                <section className="profile">
                    <h2>Bio</h2>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <p>Hello! My name is <em>{props.dawg.preferred_name}</em>.</p>
                            <p>My pronouns are <em>{props.dawg.pronouns}</em>. I am a <em>{props.dawg.class_standing}</em> my (intended) major is <em>{props.dawg.major}</em>. My hometown is <em>{props.dawg.city}, {props.dawg.state}, {props.dawg.country}</em>.</p>
                        </li>
                    </ul>
                </section>

                <section className="aboutMe">
                    <h2>About Me</h2>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>Primary Language:</label>
                            <p>{props.dawg.primary_lang}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Secondary Language:</label>
                            <p>{props.dawg.second_lang}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Expected Graduation Month and Year:</label>
                            <p>{props.dawg.graduation}</p>
                        </li>
                    </ul>
                </section>

                <section className="housing">
                    <h2>Housing Preferences</h2>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>I am interested in:</label>
                            <p>{props.dawg.month_type} {props.dawg.building_type}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Location</label>
                            <p>{props.dawg.location_type}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Room Type</label>
                            <p>{props.dawg.room_type}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Bathroom Type</label>
                            <p>{props.dawg.bathroom_type}</p>
                        </li>
                        <li className="list-group-item">
                            <label>1st Building Preference:</label>
                            <p>{props.dawg.bldg_one}</p>
                        </li>
                        <li className="list-group-item">
                            <label>2nd Building Preference:</label>
                            <p>{props.dawg.bldg_two}</p>
                        </li>
                        <li className="list-group-item">
                            <label>3rd Building Preference:</label>
                            <p>{props.dawg.bldg_three}</p>
                        </li>
                    </ul>
                </section>

                <section className="habits">
                    <h2>Habits</h2>
                    <div className="sub-section-start">
                        <h3>Sleep/Wake Up</h3>
                    </div>

                    <ul className="list-group sub-section-end">
                        <li className="list-group-item">
                            <label>Morning Wake Up:</label>
                            <p>{props.dawg.morning}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Sleep Schedule on Weeknights:</label>
                            <p>{props.dawg.weeknights}</p>                            
                        </li>
                        <li className="list-group-item">
                            <label>Sleep Schedule on Weekends:</label>
                            <p>{props.dawg.weekends}</p>                            
                        </li>
                    </ul>

                    <h3>Alcohol/Smoking</h3>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>Alcohol?</label>
                            <p>{props.dawg.drinking}</p>                        
                        </li>
                        <li className="list-group-item">
                             <label>Smoke/vape?</label>
                            <p>{props.dawg.smoking}</p>                       
                        </li>
                    </ul>

                    <h3>Room Environment</h3>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>Bedroom Organization:</label>
                            <p>{props.dawg.organizing}</p>                        
                        </li>
                        <li className="list-group-item">
                            <label>Bedroom/Bathroom Cleaning:</label>
                            <p>{props.dawg.cleaning}</p>                        
                        </li>
                    </ul>

                    <h3>Study Time</h3>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>I usually study:</label>
                            <p>{props.dawg.study}</p>                        
                        </li>
                        <li className="list-group-item">
                            <label>Do you like listening to music while studying?</label>
                            <p>{props.dawg.music_listening}</p>                        
                        </li>
                    </ul>
                </section>

                <section className="interest">
                    <h2>Personality & Interests</h2>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>Hobbies:</label>
                            <p>{props.dawg.hobbies}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Three Adjectives to Describe Me:</label>
                            <p>{props.dawg.adjectives}</p>
                        </li>
                        <li className="list-group-item">
                            <label>Sociable?</label>
                            <p>{props.dawg.social_rank}</p>
                        </li>
                    </ul>

                    <h3>Music</h3>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>The music genres I listen to:</label>
                            <p>{props.dawg.music}</p>

                            <label>My favorite artist is:</label>
                            <p>{props.dawg.artist}</p>
                        </li>
                    </ul>

                    <h3>Movies</h3>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>The movie genres I watch are:</label>
                            <p>{props.dawg.movie}</p>

                            <label>My favorite movie of all time is:</label>
                            <p>{props.dawg.favorite_movie}</p>
                        </li>
                    </ul>

                    <h3>TV Show/Series</h3>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>My favorite TV show/series is:</label>
                            <p>{props.dawg.television}</p>

                            <label>If I had to pick one streaming service to binge watch, I would choose:</label>
                            <p>{props.dawg.streaming}</p>                            
                        </li>
                    </ul>
                </section>

                <section className="moreInfo">
                    <h2>More Information</h2>
                    <ul className="list-group sub-section-start sub-section-end">
                        <li className="list-group-item">
                            <label>Description:</label>
                            <p>{props.dawg.description}</p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}