import React from 'react';
import { Link } from 'react-router-dom';
//
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="h-50 inline-block">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand>🌎 World Countries</Navbar.Brand>
        </Link>
        <div>
          <a
            href="https://github.com/nmpellecchia"
            rel="external"
            style={{ textDecoration: 'none' }}
          >
            <i
              className="devicon-github-original"
              style={{ color: 'white', fontSize: '2rem', padding: '1rem' }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-pellecchia-440a01217/"
            rel="external"
            style={{ textDecoration: 'none' }}
          >
            <i
              className="devicon-linkedin-plain"
              style={{ color: 'white', fontSize: '2rem', padding: '1rem' }}
            ></i>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
