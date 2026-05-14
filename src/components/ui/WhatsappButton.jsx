import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919608540597"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-5
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

        md:bottom-6
        md:right-6
      "
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
          "var(--color-green-light)",

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
      <FaWhatsapp size={20} />
    </a>
  );
}