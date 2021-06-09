import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'

function Services() {
    return (
        <>
            <Cards 
            isTShirt={true}
            label2="T-SHIRTS"
            />
            <Footer/>
        </>
    );
}

export default Services;