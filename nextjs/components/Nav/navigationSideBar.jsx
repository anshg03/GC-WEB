import React from "react";
import { Card, CardContent, CardHeader, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import { List, ListItemButton, ListItemText, Link } from "@mui/material";

const NavigationSideBar = () => {
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
    <List>
      {NavigationSideBar.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          underline="none"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemText primary={item.name} href />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default NavigationSideBar;
