import React from 'react';

export default function OnboardPage() {
    return (
        <div className="onboard">
            <main className="main-onboard">
                <div className="welcome">
                    <h2>Welcome!</h2>
                    <p>Your place to find a roommate at the University of Washington.</p>
                </div>
                <figure className="video">
                    <iframe src="https://www.youtube.com/embed/HQ2BiY1FqCA" title="UW Residential Housing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <figcaption>This video is produced by University of Washington Housing and Food Services and is provided by <cite><a href="https://youtu.be/HQ2BiY1FqCA" target="_blank" rel="noopener noreferrer">UWHFS via YouTube</a></cite></figcaption>
                </figure>
            </main>
        </div>
    )
}