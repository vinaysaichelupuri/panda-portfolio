import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Contact | Vinay Sai Chelupuri",
  description: "Get in touch with Vinay Sai Chelupuri.",
};

export default function ContactPage() {
  return (
    <main className="relative pt-20 min-h-screen">
      <ContactSection />
      <Footer />
    </main>
  );
}
