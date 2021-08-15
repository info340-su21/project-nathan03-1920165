import React from 'react';

import mcmahon from '../img/mcmahon-room.jpg';
import students from '../img/students.jpg';

export default function AboutPage() {
    return (
        <div className="about">
            <div className="main-container main-about">
                <main className="main-about">
                    <h2>About Us</h2>
                    <div className="about-text">
                        <div>
                            <p>Your place to find a roommate at the University of Washington.</p>
                            <p>Searching for a roommate is challenging, risky, and it is difficult to “match” with other students with the same preferences before room assignment. This problem is unaddressed and there is not a platform offered by the university to help university students out. Some problems related to finding a roommate on-campus include the lack of being informed of living habits, common interests, communication barriers, and the consolidation/organization of student information.</p>
                            <p>Students who use <em>UniteDawgs</em> will hopefully help students find and connect with compatible roommate(s) for on-campus housing. Each student will be able to input their information to the web application and be able to filter through other students who have similar interests.</p>
                        </div>
                    </div>

                    <div className="about-images">
                        <figure>
                            <img src={mcmahon} alt="McMahon room with two roommates" />
                            <figcaption>Caption: This image is taken from a room in McMahon Hall and is provided by <cite><a href="https://hfs.uw.edu/Live/Undergraduate-Housing-Rates-and-Information/McMahon-Hall">UW Housing & Food Services</a></cite></figcaption>
                        </figure>
                        <figure>
                            <img src={students} alt="students walking in West Campus" />
                            <figcaption>Caption: This image is taken from West Campus and is provided by <cite><a href="https://www.flickr.com/photos/90311612@N05/16044345764/">UW Housing & Food Services via Tumblr</a></cite></figcaption>
                        </figure>
                    </div>
                </main>
            </div>
        </div>
    )
}