import React, { useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import Header from '../../componets/header/Header'
import Navbar from '../../componets/Navbar'
import {format} from "date-fns"
import { DateRange } from 'react-date-range';
import './List.css'
import MailList from '../../componets/featureProducts/mail/MailList'
function List() {
  const photos=[
    {
      src:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
      src:"https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg",
      src:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
      src:"https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122__480.jpg",
      src:"https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_1280.jpg",
      src:"https://cdn.pixabay.com/photo/2016/11/18/15/54/apartment-1835482__480.jpg",
      src:"https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026446_1280.jpg",
    }
  ]
  const location =useLocation()
  const [destination,setDestination]=useState(location.state.adult)
  const [date,setDate]=useState(location.state.date)
  const [room,setroom]=useState(location.state.room)
  const [options,setOptions]=useState(location.state.options)
  const [openDate,setOpenDate]=useState(false)
  
  return ( 
  <div>
    <Navbar/><Header type="list"/>
    <div className="listContainer container mt-3">
      <div className="listWrapper row">
        <div className="listSearch col-md-5">
          <h1 className="lsTittle">Search</h1>
              <div className="lsItem">
                <h5>Destination</h5>
                <input type="text" placeholder={destination} />
              </div>
              <div className="lsItem">
                <h5 className='text-center me-5'>Ckeck In Dtes</h5>
                <span className='headerSearchText ms-2' style={{color:"black"}} onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")}to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                {openDate &&<DateRange
       editableDateInputs={true}
       onChange={item=>setDate([item.selection])}
       moveRangeOnFirstSelection={false}
       ranges={date} className="date" />
       
       }
              </div>
              <div className="lsItem">
                <h4 className='text-center'>Options</h4>
                <div className="lsOptionItem d-flex justify-content-space-between align-iten-center mt-2">
                  <span className="lsOptionText me-3">Min Price <small>Per Day</small></span>
                  <input type="number" className='lsOptionInput ' />
                </div>
                <div className="lsOptionItem d-flex justify-content-space-between mt2">
                  <span className="lsOptionText me-3">Min Price <small>PerNight</small></span>
                  <input type="number"  
                    className='lsOptionInput ' />
                </div>
                <div className="lsOptionItem d-flex justify-content-space-between">
                  <span className="lsOptionText me-5">Adult</span>
                  <input type="number" min={1} placeholder={options.adult} 
                   className='lsOptionInput ' />
                </div>
                <div className="lsOptionItem d-flex justify-content-space-between">
                  <span className="lsOptionText me-4">Children</span>
                  <input type="number" min={0} placeholder={options.children}  className='lsOptionInput ' />
                </div>
                <div className="lsOptionItem d-flex justify-content-space-between">
                  <span className="lsOptionText me-5">Room</span>
                  <input type="number" min={1} placeholder={options.children} className='lsOptionInput' />
                </div><Link to='/hotel'><button className="btn btn-primary">Search</button></Link>
                
              </div>
             
          
              
          </div>
        <div className="listResult col-md-7">
           <div className="row">
            <div className="col-md-3" >
            <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" alt="" className='mt-2'/>
            <img src="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg" alt="" className='mt-2'/>
            <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" alt="" className='mt-3'/>
            <img src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122__480.jpg" alt="" className='mt-3' />
            <img src="https://cdn.pixabay.com/photo/2016/11/18/15/54/apartment-1835482__480.jpg" alt=""className='mt-3' />
</div>
            <div className="col-md-7" >
               <h3 className="text-center">Tour StertAportment</h3>
               <small className='textcenter'>500m frmo Center</small><br />
               <button className='btn btn-outline-primary btn-sm'>Free Airport Taxi</button><br />
               <h5>Studio Appartment With Aircondition</h5>
               <h6>Free Cancelation </h6>
               <p>You Can Free Cancellation Leter , So Lack In The Greet Price Today</p>
               <h3 className="text-center">Tour StertAportment</h3>
               <small className='textcenter'>500m frmo Center</small><br />
               <button className='btn btn-outline-primary btn-sm'>Free Airport Taxi</button><br />
               <h5>Studio Appartment With Aircondition</h5>
               <h6>Free Cancelation </h6>
               <p>You Can Free Cancellation Leter , So Lack In The Greet Price Today</p>
               <h3 className="text-center">Tour StertAportment</h3>
               <small className='textcenter'>500m frmo Center</small><br />
               <button className='btn btn-outline-primary btn-sm'>Free Airport Taxi</button><br />
               <h5>Studio Appartment With Aircondition</h5>
               <h6>Free Cancelation </h6>
               <p>You Can Free Cancellation Leter , So Lack In The Greet Price Today</p>
               <h3 className="text-center">Tour StertAportment</h3>
               <small className='textcenter'>500m frmo Center</small><br />
               <button className='btn btn-outline-primary btn-sm'>Free Airport Taxi</button><br />
               <h5>Studio Appartment With Aircondition</h5>
               <h6>Free Cancelation </h6>
               <p>You Can Free Cancellation Leter , So Lack In The Greet Price Today</p>
               <h3 className="text-center">Tour StertAportment</h3>
               <small className='textcenter'>500m frmo Center</small><br />
               <button className='btn btn-outline-primary btn-sm'>Free Airport Taxi</button><br />
               <h5>Studio Appartment With Aircondition</h5>
               <h6>Free Cancelation </h6>
               <p>You Can Free Cancellation Leter , So Lack In The Greet Price Today</p>
             
            </div>
            
            <div className="col-md-2" >
                 <div className="detais d-flex justify-content-space-between">
                  <h2>Exelent</h2>
                  <button className='btn btn-primary btn-sm ms-5'>8.9</button>
                 </div>
                 <div className="price mt-3" >
                  <h6>Price:$112<small>(includin all taxis)</small></h6>
                  
                 </div>
                 <button className='btn btn-outline-primary'>Avalabelity</button>   
                 <div className="detais d-flex justify-content-space-between mt-3">
                  <h2>Exelent</h2>
                  <button className='btn btn-primary btn-sm ms-5'>8.9</button>
                 </div>
                 <div className="price mt-3" >
                  <h6>Price:$112<small>(includin all taxis)</small></h6>
                  
                 </div>
                 <button className='btn btn-outline-primary'>Avalabelity</button>   
                 <div className="detais d-flex justify-content-space-between">
                  <h2>Exelent</h2>
                  <button className='btn btn-primary btn-sm ms-5'>8.9</button>
                 </div>
                 <div className="price mt-3" >
                  <h6>Price:$112<small>(includin all taxis)</small></h6>
                  
                 </div>
                 <button className='btn btn-outline-primary'>Avalabelity</button>   
                 <div className="detais d-flex justify-content-space-between">
                  <h2>Exelent</h2>
                  <button className='btn btn-primary btn-sm ms-5'>8.9</button>
                 </div>
                 <div className="price mt-3" >
                  <h6>Price:$112<small>(includin all taxis)</small></h6>
                  
                 </div>
                 <button className='btn btn-outline-primary'>Avalabelity</button>   
                 <div className="detais d-flex justify-content-space-between">
                  <h2>Exelent</h2>
                  <button className='btn btn-primary btn-sm ms-5'>8.9</button>
                 </div>
                 <div className="price mt-3" >
                  <h6>Price:$112<small>(includin all taxis)</small></h6>
                  
                 </div>
                 <button className='btn btn-outline-primary'>Avalabelity</button>   
                 <div className="detais d-flex justify-content-space-between">
                  <h2>Exelent</h2>
                  <button className='btn btn-primary btn-sm ms-5'>8.9</button>
                 </div>
                 <div className="price mt-3" >
                  <h6>Price:$112<small>(includin all taxis)</small></h6>
                  
                 </div>
                 <button className='btn btn-outline-primar'>Avalabelity</button>   
            </div>
           
            
           
            
                
                  </div>
             
           </div>
        </div>
      </div>
      <MailList/>
    </div>
 
   
  )
}

export default List
