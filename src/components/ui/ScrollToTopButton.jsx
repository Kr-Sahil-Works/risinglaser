import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 320);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll To Top"
      className={`
        fixed
        bottom-20
        right-5
        z-90

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-2xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-[1.03]

        active:scale-95

        md:bottom-24
        md:right-6

        ${
          show
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
      style={{
        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter:
          "blur(18px) saturate(180%)",

        WebkitBackdropFilter:
          "blur(18px) saturate(180%)",

        color:
          "var(--color-text-primary)",

        boxShadow:
          `
          inset 0 1px 0 rgba(255,255,255,0.04),
          0 10px 30px rgba(0,0,0,0.22)
          `,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor =
          "rgba(0,199,140,0.28)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor =
          "rgba(255,255,255,0.08)";
      }}
    >
      <ChevronUp size={20} />
    </button>
  );
}