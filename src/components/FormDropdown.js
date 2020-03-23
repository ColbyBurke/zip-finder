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

const FormDropdown = props => {
  if (props.isDisplayed) {
    return (
      <div>
        <h1>
          {props.temperature}{props.unit}
        </h1>
      </div>
    );
  }
};

export default FormDropdown;
