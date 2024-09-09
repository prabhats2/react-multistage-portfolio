import React, {useState} from 'react'
import {CNavbar, CContainer, CNavbarToggler, CCollapse, CNavbarBrand, CNavbarNav, CNavItem, CNavLink} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

export default function Navigation() {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar expand="lg">
      <CContainer>
        <CNavbarBrand href="#" className='navbarBrand'>V.</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className=" navbarnav me-auto mb-2 mb-lg-0">
            <CNavItem className='navItem'>
              <CNavLink href="#about-section">
                About
              </CNavLink>
            </CNavItem >
            <CNavItem className='navItem'>
              <CNavLink href="#WhatIDo">What I Do?</CNavLink>
            </CNavItem>
            <CNavItem className='navItem'>
              <CNavLink href="#ResumeSection">
                Resume
              </CNavLink>
            </CNavItem>
            <CNavItem className='navItem'>
              <CNavLink href="#">
                Works
              </CNavLink>
            </CNavItem>
            <CNavItem className='navItem'>
              <CNavLink href="#">
                Blog
              </CNavLink>
            </CNavItem>
            <CNavItem className='navItem'>
              <CNavLink href="#ContactSection">
                Contact
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
