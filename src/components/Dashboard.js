import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  });
  return (
    <>
      <Card className="p-3">
        <h2 className="text-center mb-4">Profile</h2>
        <span>
          <b>Email: </b> {currentUser && currentUser.email}
        </span>
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </>
  );
}
