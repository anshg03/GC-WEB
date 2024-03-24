import React, { useEffect, useState } from "react";
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
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newError = validate(admin);

    if (newError?.length > 0) {
      setError(newError);
    } else {
      // Here you would typically send the form data to your server, e.g., using fetch or axios
      await fetch("../api/Admin/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Login Successful") {
            localStorage.setItem("adminToken", res.adminToken);
            router.push("../admin/home");
          }
        });
      setLoginSuccessful(true);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };
  const validate = (admin) => {
    let newError = "";
    if (!admin.email && !admin.password)
      newError = "Email and Password cannot be blank";
    return newError;
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
          bgcolor: "rgb(209 213 219)",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight={"bolder"}>
          Admin
        </Typography>
        <AdminPanelSettingsIcon sx={{ fontSize: "10em" }} />

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={admin.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                placeholder="Password"
                value={admin.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <span>
                    <FaEye />
                  </span>
                ) : (
                  <span>
                    <FaEyeSlash />
                  </span>
                )}
              </button>
            </div>
          </div>
          {error && <p className="mt-2 text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
