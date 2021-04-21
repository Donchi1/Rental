import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function About() {
  return (
    <>
      <main>
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="dots"></li>
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About Us
                      </li>
                      <li className="dots2"></li>
                    </ol>
                  </nav>
                  <h2>About Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="services-area delivery-bg pt-110 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="s-section-title text-center mb-60">
                  <h2>Cargo Delivery</h2>
                  <p>
                    Donny express provide you a stable, efficient, reliable and
                    fast cargo delivery round the world. We are the world best
                    in cargo delivery services. We render all the services of
                    delivery to make sure there is no limitation with our
                    company. We stand out as a giant in delivery and logistic
                    services. We also make collabrations with other companies to
                    scare-through their limitations.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-wrapper">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-services mb-30">
                    <div className="services-thumb">
                      <Link to="#">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/images/services_img01.jpg"
                          alt="about"
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <div className="services-icon">
                        <i className="fa fa-bus"></i>
                      </div>
                      <h3>
                        <a href="/tracking">More Control, for Free</a>
                      </h3>
                      <span>Delivery Service</span>
                      <p>
                        DonnyExpress is an innovative service is effective
                        logistics solution for delivery of small cargo service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-services mb-30">
                    <div className="services-thumb">
                      <Link to="#">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/images/services_img02.jpg"
                          alt="about"
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <div className="services-icon">
                        <i className="fa fa-ship"></i>
                      </div>
                      <h3>
                        <Link to="#">Expand with E-Commerce</Link>
                      </h3>
                      <span>Delivery Service</span>
                      <p>
                        We render a stable, fast and reliable service to all
                        E-Commerce companies round the world
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-services mb-30">
                    <div className="services-thumb">
                      <Link to="#">
                        <img
                          src="https://themebeyond.com/html/startesk/startesk/img/images/services_img03.jpg"
                          alt="services"
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <div className="services-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <h3>
                        <Link to="#">Anywhere Shipping</Link>
                      </h3>
                      <span>Delivery Service</span>
                      <p>
                        We make sure your goods or products are delivered to you
                        in any part of the world.
                      </p>
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
                      alt="service"
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
                      We provide an international service round the whole world.
                      We make sure your goods are sent to your specified
                      location. We make sure your goods are delivered at a fast
                      and cheap rate.
                    </p>
                    <a href="/flightservice" className="btn red-btn">
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
              transform: 'translateX(321px)',
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
                    <span>Our Challenges</span>
                    <h2>
                      <span>never</span> break our promise
                    </h2>
                    <a href="/flightservices">
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
                        alt="services"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-area faq-bg pt-110 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="s-section-title text-center mb-60">
                  <h2>frequently asked questions</h2>
                  <p>
                    DonnyExpress provide all the possible delivery services you
                    may want. We provide you that stable and effective services.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-wrapper">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div
                    className="nav flex-column nav-pills faq-tab-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="faq-tab-icon">
                        <i className="far fa-bell"></i>
                      </div>
                      <div className="faq-tab-content d-none d-lg-block">
                        <h5>Anywhere Shipping</h5>
                        <p>
                          Express delivery is an innovative service effective
                          logistics.
                        </p>
                      </div>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <div className="faq-tab-icon">
                        <i className="fas fa-award"></i>
                      </div>
                      <div className="faq-tab-content d-none d-lg-block">
                        <h5>DonnyExpress Logistics Provides</h5>
                        <p>We provide all you may want with cargo delivery.</p>
                      </div>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <div className="faq-tab-icon">
                        <i className="fas fa-bullseye"></i>
                      </div>
                      <div className="faq-tab-content d-none d-lg-block">
                        <h5>World Cargo Freight</h5>
                        <p>
                          We provide a stable and reliable cargo and freight
                          services round the world.
                        </p>
                      </div>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <div className="faq-tab-icon">
                        <i className="fas fa-cog"></i>
                      </div>
                      <div className="faq-tab-content d-none d-lg-block">
                        <h5>Shipping Lines</h5>
                        <p>
                          We render you the shipping service you may desire. We
                          accept not only packages but heavy equipment via our
                          shipping service.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="faq-accordion">
                        <div className="faq-tab-icon">
                          <i className="far fa-bell"></i>
                        </div>
                        <div className="faq-accordion-content fix">
                          <div className="faq-tab-content mb-30">
                            <h5>Anywhere Shipping</h5>
                            <p>
                              We ship your goods and products to anywhere round
                              the world.
                            </p>
                          </div>
                          <div className="accordion" id="accordionExample">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    Which country can my goods be shipped?
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>
                                    We provide you a shipping to all accesible
                                    parts of the world.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    How long can it take for a my delivery?
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse show"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>
                                    We make sure your goods can get to you at a
                                    giving time prior to our delivery service.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    Do i have to pay?
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>
                                    You have to make your payment for your
                                    products to be delivered to your location.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingFour">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                  >
                                    What type of payments is accepted?
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseFour"
                                className="collapse"
                                aria-labelledby="headingFour"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>
                                    We accept both credit and debit card
                                    payment, paypal, direct bank deposit and
                                    bitcoin crypto payments.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingFive">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                  >
                                    Can i recieve my package at my door step?
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseFive"
                                className="collapse"
                                aria-labelledby="headingFive"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>
                                    We provide a door to door service via our
                                    delivery boy to any accessible location.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingSix">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                  >
                                    How can i know my package?
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseSix"
                                className="collapse"
                                aria-labelledby="headingSix"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>
                                    You can know and even track track your
                                    package or goods on our platform with your
                                    product id.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="brand-area pt-85 pb-85">
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
                        alt="srvices"
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
                        alt="services"
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
                        alt="services"
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
                        alt="services"
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
                        alt="services"
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
                        alt="services"
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
                        alt="services"
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
                        alt="services"
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
                        alt="services"
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
                        alt="services "
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
                        alt="services"
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
                        alt="services"
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
                        alt="services"
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
    </>
  )
}

export default About
