import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  InputLabel,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";

export const textFieldStyle = {
  marginBottom: "10px",
  width: "100%",
  "& input": {
    // targeting the input element
    height: "40px", // adjust as needed
    padding: "0 14px", // adjust as needed
  },
};

const AdminLogin = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoginSuccessful, setLoginSuccessful] = useState(false);

  if (isLoginSuccessful) {
    router.push("/admin/home");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate(username, password);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Here you would typically send the form data to your server, e.g., using fetch or axios
      console.log(`Logging in with: ${username} and password: ${password}`);
      setLoginSuccessful(true);
    }
  };

  const validate = (username, password) => {
    const newErrors = {};
    if (!username) newErrors.username = "Username cannot be blank";
    if (!password) newErrors.password = "Password cannot be blank";
    return newErrors;
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          textAlign: "center",
          // backgroundColor: "#f0f0f0",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box>
            <InputLabel
              htmlFor="username"
              sx={{
                fontWeight: "bold",
                marginBottom: "5px",
                display: "block",
                textAlign: "left",
              }}
            >
              Username:
            </InputLabel>
            <TextField
              id="username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              sx={textFieldStyle}
              // required
            />
          </Box>
          <Box>
            <InputLabel
              htmlFor="password"
              sx={{
                fontWeight: "bold",
                marginBottom: "5px",
                display: "block",
                textAlign: "left",
              }}
            >
              Password:
            </InputLabel>
            <TextField
              id="password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              sx={textFieldStyle}
              // required
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "30%", borderRadius: 4 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
