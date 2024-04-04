import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand>React-Bootstrap Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/myform">My Form</Nav.Link>
            <NavDropdown title="Dropdown Menu">
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/myform">My Form</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control type="text" placeholder="Search Bar"/>
                </Col>
                <Col xs="auto">
                  <Button type="submit">Search Button</Button>
                </Col>
              </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
