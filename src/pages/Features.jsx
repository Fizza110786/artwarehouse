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
        <h2 className="features-title">
          Why Choose ArtWarehouse
        </h2>

        {/* FEATURES GRID */}
        <div className="features-grid">
          {features.map((item, i) => (
            <div key={i} className="feature-card">
              <CheckCircleIcon
                style={{ color: colors.primary, fontSize: 36 }}
              />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* IMAGE SECTION */}
        <h3 className="commitments-title">
          Our Commitments
        </h3>

        <div className="image-grid">
          {featureImages.map((item, i) => (
            <div key={i} className="image-card">
              <div className="image-wrap">
                <img src={item.img} alt={item.label} />
              </div>

              <div className="image-text">
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* STYLES */}
        <style>{`
          .features-title {
            text-align: center;
            margin-bottom: 60px;
            font-size: 36px;
            font-weight: 800;
            color: ${colors.darkText};
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .feature-card {
            height: 190px;
            background: white;
            border-radius: 18px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
            padding: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.35s;
            cursor: pointer;
          }

          .feature-card h4 {
            margin: 12px 0 6px;
            font-size: 20px;
            font-weight: 700;
            color: ${colors.primary};
          }

          .feature-card p {
            font-size: 14px;
            color: ${colors.mutedText};
          }

          .feature-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 14px 32px rgba(30,58,138,0.25);
          }

          .commitments-title {
            text-align: center;
            margin: 90px 0 40px;
            font-size: 30px;
            font-weight: 800;
            color: ${colors.darkText};
          }

          .image-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .image-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 22px rgba(0,0,0,0.18);
            cursor: pointer;
            transition: 0.35s;
          }

          .image-wrap {
            overflow: hidden;
          }

          .image-wrap img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            transition: 0.4s;
          }

          .image-text {
            padding: 18px;
            text-align: center;
          }

          .image-text h4 {
            margin: 6px 0;
            font-size: 18px;
            font-weight: 700;
            color: ${colors.primary};
          }

          .image-text p {
            font-size: 13px;
            color: ${colors.mutedText};
          }

          .image-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 16px 36px rgba(0,0,0,0.28);
          }

          .image-card:hover img {
            transform: scale(1.1);
          }

          /* MOBILE */
          @media (max-width: 900px) {
            .features-grid,
            .image-grid {
              grid-template-columns: 1fr;
            }

            .features-title {
              font-size: 28px;
            }

            .commitments-title {
              font-size: 24px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
