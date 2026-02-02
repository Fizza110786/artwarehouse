import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../theme";

import open7days from "../assets/open7days.jpg";
import licensed from "../assets/licensed.jpg";
import satisfaction from "../assets/satisfaction.jpg";

const features = [
  {
    title: "Modern Infrastructure",
    desc: "State-of-the-art warehouse facilities with modern systems.",
  },
  {
    title: "Secure Warehousing",
    desc: "24/7 surveillance and strict safety protocols for your goods.",
  },
  {
    title: "Strategic Locations",
    desc: "Warehouses near major transport hubs for faster delivery.",
  },
  {
    title: "Experienced Team",
    desc: "Skilled professionals with strong industry expertise.",
  },
  {
    title: "Cost Effective Solutions",
    desc: "Optimized logistics that reduce operational costs.",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock customer support for uninterrupted service.",
  },
];

const featureImages = [
  {
    img: open7days,
    label: "OPEN 7 DAYS A WEEK",
    desc: "Daily operations for uninterrupted logistics.",
  },
  {
    img: licensed,
    label: "STATE LICENSED",
    desc: "Fully compliant and certified services.",
  },
  {
    img: satisfaction,
    label: "SATISFACTION GUARANTEED",
    desc: "Customer-first service approach.",
  },
];

export default function Features() {
  return (
    <div style={{ padding: "90px 20px", background: colors.section }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        
        {/* TITLE */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "60px",
            fontSize: "36px",
            fontWeight: "800",
            color: colors.darkText,
          }}
        >
          Why Choose ArtWarehouse
        </h2>

        {/* FEATURES GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                height: "190px",
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                padding: "30px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.35s ease",
                cursor: "pointer",
              }}
            >
              <CheckCircleIcon
                style={{ color: colors.primary, fontSize: 36 }}
              />
              <h4
                style={{
                  margin: "12px 0 6px",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: colors.primary,
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: "14px", color: colors.mutedText }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* IMAGE SECTION */}
        <h3
          style={{
            textAlign: "center",
            margin: "90px 0 40px",
            fontSize: "30px",
            fontWeight: "800",
            color: colors.darkText,
          }}
        >
          Our Commitments
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {featureImages.map((item, i) => (
            <div
              key={i}
              className="image-card"
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
                cursor: "pointer",
                transition: "0.35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    transition: "0.4s ease",
                  }}
                />
              </div>

              <div style={{ padding: "18px", textAlign: "center" }}>
                <h4
                  style={{
                    margin: "6px 0",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: colors.primary,
                  }}
                >
                  {item.label}
                </h4>
                <p style={{ fontSize: "13px", color: colors.mutedText }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PURE CSS HOVER EFFECTS */}
        <style>
          {`
            .feature-card:hover {
              transform: translateY(-10px) scale(1.02);
              box-shadow: 0 14px 32px rgba(30,58,138,0.25);
            }

            .image-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 16px 36px rgba(0,0,0,0.28);
            }

            .image-card:hover img {
              transform: scale(1.1);
            }

            @media (max-width: 900px) {
              div[style*="gridTemplateColumns"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>

      </div>
    </div>
  );
}
