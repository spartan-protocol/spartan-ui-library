import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Sidebar from "./Sidebar";
import { Icon } from "../Icon/Icon";
import { useBreakpoint } from "../../providers/ViewPort";

const Header = () => {
  const breakpoint = useBreakpoint();

  const sidebarPadding = () => {
    if (breakpoint.includes("xl")) {
      return "ps-sidebar-lg";
    }
    if (breakpoint.includes("lg")) {
      return "ps-sidebar";
    }
    return "";
  };

  return (
    <Navbar fixed='top' id='header' expand='lg'>
      <Container fluid className={sidebarPadding()}>
        <div>
          <Navbar.Toggle aria-controls='offcanvasNavbar' className="p-1 mx-auto"/>
          {!breakpoint.includes("lg") && (
            <Navbar.Brand href='#' className='ps-3'>
              <Icon icon='spartav2' size='40' />
            </Navbar.Brand>
          )}
        </div>
        <div>
          <Button variant="secondary" className='mx-1 p-1'>
            <Icon icon='moon' size='20' />
          </Button>
          <Button variant="secondary" className='mx-1 p-1'>
            <Icon icon='world' size='20' />
          </Button>
          <Button variant="secondary" className='mx-1 p-1'>
            <Icon icon='wallet' size='20' />
          </Button>
          <Button variant="secondary" className='mx-1 p-1'>
            <Icon icon='contract' size='20' />
          </Button>
          <Button variant="secondary" className='mx-1 p-1'>
            <Icon icon='fire' size='20' />
          </Button>
        </div>
      </Container>
      <Navbar.Offcanvas
        id='offcanvasNavbar'
        aria-labelledby='offcanvasNavbarLabel'
        placement='start'
      >
        <Sidebar />
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Header;
