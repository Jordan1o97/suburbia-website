import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards 
            isHome={true}
            label1="Checkout our Limited Edition Products!"
            label2=""
            />
            <Footer/>
        </>
    );
}

export default Home;