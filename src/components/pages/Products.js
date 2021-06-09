import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'

function Products() {
    return (
        <>
            <Cards 
            isHoodie={true}
            label2="HOODIES"
            />
            <Footer/>
        </>
    );
}

export default Products;