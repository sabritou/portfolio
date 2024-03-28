import React from 'react'
import "./competance.css"

function competance() {
    return (

        <>


<div className="switch">
  <div className="body">
    <div className="volume"></div>
    <div className="screen">
      <div className="logo">
        <div className="icon">
        </div>
        <h1>Compétences</h1>
        <hr></hr>
        <h1><span>HTML, CSS, PHP, Reactjs</span></h1>
      </div>
    </div>
  </div>
  
  <div className="joy-con left">
    <div className="button-group">
      <div className="button arrow up"></div>
      <div className="button arrow right"></div>
      <div className="button arrow down"></div>
      <div className="button arrow left"></div>
    </div>
    
    <div className="stick"></div>
    <div className="select"></div>
    <div className="capture"></div>
    <div className="shoulder l"></div>
  </div>
  
  <div className="joy-con right">
    <div className="button-group">
      <div className="button letter" data-letter="X"></div>
      <div className="button letter" data-letter="A"></div>
      <div className="button letter" data-letter="B"></div>
      <div className="button letter" data-letter="Y"></div>
    </div>
    
    <div className="stick" />
    <div className="start"></div>
    <div className="home"></div>
    <div className="shoulder r"></div>
  </div>
</div>


</>

)
}
export default competance