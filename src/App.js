import React from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom';

import Menu from "./composant/menu/Menu";
import Footer from './composant/footer/footer';
import Profil from './composant/profil/profil';
import Contact from './composant/contact/contact';
import Projet from './composant/projet/projet';
import Propos from './composant/propos/propos';
import Pro from './composant/pro/projetperso';


function App() {
    return (
    <div>
       <div>
    <HashRouter>
    <Menu />
    
      <Routes>
      <Route path='/profil' element={<Profil/>} />        

      <Route path='/contact' element={<Contact/>} />        

      <Route path='/projet' element={<Projet/>} />     

     <Route path='/pro' element={<Pro/>} />        
   
        
      <Route path='/propos' element={<Propos/>} />        

     <Route path="/" exact element={<Profil />} />
    

        </Routes>
    </HashRouter>
   
      </div>
      
      <Footer></Footer>
    </div>

    )
    
}

export default App
