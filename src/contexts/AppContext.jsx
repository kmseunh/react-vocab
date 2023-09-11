import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.datamuse.com/words?rel_rhy=${searchTerm}`)
            .then((res) => {
                setSearchResults(res.data);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    }, [searchTerm]);

    const addFavorite = (word) => {
        if (!favorites.includes(word)) {
            setFavorites([...favorites, word]);
        }
    };

    return (
        <AppContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                searchResults,
                addFavorite,
                setFavorites,
                favorites,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
