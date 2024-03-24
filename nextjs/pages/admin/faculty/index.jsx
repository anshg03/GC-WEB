import React from "react";
import { useRouter } from "next/router";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PersonAdd, Update, Delete, Group } from "@mui/icons-material";
import AdminCard from "../../../components/AdminCard";
import Person4Icon from "@mui/icons-material/Person4";

const cards = [
  {
    title: "All Faculties",
    icon: <Group />,
    route: "/admin/faculty/faculties",
  },
  {
    title: "Add Faculty",
    icon: <PersonAdd />,
    route: "/admin/faculty/addfaculty",
  },
  {
    title: "Remove Faculty",
    icon: <Delete />,
    route: "/admin/faculty/removefaculty",
  },
  {
    title: "Update Faculty",
    icon: <Update />,
    route: "/admin/faculty/updatefaculty",
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
        <Person4Icon sx={{ fontSize: "30px", color: "blue" }} />
        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: "25px", fontWeight: "bolder", color: "blue" }}
        >
          Faculty
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
