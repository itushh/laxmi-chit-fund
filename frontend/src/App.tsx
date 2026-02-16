import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lander from "./pages/lander/Lander";
import Invest from "./pages/invest/Invest";
import Dashboard from "./pages/dashboard/Dashboard";

export function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
