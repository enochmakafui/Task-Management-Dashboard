import { useState } from "react";

import {
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  Card,
  IconButton,
  Button,
  DialogContent,
  TextField,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  FormControl,
  CardContent,
  CardActions,
} from "@mui/material";
import {
  Add as AddIcon,
  Close as CloseIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

export default function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
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
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h5">Task DashBoard</Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          startIcon={<AddIcon />}
          sx={{ backgroundColor: "#D7DA2F", color: "#000" }}
        >
          Add Task
        </Button>
      </Box>
      <Box>
        <Typography variant="h6">To Do</Typography>
        <Card>
          <CardContent>
            <Typography>Complete Project Proposal</Typography>
            <Typography>Draft and finalize the Q1 project proposal</Typography>
            <Typography>Due: 2/15/2025</Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
      <Box>
        <Typography variant="h6">In Progress</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Due Date</Typography>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Create a new task
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              name="title"
              label="Title"
              fullWidth
              required
              size="normal"
            />
            <FormControl fullWidth required sx={{ marginBottom: "1rem" }}>
              <InputLabel id="demo-multiple-name-label">Status</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Status" />}
              >
                <MenuItem value="hello">Todo</MenuItem>
                <MenuItem value="world">In Progress</MenuItem>
                <MenuItem value="goodbye">Done</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              sx={{
                fontSize: "1.2rem",
              }}
            />
            <InputLabel>Due Date</InputLabel>

            <TextField
              type="date"
              fullWidth
              sx={{
                fontSize: "1.2rem",
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#D7DA2F", color: "#333" }}
          >
            create task
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
