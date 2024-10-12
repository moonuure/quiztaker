import React, { useState } from "react";
import { Button, TextField, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../DB/firebase"; // Make sure the path is correct based on your project structure

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Firebase Authentication using email (ID) and name (as password for demo)
      await signInWithEmailAndPassword(auth, studentId, name);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error: ", error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, textAlign: "center" }}>
        <Typography variant="h4">Student Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Student ID"
            margin="normal"
            variant="outlined"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
