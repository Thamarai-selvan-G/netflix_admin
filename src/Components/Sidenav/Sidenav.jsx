import React from 'react'
import './Sidenav.css'
import appLogo from '../../Assets/logo.png'
import { GoDot } from "react-icons/go";
import { Link } from 'react-router-dom';
function Sidenav() {
  return (
    <div>
        <div className="Side-nav">
            <div className="img">
               <div className="img-nav">
                 <img className='pic' src={appLogo} alt="" />
                 <Link to='/User'><p className='headLine'>User Info</p></Link>
               </div>
            </div>
            <div className="Tittle">
              <div className="lists">
              <Link className='linktag' to={"/home"}> <p className='tag'> <GoDot/> Home</p> </Link>
              <Link className='linktag' to={"/update"}> <p className='tag'> <GoDot/> Update </p> </Link>
              <Link className='linktag' to={"/viewAll"}> <p className='tag'> <GoDot/> All datas'</p> </Link>              </div>
            </div>
        </div>
    </div>
  )
}

export default Sidenav