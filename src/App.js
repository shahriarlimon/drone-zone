
import './App.css';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import DashBoard from './Components/DashBoard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element = {<Reviews/>} />
        <Route path='/dashboard' element = {<DashBoard/>} />
        <Route path='/blogs' element = {<Blogs/>} />
        <Route path='/Contact' element = {<Contact/>} />
        <Route path='*' element = {<NotFound/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
