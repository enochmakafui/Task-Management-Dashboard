import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

TaskListBox.propTypes = {
  taskHeading: PropTypes.string,
  taskArray: PropTypes.array,
  onDelete: PropTypes.func,
};

export default function TaskListBox({ taskHeading, taskArray = [], onDelete }) {
  return (
    <Box>
      <Typography variant="h6" sx={{ marginBottom: "1.5rem" }}>
        {taskHeading}
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        {taskArray.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              status={task.status}
              title={task.title}
              description={task.description}
              date={task.date}
              onDelete={onDelete}
            />
          );
        })}
      </Box>
    </Box>
  );
}
