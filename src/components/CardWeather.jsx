import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
} from "shards-react";

const CardWeather = ({ data }) => {

  const translateCondition = (condition) => {
    if (condition === "Partly cloudy") {
      return "Parcialmente nublado";
    } 
    else if (condition === "Sunny") {
      return "Soleado";
    }
    else if (condition === "Patchy rain possible") {
      return "Posible lluvia";
    }
    else if (condition === "Heavy rain") {
      return "Lluvia fuerte";
    }
    else if (condition === "Moderate rain") {
      return "Lluvia moderada";
    }
    else if (condition === "Overcast") {
      return "Nublado";
    }
    else if (condition === "Patchy moderate snow") {
      return "Nieve moderada";
    }
  };

  return (
    <>
      {data.map((forecast) => (
        <Col xs="12" sm="12" md="6" lg="4" className="mb-3" key={forecast.date}>
          <Card style={{ maxWidth: "300px", height: "410px" }}>
            <CardHeader>
              {new Date(forecast.date).toDateString()}
            </CardHeader>
            <CardImg
              src={forecast.icon_url}
              style={{ height: 100, display: "block", margin: "auto" }}
            />
            <CardBody>
              <Row>
                <Col className="text-center">
                  <CardTitle>
                    <h4>{forecast.max_temp_c}°</h4>
                  </CardTitle>
                </Col>
              </Row>
              <hr />
              <p>
                <Row>
                  <Col>🧊: {forecast.min_temp_c}°</Col>
                  <Col>☀️: {forecast.max_temp_c}°</Col>
                </Row>
                🌡️ Condicion: {translateCondition(forecast.condition)} <br />
                {forecast.chance_of_rain
                  ? "🌨️ Posibilidad de Lluvia: " +
                    forecast.chance_of_rain +
                    "%"
                  : ""}
              </p>
              <p></p>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardWeather;