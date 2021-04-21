import { CircularProgress, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'

import { useFirebase } from 'react-redux-firebase'
import { contactAction } from '../database/Actions'
import Footer from './Footer'

function Contact() {
  const [userData, setuserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subject: '',
    contactSuccess: '',
    contactError: '',
  })

  const [openSnack, setopenSnack] = useState(false)
  const [handleLoad, setHandleLoad] = useState({
    loading: false,
    disableBtn: false,
  })
  const [openSnackError, setopenSnackError] = useState(false)

  const firebase = useFirebase()

  const handleSubmit = (e) => {
    e.preventDefault()

    setHandleLoad({ ...handleLoad, loading: true, disableBtn: true })
    contactAction(
      userData,
      firebase,

      setuserData,
      setopenSnack,
      setopenSnackError,
      handleLoad,
      setHandleLoad,
    )
  }

  return (
    <>
      <main>
        {/* breadcrumb-area */}
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
                        Contact Us
                      </li>
                      <li className="dots2"></li>
                    </ol>
                  </nav>
                  <h2>support</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area-end */}

        {/* support-area */}
        <div className="support-area support-bg pt-110 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="s-section-title text-center mb-60">
                  <h2>Get In Touch</h2>
                  <p>
                    Express delivery is an innovative service is effective
                    logistics solution for the delivery of small cargo. This
                    service is useful for companies various.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <Snackbar
                onClose={() => setopenSnack(false)}
                open={openSnack}
                message={userData.contactSuccess}
                className="text-light text-warning"
                autoHideDuration={5000}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
              ></Snackbar>
              <Snackbar
                onClose={() => setopenSnack(false)}
                open={openSnackError}
                message={userData.contactError}
                className="text-light text-warning"
                autoHideDuration={5000}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
              ></Snackbar>
              <div className="col-lg-10">
                <div className="support-form text-center">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="First Name *"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              firstName: e.target.value,
                            })
                          }
                          value={userData.firstName}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Last Name *"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              lastName: e.target.value,
                            })
                          }
                          value={userData.lastName}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          placeholder="Your E-mail *"
                          required
                          onChange={(e) =>
                            setuserData({ ...userData, email: e.target.value })
                          }
                          value={userData.email}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Subject"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              subject: e.target.value,
                            })
                          }
                          value={userData.subject}
                        />
                      </div>
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      required
                      onChange={(e) =>
                        setuserData({ ...userData, message: e.target.value })
                      }
                      value={userData.message}
                    ></textarea>
                    <button
                      className="btn red-btn"
                      disabled={handleLoad.disableBtn}
                    >
                      {handleLoad.loading && (
                        <CircularProgress
                          variant="indeterminate"
                          color="primary"
                          size={20}
                          style={{ marginRight: '5px' }}
                        />
                      )}
                      Submit Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* support-area-end */}

        {/* contact-area */}
        <section className="contact-area primary-bg pt-70 pb-15">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-contact-box mb-50">
                  <div className="contact-icon mb-30">
                    <img
                      src="https://themebeyond.com/html/startesk/startesk/img/icon/contact_box_icon01.png"
                      alt="contact"
                    />
                  </div>
                  <div className="contact-content">
                    <h5>Find Location</h5>
                    <span>99 Knickerbocker Ave, Bronk Center Brooklyn NY</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-contact-box mb-50">
                  <div className="contact-icon mb-30">
                    <img
                      src="https://themebeyond.com/html/startesk/startesk/img/icon/contact_box_icon02.png"
                      alt="contact"
                    />
                  </div>
                  <div className="contact-content">
                    <h5>Phone Number</h5>
                    <span>+1 212-226-3126</span>
                    <span>+5 692-766-3926</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-contact-box mb-50">
                  <div className="contact-icon mb-30">
                    <img
                      src="https://themebeyond.com/html/startesk/startesk/img/icon/contact_box_icon03.png"
                      alt="contact"
                    />
                  </div>
                  <div className="contact-content">
                    <h5>Email</h5>
                    <span>info@donnyExpress.info</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-contact-box mb-50">
                  <div className="contact-icon mb-30">
                    <img
                      src="https://themebeyond.com/html/startesk/startesk/img/icon/contact_box_icon04.png"
                      alt="contact"
                    />
                  </div>
                  <div className="contact-content">
                    <h5>Address</h5>
                    <span>99 Knickerbocker Ave, Bronk Center Brooklyn NY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row pt-100 mt-3">
          <div
            className="col-md-12 animated "
            data-animation="fadeInUpShorter"
            data-animation-delay="0.6s"
          >
            <div className="container">
              <div style={{ width: '100%' }}>
                <iframe
                  title="donnyEpress Location"
                  width="100%"
                  height="500"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=99%20Knickerbocker%20%20Brooklyn%20Newyork%20United%20States+(NonnyExpress)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact
