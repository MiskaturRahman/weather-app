import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [countryName, setCountryName] = useState<string>("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCountryName(event.target.value);
  };

  const onSubmit = () => {
    navigate(`/country/${countryName}`);
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
