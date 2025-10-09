import React from 'react';

const Track = ({ trackName, artistName, albumName }) => {
    return (
        <div>
            <h3>{trackName}</h3>
            <p>{artistName} - {albumName}</p>
        </div>
    );
}

export default Track;