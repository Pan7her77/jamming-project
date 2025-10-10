import React, {useState, useEffect} from 'react';
import Tracklist from '../Tracklist/tracklist';
import './playlist.css';

const Playlist = ({ playlistName}) => {
    // Store tracks in state
    const tracks =  [
        {id: 1, text:  'HOLY GHOST FLOW, Josh P, HOLY GHOST FREESTYLE'}, 
        {id: 2, text: 'Chosen, Jay Manwell, Chosen'}, 
        {id: 3, text: 'In Your Way, Alex Jean, More Than Gold'}
        ];

    //Function to check if a track exists
    const isTrackInPlaylist = (trackToCheck) => {
        return tracks.some(track => track.id === trackToCheck.id);
    };

    //Function to add a track to the playlist
    const addTrack = (newTrack) => {
        if (!isTrackInPlaylist(newTrack)) {
        tracks((prevTracks) => [...prevTracks, newTrack]);
        } else {
        alert('Track already in playlist!');
        }
    };
    // Example usage
    const newTrack = {id: 4, text: 'New Track, New Artist, New Album'};
    const exsistingTrack = {id: 2, text: 'Chosen, Jay Manwell, Chosen'};

    return (
        <div>
            <h2>{playlistName}</h2>
            <ul>
                {tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ul>
            <p>{isTrackInPlaylist(newTrack) ? 'Track is in playlist' : 'Track is not in playlist'}</p>

            {/*Add Button*/}
      <button className="add-btn" onClick={() => addTrack(newTrack)}>
        ➕ Add Track
      </button>
        </div>
    );
}

export default Playlist;