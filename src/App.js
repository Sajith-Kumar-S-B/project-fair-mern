import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import DashBoard from './Pages/DashBoard';

import Projects from './Pages/Projects';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className='app'>

    <Routes>
     <Route path={'/'} element={<Home/>} />
     <Route path={'/dashboard'} element={<DashBoard/>} />
     <Route path={'/login'} element={<Auth/>} />
     <Route path={'/register'} element={<Auth register />} />
     <Route path={'/projects'} element={<Projects/>} />





    </Routes>
    <Footer/>
      
    </div>
  );
}

export default App;
