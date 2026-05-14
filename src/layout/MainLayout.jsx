import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import ScrollProgress from "../components/ui/ScrollProgress";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import WhatsappButton from "../components/ui/WhatsappButton";
import CursorGlow from "../components/ui/CursorGlow";


export default function MainLayout({
  children,
}) {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
      "
      style={{
        background:
          "var(--color-background)",

        color:
          "var(--color-text-primary)",
      }}
    >
      {/* Scroll Progress */}

<ScrollProgress />

{/* Cursor Glow */}
<CursorGlow />


      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full overflow-x-hidden pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating UI */}
      <ScrollToTopButton />

      <WhatsappButton />
    </div>
  );
}