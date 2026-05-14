import Container from "../../ui/Container";

const footerLinks = {
  Company: [
    "About Us",
    "Careers",
    "Our Process",
    "Contact",
  ],

  Services: [
    "Laser Cutting",
    "Fabrication",
    "Custom Engineering",
    "Industrial Design",
  ],

  Industries: [
    "Automotive",
    "Aerospace",
    "Defense",
    "Energy",
  ],
};

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-black py-14 sm:py-16">
      <Container>
        {/* Top Area */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-400" />

              <h2 className="text-2xl font-black">
                RisingLaser
              </h2>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
              Premium industrial laser cutting and advanced manufacturing
              solutions for modern industries worldwide.
            </p>

            {/* Socials */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {["F", "X", "In", "▶"].map((item) => (
                <button
                  key={item}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/3
                    text-sm
                    font-semibold
                    text-zinc-300
                    transition
                    duration-300
                    hover:border-emerald-500/30
                    hover:text-emerald-400
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-6 lg:col-span-3 lg:gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {title}
                </h3>

                <div className="mt-5 flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="
                        text-sm
                        text-zinc-400
                        transition
                        duration-300
                        hover:text-emerald-400
                      "
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-sm
            text-zinc-500

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2026 RisingLaser. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="transition duration-300 hover:text-emerald-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-emerald-400"
            >
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}