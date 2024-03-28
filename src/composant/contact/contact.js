/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contact.css"


function contact() {
  return (
<>


<div className="audioplayer">
<audio controls>
    <source src="https://s17.aconvert.com/convert/p3r68-cdx67/oavel-q4qe6.mp3" type="audio/mpeg" />
  </audio>
</div>




<center>
  <form className="form">
  
    <label for="nome">Name:</label>
    
      <input type="text" className="infos" id="nome" name="nome"></input>
    <div className="mario"></div>
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email"></input>

      
      <button type="reset" id="limpar">Clear</button></form>
</center>
</>



    )
}

export default contact;
