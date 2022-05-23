import './App.css';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './pages/about';
import Notfound from './pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
