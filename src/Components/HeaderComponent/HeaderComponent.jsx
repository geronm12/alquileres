import { Card, ListGroup } from "react-bootstrap";
import PopOverComponent from "../PopOverComponent";

import "./HeaderComponent.scss";

export default function HeaderComponent() {
  const styleBold = {
    fontWeight: "bold",
  };

  const values = [
    {
      titulo: "Propietarios",
      value: "Gerónimo Naum Lopez - Florencia Gonzalez",
    },
    {
      titulo: "Fecha de Ingreso",
      value: "17 Noviembre 2022",
    },
    {
      titulo: "Monto Alquiler",
      value: "$29.000",
    },
  ];

  return (
    <div className="container">
      <Card style={{ width: "50rem" }} className="container_son">
        <Card.Body>
          <ListGroup variant="flush">
            {values.map((element, index) => {
              return (
                <ListGroup.Item key={index}>
                  <span style={styleBold}>{element.titulo}</span> :{" "}
                  <span>{element.value}</span>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <div className="container_son_son">
            <PopOverComponent />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
