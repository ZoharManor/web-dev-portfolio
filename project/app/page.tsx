"use client";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import { useEffect } from "react";
import initializeBot from "./bot";

export default function Home() {
  useEffect(() => {
    initializeBot();
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero></Hero>
        <Skills />
        <Projects />
        <Encryption />
      </div>
    </main>
  );
}
