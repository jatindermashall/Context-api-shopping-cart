import logo from './logo.svg';
import './App.css';
import { Routes, Route,Link } from "react-router-dom";
import TopNav from './components/TopNav';
import ShowProducts from './components/showProducts';
import ShoppingCart from './components/ShoppingCart';
import { APIContextProvider } from "./context/cartContext";


function App() {
  return (
    <APIContextProvider>
      <div className="App">
                 <TopNav />
          <Routes>
            <Route path="/" element={<ShowProducts />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
      
      
    </div>
    </APIContextProvider>
  );
}




export default App;
