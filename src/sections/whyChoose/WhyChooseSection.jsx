import {
  ShieldCheck,
  Cpu,
  Gauge,
  TimerReset,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable Production",
    description:
      "Consistent industrial-grade manufacturing with strict quality standards.",
  },
  {
    icon: Gauge,
    title: "Extreme Precision",
    description:
      "Advanced laser systems delivering micron-level cutting accuracy.",
  },
  {
    icon: Cpu,
    title: "Modern Automation",
    description:
      "Smart automated manufacturing workflows for faster production cycles.",
  },
  {
    icon: TimerReset,
    title: "Fast Delivery",
    description:
      "Efficient production pipelines designed for rapid project completion.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="overflow-hidden py-24">
      <Container>
        <SectionHeading
          title="Why Choose RisingLaser"
          description="Premium industrial engineering combined with modern precision manufacturing."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:border-emerald-500/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                <feature.icon
                  className="text-emerald-400"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}