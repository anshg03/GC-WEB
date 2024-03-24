import React from "react";
import { useRouter } from "next/router";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ListAlt, AddBox, Delete, Edit } from "@mui/icons-material";
import AdminCard from "../../../components/AdminCard";
import BookIcon from "@mui/icons-material/Book";

const cards = [
  {
    title: "All Courses",
    icon: <ListAlt />,
    route: "/admin/course/courses",
  },
  {
    title: "Add Course",
    icon: <AddBox />,
    route: "/admin/course/addcourse",
  },
  {
    title: "Remove Course",
    icon: <Delete />,
    route: "/admin/course/removecourse",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  margin: theme.spacing(2),
  width: "40%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Dashboard = () => {
  const router = useRouter();

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <AdminCard>
    <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"}>
        <BookIcon sx={{ fontSize: "30px", color: "blue" }} />
        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: "25px", fontWeight: "bolder", color: "blue" }}
        >
          Course
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        height={"80%"}
        width={"100%"}
        alignItems={"center"}
      >
        {cards.map((card) => (
          <StyledCard
            onClick={() => handleCardClick(card.route)}
            key={card.title}
          >
            <CardContent>
              {card.icon}
              <Typography variant="h6">{card.title}</Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </AdminCard>
  );
};

export default Dashboard;
