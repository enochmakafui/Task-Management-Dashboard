import PropTypes from "prop-types";

import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  //   DialogActions,
  IconButton,
} from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";
TaskForm.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  status: PropTypes.string,
  setStatus: PropTypes.func,
  dueDate: PropTypes.string,
  setDueDate: PropTypes.func,
  open: PropTypes.array,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default function TaskForm({
  title,
  setTitle,
  description,
  setDescription,
  status,
  setStatus,
  dueDate,
  setDueDate,
  open,
  handleClose,
  handleSubmit,
}) {
  return (
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
        <form onSubmit={handleSubmit}>
          <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              name="title"
              label="Title"
              fullWidth
              required
              size="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormControl fullWidth required sx={{ marginBottom: "1rem" }}>
              <InputLabel id="demo-multiple-name-label">Status</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Status" />}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="Todo">Todo</MenuItem>
                <MenuItem value="InProgress">In Progress</MenuItem>
                <MenuItem value="Due">Due</MenuItem>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputLabel>Due Date</InputLabel>

            <TextField
              type="date"
              fullWidth
              sx={{
                fontSize: "1.2rem",
              }}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#D7DA2F",
              color: "#333",
              marginTop: "1.5rem",
            }}
          >
            create task
          </Button>
        </form>
      </DialogContent>
      {/* <DialogActions></DialogActions> */}
    </Dialog>
  );
}
