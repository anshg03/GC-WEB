import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Box,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import NavigationSideBar from "./Nav/navigationSideBar";

const AdminCard = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Here you would typically handle the logout process, e.g., removing the user's session
    router.push("/admin/login");
  };

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
          width: "90%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "rgb(209 213 219)",
          color: "white",
          borderRadius: "30px",
          border: "2px solid #fff",
        }}
      >
        <Box display={"flex"} flexDirection={"row"} gap={"4%"} height={"100%"}>
          <CardContent
            sx={{
              width: "25%",
              height: "100%",
              overflow: "auto",
              pt: 5,
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
            className="bg-gray-800"
          >
            <Typography
              variant="h4"
              color="white"
              sx={{ fontSize: "32px", fontWeight: "bolder" }}
            >
              Admin Panel
            </Typography>
            <NavigationSideBar />
            <Button
              variant="outlined"
              color="primary"
              sx={{
                m: 1,
                ml: 2,
                color: "red",
                borderColor: "red",
                "&:hover": {
                  color: "white",
                  borderColor: "red",
                  bgcolor: "red",
                },
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </CardContent>
          <CardContent sx={{ width: "70%", height: "100%", overflow: "auto" }}>
            {children}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default AdminCard;
