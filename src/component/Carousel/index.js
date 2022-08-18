import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./carousel.css";

const Carousel = () => {
  return (
    <UncontrolledCarousel className='slider-img'
        items={[
            {
            altText: 'Gambar Slide 1',
            caption: 'Background Gambar 1 Bootstrap',
            key: 1,
            src: 'https://picsum.photos/id/123/1200/600'
            },
            {
            altText: 'Gambar Slide 1',
            caption: 'Landscape View 2',
            key: 2,
            src: 'https://picsum.photos/id/456/1200/600'
            },
            {
            altText: 'Gambar Slide 1',
            caption: 'Landscape View 3',
            key: 3,
            src: 'https://picsum.photos/id/678/1200/600'
            }
        ]}
    />
    
  )
}

export default Carousel;
