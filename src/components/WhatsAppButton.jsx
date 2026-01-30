import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton() {
  return (
    <Fab
      color="success"
      sx={{ position: "fixed", bottom: 20, right: 20 }}
      onClick={() =>
        window.open("https://wa.me/919999999999", "_blank")
      }
    >
      <WhatsAppIcon />
    </Fab>
  );
}
