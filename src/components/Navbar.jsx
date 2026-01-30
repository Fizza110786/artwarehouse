import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navbar() {
  const menuItems = [
    "Home",
    "About",
    "Services",
    "Features",
    "Clients",
    "Team",
    "Gallery"
  ];

  return (
    <>
      {/* TOP LOGO BAR */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 60px",
          bgcolor: "#fff"
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#2f3b78" }}>
            ART WAREHOUSE PRIVATE LIMITED
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quality. Efficiency. Support.
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/contact"
          sx={{
            bgcolor: "#e91e63",
            color: "#fff",
            padding: "10px 25px",
            "&:hover": {
              bgcolor: "#d81b60"
            }
          }}
        >
          Get In Touch
        </Button>
      </Box>

      {/* NAVIGATION BAR */}
      <AppBar position="static" sx={{ bgcolor: "#2f3b78" }}>
        <Toolbar sx={{ padding: "0 60px" }}>
          {menuItems.map(item => (
            <Button
              key={item}
              component={Link}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              sx={{
                color: "#fff",
                fontSize: "15px",
                marginRight: "10px",
                "&:hover": {
                  color: "#e91e63",
                  backgroundColor: "transparent"
                }
              }}
            >
              {item}
            </Button>
          ))}

          <Box sx={{ flexGrow: 1 }} />

          <Typography sx={{ color: "#fff", marginRight: 3 }}>
            admin@artwarehouse.in
          </Typography>

          <Typography sx={{ color: "#fff", marginRight: 2 }}>
            +91 99 40 66 32 88
          </Typography>

          {/* Social Icons */}
          <IconButton
            href="https://www.facebook.com/wix"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": { color: "#e91e63" }
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/company/wix-com/"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": { color: "#e91e63" }
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
