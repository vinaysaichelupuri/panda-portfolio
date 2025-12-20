import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "Vinay Sai - Full Stack Developer 🐼",
  description:
    "A playful yet professional portfolio showcasing full-stack development skills with a charming panda theme. Explore projects, skills, and experience in a unique bamboo forest setting.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Vinay Sai" }],
  openGraph: {
    title: "Vinay Sai - Full Stack Developer 🐼",
    description: "A playful yet professional portfolio with a panda theme",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
