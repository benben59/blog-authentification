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
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="http://localhost:3000/">
                <button class="btn btn-primary" type="button">
                  Home
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a href="http://localhost:3000/login">
                <button class="btn btn-primary" type="button">
                  Login
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a href="http://localhost:3000/admin">
                <button class="btn btn-primary" type="button">
                  Admin
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a href="http://localhost:3000/logged">
                <button class="btn btn-primary" type="button">
                  Logged
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a href="http://localhost:3000/account">
                <button class="btn btn-primary" type="button">
                  Account
                </button>
              </a>
            </li>
          </ul>
        </form>
      </nav>
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
