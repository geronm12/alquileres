import { Accordion, Table } from "react-bootstrap";
import { Popup } from "reactjs-popup";

import "./BillItemComponent.scss";

export default function BillItemComponent({ item: { comprobantes } }) {
  if (comprobantes === null || comprobantes === undefined) {
    return;
  }

  return (
    <div style={{ width: "100%" }}>
      {comprobantes.length > 0 ? (
        <div className="acordion-parent">
          <Accordion defaultActiveKey="0">
            {comprobantes?.map((element, index) => {
              return <BillItemAcordion element={element} eventKey={index} />;
            })}
          </Accordion>
        </div>
      ) : (
        <h1> No disponible </h1>
      )}
    </div>
  );
}

const BillItemAcordion = ({ element, eventKey }) => {
  return (
    <Accordion.Item eventKey={eventKey} className="variant-danger">
      <Accordion.Header>{element.servicio}</Accordion.Header>
      <Accordion.Body>
        <BillItemAcordionBody element={element} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

const BillItemAcordionBody = ({ element }) => {
  console.log(element);

  const boldStyle = {
    fontWeight: "bold",
  };

  return (
    <Table hover>
      <tbody>
        <tr>
          <td style={boldStyle}>Costo Total</td>
          <td>{element.costoTotal}</td>
        </tr>
        <tr>
          <td style={boldStyle}>Fecha de Pago</td>
          <td>{element.fecha}</td>
        </tr>
        <tr>
          <td style={boldStyle}>Evidencia Adjunta</td>
          <td>
            <Popup
              trigger={
                <button>
                  <img
                    src={element.evidenciaAdjunta}
                    alt="#"
                    className="item-image"
                  />
                </button>
              }
            >
              <img src={element.evidenciaAdjunta} alt="#" />
            </Popup>
          </td>
        </tr>
        <tr>
          <td style={boldStyle}>Estado</td>
          <td
            style={element.estado === 0 ? { color: "red" } : { color: "green" }}
          >
            {element.estado === 0 ? "Adeudado" : "Pagado"}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
