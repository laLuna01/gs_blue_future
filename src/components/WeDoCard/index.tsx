import React from "react";
import { Props } from "./interface";

const WeDoCard = (props: Props) => {
  return (
    <div className="we-do-card">
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p> 
    </div>
  )
};

export default WeDoCard;
