import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


import open7days from "../assets/open7days.jpg";
import licensed from "../assets/licensed.jpg";
import satisfaction from "../assets/satisfaction.jpg";

const features = [
  "Modern Infrastructure",
  "Secure Warehousing",
  "Strategic Locations",
  "Experienced Team",
  "Cost Effective Solutions",
  "24/7 Support",
];

const featureImages = [
  { img: open7days, label: "OPEN 7 DAYS A WEEK" },
  { img: licensed, label: "STATE LICENSED" },
  { img: satisfaction, label: "SATISFACTION GUARANTEED" },
];

const Features = () => {
  return (
    <Box sx={{ py: "96px" }}>
      <Box sx={{ maxWidth: "1100px", mx: "auto", px: 2 }}>
        
        {/* ===== TEXT SECTION (UNCHANGED) ===== */}
        <Typography variant="h4" align="center" fontWeight={700} mb={6}>
          Why Choose ArtWarehouse
        </Typography>

        <Grid container spacing={3}>
          {features.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 3,
                  backgroundColor: "#f4f6f8",
                  borderRadius: "10px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#0b3c5d" }} />
                <Typography>{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ===== IMAGES SECTION (BOTTOM / SCROLL) ===== */}
        <Grid container spacing={3} mt={8}>
          {featureImages.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  position: "relative",
                  height: "280px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography color="#fff" fontWeight={700}>
                    {item.label}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
};

export default Features;
