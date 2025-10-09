import React, {useState, useEffect} from 'react';
import Tracklist from '../Tracklist/tracklist';

const Playlist = ({ playlistName}) => {
    const tracks =  [
        'HOLY GHOST FLOW, Josh P, HOLY GHOST FREESTYLE', 
        'Chosen, Jay Manwell, Chosen', 
        'In Your Way, Alex Jean, More Than Gold'
        ];

    return (
        <div>
            <h2>{playlistName}</h2>
            <ul>
                {tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;