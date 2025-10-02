import { Metadata } from "next";
import { Header } from "../../components/header";
import { Education } from "./_components/education";
import { Experiences } from "./_components/experiences";

export const metadata: Metadata = {
  title: "About | Bruno Asano",
  description: "My personal website, where I share my thoughts and experiences as a software developer.",
};

export default function About() {
  return (
    <div className="px-6 pb-6">
      <div className="py-6">
        <Header />
      </div>

      <div className="leading-8 font-medium">
        <h1 className="text-4xl text-violet-500 font-bold mt-4 font-[family-name:var(--font-spectral)]">About</h1>
        <h2 className="text-2xl font-bold mt-6 mb-4 text-slate-300 font-[family-name:var(--font-spectral)]">Hello there !</h2>
        <div className="flex flex-col gap-2">
          <p>
            I am a Fullstack Software Developer based in Brazil with over three years of experience. I started my career focused on frontend development, crafting dynamic and intuitive interfaces with React, TypeScript, HTML, and CSS. Over time, I expanded my role into backend development, working with Node.js, Nest.js, and Ruby on Rails. A journey that led to my current fullstack position.
          </p>
          <p>
            I thrive in agile environments, applying Scrum methodologies and collaborating closely with multidisciplinary teams. At present, I contribute to an international project that develops innovative solutions for quantitative and qualitative research.
          </p>
          <p>
            My background across both consulting firms and product-driven companies has shaped strong problem-solving abilities, adaptability, and a passion for building products that truly make an impact.
          </p>
        </div>
      </div>

      <Experiences />
      <Education />
    </div>
  );
}
