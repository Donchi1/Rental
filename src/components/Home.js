import { CircularProgress, makeStyles, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { quoteAction } from '../database/Actions'
import Footer from './Footer'

function Home() {
  const firebase = useFirebase()

  const useStyles = makeStyles((theme) => ({
    content: {
      backgroundColor: 'red',
    },
    error: {
      backgroundColor: theme.palette.success.main,
    },
  }))

  const classes = useStyles()

  const [quote, setQuote] = useState({
    countryTo: '',
    countryFrom: '',
    service: '',
    extraService: '',
    weight: '',
    height: '',
    length: '',
    email: '',
    loading: false,
    disableBtn: false,
    message: '',
  })

  const [openSnack, setopenSnack] = useState(false)
  const [openSnackError, setOpenSnackError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    quoteAction(firebase, quote, setopenSnack, setOpenSnackError, setQuote)

    setQuote({ ...quote, loading: true, disableBtn: true })
  }

  return (
    <div data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="0">
      <main>
        <section className="slider-style-three">
          <div className="slider-active">
            <div
              className="single-slider t-slider-area"
              style={{
                backgroundImage:
                  'url(https://themebeyond.com/html/startesk/startesk/img/slider/slider_bg03.jpg)',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="s-slider-content t-slider-content text-center">
                      <h6 data-animation="fadeInUp" data-delay=".2s">
                        <span className="dots"></span>logistics cargo service
                        <span className="dots2"></span>
                      </h6>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        Delivery Express
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Your express unlimited, secured, cheap and reliable
                        service to your door post.
                      </p>
                      <a
                        href="about"
                        className="btn red-btn"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider t-slider-area"
              style={{
                backgroundImage:
                  'url(https://themebeyond.com/html/startesk/startesk/img/slider/slider_bg04.jpg)',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="s-slider-content t-slider-content text-center">
                      <h6 data-animation="fadeInUp" data-delay=".2s">
                        <span className="dots"></span>logistics cargo service
                        <span className="dots2"></span>
                      </h6>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        fast services
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        We render a fast and reliable service to our client
                        round the whole world.
                      </p>
                      <a
                        href="/about"
                        className="btn red-btn"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider t-slider-area"
              style={{
                backgroundImage:
                  'url(https://themebeyond.com/html/startesk/startesk/img/slider/slider_bg05.jpg)',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="s-slider-content t-slider-content text-center">
                      <h6 data-animation="fadeInUp" data-delay=".2s">
                        <span className="dots"></span>logistics cargo service
                        <span className="dots2"></span>
                      </h6>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        start shipping
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Fast and easy shipping service to your door step round
                        the whole world.
                      </p>
                      <a
                        href="/about"
                        className="btn red-btn"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="t-category-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="s-single-cat t-single-cat">
                  <div className="s-cat-icon">
                    <i className="fa fa-ship"></i>
                  </div>
                  <div className="s-cat-content">
                    <h5>
                      <Link to="/">Sea Freight</Link>
                    </h5>
                    <p>
                      We give you an express, fast and reliable shipping
                      services{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="s-single-cat t-single-cat">
                  <div className="s-cat-icon">
                    <i className="fas fa-plane"></i>
                  </div>
                  <div className="s-cat-content">
                    <h5>
                      <Link to="/">Air Freight</Link>
                    </h5>
                    <p>
                      We give you an express, fast and reliable air shipping
                      services{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="s-single-cat t-single-cat">
                  <div className="s-cat-icon">
                    <i className="fa fa-industry"></i>
                  </div>
                  <div className="s-cat-content">
                    <h5>
                      <Link to="/">Capability</Link>
                    </h5>
                    <p>
                      We are fast, reliable and ever ready to deliver to our
                      clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="s-single-cat t-single-cat">
                  <div className="s-cat-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className="s-cat-content">
                    <h5>
                      <Link to="/">Forwarding</Link>
                    </h5>
                    <p>
                      We forword your package or good to any location of choice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-area delivery-bg pt-110 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="s-section-title text-center mb-60">
                  <h2>how we help you</h2>
                  <p>
                    DonnyExpress is an innovative service is effective logistics
                    solution for the delivery of all kinds of cargo. This
                    service is useful for companies of various kind..
                  </p>
                </div>
              </div>
            </div>
            <div className="services-wrapper">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="s-single-services mb-50">
                    <div className="services-thumb mb-25">
                      <Link to="#">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/images/s_services_img01.jpg"
                          alt="imgship"
                        />
                      </Link>
                    </div>
                    <div className="s-services-content">
                      <h6>Delivery Service</h6>
                      <h3>
                        <Link to="#">Anywhere Shipping</Link>
                      </h3>
                      <p>
                        We ship your product, goods or packages to various parts
                        of the world.
                      </p>
                      <a href="/contact" className="btn red-btn">
                        LET US HELP
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="s-single-services mb-50">
                    <div className="services-thumb mb-25">
                      <Link to="#">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/images/s_services_img02.jpg"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="s-services-content">
                      <h6>Inspiration Service</h6>
                      <h3>
                        <Link to="#">Get Insights Inspiration</Link>
                      </h3>
                      <p>Our services are fast effective and reliable.</p>
                      <a href="/contact" className="btn red-btn">
                        LET US HELP
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="s-single-services mb-50">
                    <div className="services-thumb mb-25">
                      <Link to="#">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/images/s_services_img03.jpg"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="s-services-content">
                      <h6>Discover Locations</h6>
                      <h3>
                        <Link to="#">Your Freight Deadlines</Link>
                      </h3>
                      <p>
                        We keep our clients updated on the actual location of
                        your goods or packages.
                      </p>
                      <a href="/contact" className="btn red-btn">
                        LET US HELP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="international-services position-relative pb-120 fix">
          <div className="container">
            <div className="services-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
                  <div className="int-services-img text-center text-lg-right">
                    <img
                      src="https://themebeyond.com/html/startesk/startesk/img/images/int_cargo_img.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="s-section-title mb-30">
                    <h2>International Cargo</h2>
                    <h6>Express delivery is an innovative service</h6>
                  </div>
                  <div className="int-services-content">
                    <p>
                      DonnyExpress renders an unlimited service round the whole
                      world. We are able to bring your package to your door post
                      at a giving time.
                    </p>
                    <a href="/about" className="btn red-btn">
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overlay-title paroller"
            data-paroller-factor="0.15"
            data-paroller-factor-lg="0.15"
            data-paroller-factor-md="0.15"
            data-paroller-factor-sm="0.15"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
            style={{
              transform: 'translateX(750px)',
              transition: 'transform 0s linear 0s',
              willChange: 'transform',
            }}
          >
            Cargo
          </div>
        </section>

        <section className="video-area video-bg">
          <div className="container">
            <div className="video-overlay s-video-overlay">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-8 order-2 order-lg-0">
                  <div className="video-title">
                    <span>Our Chalanges</span>
                    <h2>
                      <span>never</span> break our promise
                    </h2>
                    <a href="/flightservice">
                      more services<span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="video-play">
                    <a
                      href="https://www.youtube.com/watch?v=iWKu6WNFf9M"
                      className="popup-video"
                    >
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/icon/play_btn.png"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="choose-area pt-110 pb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="s-section-title text-center mb-60">
                  <h2>Why should you choose us?</h2>
                  <p>
                    DonnyExpress is a unique logistic company for your cargo
                    delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-wrapper">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-choose mb-40">
                    <div className="choose-head">
                      <div className="choose-icon mb-25">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/icon/choose_img01.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        <Link to="#">
                          Express delivery innovative cargo service
                        </Link>
                      </h3>
                    </div>
                    <div className="choose-content">
                      <p>
                        We render you all kinds of crgo delivery services round
                        the whole world.
                      </p>
                      <a href="/flightservice">
                        <i className="fas fa-arrow-alt-circle-right"></i> Read
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-choose mb-40">
                    <div className="choose-head">
                      <div className="choose-icon mb-25">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/icon/choose_img02.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        <Link to="#">Logistics scale transport innovative</Link>
                      </h3>
                    </div>
                    <div className="choose-content">
                      <p>
                        We scale the transportation of products making sure it
                        gets to the actual location at a giving time.
                      </p>
                      <a href="/doortodoorservice">
                        <i className="fas fa-arrow-alt-circle-right"></i> Read
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-choose mb-40">
                    <div className="choose-head">
                      <div className="choose-icon mb-25">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/icon/choose_img03.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        <Link to="#">
                          Help transportation and logistics companies
                        </Link>
                      </h3>
                    </div>
                    <div className="choose-content">
                      <p>
                        We help help other logistic companies for the delivery
                        of there products where they are limited.
                      </p>
                      <a href="/about">
                        <i className="fas fa-arrow-alt-circle-right"></i> Read
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-choose mb-40">
                    <div className="choose-head">
                      <div className="choose-icon mb-25">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/icon/choose_img04.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        <Link to="#">Supply chain management</Link>
                      </h3>
                    </div>
                    <div className="choose-content">
                      <p>
                        We keep are our limites and rules to making sure our
                        supply chain is reached and our clients are satisfied.
                      </p>
                      <a href="/about">
                        <i className="fas fa-arrow-alt-circle-right"></i> Read
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-choose mb-40">
                    <div className="choose-head">
                      <div className="choose-icon mb-25">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/icon/choose_img05.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        <Link to="#">
                          World´s biggest trade show for logistics
                        </Link>
                      </h3>
                    </div>
                    <div className="choose-content">
                      <p>
                        Express delivery inno service effective logistics
                        solutio for delivery of small cargo delivery service.
                      </p>
                      <a href="/about">
                        <i className="fas fa-arrow-alt-circle-right"></i> Read
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-choose mb-40">
                    <div className="choose-head">
                      <div className="choose-icon mb-25">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/icon/choose_img06.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        <Link to="#">Fast and Reliable</Link>
                      </h3>
                    </div>
                    <div className="choose-content">
                      <p>
                        We render a fast and reliable services to our clients
                        round the whole world.
                      </p>
                      <a href="/about">
                        <i className="fas fa-arrow-alt-circle-right"></i> Read
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="area-wrapper black-bg position-relative pt-115 pb-120">
          <div className="area-wrap-bg"></div>
          <div className="testimonial-map-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="testimonial-area">
                  <div className="section-title white-title mb-55">
                    <h6>Happy Customer Quotes</h6>
                    <h2>Our Top Reviews</h2>
                  </div>
                  <div className="testimonial-active slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{ opacity: 1, width: '660px' }}
                      >
                        <div
                          className="single-testimonial slick-slide slick-current slick-active"
                          style={{
                            width: '330px',
                            position: 'relative',
                            left: '0px',
                            top: '0px',
                            zIndex: 999,
                            opacity: '1',
                          }}
                          data-slick-index="0"
                          aria-hidden="false"
                          tabIndex="0"
                        >
                          <div className="testimonial-cat mb-30">
                            <h5>Shipping Cargo</h5>
                            <div className="testimonial-rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <div className="testimonial-content mb-45">
                            <p>
                              “ We make sure your products are shipped to your
                              location at a particular given time. ”
                            </p>
                          </div>
                          <div className="testimonial-avatar">
                            <div className="testi-avatar-img">
                              <img
                                src="https://themebeyond.com/html/startesk/startesk/img/images/testi_avatar01.png"
                                alt="img"
                              />
                            </div>
                            <div className="testi-avatar-info">
                              <h6>Tonoy Alexander</h6>
                              <span>Founder Cargo</span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="single-testimonial slick-slide"
                          style={{
                            width: '330px',
                            position: 'relative',
                            left: '-330px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                          }}
                          data-slick-index="1"
                          aria-hidden="true"
                          tabIndex="-1"
                        >
                          <div className="testimonial-cat mb-30">
                            <h5>Air Freight</h5>
                            <div className="testimonial-rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <div className="testimonial-content mb-45">
                            <p>
                              “ Our air service is the fastest of all, your
                              goods or packages can be delivered within few days
                              ”
                            </p>
                          </div>
                          <div className="testimonial-avatar">
                            <div className="testi-avatar-img">
                              <img
                                src="https://themebeyond.com/html/startesk/startesk/img/images/testi_avatar02.png"
                                alt="img"
                              />
                            </div>
                            <div className="testi-avatar-info">
                              <h6>Lanu Dexander</h6>
                              <span>Founder Cargo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <Snackbar
                  onClose={() => setopenSnack(false)}
                  open={openSnack}
                  message={quote.message}
                  ContentProps={{ className: classes.content }}
                  autoHideDuration={5000}
                  anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'bottom',
                  }}
                ></Snackbar>
                <Snackbar
                  onClose={() => setOpenSnackError(false)}
                  open={openSnackError}
                  message={quote.message}
                  ContentProps={{ className: classes.error }}
                  autoHideDuration={5000}
                  anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'bottom',
                  }}
                ></Snackbar>
                <div className="cta-area cta-pl">
                  <div className="section-title white-title mb-60">
                    <h6>Clients Trust Us</h6>
                    <h2>Cargo Request Quote</h2>
                  </div>
                  <div className="cta-from">
                    <form onSubmit={handleSubmit}>
                      <div className="cta-form-col d-flex justify-content-between">
                        <select
                          className="custom-select"
                          value={quote.service}
                          onChange={(e) =>
                            setQuote({ ...quote, service: e.target.value })
                          }
                        >
                          <option defaultValue="selected service">
                            Select Service
                          </option>
                          <option value="air service">Air Freight</option>
                          <option value="ship service">Shipping Cargo</option>
                          <option value="rail service">Rail Cargo</option>
                          <option value="warehouse service">Warehousing</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Length cm"
                          value={quote.length}
                          onChange={(e) =>
                            setQuote({ ...quote, length: e.target.value })
                          }
                        />
                        <input
                          type="text"
                          placeholder="Hight cm"
                          value={quote.height}
                          onChange={(e) =>
                            setQuote({ ...quote, height: e.target.value })
                          }
                        />
                      </div>
                      <div className="cta-form-col d-flex justify-content-between">
                        <select
                          className="custom-select"
                          value={quote.countryFrom}
                          onChange={(e) =>
                            setQuote({ ...quote, countryFrom: e.target.value })
                          }
                        >
                          <option>From Country</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                        </select>
                        <select
                          className="custom-select"
                          onChange={(e) => {
                            setQuote({ ...quote, countryTo: e.target.value })
                          }}
                        >
                          <option selected="">To Country</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran, Islamic Republic of">
                            Iran, Islamic Republic of
                          </option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Korea, Republic of">
                            Korea, Republic of
                          </option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                        </select>
                      </div>
                      <div className="cta-form-col d-flex justify-content-between">
                        <select
                          className="custom-select"
                          value={quote.weight}
                          onChange={(e) =>
                            setQuote({ ...quote, weight: e.target.value })
                          }
                        >
                          <option>Weight kg</option>
                          <option value="100kg">100Kg</option>
                          <option value="200kg">200Kg</option>
                          <option value="300kg">300Kg</option>
                          <option value="400kg">400Kg</option>
                          <option value="500kg">500Kg</option>
                          <option value="600kg">600Kg</option>
                          <option value="700kg">700Kg</option>
                        </select>
                        <input
                          className="cta-email"
                          type="email"
                          placeholder="Email ID"
                          onChange={(e) =>
                            setQuote({ ...quote, email: e.target.value })
                          }
                          value={quote.email}
                        />
                      </div>
                      <h4 className="extra-services">
                        <i className="fas fa-binoculars"></i>Extra Service
                      </h4>
                      <ul>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                              checked={quote.extraService === 'air service'}
                              onChange={(e) =>
                                setQuote({
                                  ...quote,
                                  extraService: 'air service',
                                })
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              Air Freight
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck2"
                              checked={quote.extraService === 'shipping Cargo'}
                              onChange={(e) =>
                                setQuote({
                                  ...quote,
                                  extraService: 'shipping Cargo',
                                })
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              Shipping Cargo
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck3"
                              checked={quote.extraService === 'rail service'}
                              onChange={(e) =>
                                setQuote({
                                  ...quote,
                                  extraService: 'rail service',
                                })
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck3"
                            >
                              Rail Cargo
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck4"
                              checked={quote.extraService === 'warehousing'}
                              onChange={(e) =>
                                setQuote({
                                  ...quote,
                                  extraService: 'warehousing',
                                })
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck4"
                            >
                              Warehousing
                            </label>
                          </div>
                        </li>
                      </ul>
                      <button type="submit" className="btn btn-red">
                        {quote.loading && (
                          <CircularProgress
                            variant="indeterminate"
                            color="primary"
                            size={20}
                            style={{ marginRight: '5px' }}
                          />
                        )}
                        Get Quote
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rating-area pt-110 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="s-section-title text-center mb-80">
                  <h2>What customers are thinking?</h2>
                </div>
              </div>
            </div>
            <div className="rating-wrap">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-customer-rating mb-70">
                    <div className="customer-rating-top">
                      <div className="customer-thumb">
                        <Link to="#">
                          <img
                            src="https://themebeyond.com/html/startesk/startesk/img/images/rating_logo.jpg"
                            alt="img"
                          />
                        </Link>
                        <div className="rating-info">
                          <h6>Overall Rating</h6>
                          <div className="raising-star mb-15">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <h3>3.5</h3>
                        </div>
                        <span>based on 3458 ratings</span>
                      </div>
                    </div>
                    <div className="rating-list">
                      <ul>
                        <li>
                          On Time Delivery
                          <span>3.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                        <li>
                          Delivery experience
                          <span>4.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-customer-rating mb-70">
                    <div className="customer-rating-top">
                      <div className="customer-thumb">
                        <Link to="#">
                          <img
                            src="https://themebeyond.com/html/startesk/starteskimg/images/rating_logo03.jpg"
                            alt="img"
                          />
                        </Link>
                        <div className="rating-info">
                          <h6>Overall Rating</h6>
                          <div className="raising-star mb-15">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <h3>3.5</h3>
                        </div>
                        <span>based on 3458 ratings</span>
                      </div>
                    </div>
                    <div className="rating-list">
                      <ul>
                        <li>
                          On Time Delivery
                          <span>3.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                        <li>
                          Delivery experience
                          <span>4.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-customer-rating mb-70">
                    <div className="customer-rating-top">
                      <div className="customer-thumb">
                        <Link to="#">
                          <img
                            src="https://themebeyond.com/html/startesk/starteskimg/images/rating_logo02.jpg"
                            alt="img"
                          />
                        </Link>
                        <div className="rating-info">
                          <h6>Overall Rating</h6>
                          <div className="raising-star mb-15">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <h3>3.5</h3>
                        </div>
                        <span>based on 3458 ratings</span>
                      </div>
                    </div>
                    <div className="rating-list">
                      <ul>
                        <li>
                          On Time Delivery
                          <span>3.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                        <li>
                          Delivery experience
                          <span>4.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-customer-rating mb-70">
                    <div className="customer-rating-top">
                      <div className="customer-thumb">
                        <Link to="#">
                          <img
                            src="https://themebeyond.com/html/startesk/startesk/img/images/rating_logo04.jpg"
                            alt="img"
                          />
                        </Link>
                        <div className="rating-info">
                          <h6>Overall Rating</h6>
                          <div className="raising-star mb-15">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <h3>3.5</h3>
                        </div>
                        <span>based on 3458 ratings</span>
                      </div>
                    </div>
                    <div className="rating-list">
                      <ul>
                        <li>
                          On Time Delivery
                          <span>3.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                        <li>
                          Delivery experience
                          <span>4.5</span>
                          <div className="raising-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="brand-area gray-bg pt-85 pb-85">
          <div className="container">
            <div className="row brand-active slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: '4680px',
                    transform: 'translate3d(-360px, 0px, 0px)',
                  }}
                >
                  <div
                    className="col-12 slick-slide slick-cloned"
                    style={{ width: '360px' }}
                    data-slick-index="-1"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo03.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide slick-current slick-active"
                    style={{ width: '360px' }}
                    data-slick-index="0"
                    aria-hidden="false"
                    tabIndex="0"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo01.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide"
                    style={{ width: '360px' }}
                    data-slick-index="1"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo02.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide"
                    style={{ width: '360px' }}
                    data-slick-index="2"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo03.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide"
                    style={{ width: '360px' }}
                    data-slick-index="3"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo04.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide"
                    style={{ width: '360px' }}
                    data-slick-index="4"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo05.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide"
                    style={{ width: '360px' }}
                    data-slick-index="5"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo03.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide slick-cloned"
                    style={{ width: '360px' }}
                    data-slick-index="6"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo01.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide slick-cloned"
                    style={{ width: '360px' }}
                    data-slick-index="7"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo02.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide slick-cloned"
                    style={{ width: '360px' }}
                    data-slick-index="8"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo03.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide slick-cloned"
                    style={{ width: '360px' }}
                    data-slick-index="9"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo04.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide slick-cloned"
                    style={{ width: '360px' }}
                    data-slick-index="10"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo05.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 slick-slide slick-cloned"
                    style={{ width: '360px' }}
                    data-slick-index="11"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="signle-brand">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/brand/brnad_logo03.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
