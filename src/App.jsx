import { useState } from "react";
import Header from "./Components/Header";
import TaskBoard from "./Components/TaskBoard";
import { Box, Typography } from "@mui/material";

export default function App() {
  const [boards, setBoards] = useState([
    {
      id: "todo",
      title: "To Do",
      cards: [
        { id: "1", content: "Complete homework" },
        { id: "2", content: "Study for exam" },
      ],
    },
    {
      id: "inprogress",
      title: "In Progress",
      cards: [{ id: "3", content: "Work on project" }],
    },
    {
      id: "done",
      title: "Done",
      cards: [{ id: "4", content: "Submit assignment" }],
    },
  ]);

  const [isAdding, setIsAdding] = useState({ boardId: null, newCard: "" });

  const [isEditing, setIsEditing] = useState({
    boardId: null,
    cardId: null,
    content: "",
    date: "",
    location: "",
  });
  const [moveCard, setMoveCard] = useState(false);

  function handleDeleteCard(boardId, cardId) {
    const newBoard = boards.map((board) => {
      if (board.id === boardId) {
        board.cards = board.cards.filter((item) => item.id !== cardId);
        return board;
      }
      return board;
    });
    setBoards(newBoard);
  }

  function handleAddBoard(id) {
    if (isAdding.newCard.trim()) {
      const newBoards = boards.map((board) => {
        if (board.id === id) {
          return {
            ...board,
            cards: [
              ...board.cards,
              {
                id: Date.now(),
                content: isAdding.newCard,
              },
            ],
          };
        }
        return board;
      });
      setBoards(newBoards);
      setIsAdding({ boardId: null, newCard: "" });
    }
  }

  function handleEditCard(e) {
    e.preventDefault();
    console.log(isEditing);
    if (isEditing.location) {
      console.log(isEditing.location);
      const newBoards = boards.map((board) => {
        if (board.id === isEditing.boardId) {
          board.cards = board.cards.filter(
            (item) => item.id !== isEditing.cardId
          );
          return board;
        }
        return board;
      });
      setBoards(newBoards);
      setIsEditing({ ...isEditing, boardId: null });
      const updatedBoards = boards.map((board) => {
        if (board.id === isEditing.location) {
          return {
            ...board,
            cards: [
              ...board.cards,
              {
                id: isEditing.cardId,
                content: isEditing.content,
                date: isEditing.date,
              },
            ],
          };
        }
        return board;
      });
      setBoards(updatedBoards);
      setIsEditing({ ...isEditing, boardId: null });

      return;
    }
    const newBoards = boards.map((board) => {
      if (board.id === isEditing.boardId) {
        board.cards = board.cards.map((card) => {
          if (card.id === isEditing.cardId) {
            return {
              ...card,
              content: isEditing.content,
              date: isEditing.date,
            };
          }
          return card;
        });
      }
      return board;
    });
    setBoards(newBoards);
    setIsEditing({ boardId: null, cardId: null, content: "" });
  }

  return (
    <>
      <Header />
      <Box className="boards-container container">
        <Typography
          variant="h5"
          sx={{ color: "#FFFFFF", fontWeight: "600", marginBottom: "2rem" }}
        >
          Boards
        </Typography>
        <Box className="boards-grid">
          {boards.map((board) => (
            <Box key={board.id}>
              <TaskBoard
                board={board}
                isAdding={isAdding}
                setIsAdding={setIsAdding}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                moveCard={moveCard}
                setMoveCard={setMoveCard}
                onAddCard={handleAddBoard}
                onEdit={handleEditCard}
                onDeleteCard={handleDeleteCard}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
