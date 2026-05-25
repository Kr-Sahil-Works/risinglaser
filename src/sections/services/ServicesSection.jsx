import {
  ScanLine,
  Settings,
  Cog,
  Layers3,
  ShieldCheck,
  Wrench,
  SprayCan,
  Cable,
} from "lucide-react";

import Container from "../../ui/Container";

import Reveal from "../../components/ui/Reveal";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <ScanLine size={34} />,
    title: "Laser Cutting",
    desc:
      "High precision industrial laser cutting with modern machinery and clean finishing.",
  },

  {
    icon: <Settings size={34} />,
    title: "Metal Fabrication",
    desc:
      "Advanced fabrication solutions for industrial and architectural requirements.",
  },

  {
    icon: <Cog size={34} />,
    title: "Custom Engineering",
    desc:
      "Tailored engineering services for custom manufacturing and production needs.",
  },

  {
    icon: <Layers3 size={34} />,
    title: "Sheet Processing",
    desc:
      "Professional sheet metal processing with precision and durability.",
  },

  {
    icon: <ShieldCheck size={34} />,
    title: "Quality Assurance",
    desc:
      "Strict quality control and inspection for every industrial project.",
  },

  {
    icon: <Wrench size={34} />,
    title: "Industrial Support",
    desc:
      "Reliable industrial support and maintenance services for businesses.",
  },

  {
icon: <SprayCan size={34} />,
  title: "Powder Coating",
  desc:
    "High-quality powder coating services with durable and smooth finishing.",
},
{
  icon: <Cable size={34} />,
  title: "Metal Bending",
  desc:
    "Precision metal bending solutions for industrial and custom fabrication needs.",
},
];

export default function ServicesSection() {
  return (
    <section
      id="services"
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
              OUR SERVICES
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
              Premium Industrial Solutions
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
              RisingLasers delivers precision
              laser cutting, fabrication,
              and engineering solutions
              for modern industries.
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
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.06}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}