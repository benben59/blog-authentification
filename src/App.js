import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountScreen from "./screens/AccountScreen";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";
import LoggedScreen from "./screens/LoggedScreen";
import LoginScreen from "./screens/LoginScreen";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route index element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/logged" element={<LoggedScreen />} />
        <Route path="/account" element={<AccountScreen />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
