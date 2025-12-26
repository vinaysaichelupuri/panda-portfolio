import { portfolioData } from "@/data/portfolio-data";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vinay Sai Chelupuri",
    alternateName: ["Vinay Sai", "Vinay Chelupuri", "Vinaysai Chelupuri"],
    jobTitle: portfolioData.personal.title,
    description: portfolioData.personal.bio,
    url: "https://vinaysaichelupuri.com",
    email: portfolioData.personal.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warangal",
      addressCountry: "IN",
    },
    sameAs: [portfolioData.social.github, portfolioData.social.linkedin],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "NestJS",
      "GraphQL",
      "Web Development",
      "Mobile Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    },
    worksFor: {
      "@type": "Organization",
      name: "Everest Engineering",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
