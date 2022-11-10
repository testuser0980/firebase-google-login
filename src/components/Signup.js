import React, { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
}
