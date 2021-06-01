import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import * as Icons from 'react-bootstrap-icons'

function Navpage() {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.getElementById('nav_bg').classList.add('bgadd')
    } else {
      document.getElementById('nav_bg').classList.remove('bgadd')
    }
  })

  return (
    <Navbar className="bg_white" sticky="top" id="nav_bg">
      <Navbar.Brand
        href="/"
        className="bg-dark rounded-sm text-light ml-4 ml-sm-0"
      >
        RENTAL
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: '95%' }}>
          <Nav.Link
            as="button"
            href="#"
            className="d-none d-sm-block border-3"
            style={{ color: 'black' }}
          >
            Become a host
          </Nav.Link>
          <Nav.Link className="d-none d-sm-block" style={{ color: 'black' }}>
            Learn more
          </Nav.Link>
          <Nav.Link style={{ color: 'black' }}>Log in</Nav.Link>
          <Nav.Link style={{ color: 'black' }}>Sign up</Nav.Link>
          <Nav.Link style={{ color: 'black' }}>
            <Icons.PersonCircle size="1.5rem" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navpage
