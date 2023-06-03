import React, { useState } from "react";

import { Form, Results } from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Context = React.createContext();

const App = () => {
  const [result, setResult] = useState([]);
  return (
    <Context.Provider value={[result, setResult]}>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
