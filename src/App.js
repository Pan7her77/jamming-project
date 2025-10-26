import React from 'react';
import SearchBar from './components/searchbar';
import Playlist from './components/playlist';




const App = () => {
    return (
        <div>
           
            <h1>Jam'n sync</h1>
            <p>Making a playlist shouldn't be that hard?</p>
            <SearchBar />
            <Playlist />
            
        </div>
    );
}
export default App;
