import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Alert,
  Button,
} from "shards-react";
import CardWeather from "./CardWeather";
import usePost from "../hooks/usePost";

const SearchLocation = () => {
  const { data, pending, error, execute } = usePost();

  const [Country, setCountry] = useState({ days: "6", location: "" });

  const handleChange = ({ target }) => {
    setCountry({
      ...Country,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    execute({ data: Country });
  };
  
  return (
    <>
      <Container className="dr-example-container">
        <Row>
          <Col sm="12" md="12" lg="10" className="mt-5">
            <h5>Barra de busqueda</h5>
          </Col>

          <Col xs="8" sm="8" md="8" lg="10">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormInput
                  placeholder="Busca de pais o ciudad"
                  name="location"
                  value={Country.location}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Form>
          </Col>

          <Col xs="2" sm="2" md="2" lg="2">
            <Form onSubmit={handleSubmit}>
              <Button
                outline
                theme="secondary"
                type="submit"
                disabled={pending}
              >
                {pending ? "Cargando..." : "Buscar"}
              </Button>
            </Form>
          </Col>

          <Col xs="12" sm="12" md="12" lg="12" className="mt-3">
            {error && <Alert theme="info">La region que usted busca no ha sido encontrada.</Alert>}
          </Col>

        </Row>
      </Container>

      <Container className="dr-example-container" className="mt-5">
        <Row>
            
            {data && <CardWeather data={data} />}
        </Row>
      </Container>
    </>
  );
};

export default SearchLocation;
