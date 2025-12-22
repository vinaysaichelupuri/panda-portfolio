import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Vinay Sai | Full Stack Developer",
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
     title: "Vinay Sai Chelpuri | Full Stack Developer ",
    description: "A playful yet professional portfolio with a panda theme",
    url: "https://vinaysaichelupuri.com",
    siteName: "Vinay Sai Portfolio",
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
        <Toaster
          position="top-right"
          toastOptions={{
            // Default options
            duration: 4000,
            style: {
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "2px solid #10b981",
              padding: "16px",
              color: "#1f2937",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(16, 185, 129, 0.2)",
              fontWeight: "500",
            },
            // Success toast
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
              style: {
                background: "rgba(236, 253, 245, 0.95)",
                border: "2px solid #10b981",
              },
            },
            // Error toast
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
              style: {
                background: "rgba(254, 242, 242, 0.95)",
                border: "2px solid #ef4444",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
