import React, { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const navigate = useNavigate();
  const { currentUser, updateMail, updatePass } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateMail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePass(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/dash");
      })
      .catch(() => {
        console.log("Error to update profile");
      });
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={currentUser && currentUser.email}
                ref={emailRef}
                required
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same password"
              />
            </Form.Group>
            <Button onClick={handleSubmit} type="submit" className="w-100 mt-3">
              Update Profile
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/dash">Cancel</Link>
      </div>
    </>
  );
}
