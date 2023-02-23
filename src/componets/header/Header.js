import React,{useState} from 'react'
import './Header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';
function Header({type}) {
    const [openDate,setOpenDate]=useState(false)
    const [destination,setDestination]=useState('')

   
     const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection'
        }
     ])
     const navigate=useNavigate()
     const [openOptions,setOpenOptions]=useState(false);
     const [options,setOptions]=useState({
      adult:1,
      children:0,
      room:1
     })
     const handleOption =(name,operation)=>{
      setOptions((prev)=>{
        return {
          ...prev,[name]:operation ==="i" ? options[name] + 1: options[name]-1,
        }
      })
     }
     const handleSearch=()=>{
          navigate('/hotels',{
            state:{destination,date,options}
          })
     }
     
  return (
    <div className='header'>
      <div className={
        type==="list" ? "headerContainer listMode":"headerContainer"
      }>
       <div className="headerList">
        <div className="headerListItem active me-2">
        <i className="fa-solid fa-bed"></i>
            <span  className='ms-2'>Stay</span>
        </div>
        <div className="headerListItem">
        <i className="fa-solid fa-jet-fighter"></i>
            <span className='ms-2'>Flights</span>
        </div>
        <div className="headerListItem">
        <i className="fa-solid fa-car"></i>
            <span  className='ms-2'>CarRental</span>
        </div>
        <div className="headerListItem">
        <i className="fa-solid fa-bed"></i>
            <span  className='ms-2'>Attractions</span>
        </div>
        <div className="headerListItem">
        <i className="fa-solid fa-car"></i>
            <span  className='ms-2'>Airport Cars</span>
        </div>
       </div>
       {type !=="list" &&<><h1 className="headertitle mt-4">A Life Time Of Discount? Its Genius</h1>
       <p>get revard for you travl - unlock instent saving of 10% or more with a free deepu booking account</p>
       <button className='btn btn-outline-primary'>Sign/Login</button>
      <div className="headerSearch mt-5">
        <div className="headerSearchItem">
        <i className="fa-solid fa-bed" style={{color:"blue"}}></i> 
        <input type="text" onChange={(e)=>setDestination(e.target.value)} placeholder='where are you going'className='headerSearchInput ms-2'/>
        </div>
        <div className="headerSearchItem">
        <i className="fa-regular fa-calendar-days" style={{color:"blue"}}></i> 
       <span className='headerSearchText ms-2' onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")}to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
       {openDate &&<DateRange
       editableDateInputs={true}
       onChange={item=>setDate([item.selection])}
       moveRangeOnFirstSelection={false}
       ranges={date} className="date" />
       
       }
      
        </div>
        <div className="headerSearchItem">
        <i className="fa-solid fa-person-walking-luggage" style={{color:"blue"}}></i>
        <span className='headerSearchText ms-2' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
        {openOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adalt</span>
            <div className="optionCounter">
              <button className="optionCounterButton btn btn-outline-primary" onClick= 
                {()=>handleOption('adult','d')}>-</button>
              <span className="optinCounterNumber">{options.adult}</span>
              <button className="optionCounterButton btn btn-outline-primary" onClick={()=>handleOption('adult','i')}>+</button>
            </div>
              
            
          </div>
          <div className="optionItem">
            <span className="optionText">Children </span>
            <div className="optionCounter">
            <button className="optionCounterButton btn btn-outline-primary" onClick= 
                {()=>handleOption('children','d')}>-</button>
              <span className="optinCounterNumber">{options.children}</span>
              <button className="optionCounterButton btn btn-outline-primary" onClick={()=>handleOption('children','i')}>+</button>
            </div>
              
           
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
            <button className="optionCounterButton btn btn-outline-primary" onClick= 
                {()=>handleOption('room','d')}>-</button>
              <span className="optinCounterNumber">{options.room}</span>
              <button className="optionCounterButton btn btn-outline-primary" onClick={()=>handleOption('room','i')}>+</button>
            </div>
            
          </div>
        </div>}
        </div>
        <div className="headerSearchItem">
       <button className='searchButton btn btn-outline-primary' onClick={handleSearch}>Search</button>
        </div>
      </div></>}
    </div>
    
    </div>
  )
}

export default Header
