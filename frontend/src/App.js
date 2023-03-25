import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './component/login/Login'
import Addnote from './component/add note/Addnote';
import Home from './component/homepage/Home';
import Navbar from './component/navbar/Navbar';
import SingleNote from './component/single note/SingleNote';
import Signup from './component/signup/Signup';


function App() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/addnote' element={<Addnote></Addnote>}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
