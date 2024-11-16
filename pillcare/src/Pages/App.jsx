import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignupPage from './SignupPage'
import PacientRegister from './PacientRegister'
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import RealTimeMonitoring from "./RealTimeMonitoring";
import Statistics from "./Statistics";
import Help from "./Help";
import LandingPage from "./Landing";
function App() {
  return (
    <Routes>
     <Route path="/" element={<LandingPage />} />
      <Route index path="/login" element={<Login />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="pacientRegister" element={<PacientRegister/>} />
      <Route path="home" element={<Dashboard/>}/>
      <Route path="user" element={<UserProfile/>}/>
      <Route path="monitoring" element={<RealTimeMonitoring/>}/>  
      <Route path="stats" element={<Statistics/>}/>
      <Route path="/help" element={<Help />} />
     


    </Routes>
  );
}

export default App;
