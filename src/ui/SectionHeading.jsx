export default function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}