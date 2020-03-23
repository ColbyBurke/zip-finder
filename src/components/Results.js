import React from "react";
import {
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import DisplayZip from "./DisplayZip";
import Obj from './DummyObject'

const Results = props => {
  let arr = Obj.filter(x => x.temperature === props.temperature)
  return arr.map(x => <div>
    <h1>{x.zipcode}</h1>
    <h2>{x.temperature}</h2>
    <div>the map will go here</div>
  </div>)
}

export default Results;
