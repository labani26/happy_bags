import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import ExampleCarouselImage1 from './Components/images/bag.jpeg';
import ExampleCarouselImage2 from './Components/images/bag1.jpeg';
import ExampleCarouselImage3 from './Components/images/bag10.jpeg'; 

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* First Slide */}
      <Carousel.Item>
        <img
          src={ExampleCarouselImage1}
          alt="First slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Special Offer</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          src={ExampleCarouselImage2}
          alt="Second slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Hurry UP!! It's a clearance sale!</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          src={ExampleCarouselImage3}
          alt="Third slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Fashion Sale</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
