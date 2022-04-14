import { Popover, OverlayTrigger, Button } from "react-bootstrap";

import "./PopOverComponent.scss";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body className="pop-up-div">
      <iframe
        title="google maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14241.349738749308!2d-65.22161613022462!3d-26.8292178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1367bbdb1d%3A0x34e4c5fb1a0492a7!2sAv.%2024%20de%20Septiembre%201021%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1649808242204!5m2!1ses-419!2sar"
        width="400"
        height="300"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Popover.Body>
  </Popover>
);

export const PopOverComponent = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="danger">Mapa</Button>
  </OverlayTrigger>
);
