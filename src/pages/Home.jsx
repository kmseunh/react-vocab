import Favorites from '../components/Favorites';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

const Home = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border border-gray-300 p-4 w-96 h-auto shadow-md rounded-lg'>
                <h1 className='text-2xl mb-4 text-center'>Word Search App</h1>
                <SearchBar />
                <div className='mt-4'>
                    <SearchResult />
                    <Favorites />
                </div>
            </div>
        </div>
    );
};

export default Home;
