import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import { Container, Toolbar, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Education from './components/education';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window, setIsScrolled } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  setIsScrolled(trigger);

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  return (
    <>
      <Header isScrolled={isScrolled} />
      <CssBaseline />
      <Home />

      <div style={{ marginTop: 30 }}>
        <Container fixed>
          <About />
        </Container>
      </div>
      <div style={{ marginTop: 30 }}>
        <Container fixed>
          <Experience />
        </Container>
      </div>
      <div style={{ marginTop: 80 }}>
        <Projects />
      </div>
      <div style={{ marginTop: 30 }}>
        <Skills />
      </div>
      <div style={{ marginTop: 60 }}>
        <Education />
      </div>

      <ScrollTop setIsScrolled={setIsScrolled}>
        <Fab size="small" aria-label="scroll back to top" style={{ backgroundColor: '#D465EF', color: 'white' }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
