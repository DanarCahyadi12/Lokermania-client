import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import PasangLoker from './pages/PasangLoker';
import PostjobPage from './pages/PostjobPage';
import RegisterPage from './pages/RegisterPage';
import SearchLoker from './pages/SearchLoker';
import Redirect from 'react-router-dom'
import About from './pages/About';
import Splash from './pages/splash1';
import Splash2 from './pages/splash2';
import Dashboard from './pages/Dashboard';
import Detailjob from './pages/Detailjob';
import Protected from './components/Protected';
import ProfilePerusahaan from './pages/Profileperusahaan';
import NotFound from './pages/Notfound';





function App() {
  return (
    <Router>
      <Routes>

        //user//
        <Route path='/' element={<IndexPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/detailjob/:id' element={<Detailjob />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/search' element={<SearchLoker />}></Route>
        <Route path='/splash' element={<Splash />}></Route>
        <Route path='/splash2' element={<Splash2 />}></Route>
        <Route path='/company' element={<PostjobPage />}></Route>
        <Route path='*' element={<NotFound/>}></Route>


        //company//
        <Route element={<Protected/>}>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/profileperusahaan' element={<ProfilePerusahaan />}></Route>
          <Route path='/add-vacancy' element={<PasangLoker />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
