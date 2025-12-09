// src/pages/StartFree.jsx
import React from "react";
import { Link } from "react-router-dom";

const styles = {
  wrapper: { padding: "64px 64px 80px" },
  badge: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12,
    letterSpacing: 1,
    background: "rgba(255,122,24,0.1)",
    color: "#ff7a18",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  heading: { fontSize: 40, fontWeight: 700, marginBottom: 12 },
  sub: {
    fontSize: 18,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 640,
    marginBottom: 32,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 40,
    alignItems: "flex-start",
  },
  card: {
    background: "rgba(255,255,255,0.02)",
    borderRadius: 24,
    padding: 28,
    border: "1px solid rgba(255,255,255,0.06)",
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "rgba(255,255,255,0.7)",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(5,5,5,0.9)",
    color: "#fff",
    fontSize: 14,
    marginBottom: 18,
  },
  submit: {
    marginTop: 6,
    width: "100%",
    padding: "12px 16px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background:
      "linear-gradient(135deg, #ff7a18 0%, #ff521b 25%, #ff0066 60%, #ff8a00 100%)",
    color: "#fff",
    fontWeight: 600,
    fontSize: 15,
  },
  small: {
    fontSize: 12,
    color: "rgba(255,255,255,0.6)",
    marginTop: 10,
  },
  featuresList: {
    display: "grid",
    gap: 14,
    marginTop: 16,
  },
  featureItem: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #ff7a18 0%, #ff521b 50%, #ff0066 100%)",
    marginTop: 6,
  },
  goBack: { marginTop: 28, fontSize: 14 },
  link: { color: "#ff7a18", textDecoration: "none" },
};

export default function StartFree() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo request submitted! (You can connect this to your backend.)");
  };

  return (
    <main style={styles.wrapper}>
      <span style={styles.badge}>Free developer plan</span>
      <h1 style={styles.heading}>Start building in minutes</h1>
      <p style={styles.sub}>
        Create your free VirtualR workspace, invite your team, and ship your
        first VR experience without entering a credit card.
      </p>

      <div style={styles.grid}>
        {/* Left – form */}
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Create your workspace</h2>

          <label style={styles.label}>Full name</label>
          <input style={styles.input} required placeholder="Khushi Chugh" />

          <label style={styles.label}>Work email</label>
          <input
            style={styles.input}
            type="email"
            required
            placeholder="you@example.com"
          />

          <label style={styles.label}>Team / project name</label>
          <input
            style={styles.input}
            required
            placeholder="Immersive VR Storefront"
          />

          <button style={styles.submit} type="submit">
            Create free workspace
          </button>
          <p style={styles.small}>
            By continuing you agree to the Terms of Service and Privacy Policy.
          </p>
        </form>

        {/* Right – benefits */}
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 10 }}>What’s included</h3>
          <div style={styles.featuresList}>
            {[
              "Unlimited personal projects",
              "Up to 3 collaborators",
              "Built-in analytics for VR scenes",
              "Access to community templates",
              "Email support & onboarding guide",
            ].map((text) => (
              <div key={text} style={styles.featureItem}>
                <div style={styles.bullet} />
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p style={styles.goBack}>
        Want to read first?{" "}
        <Link to="/docs" style={styles.link}>
          Explore the documentation
        </Link>
        .
      </p>
    </main>
  );
}
