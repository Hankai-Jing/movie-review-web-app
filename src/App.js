import './vendors/bootstrap/bootstrap-5.1.1-dist/css/bootstrap.css';
import './vendors/bootstrap/bootstrap-5.1.1-dist/css/cyborg.bootstrap.min.css'
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';
import './App.css';
import './MovieReview.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import ProfileScreen from "./components/ProfileScreen";
import RegisterScreen from "./components/RegisterScreen";
import Alert from "./components/Alert";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/error" element={<Alert/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
