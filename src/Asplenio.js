import "./styles.css";
import Temperatura from "./Temperatura.js";
import React from "react";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

class Asplenio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Typography>Asplenio</Typography>
          <span className="material-icons mdc-top-app-bar__action-item">location_on</span>
          <Typography>Videira</Typography>
          <span className="material-icons mdc-top-app-bar__action-item">thermostat</span>
          <Temperatura valor="28" />
        </AppBar>
        <div>
            <Card classeName="piscina ">
              <CardContent>
                <span className="material-icons">hot_tub</span>
                <Typography>Piscina</Typography>
                <Typography>26°</Typography>
              </CardContent>
            </Card>
            <Card classeName="paineis">
              <CardContent>
                <span className="material-icons">gite</span>
                <Typography>Painéis</Typography>
                <Typography>26°</Typography>
              </CardContent>
            </Card>
            <h2>Temperatura desejada</h2>
            <Typography id="discrete-slider-always" gutterBottom>
              Escolha a Temperatura
            </Typography>
            <Slider
              defaultValue={80}
              aria-labelledby="discrete-slider-always"
              step={1}
              valueLabelDisplay="on"
            />
          </div>
          <div>
            <h2>Controle do Motor</h2>
            <div>
              <Chip label="Manual" />
              <Chip label="Automático" />
            </div>
            Ligar Motor
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={1} />}
                label="Ligado"
              />
            </FormGroup>
          </div>
          <Card className="status">
            <CardContent>
              <span className="material-icons">bolt</span>
              <Typography>Motor Ligado</Typography>
              <Button>DESLIGAR</Button>
            </CardContent>
          </Card>
      
      </React.Fragment>
    );
  }
}

export default Asplenio;
