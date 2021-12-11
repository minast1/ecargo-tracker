import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { carouselItems } from '../src/constants';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Item from './Item'

const CarouselComponent = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showStatus={false}
            showThumbs={false}
        >
            {carouselItems.map((item, i) => <Item
                key={i}
                name={item.name}
                description={item.description}
                image={ item.image}/>)}
        </Carousel>
    )
}

export default CarouselComponent
