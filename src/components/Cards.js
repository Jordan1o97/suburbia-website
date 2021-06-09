import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function HomeCard(props) {
    return (
        <div className='cards'>
            <h1>{props.label1}</h1>
            <h1 className='Big'>{props.label2}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Featured'
                            path='/services'
                        />
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise Subuiirb'
                            label='Featured'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Featured'
                            path='/services'
                        />
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Experience Football on top of the Himilayan Mountains'
                            label='Featured'
                            path='/products'
                        />
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Featured'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
  }
  
  function TShirtCards(props) {
    return (
        <div className='cards'>
            <h1>{props.label1}</h1>
            <h1 className='Big'>{props.label2}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Suburbia Logo T-Shirt, Black'
                            label='Featured'
                            price='$22.50'
                        />
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Suburbia Logo T-Shirt, White'
                            label='Featured'
                            price='$22.50'
                        />
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Suburbia Logo T-Shirt, Red'
                            label='Featured'
                            price='$22.50'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
  }

  function HoodieCards(props) {
    return (
        <div className='cards'>
            <h1>{props.label1}</h1>
            <h1 className='Big'>{props.label2}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Longboard-Hoodie.png'
                            text='Longboarding Logo Hoodie, White'
                            label='Featured'
                            price='$45.00'
                        />
                        <CardItem
                            src='images/Longboard-Hoodie.png'
                            text='Longboarding Logo Hoodie, Pink'
                            label='Featured'
                            price='$45.00'
                        />
                        <CardItem
                            src='images/Longboard-Hoodie.png'
                            text='Longboarding Logo Hoodie, blakc'
                            label='Featured'
                            price='$45.00'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
  }

  function HatCards(props) {
    return (
        <div className='cards'>
            <h1>{props.label1}</h1>
            <h1 className='Big'>{props.label2}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Suburbia Logo Hat, White'
                            label='Featured'
                            price='$15.00'
                        />
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Suburbia Logo Hat, Beige'
                            label='Featured'
                            price='$15.00'
                        />
                        <CardItem
                            // src='images/img-3.jpg'
                            text='Suburbia Logo Hat, Pink'
                            label='Featured'
                            price='$15.00'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
  }

function Cards(props) {
    const isHome = props.isHome;
    const isTShirt = props.isTShirt;
    const isHoodie = props.isHoodie;
    const isHat = props.isHat
  if (isHome) {
    return <HomeCard 
            label1={props.label1}
            />;
  }
  else if(isTShirt){
    return <TShirtCards 
            label2={props.label2}
            />;
  }
  else if(isHoodie){
    return <HoodieCards
            label2={props.label2}
            />;
  }
  else if(isHat){
    return <HatCards
            label2={props.label2}
            />;
  }
  else {
    return <HomeCard 
    label1={props.label1}
    />;
  }
}


export default Cards

