import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function FlightService() {
  return (
    <>
      <main>
        <div className="breadcrumb-area breadcrumb-bg s-breadcrumb-bg">
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
                        Air Freight
                      </li>
                      <li className="dots2"></li>
                    </ol>
                  </nav>
                  <h2>Air Freight</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-details-area pt-120 pb-115">
          <div className="container">
            <div className="services-details-wrap">
              <div className="row">
                <div className="col-lg-4 order-2 order-lg-0">
                  <aside className="services-sidebar">
                    <div className="services-widget mb-40">
                      <div className="service-widget-title">
                        <h3>Service Category</h3>
                      </div>
                      <div className="service-cat-list">
                        <ul>
                          <li>
                            <Link to="#">All Service</Link>
                          </li>
                          <li className="active">
                            <a href="/airservice">Air Freight</a>
                          </li>
                          <li>
                            <a href="/warehouseservice">Cargo Warehouse</a>
                          </li>
                          <li>
                            <a href="/railservice">Railway Freight</a>
                          </li>
                          <li>
                            <a href="/doortodoorservice">
                              Door To Door Service
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="services-widget mb-40">
                      <div className="service-doc-list">
                        <ul>
                          <li>
                            <Link to="#">
                              DonnyExpress Company Listing{' '}
                              <i className="fas fa-file-pdf"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="services-widget mb-40">
                      <div className="service-sidebar-support">
                        <h3>Need Support?</h3>
                        <p>
                          Express delivery is an innovative service is effective
                          logies
                        </p>
                        <a href="/contact" className="btn">
                          contact Us
                        </a>
                      </div>
                    </div>
                    <div className="services-widget">
                      <div className="service-widget-title dark-bg">
                        <h3>Tags Post</h3>
                      </div>
                      <div className="service-tag-list">
                        <ul>
                          <li>
                            <Link to="#">Business</Link>
                          </li>
                          <li>
                            <Link to="#">Transport</Link>
                          </li>
                          <li>
                            <Link to="#">Logisticsatv</Link>
                          </li>
                          <li>
                            <Link to="#">Transportations</Link>
                          </li>
                          <li>
                            <Link to="#">Who</Link>
                          </li>
                          <li>
                            <Link to="#">Creative</Link>
                          </li>
                          <li>
                            <Link to="#">Cargos</Link>
                          </li>
                          <li>
                            <Link to="#">Delivery</Link>
                          </li>
                          <li>
                            <Link to="#">Warehouse</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-8">
                  <div className="services-details-content">
                    <h4>How It Works?</h4>
                    <p>
                      Express delivery is an innovative service is effective
                      logistics solution for the delivery of small cargo. This
                      service is useful for companies of various effective
                      logistics scale.transport logistic is the world´s biggest
                      trade show for logistics, mobility, IT and supply chain
                      management. It takes place every two years in early May,
                      at the Messe München exhibition center in Munich
                    </p>
                    <p>
                      Logistics solution for the delivery of small cargo. This
                      service is useful for companie various effective logistics
                      scale.transport logistic is the world´s biggest trade show
                      for logistics, mobility, IT and supply chain management.
                      It takes place every two years.
                    </p>
                    <div className="services-details-img">
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/images/services_details_img.jpg"
                        alt="services"
                      />
                    </div>
                    <h4>Was Our Solution Best?</h4>
                    <p>
                      We make sure your goods or products are delivered to your
                      country of choice by air. We provide fast, stable, fast
                      and reliable air cargo services.
                    </p>
                    <div className="services-details-list">
                      <ul>
                        <li>
                          <i className="fas fa-arrow-alt-circle-right"></i>
                          Express delivery is an innovative service
                        </li>
                        <li>
                          <i className="fas fa-arrow-alt-circle-right"></i>
                          Logistics scale transport innovative
                        </li>
                        <li>
                          <i className="fas fa-arrow-alt-circle-right"></i>Help
                          transportation and logistics companies
                        </li>
                      </ul>
                    </div>
                    <p>
                      DonnyExpress is the solution for the delivery of small and
                      big cargo. This service is useful for companies various
                      effective logistics scale.Transport logistic is the
                      world´s biggest trade show for logistics.
                    </p>
                    <blockquote className="services-blockquote">
                      Express delivery is an innovative service is an effective
                      logistics solution for the rendering effective cargo
                      services useful for companies.
                      <footer className="services-blockquote-footer">
                        Jonso Watson
                      </footer>
                    </blockquote>
                    <h4>Is Our Solution the Best?</h4>
                    <p>
                      We stand out to bring stable and effecctive services for
                      companies and individuals round the world. We provide the
                      best, fast and reliable cargo service.
                    </p>
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

export default FlightService
