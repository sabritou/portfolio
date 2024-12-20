/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import "./projet.css"

function projet() {
    return (
    <>

<center>
<a href="https://github.com/sabritou"  target="_blank" rel="noopener noreferrer">
  <button className="button">Github / Projet Online</button>
  </a>
</center>

<center>
<h1>↓</h1>
</center>


<div className='grid'>

<a href="https://portfoliomario.netlify.app/">
<img className='photo' src="./img/portfolio.png"/>
</a>


<video width="100%"  height="auto" controls>
    <source src="./img/lynews.mp4" type="video/mp4"/>
  </video>


<video width="100%"  height="auto" controls>
    <source src="./img/resauc.mp4" type="video/mp4"/>
  </video>

<video width="100%"  height="auto" controls>
    <source src="./img/lycloud.mp4" type="video/mp4"/>
  </video>

<a href="https://github.com/sabritou/pico-8">
<img className='photo' src="./img/pico8.jpg"/>
</a>

<a href="https://github.com/sabritou/dataviz">
<img className='photo' src="./img/dataviz.png"/>
</a>

<a href="default.asp">
<img className='photo' src="./img/extensionnav.jpg"/>
</a>

<a href="https://github.com/sabritou/plateforme-de-vente-de-meubles">
<img className='photo' src="./img/platformemeuble.jpg"/>
</a>

</div>



    </>
    )
}

export default projet