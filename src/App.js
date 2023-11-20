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

function App() {
  return (
    <div className='app'>

    <Routes>
     <Route path={'/'} element={<Home/>} />
     <Route path={'/dashboard'} element={<DashBoard/>} />
     <Route path={'/login'} element={<Auth/>} />
     <Route path={'/register'} element={<Auth register />} />
     <Route path={'/projects'} element={<Projects/>} />
     <Route path={'/projects/add'} element={<AddProjects/>} />






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
