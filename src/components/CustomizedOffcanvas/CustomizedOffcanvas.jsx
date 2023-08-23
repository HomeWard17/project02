// Offcanvas dành riêng cho giỏ hàng

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./CustomizedOffcanvas.css";
import CartItem from "../CartItem/CartItem";
const options = [
  {
    name: "Open Cart",
    scroll: true,
    backdrop: false,
  },
];

function CustomizedOffcanvas(props) {
  console.log("Đây là customnizedoffcanvas", props);
  console.log("customoffcanvas", props);
  function OffCanvasExample({ name, ...props }) {
    console.log("đây là offcanvasexample", props);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CartItem></CartItem>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default CustomizedOffcanvas;
