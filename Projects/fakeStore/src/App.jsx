import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Products from "./assets/pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
