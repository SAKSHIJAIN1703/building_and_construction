import React from 'react';
import "./Styles.css";
import { Carousel } from 'react-bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';

const Slider = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000} style={{maxHeight: 600}}>
        <img
          className="d-block w-100 "
          src={image1}
          alt="First slide"
          style={{objectFit:'cover'}}

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{maxHeight: 600}}>
        <img
          className="d-block w-100 "
          src={image2}
          alt="Third slide"
          style={{objectFit:'cover'}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{maxHeight: 600}}>
        <img
          className="d-block w-100 "
          src={image3}
          alt="Third slide"
          style={{objectFit:'cover'}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;