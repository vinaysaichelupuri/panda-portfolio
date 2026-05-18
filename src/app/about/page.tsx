import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About | Vinay Sai Chelupuri",
  description: "Learn more about Vinay Sai Chelupuri, a Full Stack Developer.",
};

export default function AboutPage() {
  return (
    <main className="relative pt-20 min-h-screen">
      <AboutSection />
    </main>
  );
}
