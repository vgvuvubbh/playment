import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./payment/Payment";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Payment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
