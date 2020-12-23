import { Container, Grid, Box } from '@material-ui/core';
import React from 'react';
import { PinDropRounded, DateRange } from '@material-ui/icons';

const skills = [
  {
    imageUrl: require('../../assets/html.png'),
    name: 'HTML'
  },
  {
    imageUrl: require('../../assets/css.png'),
    name: 'CSS',
    width: 130,
    height: 130,
    textStyle: { marginBottom: -2, marginTop: 8 }
  },
  {
    imageUrl: require('../../assets/js-logo.png'),
    name: 'Javascript'
  },
  {
    imageUrl: require('../../assets/node-logo.png'),
    name: 'Node',
    width: 145
  },
  {
    imageUrl: require('../../assets/psql.png'),
    name: 'PSQL',
    width: 130
  },
  {
    imageUrl: require('../../assets/react-logo.webp'),
    name: 'React'
  },
  {
    imageUrl: require('../../assets/react-native-logo.png'),
    name: 'React Native',
    height: 110,
    textStyle: { marginBottom: -15, marginTop: 10 }
  },
  {
    imageUrl: require('../../assets/redux-logo.png'),
    name: 'Redux'
  },
  {
    imageUrl: require('../../assets/firebase-logo.png'),
    name: 'Firebase'
  }
]
function Education(props) {
  return (
    <Grid xs={12} container justify="center" alignItems="center" direction="column" style={{ backgroundColor: '#292f3d', paddingBottom: 25 }}>
      <h1 style={{ marginBottom: 20, fontSize: 52, color: 'white' }}>Education</h1>
      <Container fixed style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid xs={12} container justify="center" alignItems="center" direction="row">
          <Box style={{
            padding: '15px',
            borderRadius: 8,
            backgroundColor: '#222',
            margin: 10
          }}>
            <p style={{ fontSize: 22, fontWeight: 'bold', color: 'rgb(227, 228, 232)', marginBottom: -15 }}>UNDERGRAD - Bachelor of Engineering</p>
            <p style={{ fontSize: 18, fontWeight: '500', color: '#5c708a' }}>Electronics & Communication</p>
            <p style={{ fontSize: 16, fontWeight: 'bold', color: 'white', letterSpacing: 1 }}>I pursued Engineering in Anna University affliated St.Joseph's Engineering college, Chennai.

Graduated with First class in the year 2017.</p>
          </Box>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Education;