import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Profiles from "./Profiles";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/test" element={<Profiles />} />
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
                    <div
                      className="w-100"
                      style={{
                        minWidth: "400px",
                        maxWidth: "600px",
                      }}
                    >
                      <Signup />
                    </div>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <div
                      className="w-100"
                      style={{
                        minWidth: "400px",
                        maxWidth: "600px",
                      }}
                    >
                      <Login />
                    </div>
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
