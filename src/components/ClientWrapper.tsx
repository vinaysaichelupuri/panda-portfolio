"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import BambooLeaves from "@/components/BambooLeaves";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollPanda from "@/components/ScrollPanda";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <LoadingScreen />
      <BambooLeaves />
      <Navigation />
      <ScrollPanda />
      {children}
    </ThemeProvider>
  );
}
