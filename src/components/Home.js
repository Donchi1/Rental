import React from 'react'
import { Container, Card } from 'react-bootstrap'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import TimeDropDown from './TimeDropDown'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'react-dates/initialize'

function Home() {
  return (
    <main>
      <div className="main-container">
        <div className="spacer" />
        <h2 className="banner">Way better than a rental car</h2>
        <h2 className="caption">
          Book unforgettable cars from local hosts around the world
        </h2>

        {/* Search */}

        <div className="search-container">
          <form className="search-form">
            <div className="search-where">
              <label>Where</label>
              <input
                type="text"
                placeholder="City, airport, address, or hotel"
                defaultValue={`San Francisco, CA`}
              />
            </div>

            <div className="search-from">
              <label>From</label>
              <div className="main-datetime-wrapper">
                <input
                  className="main-date"
                  type="date"
                  defaultValue={moment().format('YYYY-MM-DD')}
                />
                {/* <SingleDatePicker
                      date={this.state.search_start_date} // momentPropTypes.momentObj or null
                      onDateChange={date => this.setState({ search_start_date: date })} // PropTypes.func.isRequired
                      focused={this.state.focused} // PropTypes.bool
                      onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                      id="1" // PropTypes.string.isRequired,
                    /> */}

                <TimeDropDown />
              </div>
            </div>

            <div className="search-until">
              <label>Until</label>
              <div className="main-datetime-wrapper">
                <input
                  className="main-date"
                  type="date"
                  defaultValue={moment().add(7, 'days').format('YYYY-MM-DD')}
                />
                {/* <SingleDatePicker
                      date={this.state.search_start_date} // momentPropTypes.momentObj or null
                      onDateChange={date => this.setState({ search_start_date: date })} // PropTypes.func.isRequired
                      focused={this.state.focused} // PropTypes.bool
                      onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                      id="1" // PropTypes.string.isRequired,
                    /> */}

                <TimeDropDown />
              </div>
            </div>

            <Link to={'/cars'}>
              <button className="search-button" />
            </Link>
          </form>
        </div>
      </div>

      <div style={{ height: '1vh' }} className="head_bg"></div>
      <h1
        className="text-center pt-4 text-capitalize z_index "
        style={{ height: '20vh' }}
      >
        World largest car shearing marketplace
      </h1>

      <Container>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          autoplay
          responsiveClass
          dots={false}
          items={1}
        >
          <div className="d-flex justify-content-between align-items-center d_mobile">
            <img
              src={require('../assets/outdoor.jpg')}
              alt="outdoor"
              width="400px"
              height="400px"
            />
            <div>
              <h1 style={{ color: 'black' }}>
                Find the perfect car{' '}
                <span className="text-success">to make errand day easier</span>
              </h1>
              <p className="text-dark mt-2 ">
                Book a roomy truck or SUV to ease your errand day stress, or to
                motivate your moving day.
              </p>
              <div className="mt-4 pt-2">
                <div className="btn-mobile">
                  <button className="btn-style">Browse Car</button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center d_mobile">
            <img
              src={require('../assets/outdoor1.jpg')}
              alt="outdoor1"
              width="400px"
              height="400px"
            />
            <div>
              <h1 style={{ color: 'black' }}>
                Find the perfect car{' '}
                <span className="text-success">
                  to conquer the great outdoors
                </span>
              </h1>
              <p className="text-dark">
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <div className="btn-mobile">
                <button className="btn-style">Browse Car</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center d_mobile">
            <img
              src={require('../assets/outdoor2.jpg')}
              alt="outdoor2"
              width="400px"
              height="400px"
            />
            <div>
              <h1 style={{ color: 'black' }}>
                Find the perfect car{' '}
                <span className="text-success">to make errand day easier</span>
              </h1>
              <p className="text-dark">
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <div className="btn-mobile">
                <button className="btn-style">Browse Car</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center d_mobile">
            <img
              src={require('../assets/outdoor3.jpg')}
              alt="outdoor3"
              width="400px"
              height="400px"
            />
            <div>
              <h1 style={{ color: 'black' }}>
                Find the perfect car{' '}
                <span className="text-success">to unwind for the weekend</span>
              </h1>
              <p className="text-dark">
                From daily drivers to spirited sports cars, ditch the grind with
                convenient nearby cars.
              </p>
              <div className="btn-mobile">
                <button className="btn-style">Browse Car</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center d_mobile">
            <img
              src={require('../assets/outdoor4.jpg')}
              alt="outdoor4"
              width="400px"
              height="400px"
            />
            <div>
              <h1 style={{ color: 'black' }}>
                Find the perfect car{' '}
                <span className="text-success">to make errand day easier</span>
              </h1>
              <p className="text-dark">
                Skip the rental car counter and find the perfect car to
                complement your vacation vibe.
              </p>
              <div className="btn-mobile">
                <button className="btn-style">Browse Car</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center d_mobile">
            <img
              src={require('../assets/outdoor5.jpg')}
              alt="outdoor5"
              width="400px"
              height="400px"
            />
            <div>
              <h1 style={{ color: 'black' }}>
                Find the perfect car{' '}
                <span className="text-success">
                  to upgrade your vacation plans
                </span>
              </h1>
              <p className="text-dark">
                Get your fill of high-performance thrills, with the richest
                selection of luxury and exotic vehicles anywhere.
              </p>
              <div className="btn-mobile">
                <button className="btn-style">Browse Car</button>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </Container>
      <div style={{ marginTop: '4%' }}></div>
      <Container>
        <div className=" mb-4">
          <h3>Browse By Make</h3>
        </div>
        <OwlCarousel
          className="owl-theme "
          loop
          margin={10}
          nav
          autoplay
          responsiveClass
          dots={false}
        >
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/benz.jpg')} />
            </Link>
            <h4 className="text-center py-3">Benz</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/nissan.jpg')} />
            </Link>
            <h4 className="text-center py-3">Nissan</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/ford.jpg')} />
            </Link>
            <h4 className="text-center py-3">Ford</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/jom.jpg')} height="290px" />
            </Link>
            <h4 className="text-center py-3">Jom</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/jeep.jpg')} />
            </Link>
            <h4 className="text-center py-3">Jeep</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/nissan.jpg')} />
            </Link>
            <h4 className="text-center py-3">Nissan</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/lambo.jpg')} />
            </Link>
            <h4 className="text-center py-3">Lambo</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/lg.jpg')} height="290px" />
            </Link>
            <h4 className="text-center py-3">Lg</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/bmw.jpg')} />
            </Link>
            <h4 className="text-center py-3">Bmw</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/porche.jpg')} />
            </Link>
            <h4 className="text-center py-3">Porche</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/subaru.jpg')} />
            </Link>
            <h4 className="text-center py-3">Subaru</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/tesla.jpg')} />
            </Link>
            <h4 className="text-center py-3">Tesla</h4>
          </Card>
          <Card className="shad">
            <Link to="#">
              <Card.Img src={require('../assets/toyota.jpg')} />
            </Link>
            <h4 className="text-center py-3">Toyota</h4>
          </Card>
        </OwlCarousel>
      </Container>
      <div style={{ marginTop: '4%' }}></div>
      <Container>
        <div className=" mb-4">
          <h3>Browse By Destination</h3>
        </div>
        <OwlCarousel
          className="owl-theme "
          loop
          margin={10}
          nav
          autoplay
          responsiveClass
          dots={false}
          items={4}
        >
          <Card className="shadow-lg">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/london.png')} />
            </Link>
            <h4 className="text-center py-3">London</h4>
          </Card>
          <Card className="shadow-lg">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/miama.png')} />
            </Link>
            <h4 className="text-center py-3">Miama</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/orlandono.png')} />
            </Link>
            <h4 className="text-center py-3">Orlando</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/denver.png')} />
            </Link>
            <h4 className="text-center py-3">Danver</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/toronto.png')} />
            </Link>
            <h4 className="text-center py-3">Toronto</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/vegas.png')} />
            </Link>
            <h4 className="text-center py-3">Las Vegas</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/washinDc.png')} />
            </Link>
            <h4 className="text-center py-3">Washinton Dc</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/sanFrancisco.png')} />
            </Link>
            <h4 className="text-center py-3">SanFrancisco</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/jercey.png')} />
            </Link>
            <h4 className="text-center py-3">Jercey</h4>
          </Card>
          <Card className="shad">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/phoenex.png')} />
            </Link>
            <h4 className="text-center py-3">Phoenex</h4>
          </Card>
        </OwlCarousel>
      </Container>
      <div style={{ marginTop: '4%' }}></div>
      <Container className="text-center">
        <div>
          <h2 className="text-bolder">Fuel your daydreams</h2>
        </div>
        <div>
          <p>
            Stoke your wonderlust with some dreamy photo chronicles of road trip
            adventure
          </p>
        </div>
        <div className=" mt-4 d-flex justify-content-center align-items-center">
          <button className="btn-style">Explore Travlogues</button>
        </div>
      </Container>
      <div style={{ marginTop: '4%' }}></div>
      <Container style={{ position: 'relative' }}>
        <img
          src={require('../assets/tesla.jpg')}
          width="90%"
          height="500px"
          alt="move washington"
        />
        <div className="text-light px-4 text-center feature">
          <h3 className="pt-4">Featured Travelogue</h3>
          <h1>An Olympic experience in Washington</h1>
          <p style={{ fontSize: '1.2rem' }}>
            Discover the epic waterfalls, moody weather, and lush forests of
            coastal Washinton
          </p>
          <Link to="#">Read more</Link>
        </div>
      </Container>
      <div style={{ marginTop: '4%' }}></div>
      <Container>
        <div className=" mb-4">
          <h3>Browse By Experience</h3>
        </div>
        <OwlCarousel
          className="owl-theme "
          loop
          margin={10}
          nav
          autoplay
          responsiveClass
          dots={false}
          items={2}
        >
          <Card className="shadow-lg">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/experience-petfriendly.jpg')} />
            </Link>
            <h4 className="text-center py-3">Pet-Friendly</h4>
          </Card>
          <Card className="shadow-lg">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/experience-deluxe.jpg')} />
            </Link>
            <h4 className="text-center py-3">Deluxe</h4>
          </Card>
          <Card className="shadow-lg">
            <Link to="#" className="px-4 pt-2">
              <Card.Img src={require('../assets/experience-electric.jpg')} />
            </Link>
            <h4 className="text-center py-3">Electric</h4>
          </Card>
        </OwlCarousel>
      </Container>
    </main>
  )
}

export default Home
