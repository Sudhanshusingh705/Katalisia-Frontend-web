import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// Login
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={  <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
