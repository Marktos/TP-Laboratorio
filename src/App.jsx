import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Portfolio from "./components/Portfolio/portfolio";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <CssBaseline />
      <Header />
      <Container>
        <Portfolio />
      </Container>
    </div>
  );
}

export default App;
