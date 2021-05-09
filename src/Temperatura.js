import "./styles.css";
import React from "react";

class Temperatura extends React.Component {
  render() {
    return (
      <div>
        {this.props.nome} {this.props.valor}º
      </div>
    );
  }
}

export default Temperatura;
