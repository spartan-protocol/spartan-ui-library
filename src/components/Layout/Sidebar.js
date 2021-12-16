import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id='offcanvasNavbarLabel'>Sidebar</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className='justify-content-end flex-grow-1 pe-3'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='#view2'>Link</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </>
  );
};

export default Sidebar;
