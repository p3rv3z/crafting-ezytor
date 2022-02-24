import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';

import { Toolbox } from '../components/Toolbox';
import { SettingsPanel } from '../components/SettingsPanel';
import { Topbar } from '../components/Topbar';

import { Container } from '../components/elements/Container';
import { Button } from '../components/elements/Button';
import { Card, CardTop, CardBottom } from '../components/elements/Card';
import { Text } from '../components/elements/Text';
import { Editor, Frame, Element } from "../../packages/core/src";


export default function Home() {
  
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>

        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Element is={Button} id="button" padding={5} background="#eee" canvas>
                {/* <Card /> */}
                {/* <Button size="small" variant="outlined">Click</Button> */}
                {/* <Text size="small" text="Hi world!" /> */}
                {/* <Container padding={6} background="#999">
                  <Text size="small" text="It's me again!" />
                </Container> */}
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
