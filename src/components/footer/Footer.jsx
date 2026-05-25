import Container from "../../ui/Container";

import {
  Link,
  useLocation,
} from "react-router-dom";

const footerLinks = {
  Company: [
    {
      label: "About Us",
      href: "/#home",
    },

    {
      label: "Our Process",
      href: "/#whychoose",
    },

    {
      label: "Contact",
      href: "/#contact",
    },
  ],

  Services: [
    {
      label: "Laser Cutting",
      href: "/#services",
    },

    {
      label: "Fabrication",
      href: "/#services",
    },

    {
      label: "Custom Engineering",
      href: "/#services",
    },

    {
      label: "Industrial Design",
      href: "/#services",
    },
  ],

  Industries: [
    {
      label: "Automotive",
    },

    {
      label: "Aerospace",
    },

    {
      label: "Defense",
    },

    {
      label: "Energy",
    },
  ],
};

export default function Footer() {
  const location = useLocation();

const isQuotePage =
  location.pathname === "/quote";
  return (
    <footer
  className={`
    overflow-hidden
    border-t
    border-white/10
    bg-black

    ${
      isQuotePage
        ? "py-10 sm:py-12"
        : "py-14 sm:py-16"
    }
  `}
>
      <Container>
        {/* Top Area */}
        <div
  className={`
    grid
    gap-12

    ${
      isQuotePage
        ? "grid-cols-1"
        : "md:grid-cols-2 lg:grid-cols-5 lg:gap-10"
    }
  `}
>
          {/* Brand */}
          <div
  className={
    isQuotePage
      ? "w-full"
      : "lg:col-span-2"
  }
>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-400" />

              <h2 className="text-2xl font-black">
                RisingLasers
              </h2>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
        Premium industrial laser cutting and advanced manufacturing solutions for modern industries worldwide.
            </p>

            {isQuotePage && (
  <div
    className="
      mt-5
      max-w-4xl
      space-y-2
      text-sm
      leading-7
      text-zinc-400
    "
  >
    <p>
      Precision-focused
      manufacturing with strict
      quality assurance and
      inspection standards.
    </p>

    <p>
      Fast customer response,
      reliable project handling,
      and industrial-grade
      production support.
    </p>

    <p>
      Trusted fabrication,
      laser cutting, and metal
      processing solutions for
      modern businesses.
    </p>
  </div>
)}

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
   {/* Footer Links */}
{!isQuotePage && (
  <div className="grid grid-cols-3 gap-6 lg:col-span-3 lg:gap-10">
    {Object.entries(
      footerLinks
    ).map(([title, links]) => (
      <div key={title}>
        <h3
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.18em]
            text-white
          "
        >
          {title}
        </h3>

        <div
          className="
            mt-5
            flex
            flex-col
            gap-3
          "
        >
          {links.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                to={link.href}
onClick={() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}}
                className="
                  text-sm
                  text-zinc-400
                  transition
                  duration-300
                  hover:text-emerald-400
                "
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={link.label}
                className="
                  cursor-default
                  text-sm
                  text-zinc-500
                "
              >
                {link.label}
              </span>
            )
          )}
        </div>
      </div>
    ))}
  </div>
)}
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
            © 2026 RisingLasers. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
        <span className="text-zinc-500">
  Privacy Policy
</span>
<span className="text-zinc-500">
  Terms
</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}