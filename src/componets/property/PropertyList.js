import React from 'react'
import './PropertyList.css'
function PropertyList() {
  return (
    <div className='property card' style={{margin:"10px"}}>
      <div className="row">
        <div className="col-md-2">
            <div className="propertyImg">
                <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" alt="" />
            </div>
            <div className="propertytitle">
                <h5 className="text-center">Hotel</h5>
            </div>
        </div>
        <div className="col-md-2">
            <div className="propertyImg">
                <img src="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg" alt="" />
            </div>
            <div className="propertytitle"><h5 className="text-center">Apportments</h5></div>
        </div>
        <div className="col-md-2">
            <div className="propertyImg">
                <img src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122__480.jpg" alt="" />
            </div>
            <div className="propertytitle"><h5 className="text-center">Resort</h5></div>
        </div>
        <div className="col-md-2">
            <div className="propertyImg">
                <img src="https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_1280.jpg" alt="" />
            </div>
            <div className="propertytitle"><h5 className="text-center">villa</h5></div>
        </div>
        <div className="col-md-2">
            <div className="propertyImg">
                <img src="https://cdn.pixabay.com/photo/2016/11/18/15/54/apartment-1835482__480.jpg" alt="" />
            </div>
            <div className="propertytitle"><h5 className="text-center">Cabins</h5></div>
        </div>
        <div className="col-md-2">
            <div className="propertyImg">
                <img src="https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026446_1280.jpg" alt="" />
            </div>
            <div className="propertytitle"><h5 className="text-center">Houses</h5></div>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
