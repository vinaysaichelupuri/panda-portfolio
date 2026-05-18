import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata = {
  title: "Projects | Vinay Sai Chelupuri",
  description: "Projects built by Vinay Sai Chelupuri.",
};

export default function ProjectsPage() {
  return (
    <main className="relative pt-20 min-h-screen">
      <ProjectsSection />
    </main>
  );
}
