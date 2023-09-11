import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Favorites = () => {
    const { favorites } = useContext(AppContext);

    return (
        <div>
            <h2>Favorites</h2>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite}</li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
