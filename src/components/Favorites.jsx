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
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Favorites</h2>
            <ul className='mt-2'>
                {favorites.map((favorite, index) => (
                    <li
                        key={index}
                        className='flex justify-between items-center py-2 border-b'
                    >
                        <span className='text-gray-800'>{favorite}</span>
                        <button
                            onClick={() => onDeleteFavorite(index)}
                            className='text-red-500 hover:text-red-700 focus:outline-none'
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
