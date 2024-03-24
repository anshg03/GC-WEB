import React, { useState, useEffect } from "react";
import AdminCard from "../../components/AdminCard";
import { Box, TextField, Grid, InputLabel, Typography } from "@mui/material";
import { textFieldStyle } from "../../pages/login/adminLogin";
import HomeIcon from "@mui/icons-material/Home";

const Home = () => {
  const [data, setData] = useState({
    name: "John De",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    username: "johndoe",
    department: "Sales",
    contactno: "1234567890",
    joiningyr: "2020",
  });

  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email" },
    { name: "dob", label: "DOB" },
    { name: "username", label: "Username" },
    { name: "department", label: "Department" },
    { name: "contactno", label: "Contact No" },
    { name: "joiningyr", label: "Joining Year" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user"); // Replace with your API endpoint
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <AdminCard>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        alignItems={"center"}
        mb={5}
      >
        <HomeIcon sx={{ fontSize: "30px", color: "blue" }} />
        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: "25px", fontWeight: "bolder", color: "blue" }}
        >
          Dashboard
        </Typography>
      </Box>
      {data && (
        <Grid container spacing={2}>
          {fields.map((field) => (
            <Grid
              item
              xs={6}
              display={"flex"}
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <InputLabel
                htmlFor={field.name}
                sx={{
                  fontWeight: "bold",
                  padding: 1,
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#000080",
                  color: "white",
                  height: "80%",
                  width: "45%",
                  borderRadius: "7px",
                }}
              >
                {field.label}:
              </InputLabel>
              <TextField
                id={field.name}
                type="text"
                variant="outlined"
                value={data[field.name]}
                fullWidth
                sx={{ ...textFieldStyle, width: "50%" }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </AdminCard>
  );
};

export default Home;
