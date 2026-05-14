import "./laserLogo.css";

export default function LaserLogo() {
  return (
    <div className="laser-logo">
      <img
        src="/laser-head.png"
        alt="Laser Head"
        className="laser-logo-image"
      />

      <div className="laser-glow" />
    </div>
  );
}