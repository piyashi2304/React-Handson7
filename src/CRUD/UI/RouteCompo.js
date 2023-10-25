import React from 'react';
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import {BrowserRouter , Route, Routes, Link} from "react-router-dom"
import EditStudent from './EditStudent';
import AddStudent from './AddStudent';

function RouteCompo(){
    return(
        <>
        <BrowserRouter>
        <div className='navbar'>
        <Link className='link' to="/">Home </Link>
        <Link className='link' to="/student">Student </Link>
        <Link className='link' to="/contact">Contact Us</Link>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/editstudent/:id' element = {<EditStudent />} />
            <Route path='addstudent' element = {<AddStudent />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouteCompo