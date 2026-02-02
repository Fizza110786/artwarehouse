import React from "react";
import { FaWarehouse, FaTruck, FaBoxes, FaTools } from "react-icons/fa";
import { colors } from "../theme";

import distributionImg from "../assets/distribution.jpg";
import customsImg from "../assets/customs.jpg";
import transportImg from "../assets/transport.jpg";

export default function Services() {
  const services = [
    {
      title: "Warehousing Solutions",
      icon: <FaWarehouse />,
      desc: "Secure and scalable warehouse infrastructure.",
      points: ["24/7 Security", "Climate Control", "Flexible Storage"],
    },
    {
      title: "Logistics & Distribution",
      icon: <FaTruck />,
      desc: "End-to-end delivery solutions.",
      points: ["Last-mile delivery", "Fleet tracking", "Route planning"],
    },
    {
      title: "Inventory Management",
      icon: <FaBoxes />,
      desc: "Smart systems with real-time tracking.",
      points: ["Barcode system", "Stock reports", "Auto alerts"],
    },
    {
      title: "Value Added Services",
      icon: <FaTools />,
      desc: "Custom services for your business.",
      points: ["Packaging", "Labeling", "Quality checks"],
    },
  ];

  return (
    <div style={{ padding: "110px 20px", background: colors.section }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">
          End-to-end warehousing and logistics solutions designed for efficiency
        </p>

        {/* SERVICE CARDS */}
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((p, idx) => (
                  <li key={idx}>✔ {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* IMAGE STRIP */}
        <div className="image-services">
          {[distributionImg, customsImg, transportImg].map((img, i) => {
            const labels = [
              "DISTRIBUTION",
              "CUSTOMS CLEARANCE",
              "TRANSPORTATION",
            ];
            return (
              <div
                key={i}
                className="img-card"
                style={{ backgroundImage: `url(${img})` }}
              >
                <span>{labels[i]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .section-title {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 10px;
          color: ${colors.darkText};
        }

        .section-sub {
          text-align: center;
          color: ${colors.mutedText};
          margin-bottom: 70px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-bottom: 90px;
        }

        .service-card {
          background: white;
          padding: 42px 30px;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          transition: 0.35s;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 22px 50px rgba(30,58,138,0.2);
        }

        .service-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: ${colors.accent};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin: 0 auto 18px;
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: ${colors.primary};
        }

        .service-card p {
          color: ${colors.mutedText};
          font-size: 14px;
          margin-bottom: 14px;
        }

        .service-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          color: ${colors.darkText};
          font-size: 14px;
        }

        /* IMAGE STRIP */
        .image-services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          height: 340px;
          border-radius: 22px;
          overflow: hidden;
        }

        .img-card {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 1px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: 0.4s;
        }

        .img-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(30,58,138,0.65);
        }

        .img-card:hover {
          transform: scale(1.08);
        }

        .img-card span {
          position: relative;
          z-index: 2;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .image-services {
            grid-template-columns: 1fr;
            height: auto;
          }

          .img-card {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
