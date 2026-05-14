import Container from "../../ui/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroStats from "./HeroStats";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden
        border-b
        py-20

        sm:py-24
        lg:py-28
      "
      style={{
        borderColor:
          "rgba(255,255,255,0.08)",
      }}
    >
 {/* Background Video */}
<div
  className="
    absolute
    inset-0
    overflow-hidden
  "
>
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="
      h-full
      w-full
      object-cover
    "
  >
    <source
      src="/videos/laser-bg.mp4"
      type="video/mp4"
    />
  </video>

{/* Industrial Texture Overlay */}
<div
  className="
    absolute
    inset-0
    opacity-[0.14]
    mix-blend-soft-light
  "
  style={{
    backgroundImage:
      "url('/textures/metal.jpg')",

    backgroundSize:
      "cover",

    backgroundPosition:
      "center",
  }}
/>

{/* Cinematic Dark Layer */}
<div
  className="
    absolute
    inset-0
  "
  style={{
    background:
      `
      linear-gradient(
        to bottom,
        rgba(4,5,5,0.78),
        rgba(4,5,5,0.88)
      )
      `,
  }}
/>

{/* Emerald Atmosphere */}
<div
  className="
    absolute
    inset-0
  "
  style={{
    background:
      `
      radial-gradient(
        circle at top left,
        rgba(0,199,140,0.10),
        transparent 42%
      )
      `,
  }}
/>

{/* Left Frosted Glass Fade */}
<div
  className="
    absolute
    inset-y-0
    left-0

    w-[55%]
  "
  style={{
    background:
      `
      linear-gradient(
        to right,
        rgba(8,17,13,0.42),
        rgba(8,17,13,0.10),
        transparent
      )
      `,

    backdropFilter:
      "blur(3px)",

    WebkitBackdropFilter:
      "blur(3px)",
  }}
/>

{/* Bottom Fade */}
<div
  className="
    absolute
    inset-x-0
    bottom-0

    h-40
  "
  style={{
    background:
      `
      linear-gradient(
        to top,
        rgba(4,5,5,0.94),
        transparent
      )
      `,
  }}
/>
</div>

      <Container className="relative z-10">
        {/* Hero Grid */}
        <div
          className="
            grid
            items-center
            gap-14

            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* Left */}
          <HeroContent />

          {/* Right */}
          <HeroVisual />
        </div>

        {/* Stats */}
        <div className="mt-14 sm:mt-16">
          <HeroStats />
        </div>
      </Container>
    </section>
  );
}