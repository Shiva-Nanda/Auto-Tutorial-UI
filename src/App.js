import React from "react";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/newAuth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Profiles from "./components/Profiles";
import SmIcons from "./components/SmIcons";
import NavBar from "./components/NavBar";
import TempComp from "./components/tempComp";
import ProfileMenu from "./components/profileMenu";
import ProfileCard from "./components/profileCard";
import OrgProfileMenu from "./components/orgProfileMenu";
import OrgProfileCard from "./components/orgProfileCard";
import OrgProfile from "./components/orgProfile";
import Createpost from './components/Post/Createpost';
import Editor from './components/Post/Editor';
import UserProfileCard from "./components/UserProfile";


function App() {
  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      {/* <AuthProvider> */}
      <Router>
        <NavBar style={{ margin: "0" }} />
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh", minWidth: "100vw" }}
        >
          <div>
            <AuthProvider>
              <Routes>
                {/* <Route path="/debug" element={<OrgProfile />} /> */}
                <Route path="/organizationProfile" element={<OrgProfile />} />
                <Route path="/userProfile" element={ <UserProfileCard/>}/>
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
                <Route path="/createpost" element={<Createpost />} />
                  <Route path="/edit" element={<Editor />} />
              </Routes>
            </AuthProvider>
          </div>
        </Container>
      </Router>
      {/* </AuthProvider> */}
      {/* </BrowserRouter> */}
    </React.Fragment>
  );
}

export default App;
