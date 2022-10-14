import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth, getEmail } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { logout } from "../contexts/newAuth";


export default function Dashboard() {
  const [error, setError] = useState("");
  const [user, loading, userError] = useAuthState(auth);
  // console.log("email" + email)
  const navigateTo = useNavigate();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"> Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {user.email}
        </Card.Body>
      </Card>
    </>
  );
}
