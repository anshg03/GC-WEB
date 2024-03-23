import React from "react";
import { Card, CardContent, CardHeader, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import { List, ListItemButton, ListItemText, Link } from "@mui/material";

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Here you would typically handle the logout process, e.g., removing the user's session
    router.push("/admin/login");
  };

  const NavigationSideBar = [
    { name: "Dashboard", path: "/admin/home" },
    { name: "Profile", path: "admin/profile" },
    { name: "Add Admin", path: "/" },
    { name: "Delete Admin", path: "/" },
    { name: "student", path: "/" },
    { name: "profiles", path: "/" },
    { name: "courses", path: "/" },
    { name: "attendance records", path: "/" },
    { name: "grading", path: "/" },
    { name: "feedback analysis", path: "/" },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Card
        sx={{
          width: "80%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          title={
            <Box display="flex" justifyContent="center" width="100%">
              Admin Panel
            </Box>
          }
          action={
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          }
        />

        <Box display={"flex"} flexDirection={"row"} gap={"4%"}>
          <CardContent
            sx={{
              width: "25%",
              maxHeight: "80%",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
            }}
          >
            <List>
              {NavigationSideBar.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  underline="none"
                  color="inherit"
                  sx={{ textDecoration: "none", }}
                >
                  <ListItemButton>
                    <ListItemText primary={item.name} href />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </CardContent>
          <CardContent
            sx={{ width: "70%", maxHeight: "80%", overflow: "auto" }}
          >
            <List>
              <ListItemButton>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </List>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default Home;
