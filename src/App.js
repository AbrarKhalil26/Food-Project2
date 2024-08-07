import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home , Recipe, Search, Contact, Signin, Signup, MyFavorite} from './pages';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorite" element={<MyFavorite />} />
      </Routes>
      
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
