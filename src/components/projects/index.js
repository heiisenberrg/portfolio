import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';

function Projects(props) {
  return (
    <Grid xs={12} container justify="center" alignItems="center" style={{ backgroundColor: '#001D38', flexDirection: 'column' }}>
      <p style={{
        marginBottom: 0,
        fontSize: 16,
        letterSpacing: 3,
        marginTop: 120,
        color: 'white',
        textTransform: 'uppercase'
      }}>projects</p>
      <h1 style={{
        marginBottom: 60,
        fontSize: 52,
        color: 'white',
        marginTop: 5
      }}>Some of projects I worked</h1>
      <Container fixed>
        <Grid container xs={12} alignItems="center" justify="space-evenly" direction="row">
          <Grid xs={3}>
            <Box style={{
              border: '1px solid #615CFD', padding: '35px 25px', display: 'flex', borderRadius: 4,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={require('../../assets/mpl.jpg')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
              <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15, color: 'white' }}>MPL Pro</p>
              <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>React Native</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{
                  color: 'white',
                  textAlign: 'center'
                }}>Mobile Premier League (MPL) is an online gaming platform that offers a plethora of games and you can play 50+ games on your mobile, including fantasy sports.</p>
              </div>
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box style={{
              border: '1px solid #E8E8E8', padding: '35px 25px', display: 'flex', borderRadius: 4,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={require('../../assets/travo.png')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
              <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15, color: 'white' }}>Traform Travo</p>
              <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>React Native</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{
                  color: 'white',
                  textAlign: 'center'
                }}>Traform is a cloud based and mobile powered software, provides capabilities to manage processes from travel request, expense reporting, and invoice management.</p>
              </div>
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box style={{
              border: '1px solid #E8E8E8', padding: '35px 25px', display: 'flex', borderRadius: 4,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={require('../../assets/ideas2it.jpeg')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
              <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15, color: 'white' }}>Power 20</p>
              <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>React</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{
                  color: 'white',
                  textAlign: 'center'
                }}>The Power 20 is all about levelling up your workouts. Acquiring more strength, more muscle endurance and capability. A dashboard application for the admin to handle all the users and the workout details.</p>
              </div>
            </Box>
          </Grid>
        </Grid>


        <Grid container xs={12} alignItems="center" justify="space-evenly" direction="row" style={{ marginTop: 60, marginBottom: 60 }}>
          <Grid xs={3}>
            <Box style={{
              border: '1px solid #E8E8E8', padding: '35px 25px', display: 'flex', borderRadius: 4,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={require('../../assets/ideas2it.jpeg')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
              <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15, color: 'white' }}>KissCam</p>
              <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>React</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{
                  color: 'white',
                  textAlign: 'center'
                }}>KissCam, brings arena and venue operators a new, practically limitless revenue stream through fan participation, ad sales, social media promotion and data information source. A dashboard application to manage the contest, participants and winners.</p>
              </div>
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box style={{
              border: '1px solid #E8E8E8', padding: '35px 25px', display: 'flex', borderRadius: 4,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={require('../../assets/ideas2it.jpeg')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
              <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15, color: 'white', textAlign: 'center' }}>Akasha</p>
              <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>React Native</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{
                  color: 'white',
                  textAlign: 'center'
                }}>Akasha, A Game of Life uses universal mathematics to create an outline of your life’s purpose and guide players through a series of contemplative practices that unlock their greatest potential to help them serve in the evolution of the world’s collective consciousness.</p>
              </div>
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box style={{
              border: '1px solid #E8E8E8', padding: '35px 25px', display: 'flex', borderRadius: 4,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={require('../../assets/ideas2it.jpeg')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
              <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15, color: 'white' }}>CAMS (Instabike)</p>
              <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>Node</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{
                  color: 'white',
                  textAlign: 'center'
                }}>CAMS (Instabike), a reputed Mutual Fund Transfer Agency,  aims to provide a cloud-based platform for manufacturers, financiers, and dealers where the services provided by the three can be optimised for the benefit of the customer.</p>
              </div>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Grid>
  )
}

export default Projects;