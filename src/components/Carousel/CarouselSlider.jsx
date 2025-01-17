import '../Carousel/CarouselSlider-style.css'
import Carousel from 'react-bootstrap/Carousel';


const CarouselSlider = () => {
  
  
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' 
            src=" https://dummyimage.com/1200x640"
            style={{height:'90vh'}}
            alt="slideImg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' 
            src=" https://dummyimage.com/1200x640"
            style={{height:'90vh'}}
            alt="slideImg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' 
            src=" https://dummyimage.com/1200x840"
            style={{height:'90vh'}}
            alt="slideImg" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselSlider