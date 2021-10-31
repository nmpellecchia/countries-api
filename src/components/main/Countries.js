import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCountries } from '../../utilities/storage/countries';
//
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function CountryList(props) {
  const [slicedCountries, setSlicedCountries] = useState([]);
  const PAGE_OFFSET = 25;
  const amountPerRow = 5;

  useEffect(() => {
    let allCountries;
    let items = [];
    props.currentPage === 1
      ? (allCountries = getCountries(parseInt(props.currentPage)))
      : // countries are stored 1_25; 26_50 etc. This formula gives the correct numbers to get from the storage
        // E.g.: x(offset)*y(pageNumber)+1 ::: 25*2+1 = 51
        (allCountries = getCountries(
          PAGE_OFFSET * parseInt(props.currentPage) + 1
        ));
    // get the countries divided in the amount I want
    while (allCountries.length) {
      items.push(allCountries.splice(0, amountPerRow));
    }
    setSlicedCountries(items);
  }, [props.currentPage]);

  return (
    <Container fluid className="m-0 w-100">
      {slicedCountries.map((ctries, i) => {
        let toReturn = [];

        toReturn.push(
          <Row key={i}>
            {ctries.map((ctry, i) => {
              return <CountryCard key={i} country={ctry} />;
            })}
          </Row>
        );

        return toReturn;
      })}
    </Container>
  );
}

function CountryCard(props) {
  const { country } = props;
  return (
    <Col>
      <Card className="bg-dark text-white m-1" style={{ height: '90%' }}>
        <Card.Img
          variant="top"
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          style={{ objectFit: 'cover', height: '50%' }}
        />
        <Card.Body className="d-flex flex-column justify-content-around">
          <Card.Text>{country.name.common}</Card.Text>
          <Link
            /* to="/selected-country" */ to={{
              pathname: '/selected-country/' + country.altSpellings[0],
              country: country,
            }}
          >
            <Button variant="outline-light">View more</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
