import Container from "../../ui/Container";

import Reveal from "../../components/ui/Reveal";

import IndustryCard from "./IndustryCard";

const industries = [
  {
    title: "Industrial Manufacturing",
    image: "/gallery/manufacturing.jpg",
  },

  {
    title: "Precision Components",
    image: "/gallery/precision-components.jpg",
  },

  {
    title: "Architectural Panels",
    image: "/gallery/architecture.jpg",
  },

  {
    title: "Custom Metal Design",
    image: "/gallery/custom-metal.jpg",
  },

  {
    title: "Heavy Fabrication",
    image: "/gallery/fabrication.jpg",
  },

  {
    title: "Laser Sheet Processing",
    image: "/gallery/sheets.jpg",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="
        relative
        overflow-hidden

        py-20
        sm:py-24
        lg:py-28
      "
    >
      <Container>
        {/* Header */}
        <Reveal>
          <div
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.32em]
              "
              style={{
                color:
                  "var(--color-gold-primary)",
              }}
            >
              INDUSTRIES WE SERVE
            </p>

            <h2
              className="
                mt-5

                text-4xl
                font-black
                leading-tight
                tracking-tight

                sm:text-5xl
              "
            >
              Engineering Solutions For
              Modern Industries
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl

                leading-8

                text-sm
                sm:text-base
              "
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              RisingLaser delivers precision
              fabrication and laser cutting
              solutions for industrial,
              architectural, and engineering
              sectors.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div
          className="
            mt-14

            grid
            gap-5

            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              {...industry}
              delay={index * 0.06}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}