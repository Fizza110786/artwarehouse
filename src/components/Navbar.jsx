import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { colors } from "../theme";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Features",
    "Clients",
    "Team",
    "Gallery",
  ];

  return (
    <>
      {/* TOP BAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          bgcolor: "#fff",
        }}
      >
        <Box>
          <Typography fontWeight={800} color={colors.primary}>
            ART WAREHOUSE
          </Typography>
          <Typography fontSize="12px" color={colors.mutedText}>
            Quality. Efficiency. Support.
          </Typography>
        </Box>

        {/* Desktop button */}
        <Button
          component={Link}
          to="/contact"
          sx={{
            display: { xs: "none", md: "block" },
            bgcolor: colors.accent,
            color: "#fff",
            borderRadius: "30px",
            px: 3,
          }}
        >
          Get In Touch
        </Button>

        {/* Mobile menu icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* DESKTOP NAV */}
      <AppBar
        position="fixed"
        sx={{
          top: "64px",
          bgcolor: colors.primary,
          display: { xs: "none", md: "block" },
        }}
      >
        <Toolbar>
          {menuItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <Button
                key={item}
                component={Link}
                to={path}
                sx={{
                  color: active ? colors.accent : "#fff",
                  mr: 2,
                }}
              >
                {item}
              </Button>
            );
          })}

          <Box sx={{ flexGrow: 1 }} />

          <IconButton sx={{ color: "#fff" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography fontWeight={800} mb={2}>
            Menu
          </Typography>

          <List>
            {menuItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <ListItem
                  button
                  key={item}
                  component={Link}
                  to={path}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </ListItem>
              );
            })}
          </List>

          <Button
            fullWidth
            component={Link}
            to="/contact"
            sx={{
              mt: 2,
              bgcolor: colors.accent,
              color: "#fff",
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Drawer>

      {/* Spacer */}
      <Box sx={{ height: "120px" }} />
    </>
  );
}
