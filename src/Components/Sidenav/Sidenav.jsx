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
              <Link className='linktag' to={"/Home"}> <p className='tag'> <GoDot/> Home</p> </Link>
              <Link className='linktag' to={"/TVShows"}> <p className='tag'> <GoDot/> TV Shows</p> </Link>
              <Link className='linktag' to={"/Movie"}> <p className='tag'> <GoDot/> Movies</p> </Link>
              <Link className='linktag' to={"/NewAndPopular"}> <p className='tag'> <GoDot/> New & Popular</p> </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Sidenav