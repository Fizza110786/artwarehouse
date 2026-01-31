import React from "react";
import services from "../data/services";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import BuildIcon from "@mui/icons-material/Build";


import distributionImg from "../assets/distribution.jpg";
import customsImg from "../assets/customs.jpg";
import transportImg from "../assets/transport.jpg";

const iconMap = {
  warehouse: <WarehouseIcon sx={{ fontSize: 42, color: "#0b3c5d" }} />,
  local_shipping: <LocalShippingIcon sx={{ fontSize: 42, color: "#0b3c5d" }} />,
  inventory: <InventoryIcon sx={{ fontSize: 42, color: "#0b3c5d" }} />,
  build: <BuildIcon sx={{ fontSize: 42, color: "#0b3c5d" }} />,
};

const Services = () => {
  return (
    <>
      {/* ===== EXISTING CONTENT (NO CHANGE) ===== */}
      <Box sx={{ py: "96px", backgroundColor: "#f4f6f8" }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
          <Typography variant="h4" align="center" fontWeight={700} mb={2}>
            Our Services
          </Typography>

          <Typography align="center" color="#6b7280" mb={8}>
            End-to-end warehousing and logistics solutions designed for efficiency.
          </Typography>

          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.id}>
                <Card
                  sx={{
                    borderRadius: "12px",
                    textAlign: "center",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-10px)" },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {iconMap[service.icon]}
                    <Typography fontWeight={600} mt={2}>
                      {service.title}
                    </Typography>
                    <Typography color="#6b7280" mt={1}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ===== BIG IMAGES SECTION (BOTTOM) ===== */}
      <Box sx={{ width: "100%", display: "flex" }}>
        {[
          { img: distributionImg, title: "DISTRIBUTION" },
          { img: customsImg, title: "CUSTOMS CLEARANCE" },
          { img: transportImg, title: "TRANSPORTATION" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: "500px",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={700}
                color="white"
                textAlign="center"
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Services;
