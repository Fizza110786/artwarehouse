import { Box, Typography } from "@mui/material";
import { colors } from "../theme";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: colors.primary,
        color: "white",
        textAlign: "center",
        py: 3,
      }}
    >
      <Typography sx={{ fontSize: "14px", color: "#e5e7eb" }}>
        © 2026 Art Warehouse Private Limited
      </Typography>
    </Box>
  );
}
