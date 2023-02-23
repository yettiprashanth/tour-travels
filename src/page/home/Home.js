import React from 'react'
import Feature from '../../componets/feature/Feature'
import FeatureProduct from '../../componets/featureProducts/FeatureProduct'
import MailList from '../../componets/featureProducts/mail/MailList'
import Header from '../../componets/header/Header'
import Navbar from '../../componets/Navbar'
import PropertyList from '../../componets/property/PropertyList'



function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
       <Feature/>
       <div className="product">
        <h5 className='text-center'>Browser By Property Types</h5>
        <PropertyList/>

       </div>
       <h4 className="text-center">
        Home Guests Lovers
       </h4>
      </div>
      <FeatureProduct/>
      <MailList/>
      
    </div>
  )
}

export default Home
