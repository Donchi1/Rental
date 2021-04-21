import { makeStyles, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

function Tracking() {
  const useStyles = makeStyles((theme) => ({
    content: {
      backgroundColor: 'red',
    },
  }))

  const classes = useStyles()

  const trackingData = useSelector((state) => state.firestore.ordered.packages)

  const [trackerId, setTrackerId] = useState('')
  const [mypackage, setMyPackage] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [openTrack, setOpenTrack] = useState(true)

  const [errorPackage, setErrorPackage] = useState({
    openSnack: false,
    message:
      ' Error no package Found check your id or contact our support team',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trackerId === '') return
    const filteredData = trackingData.filter((each) => each.id === trackerId)

    if (filteredData.length !== 0) {
      setMyPackage(filteredData)
      setTrackerId('')
      setOpenDialog(true)
      setOpenTrack(false)
    } else {
      setErrorPackage({ ...errorPackage, openSnack: true })
      setTrackerId('')
    }
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
                        Tracking
                      </li>
                      <li className="dots2"></li>
                    </ol>
                  </nav>
                  <h2>Tracking Here</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area-end */}

        {/* category-area */}
        <section className="category-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="category-list s-category-list">
                  <ul>
                    <li>
                      <Link to="#">
                        <div className="category-icon">
                          <i className="fa fa-ship"></i>
                        </div>
                        <h5>Sea Freight</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="category-icon">
                          <i className="fa fa-plane"></i>
                        </div>
                        <h5>Air Freight</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="category-icon">
                          <i className="fas fa-boxes"></i>
                        </div>
                        <h5>Insurance</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="category-icon">
                          <i className="fas fa-warehouse"></i>
                        </div>
                        <h5>Warehousing</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="category-icon">
                          <i className="fa fa-list-alt"></i>
                        </div>
                        <h5>Forwarding</h5>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* category-area-end */}

        {/* tracking-area */}
        <div className="tracking-area pt-95 pb-115">
          <div className="container">
            <div className="row justify-content-center">
              <Snackbar
                onClose={() =>
                  setErrorPackage({
                    ...errorPackage,
                    openSnack: false,
                  })
                }
                open={errorPackage.openSnack}
                message={errorPackage.message}
                autoHideDuration={9000}
                ContentProps={{ className: classes.content }}
                anchorOrigin={{
                  horizontal: 'center',
                  vertical: 'top',
                }}
                className="transition"
              />
              <div className="col-xl-8 col-lg-10">
                <div className="tracking-id-info text-center">
                  <p>
                    Enter Your Cargo Tracking, Door to Door Office{' '}
                    <Link to="#">Order Number.</Link>
                  </p>
                  <form onSubmit={handleSubmit} className="tracking-id-form">
                    <input
                      type="text"
                      placeholder="Tracking id "
                      onChange={(e) => setTrackerId(e.target.value)}
                      value={trackerId}
                      title="Eg: DON-123456789"
                    />
                    <button type="submit" className="btn red-btn">
                      Tracking
                    </button>
                  </form>
                  {openDialog && (
                    <>
                      {mypackage &&
                        mypackage.map((each) => (
                          <div
                            key={each.id}
                            className="area-wrapper black-bg position-relative pt-115 pb-120 "
                          >
                            <div className="area-wrap-bg"></div>
                            <div className="testimonial-map-bg"></div>
                            <div className="container ">
                              <div>
                                <h3
                                  style={{
                                    textAlign: 'center',
                                    color: '#eee',
                                  }}
                                >
                                  Package Full Details
                                </h3>
                              </div>
                              <div className="modal-header flex-wrap d-flex justify-content-around align-items-center">
                                <div>
                                  <h4
                                    className="text-bold mt-2 text-uppercase "
                                    style={{ backgroundColor: 'orangered' }}
                                  >
                                    Status: {each.status}
                                  </h4>
                                  <h4
                                    className="text-bold mt-2 text-uppercase "
                                    style={{ color: 'orangered' }}
                                  >
                                    ID: {each.id}
                                  </h4>
                                </div>
                                <div
                                  style={{
                                    textAlign: 'right',
                                  }}
                                  className="circle-width"
                                >
                                  <CircularProgressbarWithChildren
                                    className="mt-2 "
                                    strokeWidth={3}
                                    value={each.progress}
                                    styles={{
                                      path: {
                                        stroke: 'orangered',
                                        strokeLinecap: 'square',
                                      },
                                    }}
                                  >
                                    <div className="text-primary">
                                      <h4>
                                        <strong className="text-light">
                                          %{each.progress}
                                        </strong>
                                      </h4>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                </div>
                              </div>

                              <div className="mt-2   ">
                                <div className="d-flex justify-content-around align-items-center ">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    SenderFirstName:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.senderFirstName}
                                  </p>
                                </div>
                                <div className="d-flex  align-items-center justify-content-around  text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    SenderLastName:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.senderLastName}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger "
                                    style={{ width: '50%' }}
                                  >
                                    SenderAddress:
                                  </h5>
                                  <p
                                    className="text-light "
                                    style={{ width: '50%' }}
                                  >
                                    {each.senderAddress}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center  text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    RecieverfirstName:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.receiverFirstName}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center  text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    ReceiverlastName:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.receiverLastName}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    ReceiverAddress:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.receiverAddress}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    ReceiverEmail:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.receiverEmail}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    PackageType:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.packageType}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    PackageWeight:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.packageWeight}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    PresentCountry:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.presentCountry}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    Final Destination:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.destination}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    Registered Date:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.registeredDate}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-around align-items-center text-light">
                                  <h5
                                    className="text-bold text-danger"
                                    style={{ width: '50%' }}
                                  >
                                    Expected Delivery Date:
                                  </h5>
                                  <p
                                    className="text-light"
                                    style={{ width: '50%' }}
                                  >
                                    {each.expectedDeliveryDate}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="tracking-list">
                              <ul>
                                <li
                                  className={
                                    each.status === 'registered' ? 'active' : ''
                                  }
                                >
                                  <div className="tracking-list-icon">
                                    <i className="fas fa-file-contract"></i>
                                  </div>
                                  <div className="tracking-list-content">
                                    <p>Registered</p>
                                  </div>
                                </li>
                                <li
                                  className={
                                    each.status === 'dispatched' ? 'active' : ''
                                  }
                                >
                                  <div className="tracking-list-icon">
                                    <i className="fas fa-truck-loading"></i>
                                  </div>
                                  <div className="tracking-list-content">
                                    <p>Dispatched</p>
                                  </div>
                                </li>
                                <li
                                  className={
                                    each.status === 'departed' ? 'active' : ''
                                  }
                                >
                                  <div className="tracking-list-icon">
                                    <i className="fas fa-truck-moving"></i>
                                  </div>
                                  <div className="tracking-list-content">
                                    <p>departed country</p>
                                  </div>
                                </li>

                                <li
                                  className={
                                    each.status === 'success' ? 'active' : ''
                                  }
                                >
                                  <div className="tracking-list-icon ">
                                    <i className="fas fa-check-circle"></i>
                                  </div>
                                  <div className="tracking-list-content">
                                    <p>Successful</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="modal-footer d-flex ">
                              <div style={{ width: '40%' }}>
                                <h4 className="mt-2 text-light">
                                  DELIVERY AMOUNT : ${each.dispatchingAmount}
                                </h4>
                              </div>
                              <div style={{ width: '60%' }}>
                                <a
                                  href="/payment"
                                  className="btn red-btn mr-2 mt-2"
                                >
                                  Make Payment
                                </a>
                                <button
                                  className="btn red-btn mt-2"
                                  onClick={() => setOpenDialog(false)}
                                >
                                  close
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                  {openTrack && (
                    <div className="tracking-list">
                      <ul>
                        <li className="active">
                          <div className="tracking-list-icon">
                            <i className="fas fa-file-contract"></i>
                          </div>
                          <div className="tracking-list-content">
                            <p>Registered</p>
                          </div>
                        </li>
                        <li>
                          <div className="tracking-list-icon">
                            <i className="fas fa-truck-loading"></i>
                          </div>
                          <div className="tracking-list-content">
                            <p>Dispatched</p>
                          </div>
                        </li>
                        <li>
                          <div className="tracking-list-icon">
                            <i className="fa fa-truck-moving"></i>
                          </div>
                          <div className="tracking-list-content">
                            <p>departed country</p>
                          </div>
                        </li>

                        <li>
                          <div className="tracking-list-icon ">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="tracking-list-content">
                            <p>Successful</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="tracking-help">
                    <p>
                      MULTIPLE TRACKING NUMBERS |{' '}
                      <a href="/contact">NEED HELP?</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tracking-area-end */}

        {/* services-area */}
        <section className="services-area delivery-bg inner-help-bg pt-110 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="s-section-title text-center mb-60">
                  <h2>how we help you</h2>
                  <p>
                    Express delivery is an innovative service is effective
                    logistics solution for the delivery of small cargo. This
                    service is useful for companies various.
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
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="s-services-content">
                      <h6>Delivery Service</h6>
                      <h3>
                        <Link to="#">Anywhere Shipping</Link>
                      </h3>
                      <p>
                        Express delivery is an innovativ service is effective
                        logistics solutio for delivery of small cargo service.
                      </p>
                      <Link to="/contact" className="btn red-btn">
                        LET US HELP
                      </Link>
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
                      <p>
                        Express delivery is an innovativ service is effective
                        logistics solutio for delivery of small cargo service.
                      </p>
                      <Link to="/contact" className="btn red-btn">
                        LET US HELP
                      </Link>
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
                        Express delivery is an innovativ service is effective
                        logistics solutio for delivery of small cargo service.
                      </p>
                      <Link to="#" className="btn red-btn">
                        LET US HELP
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services-area-end */}
      </main>
      <Footer />
    </>
  )
}

export default Tracking
