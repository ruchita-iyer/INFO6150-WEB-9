import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import LoginPage from "./screens/LoginPage/LoginPage";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Jobs from "./components/Jobs/Jobs";

const App = () => (
<BrowserRouter>
<Header/>
         <Routes>
           <Route path='/' element={<LandingPage/>} />
           <Route path='/login' element={<LoginPage/>} />
           <Route path='/home' element={<Home/>} />
           <Route path='/aboutus' element={<AboutUs/>} />
           <Route path='/jobs' element={<Jobs/>} />
           <Route path='/contact' element={<Contact/>} />
         </Routes>
         <Footer/>
      </BrowserRouter>
);

export default App;