import PropTypes from "prop-types";
import { Box, Typography, Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

Header.propTypes = {
  handleOpen: PropTypes.func,
};

export default function Header({ handleOpen }) {
  return (
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
  );
}
