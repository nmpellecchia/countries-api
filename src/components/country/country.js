import { React } from 'react';
//
import './country.css';
//
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//
import { useLocation } from 'react-router-dom';

export function SelectedCountry() {
  const { country } = useLocation();

  return (
    <>
      <Container fluid>
        <Row className="main-info">
          <Col className="d-flex flex-column justify-content-around align-items-center">
            <h1 className="cty-title"> {country.name.common}</h1>
            <h2 className="cty-capital">Capital: {country.capital}</h2>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image className="country-img" src={country.flags.svg} fluid />
          </Col>
        </Row>
        <Row className="complement-info">
          <Col className="p-2">
            <h3 className="cty-continent p-3">Continent: {country.region}</h3>
            <h3 className="cty-off-name p-3">
              Official name: {country.name.official}
            </h3>
            <h3 className="cty-lang p-3">
              Languages: {Object.values(country.languages)}
            </h3>
          </Col>
          <Col className="p-2">
            <h3 className="cty-pop p-3">
              Population: {country.population} inhabitants
            </h3>
            <h3 className="cty-ar p-3">Area: {country.area} km</h3>
            <h3 className="cty-time p-3">Timezones: {country.timezones}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
