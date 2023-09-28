import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

const SearchResult = () => {
    const { searchResults, addFavorite } = useContext(AppContext);
    const pageSize = 3; // 페이지당 결과 수
    const [currentPage, setCurrentPage] = useState(1);

    // 현재 페이지의 결과만 필터링
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedResults = searchResults.slice(startIndex, endIndex);

    // 페이지를 변경하는 함수
    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='mt-4'>
            <h2 className='text-lg font-semibold'>Search Result</h2>
            <ul className='mt-2'>
                {displayedResults.map((result, index) => (
                    <li
                        key={index}
                        className='flex justify-between items-center py-2 border-b'
                    >
                        <span className='text-gray-800'>{result.word}</span>
                        <button
                            onClick={() => addFavorite(result.word)}
                            className='text-blue-500 hover:text-blue-700 focus:outline-none'
                        >
                            Add to Favorites
                        </button>
                    </li>
                ))}
            </ul>
            <div className='mt-4 flex justify-between items-center pagination'>
                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`bg-blue-500 text-white px-3 py-2 rounded-md ${
                        currentPage === 1
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-blue-600 focus:outline-none'
                    }`}
                >
                    Previous
                </button>
                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={endIndex >= searchResults.length}
                    className={`bg-blue-500 text-white px-3 py-2 rounded-md ${
                        endIndex >= searchResults.length
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-blue-600 focus:outline-none'
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchResult;
