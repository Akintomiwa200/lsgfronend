import React from 'react'
import Hero from '../components/homepage/Hero'
import AboutSection from '../components/homepage/AboutSection'
import OurServices from '../components/homepage/Services'
import Testimonials from '../components/homepage/Testimoinal'
import FaqSection from '../components/homepage/FaqSection'
import MeetTeam from '../components/homepage/MeetTeam'
import Banner from '../components/homepage/Banner'
import Banners from '../components/homepage/Banny'


const Home = () => {
    return (
        <div className='flex flex-col w-[100vw] overflow-x-hidden'>           
            <Hero />
            <AboutSection/>
            <OurServices/>
            <Banners/>
            <Testimonials/>
            <FaqSection/>
            <MeetTeam/>
            <Banner/>
        </div>
    )
}

export default Home