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
import ChecklistIcon from '@mui/icons-material/Checklist';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import FeedbackIcon from '@mui/icons-material/Feedback';


const NavigationSideBar = () => {
  const NavigationSideBar = [
    { name: "Dashboard", path: "/admin/home", icon: <HomeIcon /> },
    // { name: "Profile", path: "/admin/profile" },
    // { name: "Add Admin", path: "/" },
    // { name: "Delete Admin", path: "/" },
    { name: "Student", path: "/admin/student", icon: <SchoolIcon /> },
    { name: "Faculty", path: "/admin/faculty", icon: <Person4Icon /> },
    { name: "Course", path: "/admin/course", icon: <BookIcon /> },
    { name: "Attendance records", path: "/admin/attendance", icon: <ChecklistIcon /> },
    { name: "Grading", path: "/admin/grades", icon: <CreditScoreIcon /> },
    { name: "Feedback analysis", path: "/admin/feedbacks", icon: <FeedbackIcon /> },
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
