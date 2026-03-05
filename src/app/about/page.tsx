import { Metadata } from "next";
import { Education } from "./_components/education";
import { Experiences } from "./_components/experiences";

export const metadata: Metadata = {
  title: "About | Bruno Asano",
  description: "My personal website, where I share my thoughts and experiences as a software developer.",
};

export default function About() {
  return (
    <div className="px-6 pb-6">
      <div className="leading-8 font-medium">
        <h1 className="text-4xl text-violet-500 font-bold mt-4 font-[family-name:var(--font-spectral)]">About</h1>
        <h2 className="text-2xl font-bold mt-6 mb-4 text-slate-300 font-[family-name:var(--font-spectral)]">Hello there !</h2>
        <div className="flex flex-col gap-2">
          <p>
            I am a Frontend-focused Software Developer based in Brazil, building modern and user-centered web applications. My core expertise is in React, JavaScript, HTML, and CSS, where I focus on creating intuitive, performant, and scalable interfaces.
          </p>

          <p>
            While my background is primarily frontend, I also work across the stack when needed, with experience in backend technologies such as Node.js, Nest.js, and Ruby on Rails. This broader perspective helps me better understand system architecture and collaborate effectively across teams.
          </p>

          <p>
            I have strong experience working in agile environments, collaborating with cross-functional teams, and delivering high-quality features for SaaS products. Currently, I contribute to an international research platform focused on qualitative and quantitative studies, where I help develop new features, improve user experience, and ensure platform stability.
          </p>

          <p>
            My experience across both consulting firms and product teams has strengthened my skills in problem solving, ownership, and technical communication. I am passionate about building thoughtful digital experiences and continuously improving my craft as a developer.
          </p>
        </div>
      </div>

      <Experiences />
      <Education />
    </div>
  );
}
