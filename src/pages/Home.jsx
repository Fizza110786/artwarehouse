import { Box, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import warehouseImg from "../assets/warehouse.jpg";

export default function Home() {
  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage: `url(${warehouseImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          paddingLeft: "80px",
          color: "#fff",
          position: "relative"
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)"
          }}
        />

        <Box sx={{ position: "relative", maxWidth: "600px" }}>
          <Typography variant="h2" fontWeight={700}>
            WELCOME TO
          </Typography>
          <Typography variant="h2" fontWeight={700} mb={2}>
            ART WAREHOUSE
          </Typography>

          <Typography mb={3}>
            Your Satisfaction Is Our Priority
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
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* ABOUT SECTION */}
      <Box sx={{ p: 10, textAlign: "center", bgcolor: "#fffdf5" }}>
        <Typography variant="h4" color="#e91e63" mb={2}>
          ALL ABOUT ARTWAREHOUSE
        </Typography>

        <Typography fontWeight={600} mb={2}>
          Professionalism. Excellence. Timeliness.
        </Typography>

        <Typography sx={{ maxWidth: "700px", margin: "auto", lineHeight: 1.8 }}>
          Fast, efficient, and honest, ARTWAREHOUSE has become a reputable
          and well-known warehouse service. Our team is up for every job,
          managing projects with the skill and experience our clients have
          come to expect. We want our customers to be satisfied with our
          work, which is why we provide open communication channels
          throughout the duration of each project.
        </Typography>
      </Box>

      {/* CONTACT SECTION */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          p: 10,
          bgcolor: "#fffdf5"
        }}
      >
        {/* Left */}
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

        {/* Right Form */}
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

      {/* MAP */}
      <Box sx={{ p: 6 }}>
        <iframe
          title="map"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps?q=Karapakkam%20Chennai&output=embed"
          allowFullScreen
        />
      </Box>
    </Box>
  );
}
