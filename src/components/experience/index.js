import { Grid, Box } from '@material-ui/core';
import React from 'react';
import { PinDropRounded, DateRange } from '@material-ui/icons';

function Experience(props) {
  return (
    <Grid xs={12} container justify="center" alignItems="center">
      <h1 style={{ marginBottom: 60, fontSize: 52 }}>Experience</h1>
      <Grid xs={12} container justify="space-between" alignItems="center" direction="row">
        <Grid xs={3}>
          <Box style={{
            border: '1px solid #615CFD', padding: '35px 25px', display: 'flex', borderRadius: 4,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={require('../../assets/mpl.jpg')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
            <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15 }}>Mobile Premier League</p>
            <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>Software Engineer</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <PinDropRounded style={{ color: '#615CFD', marginRight: 10 }} />
              <p>Bangalore, India</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <DateRange style={{ color: '#615CFD', marginRight: 10 }} />
              <p>1 Mar, 2020 - Till date</p>
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
            <img src={require('../../assets/traform.jpeg')} alt='' style={{ width: 100, height: 100, borderRadius: 4 }} />
            <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15 }}>Traform Technologies</p>
            <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>Software Engineer</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <PinDropRounded style={{ color: '#615CFD', marginRight: 10 }} />
              <p>Bangalore, India</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <DateRange style={{ color: '#615CFD', marginRight: 10 }} />
              <p>13 Jun, 2019 - 28 Feb, 2020</p>
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
            <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: -15 }}>Ideas2It Technologies</p>
            <p style={{ fontSize: 16, fontWeight: 'normal', color: '#777777' }}>Software Engineer</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <PinDropRounded style={{ color: '#615CFD', marginRight: 10 }} />
              <p>Chennai, India</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <DateRange style={{ color: '#615CFD', marginRight: 10 }} />
              <p>19 Sep, 2017 - 4 Jun, 2019</p>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Experience;