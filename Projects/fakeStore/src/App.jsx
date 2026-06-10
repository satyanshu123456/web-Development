import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </>
  );
}

export default App;
