import React from "react";
import Display from "./Display";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

export default class Operations extends React.Component {
  render() {
    const titles = {
      title: "My ToDo List",
      nameOperations: "Name Operations",
      nameDisplay: "Submit",
      taskName: ["task 1", "task 2", "task 3", "task 4"],
    };

    return (
      <>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="d-flex justify-content-center my-2 ">
              <NavbarBrand href="/" style={{ fontSize: 34 }}>
                {titles.title}
              </NavbarBrand>
            </Container>
          </Navbar>
          <Display buttonName={titles.nameDisplay} />
        </div>
      </>
    );
  }
}
