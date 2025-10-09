import React from 'react';
import track from '../Track/track';

const Tracklist = ({ tracks }) => {
    return (
        <div>
            <h2>Tracklist</h2>
            <ul>
                {tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tracklist;