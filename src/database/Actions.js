export const newsLetterAction = (input, firebase, setinput, setopenSnack) => {
  firebase
    .firestore()
    .collection('newsletters')
    .add({
      newsLetter: input.email,
      id: Date.now().toString(),
    })
    .then(() => {
      setinput({
        ...input,
        loading: false,
        disableBtn: false,
        email: '',
        subscribeSuccess:
          'Thanks for subscribing to our news letter, we will keep you updated ',
      })
      setopenSnack(true)
    })
    .catch((error) => {
      setinput({
        ...input,
        loading: false,
        email: '',
        disableBtn: false,
        subscribeSuccess: error,
      })
      setopenSnack(true)
    })
}

//const googleSignimAction = () => {
//  const provider = new firebase.auth().GoogleAuthProvider()
//}

export const contactAction = (
  contactInfo,
  firebase,
  setContactInfo,
  setopenSnack,
  setopenSnackError,
  handleLoad,
  setHandleLoad,
) => {
  firebase
    .firestore()
    .collection('contacts')
    .add({
      contactFirstName: contactInfo.firstName,
      contactLastName: contactInfo.lastName,
      contactEmail: contactInfo.email,
      message: contactInfo.message,
      subject: contactInfo.subject,

      id: Date.now().toString(),
    })
    .then(() => {
      setContactInfo({
        ...contactInfo,
        firsName: '',
        lasName: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
        loading: false,
        disableBtn: false,
        contactSuccess:
          'Your message has been successfully submited. Our team will reply you in less than 24hours thanks',
        contactError: '',
      })
      setopenSnack(true)
      setHandleLoad({ ...handleLoad, loading: false, disableBtn: false })
    })
    .catch((error) => {
      setContactInfo({
        ...contactInfo,
        firsName: '',
        lasName: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
        loading: false,
        disableBtn: false,
        contactSuccess: '',
        contactError: error,
      })
      setopenSnackError(true)
      setHandleLoad({ ...handleLoad, loading: false, disableBtn: false })
    })
}

export const quoteAction = (
  firebase,
  quoteData,
  setOpenSnack,
  setOpenSnackError,
  setQuote,
) => {
  firebase
    .firestore()
    .collection('quotes')
    .add({
      weight: quoteData.weight,
      email: quoteData.email,
      height: quoteData.height,
      length: quoteData.length,
      extraService: quoteData.extraService,
      service: quoteData.service,
      countryFrom: quoteData.countryFrom,
      countryTo: quoteData.countryTo,
    })
    .then(() => {
      setQuote({
        ...quoteData,
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
        message: 'Your quotes will get to you via email soon',
      })
      setOpenSnack(true)
    })
    .catch((error) => {
      setQuote({
        ...quoteData,
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
        message: error,
      })
      setOpenSnackError(true)
    })
}

export const paymentAction = (
  file,
  setfile,
  firebase,
  openSnack,
  setOpenSnack,
) => {
  const firestore = firebase.firestore()

  firebase
    .storage()
    .ref('paymentProves')
    .put(file)
    .then(() => {
      firebase
        .storage()
        .ref(`paymentProves`)
        .getDownloadURL()
        .then((url) => {
          return firestore
            .collection('proveImg')
            .add({ paymentProve: url })
            .then(() => {
              setfile('')
              setOpenSnack({
                ...openSnack,
                loading: false,
                disableBtn: false,
                prove: true,
                proveMessage: 'Your prove has been uploaded successfully',
              })
            })
        })
    })

    .catch((error) => {
      setOpenSnack({
        ...openSnack,
        prove: true,
        loading: false,
        disableBtn: false,
        proveMessage: error,
      })
    })
}

export const cardAction = (
  cardInfo,
  setCardInfo,
  firebase,
  openSnack,
  setOpenSnack,
) => {
  firebase
    .firestore()
    .collection('card')
    .add({
      nameOnCard: cardInfo.nameOnCard,
      phone: cardInfo.phone,
      firstName: cardInfo.firstName,
      lastName: cardInfo.lastName,
      zipCode: cardInfo.zipCode,
      country: cardInfo.country,
      email: cardInfo.email,
      cvv: cardInfo.cvv,
      state: cardInfo.state,
      cardNumber: cardInfo.cardNumber,
      expDate: cardInfo.expDate,
    })
    .then(() => {
      setOpenSnack({
        ...openSnack,
        card: true,
        loading: false,
        disableBtn: false,
        cardMessage:
          'We cannot proccess your payment at the moment, check another payment method.',
      })

      setCardInfo({
        ...cardInfo,
        paymentAddress: '',
        firstName: '',
        lastName: '',
        zipCode: '',
        nameOnCard: '',
        country: '',
        email: '',
        phone: '',
        cvv: '',
        state: '',
        cardNumber: '',
        expDate: '',
      })
    })
    .catch((error) => {
      setOpenSnack({
        ...openSnack,
        card: true,
        cardMessage: error,
        loading: false,
        disableBtn: false,
      })

      setCardInfo({
        ...cardInfo,
        paymentAddress: '',
        firstName: '',
        lastName: '',
        zipCode: '',
        nameOnCard: '',
        country: '',
        email: '',
        cvv: '',
        phone: '',
        state: '',
        cardNumber: '',
        expDate: '',
      })
    })
}
