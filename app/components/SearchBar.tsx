import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query)
    }

    return (
        <div>
            <input 
            type="text" 
            placeholder="Search Movies here..." 
            value={query} 
            className="bg-transparent border outline-none"
            onChange={(e) => setQuery(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar