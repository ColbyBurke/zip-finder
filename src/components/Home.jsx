import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import DisplayZip from "./DisplayZip";
import FormDropdown from "./FormDropdown";
import Results from "./Results";
import DummyObject from "./DummyObject";

const Home = () => {
  return (
    <div className="home">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
          ;
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;
