import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lander from "./pages/lander/Lander";

export function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
