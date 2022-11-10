import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="/dash" element={<Dashboard />} />
              </Routes>
            </div>
          </Container>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
