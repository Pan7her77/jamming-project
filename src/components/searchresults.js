import React, {useState, useEffect} from 'react';

const SearchResults = ({ results }) => {
    const [searchResults, setSearchResults] = useState([
        id= 1, text=  'HOLY GHOST FLOW, Josh P, HOLY GHOST FREESTYLE', 
        id= 2, text= 'Chosen, Jay Manwell, Chosen', 
        id= 3, text= 'In Your Way, Alex Jean, More Than Gold'
    ]);

    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;