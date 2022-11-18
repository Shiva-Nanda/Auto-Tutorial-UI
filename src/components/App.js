import React from 'react'
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Profiles from "./Profiles";
import SmIcons from "./SmIcons";
import NavBar from "./NavBar";
import TempComp from "./tempComp";
import ProfileMenu from "./profileMenu";
import ProfileCard from './profileCard';
import UserProfile from './userProfile';
import OrgProfileMenu from './orgProfileMenu';
import OrgProfileCard from './orgProfileCard';
import OrgProfile from './orgProfile';

function App() {
  return (
    <React.Fragment>
      
    {/* <BrowserRouter> */}
      {/* <AuthProvider> */}
        <NavBar style={{ margin: "0" }} />
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh", minWidth: "100vw"}}
        >
          <div>
            <Router>
              <AuthProvider>
                <Routes>
                  {/* <Route path="/debug" element={<OrgProfile />} /> */}
                  <Route path="/organizationProfile" element={<OrgProfile />} />
                  <Route path="/userProfile" element={<UserProfile />} />
                  <Route path="/profileCreation" element={<Profiles />} />
                  <Route
                    exact
                    path="/"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Login />} />
                </Routes>
              </AuthProvider>
            </Router>
          </div>
        </Container>
      {/* </AuthProvider> */}
    {/* </BrowserRouter> */}
    </React.Fragment>
  );
}

export default App;
