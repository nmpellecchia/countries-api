import { React, useEffect, useState } from 'react';
import { getCountries } from '../../utilities/storage/countries';
//
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
    <Container>
      {slicedCountries.map((ctries, i) => {
        let toReturn = [];
        /* console.log('asdfr');
        console.log(ctries); */
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
      <CardGroup>
        <Card className="bg-dark text-white">
          {/* I will remove the flags for now, as the API is having an error at the time of writing this code */}
          {/* <Card.Img
          variant="top"
          src={country.flag}
          alt={`Flag of ${country.name}`}
        /> */}
          <Card.Body>
            <Card.Text>{country.name}</Card.Text>
            <Card.Link href="#">View more</Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </Col>
  );
}
