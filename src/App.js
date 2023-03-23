import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
