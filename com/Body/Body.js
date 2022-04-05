import React from 'react';
import Menu from './Menu.js';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About';
import {Routes,Route,Redirect} from 
'react-router-dom'
export default function Body(){
    return(
        <div>
          <Routes>
         <Route path='/' 
         element={<Home/>}/>
        <Route path='/menu' 
         element={<Menu/>}/>
         <Route path='/contact' 
         element={<Contact/>}/>
         <Route path='/about' 
         element={<About/>}/>
         </Routes>
        </div>
    )
}