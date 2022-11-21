import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="component">
      
      <Carousel interval={2000} className="carousel">
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorUuAhxicCkB6zcAd99ePTkRSBJkPi6YVhA&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Job Search ends here!</h3>
          <p>Multitude no of jobs available from our website.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKj9HFU620vTh5TgBnOh3sG3yP_qcWtwVrQ&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Open Source and Start Up Jobs</h3>
          <p>Work for the world famous start up jobs as well as work with open source community.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://24j1q8gzma4rsuat1tbzospi-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/jobs-hiring-help-wanter.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Jobs with varying diversity</h3>
          <p>There is no limit when it comes to recruiting diverse culture from our portal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home;