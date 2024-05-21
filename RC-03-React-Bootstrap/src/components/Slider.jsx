import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../img/slider01.jpg";
import slider2 from "../img/slider02.jpg";
import slider3 from "../img/slider03.jpg";

function Slider() {
  return (
    <Carousel className='mb-5'>
      <Carousel.Item>
        <img src={slider1} width='1500px' height='700px' alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider2} width='1500px' height='700px' alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} width='1500px' height='700px' alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;