import React, { useState } from 'react'
import Header from '../header/Header'
import Navbar from '../Navbar'
import './Hotal.css'
// import photos from '../../Data'
function Hotel() {
    const [sliderNumber,setSliderNumber]=useState(0)
    const [open,setOpen]=useState(false)
    const handleOpen=(i)=>{
        setSliderNumber(i)
        setOpen(true)
    }
    const handleMove=(derection)=>{
        let newSliderNumber;
        if(derection ==="l"){
            newSliderNumber=sliderNumber === 0 ? 5 : sliderNumber-1
        }else{
            newSliderNumber=sliderNumber === 5 ? 0 : sliderNumber+1
        }
        setSliderNumber(newSliderNumber)
    }
    const photos=[
        {
            id:"1",
            img:"https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026446_1280.jpg"
        },
        {
            id:"2",
            img:"https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg"
        },
        {
            id:"3",
            img:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
        },
        {
            id:"4",
            img:"https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122__480.jpg"
        },
        {
            id:"5",
            img:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
        },
        {
            id:"6",
            img:"https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026446_1280.jpg"
        }
    ]
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="container">
       {open && <div className="slider">
         <div className="sliderIcons d-flex">
         <i className="fa-solid fa-arrow-left arrow" onClick={()=>handleMove("l")}></i>
        <div className="sliderImg">
            <img src={photos[sliderNumber].img} alt=""  onClick={()=>setOpen(!open)}/>
        </div>
        <i className="fa-solid fa-arrow-right arrow" onClick={()=>handleMove("r")} ></i>
         </div>
        
        <i className="fa-solid fa-xmark close" onClick={()=>setOpen(false)}></i>
        
        </div>}
        <div className="ht-text d-flex justify-content-space-between mt-3">
        <h3 className='me-5'>Grand Hotel</h3>
        <button className='btn btn-primary ms-5 justify-content-end'>Reserve Or Book Now</button>
        </div>
         
          <i className="fa-sharp fa-solid fa-location-dot me-2"></i><span>Eliton St 125 NewYork</span>
          <h5>Exellent Location-500m From Center</h5>
          <h6>Book A Stay Over $114 At This Property And Get A Free Airport Taxi</h6>
            
            <div className="row">
                {
                    photos.map((photo,i)=>(
                        <div className="col-md-3 mt-4" key={i}>
                              <div className="hotelImg">
                                <img src={photo.img} alt="" onClick={()=>handleOpen(i)}/>
                              </div>
                        </div>
                    ))
                }
            </div>
            <div className="container mt-3">
      <div className="row">
        <div className="col-md-8">
            <h1>Stay In The Heart Of Krakow</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores in officia doloremque facilis voluptatum sed, commodi incidunt adipisci recusandae, aspernatur totam qui ab officiis quos fugit maxime esse! Beatae, ut!</p>
        </div>
        <div className="col-md-4">
            <div className="card " style={{margin:"10px",backgroundColor:"lightgray"}}>
                <h3 style={{margin:"10px"}}>Perfect From A Night Stay!</h3>
                <p style={{margin:"10px"}}>londan in the real heart of krokow this property has an exellent location score of 9 &</p>
                 <h3 style={{margin:"10px"}}>$ 945(9 Nights)</h3>
                 <button className='btn btn-primary btn-lg' style={{margin:"10px"}}>Reserve or Booknow</button>
            </div>
        </div>
     </div>
      </div>

      </div>
     
     
    </div>
  )
}

export default Hotel
