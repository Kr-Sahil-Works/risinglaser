import Container from "../../ui/Container";
import Button from "../../ui/Button";

export default function CTASection() {
  return (
    <section id="contact" className="overflow-hidden py-24">
      <Container>
        <div className="rounded-4xl border border-white/10 bg-linear-to-br from-emerald-500/10 via-zinc-950 to-black p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Start Your Project
            </div>

            <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Precision Manufacturing Built For Modern Industry
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
              Partner with RisingLaser for high-performance industrial laser
              cutting and advanced fabrication solutions.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button>
                Request Quote
              </Button>

              <button className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/30">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}