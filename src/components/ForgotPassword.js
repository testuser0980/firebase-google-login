import React, { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ForgotPassword() {
  const { resetPass } = useAuth();
  const emailRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await resetPass(emailRef.current.value);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button onClick={handleSubmit} type="submit" className="w-100 mt-3">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Go back to <Link to="/login">login</Link>
      </div>
    </>
  );
}
