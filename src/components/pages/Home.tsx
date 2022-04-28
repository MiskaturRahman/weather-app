import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const history = useNavigate();

  const [countryName, setCountryName] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  const onSubmit = () => {
    history(`/country/${countryName}`);
    console.log(`${countryName}`);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h1>Welcome To Weather Applicaton</h1>
      <div>
        <TextField
          variant="standard"
          placeholder="Enter country Name"
          value={countryName}
          onChange={handleInputChange}
        />
      </div>
      <Button
        size="medium"
        variant="contained"
        color="success"
        disabled={!countryName}
        onClick={onSubmit}
        style={{ width: "210px", marginTop: "20px" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Home;
