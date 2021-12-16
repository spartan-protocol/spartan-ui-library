import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "./components/Layout/Layout";
import { useBreakpoint } from "./providers/ViewPort";
import Sample from "./views/sample/Sample";

const App = () => {
  const breakpoint = useBreakpoint();

  const sidebarPadding = () => {
    if (breakpoint.includes("xl")) {
      return " ps-sidebar-lg";
    }
    if (breakpoint.includes("lg")) {
      return " ps-sidebar";
    }
    return "";
  };

  return (
    <>
      <Layout />
      <div className='main-wrapper'>
        {/* ADD THE ROUTES HERE TO DROP IN THE VIEW BELOW THE HEADER */}
        <Container fluid className={"pt-3" + sidebarPadding()}>
          <Row>
            <Sample />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
