import { useState } from "react";
import Container from "../../ui/Container";
import LaserLogo from "./LaserLogo";
import {
  Link,
  useLocation,
} from "react-router-dom";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

const isQuotePage =
  location.pathname === "/quote";

  
const navLinks = isQuotePage
  ? [
      {
        label: "Home",
        href: "#home",
      },

      {
        label: "Services",
        href: "#services",
      },

      {
        label: "Industries",
        href: "#industries",
      },
    ]
  : [
      {
        label: "Home",
        href: "#home",
      },

      {
        label: "Services",
        href: "#services",
      },

      {
        label: "Industries",
        href: "#industries",
      },

      {
        label: "Gallery",
        href: "#gallery",
      },

      {
        label: "Contact",
        href: "#contact",
      },
    ];

    

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        border-b
        backdrop-blur-md
      "
      style={{
        background: "rgba(4, 5, 5, 0.78)",
        borderColor: "var(--color-border)",
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
     <Link
  to="/"
  className="flex items-center"
>
  {/* Green Dot */}
  <LaserLogo />

  {/* Logo Text */}
  <div className="flex flex-col">
    <span
      className="
        text-xl
        font-black
        leading-none
        tracking-tight
        sm:text-2xl
      "
    >
      <span
        style={{
          color:
            "var(--color-text-primary)",
        }}
      >
        Rising
      </span>

      <span
        style={{
          marginLeft: 2,
          color:
            "var(--color-green-light)",
        }}
      >
        Lasers
      </span>
    </span>

    <span
      className="
        mt-1
        text-[9px]
        font-medium
        uppercase
        tracking-[0.38em]
      "
      style={{
        color:
          "var(--color-gold-primary)",
      }}
    >
      Trust Quality
    </span>
  </div>
</Link>

          {/* Desktop Nav */}
     <div className="hidden md:flex md:ml-auto">
  <nav className="flex items-center gap-10 lg:gap-12">
    {navLinks.map((link) => (
      <a
        key={link.label}
        href={
  location.pathname === "/"
    ? link.href
    : `/${link.href}`
}
        className="
          group
          relative
          py-2
          text-sm
          font-medium
          tracking-wide
          transition
          duration-300
        "
        style={{
          color: "var(--color-text-secondary)",
        }}
      >
        <span
          className="
            transition
            duration-300
            group-hover:text-(--color-green-light)
          "
        >
          {link.label}
        </span>

        <span
          className="
            absolute
            bottom-0
            left-0
            h-0.5
            w-0
            rounded-full
            transition-all
            duration-300
            group-hover:w-full
          "
          style={{
            background:
              "var(--color-green-light)",

            boxShadow:
              "0 0 12px var(--color-glow-green)",
          }}
        />
      </a>
    ))}
  </nav>
</div>
          {/* Desktop Button */}
          {!isQuotePage && (
  <div className="hidden md:flex md:ml-10">
         <Link to="/quote">
  <button
    className="
      rounded-2xl
      px-5
      py-2
      text-sm
      font-semibold
      transition
      duration-300
    "
    style={{
      background:
        "var(--color-green-primary)",

      color:
        "var(--color-text-primary)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background =
        "var(--color-green-secondary)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background =
        "var(--color-green-primary)";
    }}
  >
    Get Quote
  </button>
</Link>
          </div>
)}

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              md:hidden
            "
            style={{
              border:
                "1px solid var(--color-border)",

              color:
                "var(--color-text-primary)",

              background:
                "var(--color-surface)",
            }}
          >
            {menuOpen ? (
              <span className="text-xl">
                ✕
              </span>
            ) : (
              <span className="text-xl">
                ☰
              </span>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
      <div className="md:hidden px-3 pt-3">
  <div
    className="
      overflow-hidden
      rounded-[28px]
      border
    "
    style={{
      borderColor:
        "rgba(255,255,255,0.08)",

      background:
  "rgba(8, 17, 13, 0.48)",

      backdropFilter:
        "blur(28px) saturate(180%)",

      WebkitBackdropFilter:
        "blur(28px) saturate(180%)",

      boxShadow:
        `
        inset 0 1px 0 rgba(255,255,255,0.04),
        0 10px 40px rgba(0,0,0,0.28)
        `,
    }}
  >
          <Container>
            <div className="flex flex-col gap-3 py-5">
              {navLinks.map((link) => (
             <a
  key={link.label}
  href={
  location.pathname === "/"
    ? link.href
    : `/${link.href}`
}
  onClick={() => setMenuOpen(false)}

                className="
  rounded-2xl
  px-4
  py-3
  text-[15px]
                    font-medium
                    transition
                    duration-300
                    hover:text-(--color-green-light)
                    hover:bg-white/3
                  "
                  style={{
                      background: "transparent",

                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  {link.label}
                </a>
              ))}
{!isQuotePage && (
          <Link to="/quote">
  <button
                className="
                  mt-2
                  rounded-2xl
                  px-5
                  py-3
                  text-sm
                  font-semibold
                "
                style={{
                  background:
                    "var(--color-green-primary)",

                  color:
                    "var(--color-text-primary)",
                }}
              >
                Get Quote
        </button>
</Link>
)}
            </div>
          </Container>
        </div>
        </div>
      )}
    </header>
  );
}