import React from 'react'
import "./User.css"
import Sidenav from '../Components/Sidenav/Sidenav'



const User = () => {
  return (
    <div >
          <link rel="stylesheet"
         href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

          
          <div className="Icon_container">
          
          <a href="#menu"><i class='bx bx-menu-alt-left icons'></i></a>

          <h1>DETAILS</h1>
           
            <div className="search_container">
   <i class='bx bx-search-alt-2 icons' ></i>
   <input type="search" placeholder='SEARCH' name="" id="" />
</div>

     </div>

     
     
  
            <div className="main_container animate__animated animate__fadeIn animate__delay-0.2s ">

               <div className="content">

               </div>
                       
                 <div className="user_container animate__animated animate__fadeIn animate__delay-0.5s ">
                 <i class='bx bxs-calendar-alt' ></i>
                    <h3>Date</h3>
                    <ul>
                    
                        <li className='list'>24-10-2022 </li>
                        <li className='list'>12-09-2022 </li>
                        <li className='list'>18-11-2022 </li>
                        <li className='list'>10-09-2022 </li>
                        <li className='list'>27-10-2022 </li>
                        
                    </ul>
                 </div>
                 <div className="user_id-container animate__animated animate__fadeIn animate__delay-0.5s">
                 <i class='bx bxs-user-account' ></i>
                 <h3>Name</h3>
                    <ul>
                    <li className='list'>john</li>
                    <li className='list'>mark</li>
                    <li className='list'>eoin</li>
                    <li className='list'>sarahcdd</li>
                    <li className='list'>afshin</li>

                    
                      
                    </ul>
                 </div>
                 <div className="roll_container animate__animated animate__fadeIn animate__delay-0.5s">
                 <i class='bx bx-envelope' ></i>
                 <h3>Email</h3>
                    <ul>
                    <li classname='list'>john123@gmail.com</li>
                    <li classname='list'>markzenner23@gmail.com</li>
                    <li classname='list'>eoin1992@gmail.com</li>
                    <li classname='list'>sarahcdd129@gmail.com</li>
                    <li classname='list'>afshin@example.com</li>
                   
                        
                    </ul>
                 </div>

                

                  <div className="plan-validity_container">
                  <i class='bx bx-cast' ></i>
                  <h3>Plan Validity</h3>


                  <ul>
                    <li className='list'>24 Days</li>
                    <li className='list'>36 Days</li>
                    <li className='list'>48 Days</li>
                    <li className='list'>56 Days</li>
                    <li className='list'>72 Days</li>

                        
                    </ul>
                  
                  </div>
                  <div className="edit_container">
                 <i class='bx bx-id-card'></i>
                 <h3>Edit</h3>
                  <a href="" className="edit_icon"><i class='bx bxs-edit-alt' ></i><i class='bx bxs-trash-alt'></i></a>
                  <a href="" className="edit_icon"><i class='bx bxs-edit-alt' ></i><i class='bx bxs-trash-alt'></i></a>
                  <a href="" className="edit_icon"><i class='bx bxs-edit-alt' ></i><i class='bx bxs-trash-alt'></i></a>
                  <a href="" className="edit_icon"><i class='bx bxs-edit-alt' ></i><i class='bx bxs-trash-alt'></i></a>
                  <a href="" className="edit_icon"><i class='bx bxs-edit-alt' ></i><i class='bx bxs-trash-alt'></i></a>
                 

                 </div>
                
                
                </div> 
    </div>
        
  )
}

export default User