import React from "react";

import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import TaskList from "./TaskList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TaskGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={3}>
        <TaskList boardId={1} />
      </Grid>
      <Grid item xs={6} md={3}>
        <TaskList boardId={2} />
      </Grid>
      <Grid item xs={6} md={3}>
        <TaskList boardId={3} />
      </Grid>
      <Grid item xs={6} md={3}>
        <TaskList boardId={4} />
      </Grid>
    </Grid>
  );
};

export default TaskGrid;
