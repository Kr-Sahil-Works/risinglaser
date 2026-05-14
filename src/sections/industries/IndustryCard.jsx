import Reveal from "../../components/ui/Reveal";

export default function IndustryCard({
  title,
  image,
  delay = 0,
}) {
  return (
    <Reveal delay={delay}>
      <div
        className="
          group
          relative
          overflow-hidden

          rounded-[30px]
          border

          min-h-70

          transition-all
          duration-500

          hover:-translate-y-1
        "
        style={{
          borderColor:
            "rgba(255,255,255,0.08)",

          background:
            "rgba(255,255,255,0.03)",

          backdropFilter:
            "blur(12px)",

          WebkitBackdropFilter:
            "blur(12px)",
        }}
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            absolute
            inset-0

            h-full
            w-full

            object-cover

            opacity-70

            transition-transform
            duration-700

            group-hover:scale-[1.04]
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
          "
          style={{
            background:
              `
              linear-gradient(
                to top,
                rgba(4,5,5,0.92),
                rgba(4,5,5,0.32),
                rgba(4,5,5,0.08)
              )
              `,
          }}
        />

        {/* Hover Tint */}
        <div
          className="
            absolute
            inset-0

            opacity-0
            transition
            duration-500

            group-hover:opacity-100
          "
          style={{
            background:
              `
              radial-gradient(
                circle at bottom left,
                rgba(0,199,140,0.12),
                transparent 60%
              )
              `,
          }}
        />

        {/* Content */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0

            p-6
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.28em]
            "
            style={{
              color:
                "var(--color-gold-primary)",
            }}
          >
            INDUSTRIAL SECTOR
          </p>

          <h3
            className="
              mt-3

              text-2xl
              font-bold
              tracking-tight
            "
          >
            {title}
          </h3>
        </div>
      </div>
    </Reveal>
  );
}