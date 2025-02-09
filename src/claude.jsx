import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton
} from '@mui/material';
import {
  Add as AddIcon,
  
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Project Proposal",
      description: "Draft and finalize the Q1 project proposal",
      status: "To Do",
      dueDate: "2025-02-15"
    }
  ]);

  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
    dueDate: ""
  });

  const statusOptions = ["To Do", "In Progress", "Done"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editTask) {
      setEditTask({ ...editTask, [name]: value });
    } else {
      setNewTask({ ...newTask, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (editTask) {
      setTasks(tasks.map(task => 
        task.id === editTask.id ? editTask : task
      ));
      setEditTask(null);
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({
        title: "",
        description: "",
        status: "To Do",
        dueDate: ""
      });
    }
    setOpen(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEdit = (task) => {
    setEditTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditTask(null);
    setNewTask({
      title: "",
      description: "",
      status: "To Do",
      dueDate: ""
    });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Task Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Task
        </Button>
      </Box>

      <Grid container spacing={3}>
        {statusOptions.map(status => (
          <Grid item xs={12} md={4} key={status}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {status}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {tasks
                .filter(task => task.status === status)
                .map(task => (
                  <Card key={task.id} sx={{ bgcolor: 'background.paper' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {task.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {task.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <IconButton 
                        size="small" 
                        onClick={() => startEdit(task)}
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        onClick={() => deleteTask(task.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editTask ? 'Edit Task' : 'Create New Task'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              name="title"
              label="Title"
              value={editTask ? editTask.title : newTask.title}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              name="description"
              label="Description"
              value={editTask ? editTask.description : newTask.description}
              onChange={handleInputChange}
              multiline
              rows={3}
              fullWidth
              required
            />
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={editTask ? editTask.status : newTask.status}
                onChange={handleInputChange}
                label="Status"
              >
                {statusOptions.map(status => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              name="dueDate"
              label="Due Date"
              type="date"
              value={editTask ? editTask.dueDate : newTask.dueDate}
              onChange={handleInputChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editTask ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskDashboard;