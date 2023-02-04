import React from 'react'
import Brands from '../components/brands/Brands'
import CTA from '../components/cta/CTA'
import Navbar from '../components/navbar/Navbar'
import Brand from './brand/Brand'
import Footer from './footer/Footer'
import Money from './money/Money'
import People from './peope/People'

const Main = () => {
   return (
      <div>
         <Navbar />
         <Brand />
         <Money />
         <People />
         <Brands />
         <CTA />
         <Footer />
      </div>
   )
}

export default Main