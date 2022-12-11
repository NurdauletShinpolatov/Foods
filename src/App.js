import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Categories from './pages/Categories';
import Products from './pages/Products';
import Basket from './pages/Basket';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/products/:categoryName' element={<Products />} />
        <Route path='/basket' element={ <Basket /> } />
      </Routes>
    </div>
  );
}

export default App;
