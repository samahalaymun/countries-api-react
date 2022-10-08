import React from 'react'
import { Link } from 'react-router-dom';
import Filter from '../Filter';
import { Container } from '@mui/material';
import Countries from '../Countries';

function Home(props) {
  return (
    <>
      <main>
        <Container maxWidth='lg'>
        <Filter/>
        <Countries ></Countries>
        </Container>
      </main>
    </>
  )
}

export default Home
