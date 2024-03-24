import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import Person4Icon from "@mui/icons-material/Person4";
import BookIcon from "@mui/icons-material/Book";

const NavigationSideBar = () => {
  const NavigationSideBar = [
    { name: "Dashboard", path: "/admin/home", icon: <HomeIcon /> },
    // { name: "Profile", path: "/admin/profile" },
    // { name: "Add Admin", path: "/" },
    // { name: "Delete Admin", path: "/" },
    { name: "Student", path: "/admin/student", icon: <SchoolIcon /> },
    { name: "Faculty", path: "/admin/faculty", icon: <Person4Icon /> },
    { name: "Courses", path: "/admin/course", icon: <BookIcon /> },
    { name: "Attendance records", path: "/", icon: <BookIcon /> },
    { name: "Grading", path: "/", icon: <BookIcon /> },
    { name: "Feedback analysis", path: "/", icon: <BookIcon /> },
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
          <ListItemButton className="hover:bg-gray-700 hover:rounded-lg">
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default NavigationSideBar;
