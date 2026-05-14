import Reveal from "../../components/ui/Reveal";

export default function ServiceCard({
  icon,
  title,
  desc,
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

          p-7

          transition-all
          duration-300

          hover:-translate-y-1
        "
        style={{
          background:
            "rgba(255,255,255,0.03)",

          borderColor:
            "rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(14px) saturate(160%)",

          WebkitBackdropFilter:
            "blur(14px) saturate(160%)",
        }}
      >
        {/* Hover Glow */}
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
                circle at top left,
                rgba(0,199,140,0.08),
                transparent 72%
              )
              `,
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="
              mb-7

              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-2xl
              border
            "
            style={{
              background:
                "rgba(0,199,140,0.08)",

              borderColor:
                "rgba(0,199,140,0.12)",

              color:
                "var(--color-green-light)",
            }}
          >
            {icon}
          </div>

          {/* Title */}
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-4
              leading-8
              text-sm
              sm:text-base
            "
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            {desc}
          </p>

          {/* Link */}
          <button
            className="
              mt-8

              text-sm
              font-semibold

              transition-all
              duration-300

              group-hover:translate-x-1
            "
            style={{
              color:
                "var(--color-gold-primary)",
            }}
          >
            Learn More →
          </button>
        </div>
      </div>
    </Reveal>
  );
}