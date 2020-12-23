import { GitHub, LinkedIn, CloudDownloadRounded } from '@material-ui/icons';
import React from 'react';
import './style.css';
import { Toolbar } from '@material-ui/core';

function Home() {
  return (
    <div class="slider_area">
     
      <div class="single_slider  d-flex align-items-center slider_bg_1" style={{
    position: 'relative',
    zIndex: 0,
    height: '900px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: `url(${require('../../assets/banner.png')})`
}}>
        <div class="social_links">
          <ul>
            <li><a href="#"> <GitHub style={{ fontSize: 28 }}/></a></li>
            <li><a href="#"> <LinkedIn style={{ fontSize: 28 }}/> </a></li>
            <li><a href="#"> <CloudDownloadRounded style={{ fontSize: 28 }}/> </a></li>
          </ul>
        </div>
        <Toolbar id="back-to-top-anchor" />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-12">
              <div class="slider_text text-center">
                <p style={{ fontSize: 44 }}>
                  Hello! This is <span style={{ fontSize: 52, color: 'white'}}>Ajaykkumar</span>
                            </p>
                <span className="position" style={{ fontSize: 30}}>Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;