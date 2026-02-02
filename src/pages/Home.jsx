import { Box, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import warehouseImg from "../assets/warehouse.jpg";
import aboutImg from "../assets/about.jpg";

export default function Home() {
  return (
    <Box>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage: `url(${warehouseImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          paddingLeft: { xs: "30px", md: "80px" },
          color: "#fff",
          position: "relative"
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)"
          }}
        />

        <Box sx={{ position: "relative", maxWidth: "600px" }}>
          <Typography variant="h2" fontWeight={800} color="white">
            WELCOME TO
          </Typography>
          <Typography variant="h2" fontWeight={800} mb={2} color="white">
            ART WAREHOUSE
          </Typography>

          <Typography mb={3} color="white">
            Quality. Efficiency. Support.
          </Typography>

          <Button
            component={Link}
            to="/about"
            variant="contained"
            sx={{ bgcolor: "#e91e63", mr: 2 }}
          >
            About Us
          </Button>

          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.15)"
              }
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* ================= ABOUT PREVIEW ================= */}
      <Box
        sx={{
          py: 12,
          px: 4,
          background: "linear-gradient(135deg, #fffdf7, #f3f6ff)"
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "70px",
            alignItems: "center"
          }}
        >
          <Box>
            <img
              src={aboutImg}
              alt="About"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 18px 50px rgba(0,0,0,0.18)"
              }}
            />
          </Box>

          <Box>
            <Typography
              variant="h4"
              fontWeight={800}
              color="#e91e63"
              mb={1}
            >
              ALL ABOUT ARTWAREHOUSE
            </Typography>

            <Typography fontWeight={600} mb={2}>
              Professionalism. Excellence. Timeliness.
            </Typography>

            <Typography color="#444" lineHeight={1.8} mb={2}>
              Fast, efficient, and honest, ARTWAREHOUSE has become a reputable
              and well-known warehouse service. Our team is up for every job,
              managing projects with the skill and experience our clients expect.
            </Typography>

            <Typography color="#444" lineHeight={1.8} mb={3}>
              We provide open communication channels throughout the duration
              of each project and focus on long-term partnerships.
            </Typography>

            <Button
              component={Link}
              to="/about"
              variant="contained"
              sx={{ bgcolor: "#2f3b78" }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ================= CONTACT ================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          px: 6,
          py: 10,
          background: "#fffdf5"
        }}
      >
        <Box>
          <Typography variant="h5" color="#e91e63" mb={2}>
            GET IN TOUCH
          </Typography>

          <Typography mb={2}>
            Questions, comments or requests? Feel free to reach out.
          </Typography>

          <Typography mb={1}>
            📍 40, 3rd Avenue, Future Business Park, Karapakkam, Chennai
          </Typography>
          <Typography mb={1}>
            📧 admin@artwarehouse.in
          </Typography>
          <Typography mb={1}>
            📞 +91 99 40 66 32 88
          </Typography>
        </Box>

        <Box>
          <TextField fullWidth label="Name" margin="dense" />
          <TextField fullWidth label="Email" margin="dense" />
          <TextField fullWidth label="Phone" margin="dense" />
          <TextField fullWidth label="Organization Name" margin="dense" />
          <TextField fullWidth label="Location" margin="dense" />
          <TextField fullWidth label="Subject" margin="dense" />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="dense"
          />

          <Button
            variant="contained"
            sx={{ mt: 2, bgcolor: "#2f3b78" }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {/* ================= MAP ================= */}
      <Box sx={{ p: 6 }}>
        <iframe
          title="map"
          width="100%"
          height="320"
          frameBorder="0"
          style={{ border: 0, borderRadius: "12px" }}
          src="https://www.google.com/maps?q=Karapakkam%20Chennai&output=embed"
          allowFullScreen
        />
      </Box>

    </Box>
  );
}
