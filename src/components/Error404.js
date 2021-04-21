import React from 'react'
import Footer from './Footer'

function Error404() {
  return <>
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
                    <li className="breadcrumb-item active" aria-current="page">
                      Error 404
                    </li>
                    <li className="dots2"></li>
                  </ol>
                </nav>
                <h2>Page Error 404</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
   <section
          className=" d-flex justify-content-center align-items-center "
          style={{ height: '100vh' }}
        >
          <div className="row ">
            <div
              className="col-md-12 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <div className="section-heading text-center">
                <h1
                  className="title text-danger"
                  style={{ fontSize: '6rem', fontFamily: 'fantasy' }}
                >
                  404
                </h1>
                <p className="sub-title">Ooops! 404 - Page Not Found</p>
              </div>
            </div>
            <div
              className="col-md-12 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <div className="section-heading text-center">
                <a
                  href="/"
                  className="btn btn-round red-btn text-light"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
  </>
}

export default Error404
