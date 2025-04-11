import React from 'react'
import ex from "../assets/Frame142.png"
import OurServices from "../components/homepage/Services"
import HowItWorks from '../components/services/How'
import WhyChooseUs from '../components/services/WhyChoose'
import Testimonials from '../components/homepage/Testimoinal'
import Banner from '../components/homepage/Banner'

const OurService = () => {
    return (
          <div className="min-h-screen bg-gray-100 flex flex-col">
              {/* Hero Section */}
              <div className="w-full bg-white text-center ">
               <img src={ex} className='w-[100vw] h-[25vh] lg:h-auto' alt="" />
              </div>
              <div className="min-h-screen bg-gray-100 flex flex-col">
      
            <OurServices />
            <HowItWorks/>
            <WhyChooseUs/>
            <Testimonials/>
            <div className=" w-[90vw] lg:w-[80vw] mx-auto z-10 mb-16">
<Banner />
</div>
            </div>
        </div>
    )
}

export default OurService