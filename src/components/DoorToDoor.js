import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function DoorToDoor() {
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
                        Door To Door Service
                      </li>
                      <li className="dots2"></li>
                    </ol>
                  </nav>
                  <h2>Door To Door Service</h2>
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
                          <li>
                            <a href="/airservice">Air Freight</a>
                          </li>
                          <li>
                            <a href="/warehouseservice">Cargo Warehouse</a>
                          </li>
                          <li>
                            <a href="/railservice">Railway Freight</a>
                          </li>
                          <li className="active">
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
                      logistics scale.Transport logistic is the world´s biggest
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
                        src="https://themebeyond.com/html/startesk/startesk/img/images/services_details_img04.jpg"
                        alt="service"
                      />
                    </div>
                    <h4>Was Our Solution Best?</h4>
                    <p>
                      We provide you a land efficient service. We sent your
                      product via our delivery boy to your door post at a cheap
                      rate.
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
                      We provide that stable and fast home delivery or door to
                      door service.
                    </p>
                    <blockquote className="services-blockquote">
                      DonnyExpress provide a solution for product delivery to
                      your door step round the world.
                      <footer className="services-blockquote-footer">
                        Jonso Watson
                      </footer>
                    </blockquote>
                    <h4>Was Our Solution Best?</h4>
                    <p>
                      DonnyExpress provide you the with door to door service
                      from our warehouse to your door step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services-details-end */}
      </main>
      <Footer />
    </>
  )
}

export default DoorToDoor
