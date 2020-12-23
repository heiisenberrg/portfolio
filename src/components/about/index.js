import React from 'react';
import { Grid } from '@material-ui/core';

function About(props) {
    return (
        <Grid container xs={12} alignItems="center">
            <Grid container xs={6} justify="center" alignItems="center">
                <img src={require('../../assets/about-us.png')} alt='' style={{ width: 400, height: 400 }} />
            </Grid>
            <Grid container xs={3} justify='flex-start' alignItems="center">
                <div class="main_title text-left">
                    <h2>Let’s
                    Introduce about
                            myself</h2>
                    <p>
                        Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven
                        midst their. Beast creepeth. Fish days.
                        </p>
                    <p style={{ marginBottom: 15 }}>
                        Is give may shall likeness made yielding spirit a itself together created after sea
                        is in beast beginning signs open god you're gathering whose gathered cattle let.
                        Creature whales fruit unto meat the life beginning all in under give two.
                        </p>
                </div>
            </Grid>
        </Grid>
    );
}

export default About;