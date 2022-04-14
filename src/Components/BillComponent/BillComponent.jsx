import { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import { RecoveryAll } from "../../Configurations/Server";
import { años } from "../../Configurations/constants";
import { capitalizeFirstLetter } from "../../Helpers/CapitalizeFirstLetter";
import BillItemComponent from "../BillItemComponent";
import { SearchContext } from "../../Configurations/context";
import "./BillComponent.scss";

export default function BllComponent() {
  const [result, setResult] = useState([]);
  const [info, setInfo] = useState(null);
  const [month, setMonth] = useState(null);
  const searchValue = useContext(SearchContext);
  
  console.log(searchValue);

  useEffect(() => {
    const completeObject = RecoveryAll();
    var array = [];

    años.forEach((element) => {
      array.push(completeObject[element]);
    });

    if (result.length === 0) {
      setResult(array);
    }
  }, [result]);

  return (
    <div className="card-container-parent">
      <div className="card-container">
        {result?.map((month, index) => {
          const element = Object.keys(month);

          return element?.map((item, llave) => {
            return (
              <Item
                key={llave}
                servicio={result[index][item]}
                mes={item}
                setInfo={setInfo}
                setMonth={setMonth}
              />
            );
          });
        })}
      </div>
      <div className="card-container-brother">
        {info === null ? (
          <h3> No se seleccionó ningún mes </h3>
        ) : (
          <div className="bill-item-parent">
            {info.comprobantes.length > 0 && (
              <h3>Comprobantes del mes de {month}</h3>
            )}
            <BillItemComponent item={info} />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

const Item = ({ servicio, mes, setInfo, setMonth }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="item"
      onClick={() => {
        setInfo(servicio);
        setMonth(mes);
      }}
    >
      <Card.Body>
        <Card.Title>
          {capitalizeFirstLetter(mes)} {servicio.año}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
