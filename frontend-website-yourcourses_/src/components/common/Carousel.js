import {Carousel} from 'react-bootstrap'
import {useState} from 'react'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className='mt-3'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/slider1.png"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/slider2.png"
            alt="Second slide"
          />
  

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/slider3.png"
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }


  export default ControlledCarousel;
