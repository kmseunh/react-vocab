import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, fetchSearchResults } from '../slices/searchSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        dispatch(setSearchTerm(inputValue));
        dispatch(fetchSearchResults(inputValue)); // createAsyncThunk 디스패치
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
