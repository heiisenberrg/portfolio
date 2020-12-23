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
    textStyle: { marginBottom: -2, marginTop: 8}
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
    textStyle: { marginBottom: -15, marginTop: 10}
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
function Skills(props) {
  return (
    <Grid xs={12} container justify="center" alignItems="center" direction="column">
      <h1 style={{ marginBottom: 60, fontSize: 52 }}>Skills</h1>
      <Container fixed style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid xs={12} container justify="center" alignItems="center" direction="row">
          {
            skills.map((skill) => {
              return (
                <Box style={{
                  border: '1px solid #E8E8E8', 
                  padding: '25px', 
                  display: 'flex', 
                  borderRadius: 4,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#222',
                  width: 200,
                  height: 200,
                  margin: 20
                }}>
                  <img src={skill.imageUrl} alt='' style={{ width: skill.width ? skill.width : 100, height: skill.height ? skill.height : 100, borderRadius: 4 }} />
                  <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15, color: 'white', ...skill.textStyle }}>{skill.name}</p>
                </Box>
              )
            })
          }
        </Grid>
      </Container>
    </Grid>
  )
}

export default Skills;