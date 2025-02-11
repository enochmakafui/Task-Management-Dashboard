import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

TaskCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  onDelete: PropTypes.func,
  status: PropTypes.string,
};

export default function TaskCard({
  id,
  status,
  title,
  description,
  date,
  onDelete,
}) {
  return (
    <Card
      sx={{
        marginBottom: "1.2rem",
        width: "20rem",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: "1.3rem", marginBottom: "0.1rem" }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>
          {description}
        </Typography>
        <Typography>Due: {date}</Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto" }}>
        <IconButton edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            onDelete(id, status);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
