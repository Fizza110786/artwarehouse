import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { colors } from "../theme";

import member1 from "../assets/team1.jpg";
import member2 from "../assets/team2.jpg";
import member3 from "../assets/team3.jpg";
import member4 from "../assets/team4.jpg";
import member5 from "../assets/team5.jpg";
import member6 from "../assets/team6.jpg";

const team = [
  {
    name: "Jamie Lane",
    role: "Operations Manager",
    bio: "10+ years in logistics operations, team leadership, and warehouse optimization.",
    linkedin: "https://linkedin.com",
    email: "jamie@artwarehouse.in",
    img: member1,
  },
  {
    name: "Drew Carlyle",
    role: "Warehouse Supervisor",
    bio: "Specialist in warehouse safety, inventory control, and large-scale distribution systems.",
    linkedin: "https://linkedin.com",
    email: "drew@artwarehouse.in",
    img: member2,
  },
  {
    name: "Ash Marcus",
    role: "Logistics Specialist",
    bio: "Expert in supply chain planning, route optimization, and cross-border logistics.",
    linkedin: "https://linkedin.com",
    email: "ash@artwarehouse.in",
    img: member3,
  },
  {
    name: "Rahul Mehta",
    role: "Warehouse Operations Lead",
    bio: "Oversees daily warehouse activities, staff coordination, and workflow efficiency.",
    linkedin: "https://linkedin.com",
    email: "rahul@artwarehouse.in",
    img: member4,
  },
  {
    name: "Arjun Kapoor",
    role: "Supply Chain Manager",
    bio: "Leads inventory forecasting, procurement planning, and process optimization.",
    linkedin: "https://linkedin.com",
    email: "arjun@artwarehouse.in",
    img: member5,
  },
  {
    name: "Sana",
    role: "Compliance & Safety Officer",
    bio: "Ensures safety standards, regulatory compliance, and operational quality audits.",
    linkedin: "https://linkedin.com",
    email: "neha@artwarehouse.in",
    img: member6,
  },
];

export default function Team() {
  return (
    <div style={{ padding: "90px 20px", background: colors.section }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "60px",
            fontSize: "40px",
            fontWeight: "800",
            color: colors.darkText,
          }}
        >
          Meet Our Team
        </h2>

        <div className="team-grid">
          {team.map((m, i) => (
            <div key={i} className="team-card">
              <img src={m.img} alt={m.name} />

              {/* Always visible */}
              <div className="team-basic">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>

              {/* Hover overlay */}
              <div className="team-hover">
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p className="bio">{m.bio}</p>

                <div className="team-icons">
                  <a href={m.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={`mailto:${m.email}`}>
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .team-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .team-card {
            position: relative;
            height: 420px;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 12px 28px rgba(0,0,0,0.15);
            cursor: pointer;
            background: ${colors.white};
          }

          .team-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.4s;
          }

          .team-basic {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 18px;
            background: linear-gradient(
              to top,
              rgba(0,0,0,0.75),
              transparent
            );
            color: white;
            z-index: 2;
          }

          .team-basic h3 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
          }

          .team-basic p {
            margin: 0;
            font-size: 14px;
          }

          .team-hover {
            position: absolute;
            inset: 0;
            background: rgba(30,58,138,0.7);
            color: white;
            padding: 30px;
            opacity: 0;
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            z-index: 3;
          }

          .team-card:hover .team-hover {
            opacity: 1;
          }

          .team-card:hover img {
            transform: scale(1.05);
          }

          .team-hover h3 {
            margin: 0;
            font-size: 24px;
            font-weight: 800;
          }

          .team-hover .role {
            font-size: 14px;
            margin-bottom: 12px;
            color: ${colors.accent};
          }

          .team-hover .bio {
            font-size: 14px;
            margin-bottom: 18px;
          }

          .team-icons {
            display: flex;
            gap: 18px;
            font-size: 22px;
          }

          .team-icons a {
            color: white;
            transition: 0.2s;
          }

          .team-icons a:hover {
            color: ${colors.accent};
          }

          @media (max-width: 900px) {
            .team-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 600px) {
            .team-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
