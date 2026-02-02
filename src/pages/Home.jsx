import { Box, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import warehouseImg from "../assets/warehouse.jpg";
import aboutImg from "../assets/about.jpg";
import { colors } from "../theme";

export default function Home() {
  return (
    <Box>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: { xs: "85vh", md: "90vh" },
          backgroundImage: `url(${warehouseImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 10 },
          color: "white",
          position: "relative"
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)"
          }}
        />

        <Box sx={{ position: "relative", maxWidth: "600px" }}>
          <Typography variant="h2" fontWeight={800} color="white">
            WELCOME TO
          </Typography>
          <Typography variant="h2" fontWeight={800} mb={2} color="white">
            ART WAREHOUSE
          </Typography>

          <Typography mb={3} color="white" fontSize="18px">
            Quality. Efficiency. Support.
          </Typography>

          <Button
            component={Link}
            to="/about"
            variant="contained"
            sx={{
              bgcolor: colors.accent,
              mr: 2,
              px: 4,
              py: 1.2,
              borderRadius: "30px",
              "&:hover": { bgcolor: "#e11d48" }
            }}
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
              px: 4,
              py: 1.2,
              borderRadius: "30px",
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
          background: colors.section
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
            <Typography variant="h4" fontWeight={800} color={colors.accent} mb={1}>
              ALL ABOUT ARTWAREHOUSE
            </Typography>

            <Typography fontWeight={600} mb={2}>
              Professionalism. Excellence. Timeliness.
            </Typography>

            <Typography color={colors.darkText} lineHeight={1.8} mb={2}>
              Fast, efficient, and honest, ARTWAREHOUSE has become a reputable
              and well-known warehouse service. Our team is up for every job,
              managing projects with the skill and experience our clients expect.
            </Typography>

            <Typography color={colors.darkText} lineHeight={1.8} mb={3}>
              We provide open communication channels throughout the duration
              of each project and focus on long-term partnerships.
            </Typography>

            <Button
              component={Link}
              to="/about"
              variant="contained"
              sx={{
                bgcolor: colors.primary,
                px: 4,
                py: 1.2,
                borderRadius: "30px",
                "&:hover": { bgcolor: "#1e3a8a" }
              }}
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
          px: { xs: 3, md: 6 },
          py: 10,
          background: "#fff"
        }}
      >
        <Box>
          <Typography variant="h5" color={colors.accent} mb={2}>
            GET IN TOUCH
          </Typography>

          <Typography mb={2} color={colors.mutedText}>
            Questions, comments or requests? Feel free to reach out.
          </Typography>

          <Typography mb={1}>📍 Chennai, India</Typography>
          <Typography mb={1}>📧 admin@artwarehouse.in</Typography>
          <Typography mb={1}>📞 +91 99 40 66 32 88</Typography>
        </Box>

        <Box>
          <TextField fullWidth label="Name" margin="dense" />
          <TextField fullWidth label="Email" margin="dense" />
          <TextField fullWidth label="Phone" margin="dense" />
          <TextField fullWidth label="Organization Name" margin="dense" />
          <TextField fullWidth label="Location" margin="dense" />
          <TextField fullWidth label="Subject" margin="dense" />
          <TextField fullWidth label="Message" multiline rows={4} margin="dense" />

          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: colors.primary,
              px: 4,
              py: 1.2,
              borderRadius: "30px"
            }}
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
