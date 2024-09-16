import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/dashboard/:channelId' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App;