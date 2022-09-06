import React from "react";

import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import TaskList from "./TaskList";

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
