import React, { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    login(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button onClick={handleSubmit} type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
        <div className="forgot-pass text-center mb-3">
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/">Create Account</Link>
      </div>
    </>
  );
}
