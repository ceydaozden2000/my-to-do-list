import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Stack,
} from "react-bootstrap";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      textList: [],
    };
  }
  textPush = (e) => {
    this.setState({ textInput: "" });
    e.preventDefault();

    const listText = this.state.textList;
    //tanımlı olan array'e birşey pushlarken bunu kullanırız
    //textList yazan yerler setlenmesini istedigin state adı
    //... bu da şu anlama geliyor şuanki state verisini al
    this.state.textInput === ""
      ? window.alert("Enter Different Task Please")
      : listText.includes(String(this.state.textInput))
      ? window.alert("Enter Different Task Please")
      : this.setState({
          textList: [...this.state.textList, this.state.textInput],
        });
  };

  removeText = (e, index) => {
    e.preventDefault();
    const newList = this.state.textList.filter((item) => item !== index);
    this.setState({ textList: newList });
  };

  removeAll = (e) => {
    e.preventDefault();
    const allDelete = this.state.textList;
    this.setState({ textList: [] });
  };

  render() {
    return (
      <>
        <Container className="mt-3">
          <Form>
            <Container className="d-flex justify-content-md-center mt-4 p-3 ">
              <Col xs={10}>
                <InputGroup>
                  <Form.Control
                    placeholder="Enter Task"
                    type="text"
                    className="form-control p-3"
                    value={this.state.textInput}
                    onChange={(e) =>
                      this.setState({ textInput: e.target.value })
                    }
                  />

                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    type="submit"
                    onClick={this.textPush}
                  >
                    Submit Task
                  </Button>
                </InputGroup>
              </Col>
            </Container>

            <Container className="d-flex justify-content-md-center mt-3">
              <Col xs={8}>
                <Card>
                  <Card.Header className="p-3" style={{ fontSize: 24 }}>
                    Tasks
                  </Card.Header>
                  <ListGroup variant="flush">
                    {this.state.textList.map((index) => (
                      <ListGroupItem key={uuidv4()}>
                        <Stack direction="horizontal" gap={2}>
                          <div>{index}</div>
                          <div className="ms-auto">
                            <Button
                              variant="outline-danger"
                              key={index}
                              typeof="submit"
                              onClick={(e) => this.removeText(e, index)}
                            >
                              delete
                            </Button>
                          </div>
                        </Stack>
                      </ListGroupItem>
                    ))}
                  </ListGroup>

                  <Card.Footer style={{ fontSize: 24 }}>
                    <Button variant="outline-danger" onClick={this.removeAll}>
                      Delete All Task
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            </Container>
          </Form>
        </Container>
      </>
    );
  }
}
