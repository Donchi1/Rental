import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { newsLetterAction } from '../database/Actions'
import { CircularProgress, Snackbar } from '@material-ui/core'

function Footer() {
  const [input, setInput] = useState({
    email: '',
    loading: false,
    disableBtn: false,
    subscribeSuccess: '',
  })
  const firebase = useFirebase()

  const [openSnack, setopenSnack] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.email === '') return
    setInput({ ...input, loading: true, disableBtn: true })
    newsLetterAction(input, firebase, setInput, setopenSnack)
  }

  return (
    <>
      <section className="newsletter-area gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-wrap">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="newsletter-content">
                      <h4>Newsletter Sign Up</h4>
                      <span>Notifications our best deals...</span>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="newsletter-form">
                      <Snackbar
                        onClose={() => setopenSnack(false)}
                        open={openSnack}
                        message={input.subscribeSuccess}
                        className="text-light text-warning"
                        autoHideDuration={5000}
                        anchorOrigin={{
                          horizontal: 'center',
                          vertical: 'bottom',
                        }}
                      ></Snackbar>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          placeholder="Enter your email..."
                          value={input.email}
                          required
                          onChange={(e) => {
                            setInput({ ...input, email: e.target.value })
                          }}
                        />
                        <button className="btn" type="submit">
                          {input.loading && (
                            <CircularProgress
                              variant="indeterminate"
                              color="primary"
                              size={20}
                              style={{ marginRight: '5px' }}
                            />
                          )}
                          subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div
          className="footer-wrap pt-190 pb-40"
          data-background="https://themebeyond.com/html/startesk/startesk/img/bg/footer_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="footer-logo mb-35">
                    <a href="/">
                      <h2 className="text-uppercase">DonnyExpress</h2>
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Get intouch with us for your standard logistic services.
                    </p>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-30">
                    <h5>RECENT POSTS</h5>
                  </div>
                  <div className="f-rc-post">
                    <ul>
                      <li>
                        <div className="f-rc-thumb">
                          <Link to="#">
                            <img
                              src="https://themebeyond.com/html/startesk/startesk/img/blog/f_rc_img01.jpg"
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="f-rc-content">
                          <span>19 Jun, 2019</span>
                          <h5>
                            <Link to="#">standard Asian service </Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="f-rc-thumb">
                          <Link to="#">
                            <img
                              src="https://themebeyond.com/html/startesk/startesk/img/blog/f_rc_img02.jpg"
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="f-rc-content">
                          <span>19 Jun, 2019</span>
                          <h5>
                            <Link to="#">Cargo establishment and work</Link>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-30">
                    <h5>USEFUL LINKS</h5>
                  </div>
                  <div className="fw-link">
                    <ul>
                      <li>
                        <a href="/">
                          <i className="fas fa-caret-right"></i>Home
                        </a>
                      </li>
                      <li>
                        <a href="/about">
                          <i className="fas fa-caret-right"></i> About us
                        </a>
                      </li>
                      <li>
                        <a href="/tracking">
                          <i className="fas fa-caret-right"></i> Tracking
                        </a>
                      </li>
                      <li>
                        <a href="/flightservices">
                          <i className="fas fa-caret-right"></i>Services
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="fas fa-caret-right"></i> Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="copyright-text">
                  <p>
                    Copyright© <span>DonnyExpress</span> | All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="f-payment-method text-center text-md-right">
                  <img
                    src="https://themebeyond.com/html/startesk/startesk/img/images/card_img.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
