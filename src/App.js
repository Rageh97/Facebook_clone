import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIN from "./Pages/SignIN/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Market from "./Pages/Market/Market";
import Games from "./Pages/Games/Games";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIN />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/market" element={<Market />} />
          <Route path="/games" element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
