import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import Menu from "./composant/menu/Menu";
import Footer from './composant/footer/footer';
import Profil from './composant/profil/profil';
import Contact from './composant/contact/contact';
import Projet from './composant/projet/projet';
import Propos from './composant/propos/propos';


function App() {
    return (
    <div>
       <div>
    <BrowserRouter>
    <Menu />
      <Routes>
      <Route path='/profil' element={<Profil/>} />        

      <Route path='/contact' element={<Contact/>} />        

      <Route path='/projet' element={<Projet/>} />        
        
      <Route path='/propos' element={<Propos/>} />        

      </Routes>
    </BrowserRouter>
   
      </div>
      
      <Footer></Footer>
    </div>

    )
    
}

export default App
