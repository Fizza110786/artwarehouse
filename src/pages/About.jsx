import React from "react";
import aboutImg from "../assets/about.jpg";
import { colors } from "../theme";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-wrapper">

        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>

        <div className="about-text">
          <h2>A BIT ABOUT US</h2>
          <h4>Our Background</h4>

          <p>
            Since our founding, we’ve worked with numerous clients throughout the
            area. Great service begins and ends with experienced and friendly
            professionals.
          </p>

          <p>
            We put careful thought into selecting the best people to join our team.
            We complete projects efficiently and on schedule, and go above and
            beyond to form lasting relationships with our clients.
          </p>

          <ul>
            <li>✔ 10+ Years Industry Experience</li>
            <li>✔ Modern Infrastructure</li>
            <li>✔ Trusted by 200+ Clients</li>
            <li>✔ ISO Standard Warehousing</li>
          </ul>
        </div>

      </div>

      <style>{`
        .about-page {
          padding: 110px 20px;
          background: ${colors.section};
        }

        .about-wrapper {
          max-width: 1300px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .about-image img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 18px 50px rgba(0,0,0,0.18);
        }

        .about-text h2 {
          font-size: 38px;
          font-weight: 800;
          color: ${colors.accent};
          margin-bottom: 10px;
        }

        .about-text h4 {
          font-size: 18px;
          color: ${colors.primary};
          margin-bottom: 22px;
        }

        .about-text p {
          color: ${colors.darkText};
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .about-text ul {
          margin-top: 20px;
          padding-left: 0;
          list-style: none;
          color: ${colors.darkText};
        }

        .about-text li {
          margin-bottom: 10px;
          font-size: 15px;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .about-wrapper {
            grid-template-columns: 1fr;
          }

          .about-image img {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
