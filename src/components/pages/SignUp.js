import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'

function SignUp() {
    return (
        <>
            <Cards
            isHat={true} 
            label1=""
            label2="HATS"
            />
            <Footer/>
        </>
    );
}

export default SignUp;