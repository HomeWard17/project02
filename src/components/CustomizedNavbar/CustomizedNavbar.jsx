import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./CustomizedNavbar.css";
import CustomizedOffcanvas from "../CustomizedOffcanvas/CustomizedOffcanvas";

function CustomizedNavbar() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <CustomizedOffcanvas></CustomizedOffcanvas>
        <Nav.Link href="./" className="navigate">
          <img
            src="https://shop.blackpinkmusic.com/cdn/shop/files/BLKPNK-0036_Site_Reskin_-_Album_Release__Logo-01_x150.png?v=1663280100"
            alt=""
          />
        </Nav.Link>
      </div>

      <div>
        {["xxl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <div>
                <Navbar.Brand href="./"></Navbar.Brand>
              </div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Tên User
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/music">Music</Nav.Link>
                    <Nav.Link href="/appearal">Appearal</Nav.Link>
                    <Nav.Link href="/collection">Collection</Nav.Link>
                    <Nav.Link href="/acessories">Acessories</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>

                    {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default CustomizedNavbar;
