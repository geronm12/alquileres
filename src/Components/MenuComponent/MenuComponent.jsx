import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { MenuConstants } from "../../Configurations/constants";

export default function MenuComponent({ searchFunction }) {
  const SearchResult = (e) => {
    searchFunction(e.target.value);
  };

  return (
    <Navbar bg="danger" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "white" }}>
          {MenuConstants.NavBarBrandText}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder={MenuConstants.SearchInputPlaceHolder}
              className="me-2"
              aria-label="Search"
              onChange={(e) => SearchResult(e)}
            />
            <Button variant="danger">{MenuConstants.SearchButtonText}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
