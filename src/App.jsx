import { Route, Routes } from 'react-router-dom';
import AppProvider from './contexts/AppContext';
import Home from './pages/Home';

const App = () => {
    return (
        <AppProvider>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </AppProvider>
    );
};

export default App;
