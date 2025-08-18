// src/App.tsx
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Server,
} from "lucide-react";
import { useState } from "react";
import Logo from "./assets/dp.png"; // logo in src/assets/

type Section = { id: string; label: string };

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState<string>("about");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex items-center justify-between h-14">
            <a href="#hero" className="flex items-center">
              <img src={Logo} alt="DP Logo" className="w-auto h-8 sm:h-10" />
            </a>
            <ul className="items-center hidden gap-4 text-sm sm:gap-6 md:flex">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className={`transition-colors hover:text-blue-600 ${
                      active === s.id ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden text-center pt-14"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80"
            alt="Developer background"
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 backdrop-blur-sm"></div>
        </div>

        <motion.h1
          className="text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Devkumar Pawar
        </motion.h1>
        <motion.p
          className="max-w-xl mt-3 text-base text-gray-700 sm:text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full Stack Developer — React, Node.js, Express, PostgreSQL & MongoDB
          🚀
        </motion.p>

        {/* BIG SOCIAL ICONS */}
        <div className="flex gap-6 mt-8 sm:gap-10">
          <a href="mailto:yourmail@gmail.com" target="_blank" rel="noreferrer">
            <Mail className="w-12 h-12 text-indigo-600 transition sm:w-14 sm:h-14 hover:scale-110" />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-12 h-12 text-gray-800 transition sm:w-14 sm:h-14 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/devkumarpwebd"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-12 h-12 text-blue-600 transition sm:w-14 sm:h-14 hover:scale-110" />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white sm:py-24">
        <div className="grid items-center max-w-6xl gap-8 px-6 mx-auto md:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">About Me</h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              Full Stack Developer with 3+ years experience at School of
              Inspirational Leadership (Pune), delivering scalable web
              applications and LMS platforms. Strong in React, Next.js, Node.js,
              Express, and databases like PostgreSQL & MongoDB. Also skilled in
              AWS, Python, and Tailwind CSS.
            </p>
          </motion.div>
          <motion.ul
            className="grid gap-4 sm:grid-cols-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: <Rocket className="w-5 h-5" />,
                title: "Performance",
                desc: "Fast, SEO-friendly builds.",
              },
              {
                icon: <Code2 className="w-5 h-5" />,
                title: "Frontend",
                desc: "React, Next.js, Tailwind.",
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: "Backend",
                desc: "Node.js, Express APIs.",
              },
              {
                icon: <Database className="w-5 h-5" />,
                title: "Databases",
                desc: "PostgreSQL, MongoDB.",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="p-4 text-sm transition border shadow-sm rounded-xl bg-gray-50 hover:bg-white sm:text-base"
              >
                <div className="flex items-center gap-2 font-semibold">
                  {item.icon}
                  {item.title}
                </div>
                <p className="mt-1 text-gray-600">{item.desc}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 bg-gray-50 sm:py-24">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Skills</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "MongoDB",
              "Tailwind CSS",
              "AWS",
              "Python",
              "SEO",
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="p-3 text-sm text-center bg-white border shadow-sm rounded-xl sm:text-base"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 bg-white sm:py-24">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              className="p-6 border shadow-sm rounded-xl bg-gray-50"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-lg font-semibold sm:text-xl">
                Full Stack Developer — School of Inspirational Leadership
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm">
                Feb 2022 – Present
              </p>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
                <li>Developed LMS and strategic document systems</li>
                <li>Built REST APIs with Express + PostgreSQL</li>
                <li>Improved SEO & performance</li>
              </ul>
            </motion.div>
            <motion.div
              className="p-6 border shadow-sm rounded-xl bg-gray-50"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-lg font-semibold sm:text-xl">
                Freelance Web Developer — Tech Wingz
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm">
                Mar 2023 – Sep 2023
              </p>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
                <li>Delivered responsive websites end-to-end</li>
                <li>Integrated backend & optimized SEO</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-20 sm:py-24">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1920&q=80"
            alt="Code background"
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80"></div>
        </div>

        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center sm:text-3xl">
            Client Projects
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                name: "Renuka Sugars – Industry/Manufacturing",
                link: "https://renukasugars.com/",
                tasks: [
                  "Developed responsive website",
                  "Implemented content structure & UI",
                  "Optimized for SEO",
                ],
              },
              {
                name: "TAZ Group – Corporate/Construction",
                link: "http://tazgroup.co.in/",
                tasks: [
                  "Website design & development",
                  "Responsive UI with Tailwind CSS",
                ],
              },
              {
                name: "Jalamrut – FMCG/Beverages",
                link: "https://jalamrut.com/",
                tasks: [
                  "Created e-commerce ready structure",
                  "SEO optimization",
                ],
              },
              {
                name: "Gramton Weighing – Industrial Solutions",
                link: "https://www.gramtonweighing.com/",
                tasks: [
                  "Developed product showcase website",
                  "Integrated backend",
                ],
              },
              {
                name: "ARCHE – Architecture/Real Estate",
                link: "https://arche.co.in/",
                tasks: ["Modern UI design", "Responsive layouts"],
              },
              {
                name: "SayHey – Brand/Creative",
                link: "http://sayhey.co.in/",
                tasks: ["Creative website design", "SEO fixes"],
              },
              {
                name: "SI Leadership – Training/Consulting",
                link: "https://www.sileadership.in/",
                tasks: [
                  "LMS development",
                  "LeadSquared API integration",
                  "SEO improvements",
                ],
              },
              {
                name: "ECE India Solar – Energy/Solar",
                link: "https://eceindiasolar.com/",
                tasks: ["Website development", "Backend integration"],
              },
              {
                name: "Mauli Sugar Chemicals – Chemicals/Manufacturing",
                link: "https://maulisugarchemicals.com/",
                tasks: ["Developed corporate website", "Responsive UI"],
              },
            ].map((proj, idx) => (
              <motion.a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-3 p-4 transition border shadow-md rounded-xl sm:p-6 bg-white/70 backdrop-blur-md hover:shadow-xl"
              >
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  {proj.name}
                </h3>
                <ul className="space-y-1 text-xs text-gray-700 list-disc list-inside sm:text-sm">
                  {proj.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <span className="mt-2 text-sm font-medium text-blue-600 underline">
                  Visit Site
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white sm:py-24">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Get In Touch</h2>
          <p className="mb-6 text-sm text-gray-700 sm:text-base">
            Interested in working together? Let’s build something powerful.
          </p>
          <a
            href="mailto:yourmail@gmail.com"
            className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 sm:text-base"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-xs text-center text-gray-600 border-t sm:py-8 sm:text-sm bg-gray-50">
        © {new Date().getFullYear()} Devkumar Pawar. All rights reserved.
      </footer>
    </div>
  );
}
