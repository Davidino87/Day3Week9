// src/components/Welcome.jsx
import React from "react";
import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="mt-4">
      <h2>Welcome to EpiBooks!</h2>
      <Alert variant="info">Explore our collection of amazing books. Happy reading!</Alert>
    </div>
  );
};

export default Welcome;
