import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header"
import Home from './components/home/Home';
import Blog from './components/sidebar/Blog';
import Contact from './components/sidebar/Contact';
import Pages from './components/sidebar/Pages';
import Portfolio from './components/sidebar/Portfolio';
import Shop from './components/sidebar/Shop';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <BrowserRouter>
       <Header />
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/blog' element={<Blog />}></Route>
         <Route path='/contact' element={<Contact />}></Route>
         <Route path='/pages' element={<Pages />}></Route>
         <Route path='/portfolio' element={<Portfolio />}></Route>
         <Route path='/shop' element={<Shop />}></Route>
       </Routes>
       <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
