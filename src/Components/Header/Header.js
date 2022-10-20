import { dedewLogo } from "../Images";
// import Wallet from "./Wallet/Wallet";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import "./headerStyle.scss";
// import headerStyle from "./headerStyle.module.scss";

function Header() {
  return (
    <>
      {/* // ! Navbar Bootstrap */}
      <Navbar expand="md" className="navbar-boot" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={dedewLogo} alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fa-solid fa-bars text-light"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll text-va">
            <Nav className="me-auto my-2 my-lg-0 d-flex w-100 justify-content-center gap-1 text-light asd">
              <Nav.Link href="#action1">News</Nav.Link>
              <NavDropdown title="Project Detail">
                <NavDropdown.Item style={{width:'100%'}} href="#action/1.1">Learn </NavDropdown.Item>
                <NavDropdown.Item style={{width:'100%'}} href="#action/1.2">Art</NavDropdown.Item>
                <NavDropdown.Item style={{width:'100%'}} href="#action/1.3">Roadmap</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us">
                <NavDropdown.Item href="#action/2.1">Team</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/2.1">
                  Partnership
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/2.2">
                  Sponsorship
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Contact Us</Nav.Link>
            </Nav>
            {/* <Nav> */}
            <Nav>
              <Nav.Link href="#home" className="wallet">
                Connect Wallet
              </Nav.Link>
            </Nav>
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

// {/* <header className="header">
// <div className="logo">
//   <img src={bitdevLogo} alt="logo" />
// </div>

// <div className="menu-container">
//   <span className="menu">NEWS</span>
//   <span className="menu">
//     PROJECT DETAILS
//     <span
//       className="icon"
//       dangerouslySetInnerHTML={{ __html: SvgDownArrow }}
//     ></span>
//     {/*
//     LEARN
//     ART
//     ROADMAP
//   */}
//   </span>
//   <span className="menu">
//     ABOUT US
//     <span
//       className="icon"
//       dangerouslySetInnerHTML={{ __html: SvgDownArrow }}
//     ></span>
//     {/*
//     TEAM
//     ---------
//     PARTNERSHIP
//     SPONSORSHIP
//   */}
//   </span>
//   <span className="menu">CONTACT US</span>
// </div>

// <Wallet />
// </header> */}
