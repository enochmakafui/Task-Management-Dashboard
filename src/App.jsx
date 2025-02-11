import { useState } from "react";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskListBox from "./Components/TaskListBox";

import { Box } from "@mui/material";

export default function App() {
  const [open, setOpen] = useState(false);
  const [todoTaskArray, setTodoTaskArray] = useState([]);
  const [inProgressTaskArray, setInProgressTaskArray] = useState([]);
  const [dueDateTaskArray, setDueDateTaskArray] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDelete(id, status) {

    console.log(id, status);
    if (status === "Todo") {
      
      setTodoTaskArray((prevItems) => {
        prevItems.filter((item) => item.id !== id);
      });
    }
    if (status === "InProgress") {
      setInProgressTaskArray((prevItems) => {
        prevItems.filter((item) => item.id !== id);
      });
    }

    if (status === "Due") {
      setDate((prevItems) => {
        prevItems.filter((item) => item.id !== id);
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (status === "Todo") {
      setTodoTaskArray([
        ...todoTaskArray,
        {
          id: title,
          title,
          description,
          status,
          date,
        },
      ]);
      console.log(todoTaskArray);
    }

    if (status === "InProgress") {
      setInProgressTaskArray([
        ...inProgressTaskArray,
        {
          id: title,
          title,
          description,
          status,
          date,
        },
      ]);
    }
    if (status === "Due") {
      setDueDateTaskArray([
        ...dueDateTaskArray,
        {
          id: title,
          title,
          description,
          status,
          date,
        },
      ]);
    }
    setTitle("");
    setDescription("");
    setStatus("");
    setDate("");
    setOpen(false);
  }

  return (
    <Box
      sx={{
        p: 6,
        maxWidth: 1200,
        margin: "3.8rem auto",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
    >
      <Header handleOpen={handleOpen} />

      <TaskForm
        title={title}
        setTitle={setTitle}
        status={status}
        setStatus={setStatus}
        description={description}
        setDescription={setDescription}
        dueDate={date}
        setDueDate={setDate}
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />

      <TaskListBox
        taskHeading="To Do"
        taskArray={todoTaskArray}
        onDelete={handleDelete}
      />

      <TaskListBox taskHeading="In Progress" taskArray={inProgressTaskArray} />

      <TaskListBox taskHeading="Due Date" taskArray={dueDateTaskArray} />
    </Box>
  );
}
