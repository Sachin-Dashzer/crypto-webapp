import coin from "../../../assets/coin.png";
import coin2 from "../../../assets/coin3.webp";
import "./homeheader.scss";

import React, { useEffect, useState } from "react";

const Homeheader = () => {

  const [Active , setActive] = useState(false)

  useEffect(() =>{

    setTimeout(() => {
      setActive(!Active)
      console.log(Active);
    }, 5000);

  

  } , [Active])


  return (
    <div id="homeheader">
      <div className="homebox" id= {Active ? '' : "anime"} >
        
        <div className="content">
            <h1>
              Take a step into <span style={{color : "var(--third)"}}> crypto world</span>
            </h1>
            <h4>Embark on a journey into the exciting world of crypto, where innovation and opportunity converge, reshaping the future of finance.</h4>
            <button>Know more </button>

        </div>
        <div className="img">
          <img src={coin} alt="" />
        </div>
      </div>
    
      <div className="homebox" id= {Active ? "anime" : '' } > 

        
        <div className="content">
            <h1>
              Manage your <span style={{color : "var(--third)"}}> crypto profit</span> with us.
            </h1>
            <h4>We help you to manage your crypto profit to get more finance and money from customer and inverstor</h4>
            <button>Let's talk </button>

        </div>
        <div className="img">
          <img src={coin2} alt="" />
        </div>
      </div>
    
    </div>
  );
};

export default Homeheader;
