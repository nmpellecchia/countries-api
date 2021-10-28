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
          <i
            class="devicon-github-original"
            style={{ color: 'white', fontSize: '2rem', padding: '1rem' }}
          ></i>
          <i
            class="devicon-linkedin-plain"
            style={{ color: 'white', fontSize: '2rem', padding: '1rem' }}
          ></i>
        </div>
      </Container>
    </Navbar>
  );
}
