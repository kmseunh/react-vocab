import { useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const SearchBar = () => {
    const { setSearchTerm } = useContext(AppContext);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        setSearchTerm(inputValue);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Search words...'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
