import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

const galleryImages = [
  "/gcardspics/g1.jpg",
  "/gcardspics/g2.jpg",
  "/gcardspics/g3.jpg",
  "/gcardspics/g4.jpg",
  "/gcardspics/g5.jpg",
  "/gcardspics/g6.jpg",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="overflow-hidden py-24">
      <Container>
        <SectionHeading
          title="Production Gallery"
          description="Modern laser manufacturing with precision engineering and industrial-grade machinery."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
            >
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={`${image}?auto=format&fit=crop&w=800&q=80`}
                  alt="Industrial Laser"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}