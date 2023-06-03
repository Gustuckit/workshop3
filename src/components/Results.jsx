import React, { useContext, useEffect } from "react";

import { Context } from "../App";

const Results = () => {
  const [result, setResult] = useContext(Context);
  return (
    <div>
      <h1>Submitted data:</h1>
      <div>
        <p>{result.firstName}</p>
        <p>{result.lastName}</p>
        <p>{result.email}</p>
        <p>{result.address}</p>
        <p>{result.postal}</p>
        <p>{result.city}</p>
        <p>{result.phone}</p>
      </div>
    </div>
  );
};

export default Results;
