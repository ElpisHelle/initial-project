import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Example from "./components/auth/example";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
