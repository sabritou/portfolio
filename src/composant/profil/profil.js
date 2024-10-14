/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./profil.css"
import Button from "../button/button";



function profil() {
  return (
<>



    <div className="profil">
    <h3>Salut c'est moi <span>Sabri Kradaoui</span></h3>
    <hr></hr>
    <h3>Développeur Fullstack passioné par le développement Front-end, web</h3>
    <h4>Développeur basé sur Lyon, France 📍</h4>

   

<Button></Button>




<div className="skills">
  <div className="skill">  
    <h4>Js :</h4>   <hr style={{ width: '20%' }} />
    </div>

  <div className="skill"><h4>Html :
    </h4>   <hr style={{ width: '45%' }} />
     </div>

  <div className="skill"> <h4>Css :</h4>      <hr style={{ width: '44%' }} /></div>
  <div className="skill">   <h4>ReactJs :</h4>    <hr style={{ width: '30%' }} /></div>
  <div className="skill"><h4>Git, Notion, Scrum</h4>     <hr style={{ width: '55%' }} /></div>
   
   
      
      
      
     
     
    



    </div>
</div> 

<center>
<h1>Contact</h1>
</center>

<div className="contactdetails">
<center>
<div className="contact">
<img src="data:image/svg+xml,%3csvg%20width='38'%20height='28'%20viewBox='0%200%2038%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.9853%200H5.15656C2.30882%200%200%202.30882%200%205.15656V22.1304C0%2024.9781%202.30882%2027.287%205.15656%2027.287H31.9853C34.833%2027.287%2037.1419%2024.9781%2037.1419%2022.1304V5.15656C37.1419%202.30882%2034.833%200%2031.9853%200ZM12.9247%2018.411L5.70375%2024.5713C5.19442%2025.006%204.42873%2024.9456%203.99413%2024.4357C3.55945%2023.9264%203.61988%2023.1607%204.12979%2022.7261L11.3507%2016.5658C11.8599%2016.1311%2012.6256%2016.1915%2013.0602%2016.7014C13.4949%2017.2107%2013.4345%2017.9764%2012.9247%2018.411ZM18.5709%2016.069C17.6051%2016.0666%2016.6689%2015.7457%2015.9369%2015.1127L15.9375%2015.1133L15.9352%2015.1115C15.9358%2015.1121%2015.9364%2015.1121%2015.9369%2015.1127L4.85761%205.49649C4.35126%205.05703%204.29736%204.29141%204.73617%203.78572C5.17556%203.27937%205.94125%203.22547%206.44687%203.66428L17.5293%2013.2829C17.7662%2013.4937%2018.1564%2013.6459%2018.5709%2013.6435C18.9849%2013.6447%2019.3685%2013.4967%2019.6185%2013.2787L19.6238%2013.274L30.6949%203.66435C31.2006%203.22554%2031.9663%203.27944%2032.4057%203.78579C32.8445%204.29141%2032.7906%205.0571%2032.2843%205.49656L21.2019%2015.1157C20.4724%2015.7421%2019.5374%2016.0678%2018.5709%2016.069ZM33.1483%2024.4357C32.7136%2024.9456%2031.9479%2025.006%2031.4387%2024.5713L24.2178%2018.411C23.708%2017.9763%2023.6476%2017.2107%2024.0822%2016.7014C24.5168%2016.1915%2025.2825%2016.1312%2025.7918%2016.5658L33.0127%2022.7261C33.5225%2023.1607%2033.5829%2023.9264%2033.1483%2024.4357Z'%20fill='%23D8D8D8'/%3e%3c/svg%3e" alt="" />
<h3>/ k.sabritou@gmail.com</h3>
</div>

<div className="contact">
<img src="data:image/svg+xml,%3csvg%20width='27'%20height='37'%20viewBox='0%200%2027%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.494%200C6.05469%200%203.19006e-06%206.0571%200%2013.4964C-4.66239e-06%2026.5864%2012.7344%2036.5376%2012.7344%2036.5376C13.1817%2036.8939%2013.8159%2036.8939%2014.2632%2036.5376C14.2632%2036.5376%2027%2026.5864%2027%2013.4964C27%206.0571%2020.9333%200%2013.494%200ZM13.494%207.36407C16.8676%207.36407%2019.6359%2010.1228%2019.6359%2013.4964C19.636%2016.87%2016.8676%2019.6359%2013.494%2019.6359C10.1204%2019.6359%207.36166%2016.87%207.36168%2013.4964C7.36169%2010.1228%2010.1204%207.36407%2013.494%207.36407Z'%20fill='%23D8D8D8'/%3e%3c/svg%3e" alt="" />
<h3>/  Lyon, France</h3>
</div>
</center>



</div>












 <center>
 


<a href="https://github.com/sabritou"  target="_blank" rel="noopener noreferrer">
  <button className="button">Github</button>
  </a>

<a href="https://www.linkedin.com/in/sabri-kradaoui-1a9405224/"  target="_blank" rel="noopener noreferrer">
  <button className="button">Linkedin</button>
  </a>
  
<a href="https://discord.gg/AkCfd4fFkE"  target="_blank" rel="noopener noreferrer">
  <button className="button">Discord</button>
  </a>


 </center> 
   
</>

    )
}

export default profil;

