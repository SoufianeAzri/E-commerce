
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Cart } from './pages/cart/Cart';
import { NavBar } from './component/NavBar';
import { Shop } from './pages/shop/Shop';
import { ShopContextProvider } from './context/ShopContext';
import { Footer } from './component/footer';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
