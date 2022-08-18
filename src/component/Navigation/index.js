import React, { useState } from 'react';
import Logo from '../../assets/images/mlaku-logo.png'
import {Navbar, Nav, Collapse, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';


const Navigation = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <Navbar color="white" expand="md" light className='shadow-sm px-0 px-lg-4'>
        <NavbarBrand href="/" className='d-flex align-items-center'>
          <img className="img-fluid" src={Logo} alt="Logo Mitramas Infosys Global" width='50px'  />
          <span className='navbar logo-text ms-2'>Mlaku</span>
        </NavbarBrand>

        <NavbarToggler onClick={() => {setNavbarOpen(!isNavbarOpen)}} />

        <Collapse isOpen={isNavbarOpen} className='item-navigation-wrapper' navbar>
          <Nav className="mas-auto" navbar>
            <NavItem className='ms-lg-4'>
              <NavLink href="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav className='ms-lg-4'>
              <DropdownToggle caret nav>Category</DropdownToggle>
              <DropdownMenu light end>
                <DropdownItem>
                  <NavLink href="/object">
                    Object
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/culinary">
                    Culinary
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/accommodation">
                    Accommodation
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ms-auto user-profile-setting me-2" navbar>
              <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>Kadek Frama</DropdownToggle>

                  <DropdownMenu light end>
                  <DropdownItem>
                      <NavLink>My Profile</NavLink>
                  </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Collapse>

      </Navbar>
    </header>
  )
}

export default Navigation;
