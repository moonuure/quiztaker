import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import GradeIcon from "@mui/icons-material/Grade";
import { Link, Routes, Route } from "react-router-dom";
import LiveQuizzes from "../liveQuiz";
import Grades from "./grades";

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" sx={{ textAlign: "center", margin: 2 }}>
          QuizTaker Dashboard
        </Typography>
        <List>
          <ListItem button component={Link} to="/dashboard/live-quizzes">
            <ListItemIcon>
              <QuizIcon />
            </ListItemIcon>
            <ListItemText primary="Live Quizzes" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/grades">
            <ListItemIcon>
              <GradeIcon />
            </ListItemIcon>
            <ListItemText primary="Grades" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/dashboard/live-quizzes" element={<LiveQuizzes />} />
          <Route path="/dashboard/grades" element={<Grades />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
