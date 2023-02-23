import React from 'react'
import './Feature.css'

function Feature() {
  return (
    <>
      <div className="featureItem card mt-5 " style={{margin:"10px"}}> 
       <div className="row">
       <div className="col-md-3 col-sm-6 col-12">
        <div className="card mt-3 mb-3" >
        <div className=" product_image">
        <img src="https://cdn.pixabay.com/photo/2020/02/04/20/27/delhi-4819243_1280.jpg" className="card-img-top" alt=""/>
        </div>
        <div className="title" >
            <h5 className="text-center" style={{color:"blue"}}>Delhi</h5>
        </div>
        </div>
        
        </div>
       <div className="col-md-3 col-sm-6 col-12">
        <div className="card mt-3 mb-3" >
           
        <div className=" product_image">
        <img src="https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_1280.jpg" className="card-img-top" alt=""/>
        </div>
        <div className="title" >
            <h5 className="text-center" style={{color:"blue"}}>London</h5>
        </div>
        </div>
        
        </div>
       <div className="col-md-3 col-sm-6 col-12">
        <div className="card mt-3 mb-3" >
        <div className=" product_image">
        <img src="https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098__480.jpg" className="card-img-top" alt=""/>
        </div>
        <div className="title" >
            <h5 className="text-center" style={{color:"blue"}}>NewYork</h5>
        </div>
        </div>
        
        </div>
       <div className="col-md-3 col-sm-6 col-12">
        <div className="card mt-3 mb-3" >
        <div className=" product_image">
        <img src="https://cdn.pixabay.com/photo/2020/10/02/21/06/dome-5622133__480.jpg" className="card-img-top" alt=""/>
        </div>
        <div className="title" >
            <h5 className="text-center" style={{color:"blue"}}>Mumbai</h5>
        </div>
        </div>
        
        </div>
        </div>     
      </div>
    </>
  )
}

export default Feature
