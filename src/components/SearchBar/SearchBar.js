import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleChange = (e) => setTerm(e.target.value);
  const handleSearch = () => onSearch(term);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter a song, artist, or album"
        value={term}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
