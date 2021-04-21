import { makeStyles, Snackbar, CircularProgress } from '@material-ui/core'

import React, { useState } from 'react'

import { useFirebase } from 'react-redux-firebase'

import { cardAction, paymentAction } from '../database/Actions'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
  bg: {
    backgroundColor: theme.palette.success.main,
  },
}))

function Payments() {
  const firebase = useFirebase()

  const classes = useStyles()

  const [openPay, setOpenPay] = useState({
    btc: false,
    card: false,
    bank: false,
  })

  const [openSnack, setOpenSnack] = useState({
    cardMessage: '',
    proveMessage: '',
    prove: false,
    card: false,
    loading: false,
    disableBtn: false,
  })

  const [userProve, setUserProve] = useState('')
  const [cardPay, setCardPay] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    country: '',
    state: '',
    email: '',
    phone: '',
    nameOnCard: '',
    cvv: '',
    cardNumber: '',
    expDate: '',
  })

  const handleCardPay = (e) => {
    e.preventDefault()

    if (
      cardPay.paymentAddress === '' ||
      cardPay.firstName === '' ||
      cardPay.lastName === '' ||
      cardPay.zipCode === '' ||
      cardPay.country === '' ||
      cardPay.state === '' ||
      cardPay.email === '' ||
      cardPay.cvv === '' ||
      cardPay.phone === '' ||
      cardPay.nameOnCard === '' ||
      cardPay.cardNumber === '' ||
      cardPay.expDate === ''
    ) {
      return
    }

    setOpenSnack({ ...openSnack, loading: true, disableBtn: true })
    cardAction(cardPay, setCardPay, firebase, openSnack, setOpenSnack)
  }

  const handleProve = (e) => {
    e.preventDefault()
    if (userProve === '') {
      return
    }
    setOpenPay({
      ...openPay,
      card: false,
      btc: false,
      bank: false,
    })
    setOpenSnack({ ...openSnack, loading: true, disableBtn: true })

    paymentAction(userProve, setUserProve, firebase, openSnack, setOpenSnack)
  }

  return (
    <div>
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
                      Payment
                    </li>
                    <li className="dots2"></li>
                  </ol>
                </nav>
                <h2>Payment Here</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="authentication-bg  pb-4">
        <Snackbar
          open={openSnack.card}
          onClose={() => setOpenSnack({ ...openSnack, card: false })}
          message={openSnack.cardMessage}
          autoHideDuration={9000}
          ContentProps={{ className: classes.content }}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        />
        <Snackbar
          open={openSnack.prove}
          onClose={() => setOpenSnack({ ...openSnack, prove: false })}
          message={openSnack.proveMessage}
          autoHideDuration={9000}
          ContentProps={{ className: classes.bg }}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        />
        <div className=" height-100vh ">
          <div>
            <div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-5 pt-2 ">
                    <div className="card mb-3 to-action-bg">
                      <div className="text-center">
                        <h4 className="animated btn-gradient-purple pt-1 nav-color">
                          Choose your payment method
                        </h4>
                      </div>
                      <div className="card-body p-4">
                        <div className="field_form authorize_form">
                          <div>
                            <div className="form-group col-md-12 text-center mb-2">
                              <button
                                className="btn  btn-round w-100 btn-gradient-purple"
                                onClick={() =>
                                  setOpenPay({
                                    ...openPay,
                                    btc: !openPay.btc,
                                    bank: false,
                                    card: false,
                                  })
                                }
                              >
                                Bitcoin
                              </button>
                            </div>
                            {openPay.btc && (
                              <div className="text-center mt-2">
                                <>
                                  <h4>
                                    Make payment with the above btc wallet and
                                    upload Prove
                                  </h4>
                                  <div>
                                    <img
                                      src={require('../assets/qrcode1.png')}
                                      width="300px"
                                      alt="Code"
                                    />
                                    <h5>36nxqxLUnYQZ8cNTKVbQFND2Bpi3bHopE3</h5>
                                  </div>
                                </>
                              </div>
                            )}

                            <div className="form-group col-md-12 mb-2">
                              <button
                                className="btn btn-gradient-purple btn-round w-100"
                                onClick={() =>
                                  setOpenPay({
                                    ...openPay,
                                    card: !openPay.card,
                                    bank: false,
                                    btc: false,
                                  })
                                }
                              >
                                Card Payment
                              </button>
                              {openPay.card && (
                                <div className="pt-2 d-flex justify-content-center align-items-center">
                                  <div className="col-md-8 order-md-1 ">
                                    <h4 className="my-4  text-center">
                                      Billing address
                                    </h4>
                                    <form
                                      className="needs-validation "
                                      onSubmit={handleCardPay}
                                    >
                                      <div className="row">
                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="firstName">
                                            First name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            value={cardPay.firstName}
                                            required
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                firstName: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="lastName">
                                            Last name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            value={cardPay.lastName}
                                            required
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                lastName: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="country">
                                            Country
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="country"
                                            value={cardPay.country}
                                            required
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                country: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="zipCode">
                                            Zipcode
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="zipCode"
                                            value={cardPay.zipCode}
                                            required
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                zipCode: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="state">State</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            value={cardPay.state}
                                            required
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                state: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                          <label htmlFor="phone">Phone</label>
                                          <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            value={cardPay.phone}
                                            required
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                phone: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <div className="input-group">
                                          <div className="input-group-prepend">
                                            <span className="input-group-text">
                                              @
                                            </span>
                                          </div>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            required
                                            value={cardPay.email}
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                email: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                      <h5>Card Details</h5>
                                      <div className="mb-3">
                                        <label htmlFor="cardname">
                                          Name On Card
                                        </label>
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="cardname"
                                            required
                                            value={cardPay.nameOnCard}
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                nameOnCard: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="mb-3">
                                        <label htmlFor="cardnumber">
                                          Card Number
                                        </label>
                                        <div className="input-group">
                                          <input
                                            type="tel"
                                            className="form-control"
                                            id="cardnumber"
                                            minLength="16"
                                            required
                                            value={cardPay.cardNumber}
                                            onChange={(e) =>
                                              setCardPay({
                                                ...cardPay,
                                                cardNumber: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="mb-3 col-6">
                                          <label htmlFor="expdate">
                                            Exp Date
                                          </label>
                                          <div className="input-group">
                                            <input
                                              type="date"
                                              className="form-control"
                                              id="expdate"
                                              required
                                              value={cardPay.expDate}
                                              onChange={(e) =>
                                                setCardPay({
                                                  ...cardPay,
                                                  expDate: e.target.value,
                                                })
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="mb-3 col-6">
                                          <label htmlFor="cardnumber">
                                            CVV
                                          </label>
                                          <div className="input-group">
                                            <input
                                              type="tel"
                                              className="form-control"
                                              id="cvv"
                                              required
                                              minLength="3"
                                              value={cardPay.cvv}
                                              onChange={(e) =>
                                                setCardPay({
                                                  ...cardPay,
                                                  cvv: e.target.value,
                                                })
                                              }
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="text-center mb-4">
                                        <button
                                          type="submit"
                                          className="btn btn-red"
                                          disabled={openSnack.disableBtn}
                                        >
                                          {openSnack.loading && (
                                            <CircularProgress
                                              variant="indeterminate"
                                              color="primary"
                                              size={20}
                                              style={{ marginRight: '5px' }}
                                            />
                                          )}
                                          Proceed
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="form-group col-md-12 text-center ">
                              <button
                                className="btn btn-gradient-purple btn-round w-100"
                                onClick={() =>
                                  setOpenPay({
                                    ...openPay,
                                    bank: !openPay.bank,
                                    card: false,
                                    btc: false,
                                  })
                                }
                              >
                                Bank Deposit
                              </button>
                              {openPay.bank && (
                                <div className="pt-2">
                                  <h4 className="text-warning">
                                    Unavailable at the moment
                                  </h4>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="divider small_divider"></div>
                          <form onSubmit={handleProve}>
                            <div className="form-group col-md-12 ">
                              <h5>Upload prove</h5>
                              <input
                                type="file"
                                className="form-control"
                                required
                                label="Upload Prove"
                                onChange={(e) => {
                                  const newFile = e.target.files[0]
                                  setUserProve(newFile)
                                }}
                              />
                            </div>
                            <div className="form-group col-md-12 text-center mb-2">
                              <button
                                type="submit"
                                className="btn btn-gradient-purple btn-round  w-100"
                                disabled={openSnack.disableBtn}
                              >
                                {openSnack.loading && (
                                  <CircularProgress
                                    variant="indeterminate"
                                    color="primary"
                                    size={20}
                                    style={{ marginRight: '5px' }}
                                  />
                                )}
                                Upload
                              </button>
                            </div>
                          </form>
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
      <Footer />
    </div>
  )
}

export default Payments
