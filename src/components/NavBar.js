import { Dialog, makeStyles, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  useFirestoreConnect([{ collection: 'packages' }])

  const [openMenu, setOpenMenu] = useState({
    services: false,
    mainToggle: false,
  })

  const useStyles = makeStyles((theme) => ({
    content: {
      backgroundColor: 'red',
    },
  }))

  const classes = useStyles()

  const [trackerId, setTrackerId] = useState('')
  const [mypackage, setMyPackage] = useState([])
  const [errorPackage, setErrorPackage] = useState({
    openSnack: false,
    message:
      ' Error no package Found check your id or contact our support team',
  })

  const [openDialog, setOpenDialog] = useState(false)

  const { pathname } = useLocation()

  const trackingData = useSelector((state) => state.firestore.ordered.packages)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trackerId === '') return
    const filteredData = trackingData.filter((each) => each.id === trackerId)

    if (filteredData.length !== 0) {
      setMyPackage(filteredData)
      setTrackerId('')
      setOpenDialog(true)
    } else {
      setErrorPackage({ ...errorPackage, openSnack: true })
      setTrackerId('')
    }
  }

  return (
    <div>
      {mypackage &&
        mypackage.map((each) => (
          <Dialog
            fullWidth
            open={openDialog}
            onClose={() => setOpenDialog(false)}
          >
            <div
              key={each.id}
              className="area-wrapper black-bg position-relative pt-115 pb-120 modal-content"
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
                  <div style={{ width: '50%' }}>
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
                      className="mt-2"
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light " style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
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
                    <p className="text-light" style={{ width: '50%' }}>
                      {each.expectedDeliveryDate}
                    </p>
                  </div>
                </div>
              </div>

              <div className="tracking-list">
                <ul>
                  <li className={each.status === 'registered' ? 'active' : ''}>
                    <div className="tracking-list-icon">
                      <i className="fas fa-file-contract"></i>
                    </div>
                    <div className="tracking-list-content">
                      <p>Registered</p>
                    </div>
                  </li>
                  <li className={each.status === 'dispatched' ? 'active' : ''}>
                    <div className="tracking-list-icon">
                      <i className="fas fa-truck-loading"></i>
                    </div>
                    <div className="tracking-list-content">
                      <p>Dispatched</p>
                    </div>
                  </li>
                  <li className={each.status === 'departed' ? 'active' : ''}>
                    <div className="tracking-list-icon">
                      <i className="fas fa-truck-moving"></i>
                    </div>
                    <div className="tracking-list-content">
                      <p>departed country</p>
                    </div>
                  </li>

                  <li className={each.status === 'success' ? 'active' : ''}>
                    <div className="tracking-list-icon ">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="tracking-list-content">
                      <p>Successful</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center">
                <h4 className="mt-2 text-light mr-2">
                  DISPATCH AMOUNT : ${each.dispatchingAmount}
                </h4>

                <a href="/payment" className="btn red-btn ">
                  Make Payment
                </a>
              </div>
            </div>
          </Dialog>
        ))}

      <header className="transparent-header s-transparent-header">
        <Snackbar
          onClose={() => setErrorPackage({ ...errorPackage, openSnack: false })}
          open={errorPackage.openSnack}
          message={errorPackage.message}
          autoHideDuration={9000}
          ContentProps={{ className: classes.content }}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
          className="transition"
        />
        <div className="third-header-top d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="third-logo">
                  <a href="/">
                    <h3 className="text-uppercase">DonnyExpress</h3>
                  </a>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="third-header-contact">
                  <div className="third-header-form">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Enter Tracking Id..."
                        value={trackerId}
                        required
                        onChange={(e) => setTrackerId(e.target.value)}
                      />
                      <button>
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="third-hrader-contact-list">
                    <ul>
                      <li>
                        <div className="thc-icon">
                          <i className="fas fa-headphones"></i>
                        </div>
                        <div className="thc-content">
                          <p>
                            <span>Call :</span> +1 212-226-3126
                          </p>
                          <p>info@donnyExpress.info</p>
                        </div>
                      </li>
                      <li>
                        <div className="thc-icon">
                          <i className="fas fa-map-marker"></i>
                        </div>
                        <div className="thc-content">
                          <p> Bronk Center Brooklyn</p>
                          <p>New York</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="main-header third-main-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6">
                <div className="logo">
                  <a href="/">
                    <h3 className="text-uppercase">DonnyExpress</h3>
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-md-6 d-none d-md-block">
                <div className="menu-area">
                  <div className="main-menu">
                    <div className="mean-push"></div>
                    <nav id="mobile-menu">
                      <ul>
                        <li className={pathname === '/' ? 'active' : ''}>
                          <a href="/">Home</a>
                        </li>
                        <li className={pathname === '/about' ? 'active' : ''}>
                          <a href="/about">Company</a>
                        </li>
                        <li
                          className={pathname === '/tracking' ? 'active' : ''}
                        >
                          <a href="/tracking">Tracking</a>
                        </li>
                        <li>
                          <Link to="#">Services</Link>
                          <ul className="submenu">
                            <li
                              className={
                                pathname === '/airservice' ? 'active' : ''
                              }
                            >
                              <a href="/airservice">Services Air</a>
                            </li>
                            <li
                              className={
                                pathname === '/railservice' ? 'active' : ''
                              }
                            >
                              <a href="/railservice">Services Railway</a>
                            </li>
                            <li
                              className={
                                pathname === '/doortodoorservice'
                                  ? 'active'
                                  : ''
                              }
                            >
                              <a href="/doortodoorservice">
                                Services Door to Door
                              </a>
                            </li>
                            <li
                              className={
                                pathname === '/warehouseservice' ? 'active' : ''
                              }
                            >
                              <a href="/warehouseservice">Services warehouse</a>
                            </li>
                          </ul>
                        </li>

                        <li className={pathname === '/contact' ? 'active' : ''}>
                          <a href="/contact">Support</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-search t-header-search d-none d-lg-block">
                    <span>
                      <div id="google_translate_element"></div>
                    </span>
                  </div>
                  <div className="header-btn s-header-btn d-none">
                    <Link
                      to="#"
                      className="btn"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <img
                        src="https://themebeyond.com/html/startesk/startesk/img/icon/calculator-symbols02.png"
                        alt="icon"
                      />
                      Get Fare Rate
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu mean-container">
                  <div className="mean-bar ">
                    <a
                      href="#nav"
                      className="meanmenu-reveal d-lg-none d-sm-block"
                      style={{
                        background: '',
                        color: '',
                        right: '0',
                        left: 'auto',
                      }}
                      onClick={() =>
                        setOpenMenu({
                          ...openMenu,
                          mainToggle: !openMenu.mainToggle,
                        })
                      }
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                    <nav
                      className="mean-nav "
                      data-aos-easing="ease"
                      data-aos-delay="0"
                      data-aos-duration="1000"
                    >
                      {openMenu.mainToggle && (
                        <ul className="trans">
                          <li className="active">
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/tracking">Tracking</a>
                          </li>

                          <li>
                            <Link to="#">Services</Link>
                            <ul className="submenu">
                              <li>
                                {openMenu.services && (
                                  <ul className="submenu">
                                    <li>
                                      <a href="/airservice">Services Air</a>
                                    </li>
                                    <li>
                                      <a href="/railservice">
                                        Services Railway
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/doortodoorservice">
                                        Services Door to Door
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/warehouseservice">
                                        Services warehouse
                                      </a>
                                    </li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                            <Link
                              to="#"
                              className="mean-expand"
                              href="/"
                              style={{ fontSize: '18px' }}
                              onClick={() =>
                                setOpenMenu({
                                  ...openMenu,
                                  services: !openMenu.services,
                                })
                              }
                            >
                              +
                            </Link>
                          </li>

                          <li>
                            <a href="/contact">Support</a>
                          </li>
                          <li className="mean-last">
                            <div id="google_translate_element"></div>
                          </li>
                        </ul>
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal Search */}
            <div
              className="modal fade"
              id="search-modal"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button>
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModalLong"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content fare-rate-modal">
                  <ul className="nav nav-tabs setup-panel">
                    <li className="nav-item single-steps">
                      <a className="nav-link btn-amber" href="#step-1">
                        Select Your Destination
                      </a>
                    </li>
                    <li className="nav-item single-steps">
                      <a className="nav-link btn-blue-grey" href="#step-2">
                        ITEMS TO BE SHIPPED
                      </a>
                    </li>
                    <li className="nav-item single-steps">
                      <a className="nav-link btn-blue-grey" href="#step-3">
                        tracking information
                      </a>
                    </li>
                  </ul>
                  <form action="#" method="post">
                    <div className="single-setup" id="step-1">
                      <div className="fare-rate-tab-content">
                        <div className="modal-shipping-info">
                          <ul>
                            <li>
                              <div className="shipping-step-count">
                                <h5>A</h5>
                              </div>
                              <div className="shipping-address-form">
                                <div className="shipping-country-box form-group">
                                  <label htmlFor="from-country">
                                    from country
                                  </label>
                                  <input
                                    type="text"
                                    required="required"
                                    id="from-country"
                                    placeholder="Select Your Destination"
                                  />
                                </div>
                                <div className="shipping-address-box form-group">
                                  <label htmlFor="from-country-location">
                                    add your location
                                  </label>
                                  <input
                                    type="text"
                                    required="required"
                                    id="from-country-location"
                                    placeholder="Select Your Destination"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="shipping-step-count">
                                <h5>B</h5>
                              </div>
                              <div className="shipping-address-form">
                                <div className="shipping-country-box form-group">
                                  <label htmlFor="to-country">TO country</label>
                                  <input
                                    type="text"
                                    required="required"
                                    id="to-country"
                                    placeholder="Select Your Destination"
                                  />
                                </div>
                                <div className="shipping-address-box form-group">
                                  <label htmlFor="to-country-location">
                                    add your location
                                  </label>
                                  <input
                                    type="text"
                                    required="required"
                                    id="to-country-location"
                                    placeholder="Select Your Destination"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="modal-shipping-more-list">
                          <ul>
                            <li>
                              <Link to="#">
                                <i className="flaticon-credit-card"></i> Don't
                                have an account? No problem Pay by credit card
                                or cash.
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="flaticon-sings"></i> Get a quick
                                quote and start shipping
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="flaticon-track"></i> Consult your
                                packaging and delivery options
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <button
                          className="btn f-right nextBtn-2 btn-success"
                          type="button"
                        >
                          one more step
                        </button>
                      </div>
                    </div>
                    <div className="single-setup" id="step-2">
                      <div className="fare-rate-tab-content">
                        <div className="modal-shipping-details">
                          <div className="modal-shipping-title">
                            <h2>
                              items <span>details</span>
                            </h2>
                            <h2 className="f-right">
                              total cost : <span>$ 19.00</span>
                            </h2>
                          </div>
                          <div className="shipping-details-info">
                            <div className="single-shipping-details-box">
                              <label htmlFor="packaging-size">
                                packaging size
                              </label>
                              <select
                                className="custom-select"
                                id="packaging-size"
                              >
                                <option defaultValue="42 x 36">
                                  Standart Size ( 42” x 36” )
                                </option>
                                <option value="82 x 86">
                                  Standart Size ( 82” x 86” )
                                </option>
                                <option value="102 x 165">
                                  Standart Size ( 102” x 165” )
                                </option>
                                <option value=" 110 x 205">
                                  Standart Size ( 110” x 205” )
                                </option>
                                <option value="120 x 250">
                                  Standart Size ( 120” x 250” )
                                </option>
                              </select>
                            </div>
                            <div className="single-shipping-details-box shipping-qty">
                              <label htmlFor="QTY-number">QTY</label>
                              <input
                                onChange={() => {}}
                                type="number"
                                value="1"
                                id="QTY-number"
                                required="required"
                              />
                            </div>
                            <div className="single-shipping-details-box shipping-weight">
                              <label htmlFor="packaging-weight">
                                TOTAL WEIGHT
                              </label>
                              <select
                                className="custom-select"
                                id="packaging-weight"
                              >
                                <option defaultValue="kg">KG</option>
                                <option value="20kg">20KG</option>
                                <option value="30kg">30KG</option>
                                <option value="50kg">50KG</option>
                                <option value="80kg">80KG</option>
                                <option value="100kg">100KG</option>
                              </select>
                            </div>
                            <div className="single-shipping-details-box shipping-transport">
                              <label htmlFor="cargo-transport">
                                cargo transport
                              </label>
                              <select
                                className="custom-select"
                                id="cargo-transport"
                              >
                                <option defaultValue="in">IN</option>
                                <option value="1500in">1500in</option>
                                <option value="2000in">2000in</option>
                                <option value="2500in">2500in</option>
                                <option value="3000in">3000in</option>
                                <option value="3500in">3500in</option>
                                <option value="4000in">4000in</option>
                              </select>
                            </div>
                            <div className="single-shipping-details-box shipping-product">
                              <label htmlFor="product-category">
                                product category
                              </label>
                              <select
                                className="custom-select"
                                id="product-category"
                              >
                                <option value="glassProduct">
                                  Glass Product
                                </option>
                                <option value="glassProduct">
                                  Glass Product
                                </option>
                                <option value="glassProduct">
                                  Glass Product
                                </option>
                                <option value="glassProduct">
                                  Glass Product
                                </option>
                                <option value="glassProduct">
                                  Glass Product
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              required="required"
                              className="custom-control-input"
                              id="customControlInline"
                              onChange={() => {}}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customControlInline"
                            >
                              Logistics is generally the detailed organization
                              and implementation of a complex operation. In a
                              general business sense, logistics is the
                              management of the flow of things between the point
                              of origin and the point
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn f-left prevBtn-2 btn-success"
                          type="button"
                        >
                          Previous
                        </button>
                        <button
                          className="btn f-right nextBtn-2 btn-success"
                          type="button"
                        >
                          <span>$19.00</span>
                          Booking
                        </button>
                      </div>
                    </div>
                    <div className="single-setup" id="step-3">
                      <div className="fare-rate-tab-content">
                        <div className="modal-shipping-details">
                          <div className="modal-shipping-title">
                            <h2>
                              tracking <span>information</span>
                            </h2>
                          </div>
                          <div className="f-left pr-20">
                            <div className="shipping-details-info shipping-tracking-info">
                              <div className="modal-tracking-info">
                                <label htmlFor="invoice-id">invoice Id</label>
                                <input
                                  type="text"
                                  id="invoice-id"
                                  placeholder="Enter Your Id"
                                />
                              </div>
                              <div className="modal-tracking-info">
                                <label>Search invoice</label>
                                <button className="btn nextBtn-2 btn-success">
                                  find your product
                                </button>
                              </div>
                            </div>
                            <div className="tracking-quots-board">
                              <label>your happiness quotes</label>
                              <div className="tracking-quots-board-info">
                                <img
                                  src="https://themebeyond.com/html/startesk/startesk/img/bg/board_bg.jpg"
                                  alt="img"
                                />
                                <h5>
                                  On Board Your Products. Now Product is
                                  Malaysia Ocean
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="tracking-modal-map">
                            <div id="contact-map"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
