import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import LogIn from './LogIn';
import DynamicRollNo, { Number2 } from './DynamicRollNo';
import Student from './Student';
import NavbarShowOrNot from './NavbarShowOrNot';
import Menu from './Menu';

const Routing1 = () => {
    // localStorage.setItem("name", "RAJ");
    // sessionStorage.setItem("name", "Vivek");
    // document.cookie = "name=bhaumik; expires=" + new Date(2024, 1, 1);
    return (
        <BrowserRouter>
            <NavbarShowOrNot>
                <Navbar />
            </NavbarShowOrNot>
            {/* <Menu /> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='contact' element={<Contact />} />
                <Route path='student' element={<Student />} >
                    <Route path=":userId" element={<DynamicRollNo />}>
                        <Route path=":id" element={<Number2 />} />
                    </Route>
                </Route>
                <Route path='logIn' element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing1;