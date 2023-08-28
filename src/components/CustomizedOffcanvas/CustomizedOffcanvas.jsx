import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./CustomizedOffcanvas.css";
import Cart from "../Cart/Cart";
const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <button variant="primary" onClick={toggleShow} className="me-2">
        <i class="fa-solid fa-cart-shopping fa-2xl"></i>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart></Cart>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function CustomizedOffcanvas() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default CustomizedOffcanvas;
