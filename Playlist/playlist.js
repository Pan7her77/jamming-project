import React from 'react';

const Playlist = ({ playlistName}) => {
    return (
        <div>
            <h2>{playlistName}</h2>
            <ul>
                {/* Playlist items will go here */}
            </ul>
        </div>
    );
}

export default Playlist;