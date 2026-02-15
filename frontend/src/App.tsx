import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lander from "./pages/lander/Lander";
import Invest from "./pages/invest/Invest";

export function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
