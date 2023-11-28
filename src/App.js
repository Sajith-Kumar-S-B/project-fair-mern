import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import DashBoard from './Pages/DashBoard';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Projects from './Pages/Projects';
import Footer from './components/Footer';
import Auth from './components/Auth';
import AddProjects from './components/AddProjects';
import { useContext } from 'react';
import { tokenAuthorisationContext } from './Contexts/TokenAuth';

function App() {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
  return (
    <div className='app'>

    <Routes>
     <Route path={'/'} element={<Home/>} />
     <Route path={'/dashboard'} element={isAuthorized?<DashBoard/>:<Home/>} />
     <Route path={'/login'} element={<Auth/>} />
     <Route path={'/register'} element={<Auth register />} />
     <Route path={'/projects'} element={isAuthorized? <Projects/>:<Home/>} />






    </Routes>
    <Footer/>

    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      
    </div>
  );
}

export default App;
