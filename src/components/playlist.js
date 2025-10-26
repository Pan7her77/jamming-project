import React, {useState, useEffect} from 'react';
import '../styles/playlist.css';

const Playlist = ({ playlistName}) => {
    // Store tracks in state
    const tracks =  [
        {id: 1, text:  'HOLY GHOST FLOW, Josh P, HOLY GHOST FREESTYLE'}, 
        {id: 2, text: 'Chosen, Jay Manwell, Chosen'}, 
        {id: 3, text: 'In Your Way, Alex Jean, More Than Gold'}
        ];
        console.log(tracks);

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

    // Function to remove a track from the playlist
    const removeTrack = (trackToRemove) => {
        tracks((prevTracks) => prevTracks.filter(track => track.id !== trackToRemove.id));
    };

    // Example usage
    const newTrack = {id: 4, text: 'New Track, New Artist, New Album'};
    const exsistingTrack = {id: 2, text: 'Chosen, Jay Manwell, Chosen'};

    // Render the playlist
    const trackList = tracks.map(track => track.text);

    //Rename Playlist
    function renamePlaylist(newName) {
        // Logic to rename the playlist
        console.log(`Renaming playlist to: ${newName}`);
    };

    //Save Playlist
    const trackURIs = tracks.map(track => track.uri);
    function savePlaylist() {
        // Logic to save the playlist
        console.log('Saving playlist with tracks:', trackURIs);
    };

    return (
        <div>
            <h2>{playlistName}</h2>
            <ul>
                {tracks.map((track, index) => (
                    <li key={index}>{track.text}</li>
                ))} 
            </ul>
            <p>{isTrackInPlaylist(newTrack) ? 'Track is in playlist' : 'Track is not in playlist'}</p>

            {/*Add Button*/}
      <button className="add-btn" onClick={() => addTrack(newTrack)}>
        ➕ Add Track
      </button>

        {/*Remove Button*/}
      <button className="remove-btn" onClick={() => removeTrack(exsistingTrack)}>
        ➖ Remove Track
        </button>
        </div>
    );
};

export default Playlist;