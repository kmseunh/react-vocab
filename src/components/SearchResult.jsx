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
        <div>
            <h2>Search Result</h2>
            <ul>
                {displayedResults.map((result, index) => (
                    <li key={index}>
                        {result.word}
                        <button onClick={() => addFavorite(result.word)}>
                            Add to Favorites
                        </button>
                    </li>
                ))}
            </ul>
            <div className='pagination'>
                <button
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => changePage(currentPage + 1)}
                    disabled={endIndex >= searchResults.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchResult;
