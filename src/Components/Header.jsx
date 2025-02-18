import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box className="header container">
      <Typography variant="h5" sx={{ color: "#FFFFFF", fontWeight: "600" }}>
        Task Management DashBoard 📒
      </Typography>
    </Box>
  );
}
