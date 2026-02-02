import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { colors } from "../theme";

export default function Clients() {
  const partners = [
    {
      name: "SOVIX",
      desc: "Enterprise logistics partner for multi-city warehouse operations.",
    },
    {
      name: "POLAR",
      desc: "Cold-chain storage solutions for FMCG distribution.",
    },
    {
      name: "ITAKA",
      desc: "Export & import warehousing across major ports.",
    },
  ];

  const testimonials = [
    {
      company: "TechCorp Industries",
      person: "Rajesh Kumar",
      role: "Supply Chain Director",
      text:
        "Art Warehouse has been instrumental in streamlining our supply chain. Their professionalism and attention to detail are unmatched.",
    },
    {
      company: "Global Retail Co.",
      person: "Priya Sharma",
      role: "Operations Manager",
      text:
        "The team understands our needs and delivers consistently. Highly recommended for any warehousing requirements.",
    },
    {
      company: "Premium Exports Ltd.",
      person: "Mohammed Ali",
      role: "Export Manager",
      text:
        "Reliable, efficient, and always going the extra mile. A trusted partner for over 5 years.",
    },
  ];

  return (
    <div style={{ padding: "100px 20px", background: colors.light }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Trusted Partners */}
        <h2 className="section-title">Trusted Partners</h2>
        <p className="section-sub">
          Long-term collaborations with industry leaders
        </p>

        <div className="partners-grid">
          {partners.map((p, i) => (
            <div key={i} className="partner-card">
              <div className="partner-logo">{p.name[0]}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="section-title" style={{ marginTop: "120px" }}>
          What Our Clients Say
        </h2>
        <p className="section-sub">
          Real feedback from businesses we serve every day
        </p>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="test-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="test-text">"{t.text}"</p>
              <h4>{t.person}</h4>
              <span>{t.role}</span>
              <div className="company">{t.company}</div>
            </div>
          ))}
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
          margin-bottom: 60px;
        }

        /* Partners */
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .partner-card {
          text-align: center;
          padding: 40px 30px;
          border-radius: 18px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
          transition: 0.3s;
          background: white;
        }

        .partner-card:hover {
          transform: translateY(-8px);
        }

        .partner-logo {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          font-weight: 900;
          color: white;
          background: ${colors.accent};
          box-shadow: 0 8px 18px rgba(0,0,0,0.2);
        }

        .partner-card h3 {
          margin-bottom: 8px;
          font-size: 22px;
          color: ${colors.primary};
        }

        .partner-card p {
          color: ${colors.mutedText};
          font-size: 15px;
        }

        /* Testimonials */
        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .test-card {
          padding: 40px;
          border-radius: 20px;
          background: white;
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .test-card:hover {
          transform: translateY(-10px);
        }

        .quote-icon {
          font-size: 30px;
          color: ${colors.accent};
          margin-bottom: 20px;
        }

        .test-text {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 20px;
          color: ${colors.darkText};
        }

        .test-card h4 {
          margin: 0;
          font-size: 17px;
          font-weight: 700;
          color: ${colors.primary};
        }

        .test-card span {
          font-size: 13px;
          color: ${colors.mutedText};
        }

        .company {
          margin-top: 12px;
          font-size: 13px;
          font-weight: 600;
          color: ${colors.accent};
        }

        /* Mobile */
        @media (max-width: 900px) {
          .partners-grid,
          .test-grid {
            grid-template-columns: 1fr;
          }

          .test-card {
            padding: 28px;
          }
        }
      `}</style>
    </div>
  );
}
