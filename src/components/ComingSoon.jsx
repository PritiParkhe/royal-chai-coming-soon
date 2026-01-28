import "../styles/coming-soon.css";
import logo from "../assets/logo.png";

export default function ComingSoon() {
  return (
    <div className="page">
      <div className="card">
        <img src={logo} alt="Brand Logo" className="logo" />

        <h1 className="tagline">Brew the Royal Tradition</h1>

        <p className="description">
          Premium instant chai tea premix inspired by royal Indian households.
          Rich, aromatic, and timeless.
        </p>

        <div className="divider"></div>

        <span className="badge">LAUNCHING SOON</span>

        <form className="signup">
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Notify Me</button>
        </form>

        <div className="divider"></div>

        <div className="socials">
          <a href="#">IG</a>
          <a href="#">X</a>
          <a href="#">FB</a>
        </div>
      </div>
    </div>
  );
}