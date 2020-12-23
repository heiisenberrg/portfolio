import React from 'react';
import { AppBar, Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core';

function Header(props) {
  const { isScrolled } = props;
  return (
    <AppBar style={{ backgroundColor: isScrolled ? 'black' : 'transparent', boxShadow: 'none', color: 'red', position: isScrolled ? 'sticky' : 'absolute' }}>
      <Container fixed>
        <Grid xs={12} container alignItems="center">
          <Grid xs={3} />
          <Grid xs={6}>
            <List dense={false} style={{ display: 'flex' }}>
              <ListItem>
                <ListItemText
                  primary="Home"
                  style={{ color: 'white'}}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="About"
                  style={{ color: 'white'}}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Experience"
                  style={{ color: 'white'}}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Projects"
                  style={{ color: 'white'}}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Skills"
                  style={{ color: 'white'}}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Education"
                  style={{ color: 'white'}}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid xs={3} container justify="flex-end">
            <Button variant="contained" style={{ backgroundColor: '#D465EF', color: 'white', textTransform: 'capitalize', fontWeight: 900, fontSize: 16, 
            backgroundImage: 'linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)'}}>
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default Header;