import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LadingPage from "./pages/LadingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      navigate("/dashboard/0");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path='/' element={<LadingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard/:channelId' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App;