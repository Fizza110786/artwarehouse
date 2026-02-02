import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect, useState } from "react";
import { colors } from "../theme";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Features",
    "Clients",
    "Team",
    "Gallery",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          padding: "14px 60px",
          bgcolor: "#fff",
          boxShadow: scrolled ? "0 4px 14px rgba(0,0,0,0.1)" : "none",
          transition: "0.3s",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: colors.primary }}>
            ART WAREHOUSE PRIVATE LIMITED
          </Typography>
          <Typography variant="body2" sx={{ color: colors.mutedText }}>
            Quality. Efficiency. Support.
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/contact"
          sx={{
            bgcolor: colors.accent,
            color: "#fff",
            padding: "10px 26px",
            borderRadius: "30px",
            fontWeight: 600,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#e11d48",
            },
          }}
        >
          Get In Touch
        </Button>
      </Box>

      {/* NAV BAR */}
      <AppBar
        position="fixed"
        sx={{
          top: "70px",
          bgcolor: colors.primary,
          boxShadow: scrolled ? "0 6px 20px rgba(0,0,0,0.2)" : "none",
          transition: "0.3s",
        }}
      >
        <Toolbar sx={{ padding: "0 60px" }}>
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
                  fontSize: "15px",
                  fontWeight: active ? 700 : 500,
                  marginRight: "14px",
                  position: "relative",
                  padding: "6px 10px",
                  transition: "0.25s",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 2,
                    width: active ? "100%" : "0%",
                    height: "2px",
                    bgcolor: colors.accent,
                    transition: "0.25s",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                  "&:hover": {
                    color: colors.accent,
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            );
          })}

          <Box sx={{ flexGrow: 1 }} />

          <Typography sx={{ color: "#fff", marginRight: 3 }}>
            admin@artwarehouse.in
          </Typography>

          <Typography sx={{ color: "#fff", marginRight: 2 }}>
            +91 99 40 66 32 88
          </Typography>

          <IconButton
            href="https://www.facebook.com/wix"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": {
                color: colors.accent,
              },
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/company/wix-com/"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": {
                color: colors.accent,
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* SPACER FOR FIXED NAV */}
      <Box sx={{ height: "140px" }} />
    </>
  );
}
