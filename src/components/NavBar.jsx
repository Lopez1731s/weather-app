import React from "react";
import { Navbar, NavbarBrand, Container } from "shards-react";

function NavBar() {
  return (
    <>
      <Navbar type="dark" theme="dark" expand="md" className="mb-3">
        <Container className="dr-example-container">
          <NavbarBrand>Weather App</NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
