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
        <div className="w-full flex justify-center">
            <input 
            type="text" 
            placeholder="Search Movies here..." 
            value={query} 
            className="bg-transparent border outline-none w-96 p-2"
            onChange={(e) => setQuery(e.target.value)} 
            />
            <button onClick={handleSearch} className="bg-teal-500 text-white font-semibold p-2 px-4">Search</button>
        </div>
    )
}

export default SearchBar