import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./Config/PrivateRoute";

//Auth Pages
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import EmailPasswordReset from "./Pages/Auth/ResetPassword";

//Pages
import HomePage from "./Pages/HomePages/HomePage/HomePage";
import Profile from "./Pages/UserPages/Profile";

import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Default Pages, Non User Pages*/}
          <Route path="/" element={<HomePage />} />

          {/* Auth Routes */}
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/Signup" element={<Signup />} />
          <Route path="/auth/reset" element={<EmailPasswordReset />} />

          {/* User Protected */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
