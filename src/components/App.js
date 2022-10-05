import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Profiles from "./Profiles";
import SmIcons from "./SmIcons";
import NavBar from "./NavBar";
import TempComp from "./tempComp";


function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", minWidth: "100vw"}}
      >
        <div>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/debug" element={<div></div>} /> 
                <Route path="/test" element={<Profiles 
                />} />
                <Route
                  exact
                  path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Signup />
                  }
                />
                <Route
                  path="/login"
                  element={
                      <Login />
                  }
                />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
