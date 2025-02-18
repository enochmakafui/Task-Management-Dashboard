import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

TaskBoard.propTypes = {
  board: PropTypes.object,
  isAdding: PropTypes.object,
  setIsAdding: PropTypes.func,
  isEditing: PropTypes.object,
  setIsEditing: PropTypes.func,
  moveCard: PropTypes.object,
  setMoveCard: PropTypes.fun,
  onAddCard: PropTypes.func,
  onEdit: PropTypes.func,
  onDeleteCard: PropTypes.func,
};
const mainBoards = ["todo", "inprogress", "done"];

export default function TaskBoard({
  board,
  isAdding,
  setIsAdding,
  isEditing,
  setIsEditing,
  moveCard,
  setMoveCard,
  onAddCard,
  onEdit,
  onDeleteCard,
}) {
  const boardTypes = mainBoards.filter((mainBoard) => mainBoard !== board.id);
  return (
    <Card
      sx={{
        backgroundColor: "#101204",
        width: "20rem",
        borderRadius: "15px",
      }}
    >
      <CardHeader title={board.title} sx={{ color: "#B6C2CF" }} />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {board.cards.map((card) => (
          <Box
            key={card.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#22272B",
              padding: "0.5rem",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ color: "#B6C2CF" }}>{card.content}</Typography>
            <Box sx={{ display: "flex" }}>
              <IconButton
                onClick={() =>
                  setIsEditing({
                    boardId: board.id,
                    cardId: card.id,
                    content: card.content,
                  })
                }
              >
                <EditIcon fontSize="small" sx={{ color: "#B6C2CF" }} />
              </IconButton>
              <IconButton onClick={() => onDeleteCard(board.id, card.id)}>
                <DeleteIcon fontSize="small" sx={{ color: "#B6C2CF" }} />
              </IconButton>
            </Box>
          </Box>
        ))}
        {isAdding.boardId === board.id ? (
          <form>
            <TextField
              multiline
              rows={2}
              fullWidth
              placeholder="Enter a title or paste a link"
              value={isAdding.newCard}
              onChange={(e) =>
                setIsAdding({ ...isAdding, newCard: e.target.value })
              }
              sx={{
                fontSize: "1.2rem",
                backgroundColor: "#22272B",
                borderRadius: "8px",
                borderColor: "#B6C2CF",
                "& .MuiInputBase-input": {
                  color: "#B6C2CF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#B6C2CF",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#88929E",
                },
              }}
            />
            <Box
              sx={{
                marginTop: "0.5rem",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <Button
                // type="submit"
                sx={{
                  backgroundColor: "#85B8FF",
                  color: "#000",
                  textTransform: "none",
                }}
                onClick={() => onAddCard(board.id)}
              >
                {" "}
                Add Card
              </Button>
              <Button
                sx={{
                  backgroundColor: "#282F27",
                  textTransform: "none",
                  color: "#B6C2CF",
                }}
                onClick={() => setIsAdding({ ...isAdding, boardId: null })}
              >
                {" "}
                Cancel
              </Button>
            </Box>
          </form>
        ) : isEditing.boardId === board.id ? (
          <form>
            <TextField
              multiline
              rows={2}
              fullWidth
              value={isEditing.content}
              onChange={(e) =>
                setIsEditing({ ...isEditing, content: e.target.value })
              }
              sx={{
                fontSize: "1.2rem",
                backgroundColor: "#22272B",
                borderRadius: "8px",
                borderColor: "#B6C2CF",
                "& .MuiInputBase-input": {
                  color: "#B6C2CF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#B6C2CF",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#88929E",
                },
              }}
            />
            <InputLabel sx={{ marginTop: "1rem", color: "#B6C2CF" }}>
              Edit Dates
            </InputLabel>

            <TextField
              type="date"
              value={isEditing.date}
              onChange={(e) =>
                setIsEditing({ ...isEditing, date: e.target.value })
              }
              sx={{
                marginTop: "0.5rem",
                backgroundColor: "#22272B",
                "& .MuiInputBase-input": {
                  color: "#B6C2CF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#B6C2CF",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#88929E",
                },
              }}
            />
            <Box sx={{ marginTop: "1rem" }}>
              <Button
                sx={{
                  backgroundColor: "#282F27",
                  textTransform: "none",
                  color: "#B6C2CF",
                }}
                onClick={() => setMoveCard(true)}
              >
                Move Card
              </Button>
              {moveCard && (
                <Select
                  sx={{
                    display: "block",
                    marginTop: "0.5rem",
                    backgroundColor: "#22272B",
                    "& .MuiInputBase-input": {
                      color: "#B6C2CF",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#B6C2CF",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#88929E",
                    },
                  }}
                  value={isEditing.location}
                  onChange={(e) =>
                    setIsEditing({ ...isEditing, location: e.target.value })
                  }
                >
                  {boardTypes.map((boardType) => {
                    return (
                      <MenuItem value={boardType} key={boardType}>
                        {boardType}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            </Box>
            <Box
              sx={{
                marginTop: "0.5rem",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#85B8FF",
                  color: "#000",
                  textTransform: "none",
                }}
                onClick={onEdit}
              >
                Update Card
              </Button>
              <Button
                sx={{
                  backgroundColor: "#282F27",
                  textTransform: "none",
                  color: "#B6C2CF",
                }}
                onClick={() =>
                  setIsEditing({ boardId: null, cardId: null, content: "" })
                }
              >
                Cancel
              </Button>
            </Box>
          </form>
        ) : (
          <Button
            variant="text"
            textTransform="none"
            onClick={() => setIsAdding({ boardId: board.id, newCard: "" })}
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "transparent",
              color: "#B6C2CF",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1E293B",
              },
            }}
          >
            Add Task
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
