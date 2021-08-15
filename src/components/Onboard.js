import React from 'react';

export default function OnboardPage(props) {
    return (
        <div className="onboard">
                <main className="main-onboard">
                    <div className="welcome">
                        <h2>Welcome!</h2>
                        <p>Your place to find a roommate at the University of Washington.</p>
                    </div>
                    <figure className="video">
                        <iframe src="https://www.youtube-nocookie.com/embed/HQ2BiY1FqCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <figcaption>Caption: This video is produced by University of Washington Housing and Food Services and is provided by <cite><a href="https://youtu.be/HQ2BiY1FqCA">UWHFS via YouTube</a></cite></figcaption>
                    </figure>
                </main>
        </div>
    )
}