import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


import TopNav from './components/TopNav';
import Products from './components/Products';


function App() {
  return (
    
    <div className="App">
     

      <TopNav studentname="Jatinder"/>
      <Products />
    </div>
    
  );
}

export default App;
