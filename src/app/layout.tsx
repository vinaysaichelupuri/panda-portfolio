import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { Toaster } from "react-hot-toast";
import PersonSchema from "@/components/PersonSchema";

export const metadata: Metadata = {
  title: "Vinay Sai Chelupuri | Full Stack Developer Portfolio",
  description:
    "Vinay Sai Chelupuri - Full Stack Developer specializing in React, Node.js, and mobile development. Explore my portfolio featuring web and mobile applications built with modern technologies.",
  keywords: [
    "Vinay Sai",
    "Vinay Sai Chelupuri",
    "Vinaysai Chelupuri",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "React Native Developer",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "MongoDB",
    "Portfolio",
    "Web Development",
    "Mobile Development",
    "Warangal Developer",
    "Indian Developer",
  ],
  authors: [{ name: "Vinay Sai Chelupuri" }],
  creator: "Vinay Sai Chelupuri",
  publisher: "Vinay Sai Chelupuri",
  metadataBase: new URL("https://vinaysaichelupuri.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vinay Sai Chelupuri | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies. View my projects and experience.",
    url: "https://vinaysaichelupuri.com",
    siteName: "Vinay Sai Chelupuri - Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vinay Sai Chelupuri - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Sai Chelupuri | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and mobile development. Check out my portfolio!",
    images: ["/og-image.png"],
    creator: "@vinaysai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <PersonSchema />
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
