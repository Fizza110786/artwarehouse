import React from "react";
import { colors } from "../theme";

export default function Contact() {
  return (
    <div style={{ padding: "110px 20px", background: colors.section }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: 800,
          color: colors.darkText,
          marginBottom: "60px",
        }}
      >
        Contact Us
      </h1>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          background: "white",
          padding: "60px",
          borderRadius: "20px",
          boxShadow: "0 18px 50px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Side */}
        <div>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "16px",
            }}
          >
            Get in Touch
          </h2>

          <p style={{ color: colors.mutedText, marginBottom: "30px" }}>
            Have a question or want to work with us?  
            Fill out the form and we’ll get back to you.
          </p>

          <div style={{ marginBottom: "16px", fontSize: "15px" }}>
            📍 <span>Chennai, India</span>
          </div>
          <div style={{ marginBottom: "16px", fontSize: "15px" }}>
            📞 <span>+91 9940663288</span>
          </div>
          <div style={{ marginBottom: "16px", fontSize: "15px" }}>
            ✉ <span>info@artwarehouse.com</span>
          </div>
        </div>

        {/* Right Side */}
        <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            style={{ ...inputStyle, resize: "none" }}
          />

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "14px",
              borderRadius: "30px",
              border: "none",
              background: colors.accent,
              color: "white",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "#e11d48")
            }
            onMouseOut={(e) =>
              (e.target.style.background = colors.accent)
            }
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            padding: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  padding: "14px 18px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  fontSize: "14px",
  outline: "none",
};
