import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Favorites = () => {
    const { favorites, setFavorites } = useContext(AppContext);

    // favorite 삭제 함수
    const onDeleteFavorite = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites.splice(index, 1);
        setFavorites(updatedFavorites);
    };

    return (
        <div>
            <h2>Favorites</h2>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>
                        {favorite}
                        <button
                            onClick={() => onDeleteFavorite(index)}
                            className='ml-2 text-red-500'
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
