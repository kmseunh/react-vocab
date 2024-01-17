import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite } from '../slices/favoritesSlice';

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);

    const onDeleteFavorite = (index) => {
        dispatch(deleteFavorite(index));
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
