import logo from "./logo.svg";
import "./App.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import DemoWelcome from "./components/DemoWelcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoWelcome />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
