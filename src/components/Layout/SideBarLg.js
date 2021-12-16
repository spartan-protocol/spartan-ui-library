import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useBreakpoint } from "../../providers/ViewPort";
import { samples } from "../../theme/utils";
import { Icon } from "../Icon/Icon";

const SidebarLg = () => {
  const breakpoint = useBreakpoint();

  const [permaWide] = useState(breakpoint.includes("xl"));
  const [compact, setCompact] = useState(!breakpoint.includes("xl"));

  const handleCompact = (boolieeee) => {
    if (!permaWide) {
      setCompact(boolieeee);
    }
  };

  const compactStyle = (minWidth) => {
    return compact ? { width: minWidth + "px" } : { width: "200px" };
  };

  return (
    <>
      <Col
        className='flex-column sidebarlg'
        style={compactStyle(50)}
        onMouseEnter={() => handleCompact(false)}
        onMouseLeave={() => handleCompact(true)}
        role='button'
        aria-hidden='true'
      >
        <div className='text-center sidebar-brand'>
          <div
            className='text-center'
            style={compact ? { paddingTop: "40px" } : { paddingTop: "25px" }}
          >
            <Icon icon='spartav2' size='40' />
          </div>
          <h2 style={compactStyle(0)} className='sidebar-item'>
            {!compact && "Spartan Protocol"}
          </h2>
        </div>
        <div className=''>
          <ul className='nav flex-column mb-auto'>
            {samples.map((sample) => (
              <li className='nav-item' key={sample}>
                <Nav.Link
                  style={compactStyle(50)}
                  className='sidebar-item text-nowrap p-1'
                >
                  <Button variant={sample} className='p-1 w-100 text-start'>
                    <Icon icon='sword' size='24' />
                    {!compact && <span className='ms-2'>{sample}</span>}
                  </Button>
                </Nav.Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </>
  );
};

export default SidebarLg;
