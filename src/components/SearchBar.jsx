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
                className='border rounded-md px-3 py-2 outline-none focus:border-blue-500'
            />
            <button
                onClick={handleSearch}
                className='bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
