import { React, useState, useEffect } from 'react';
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
        <Row>
          <Col>
            <h1 className="cty-title"> {country.name.common}</h1>
            <h2 className="cty-capital">Capital: {country.capital}</h2>
          </Col>
          <Col>
            <Image src={country.flags.svg} fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="cty-continent">Continent: {country.region}</h2>
            <h2 className="cty-off-name">
              Official name: {country.name.official}
            </h2>
            <h2 className="cty-lang">
              Languages: {Object.values(country.languages)}
            </h2>
          </Col>
          <Col>
            <h2 className="cty-pop">
              Population: {country.population} inhabitants
            </h2>
            <h2 className="cty-ar">Area: {country.area} km</h2>
            <h2 className="cty-time">Timezones: {country.timezones}</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
