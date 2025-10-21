import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {useState} from 'react'
import './App.css'
import Topbar from './Topbar/Topbar.jsx'
import Footer from './Footer/Footer'
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
    const [count, setCount] = useState(0)
    //layout
    return (
        <>

            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@200..800&display=swap"
                  rel="stylesheet"/>


            <BrowserRouter>

                <Topbar/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>

                <Footer/>

            </BrowserRouter>

        </>)
}

export default App
