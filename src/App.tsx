import { motion } from "framer-motion";
import {
  Code2,
  Database,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Server,
} from "lucide-react";
import { useState } from "react";
import ResumePdf from "./assets/DevkumarPawar.pdf"; // put your resume at: src/assets/DevkumarPawar.pdf
import Logo from "./assets/dp.png"; // put your logo at: src/assets/dp.png

type Section = { id: string; label: string };

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState<string>("about");
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex items-center justify-between h-14">
            <a href="#hero" className="flex items-center gap-2">
              <img src={Logo} alt="DP Logo" className="w-auto h-8 sm:h-9" />
            </a>
            <ul className="items-center hidden gap-5 text-sm md:flex">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className={`transition-colors hover:text-indigo-600 ${
                      active === s.id ? "text-indigo-600" : "text-gray-700"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href={ResumePdf}
              download
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700"
            >
              <FileDown className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden text-center"
      >
        {/* Background with glassy overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-3xl px-6 mx-auto">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Devkumar Pawar
          </motion.h1>
          <motion.p
            className="mt-4 text-base text-gray-700 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Full Stack Developer — React, Next.js, Node.js, Express, PostgreSQL
            & MongoDB
          </motion.p>

          {/* Big social icons + resume CTA for mobile */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <a href="mailto:devkumarspawar99@gmail.com" aria-label="Email">
              <Mail className="w-12 h-12 text-indigo-600 transition sm:w-14 sm:h-14 hover:scale-110" />
            </a>
            <a
              href="https://github.com/devkumarpawar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-12 h-12 text-gray-900 transition sm:w-14 sm:h-14 hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/devkumarpwebd"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-12 h-12 text-blue-600 transition sm:w-14 sm:h-14 hover:scale-110" />
            </a>
            <a
              href={ResumePdf}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg shadow md:hidden hover:bg-indigo-700"
            >
              <FileDown className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white sm:py-24">
        <div className="grid items-center max-w-6xl gap-10 px-6 mx-auto md:grid-cols-2">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold">About Me</h2>
            <p className="leading-relaxed text-gray-700">
              Full Stack Developer with 3+ years of experience building scalable
              web applications and learning platforms. Strong in React/Next.js
              on the frontend and Node.js/Express with PostgreSQL & MongoDB on
              the backend. Hands-on with Tailwind CSS for responsive UI, and
              working knowledge of AWS and Python. I focus on performance,
              accessibility, and clean DX for maintainable products.
            </p>
          </motion.div>

          <motion.ul
            className="grid gap-4 sm:grid-cols-2"
            initial={{ x: 40, opacity: 0 }}
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
                desc: "React, Next.js, Tailwind CSS.",
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
            ].map((item, i) => (
              <li
                key={i}
                className="p-5 transition border shadow-sm rounded-xl bg-gray-50/80 hover:bg-white"
              >
                <div className="flex items-center gap-2 font-semibold">
                  {item.icon}
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-6 text-3xl font-bold">Skills</h2>
          <p className="mb-4 text-gray-600">
            Core: JavaScript, TypeScript, React.js, Next.js, Node.js,
            Express.js, PostgreSQL, MongoDB, Tailwind CSS, AWS, Python.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React.js",
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
          <h2 className="mb-8 text-3xl font-bold">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              className="p-6 border shadow-sm rounded-xl bg-gray-50"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl font-semibold">
                Full Stack Developer — School of Inspirational Leadership (Pune)
              </h3>
              <p className="text-sm text-gray-600">
                Feb 2022 – Present • On-site
              </p>
              <ul className="mt-3 text-gray-700 list-disc list-inside">
                <li>
                  Built LMS and strategic-document modules using React/Node.
                </li>
                <li>
                  Developed REST APIs in Express; data in PostgreSQL & MongoDB.
                </li>
                <li>
                  Improved SEO & performance; delivered responsive UI with
                  Tailwind.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 border shadow-sm rounded-xl bg-gray-50"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl font-semibold">
                Freelance Web Developer — Tech Wingz
              </h3>
              <p className="text-sm text-gray-600">Mar 2023 – Sep 2023</p>
              <ul className="mt-3 text-gray-700 list-disc list-inside">
                <li>Delivered responsive websites end-to-end.</li>
                <li>Integrated backends & implemented SEO fixes.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS (from your resume) */}
      <section id="projects" className="relative py-20 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1920&q=80"
            alt="Code background"
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />
        </div>

        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">My Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 sm:gap-8">
            {[
              {
                name: "Employee Training System",
                live: "https://employee-training-system.vercel.app/",
                source:
                  "https://github.com/devkumarpawar/Employee_Training_System-",
                bullets: [
                  "ReactJS, NodeJS, ExpressJS, MongoDB.",
                  "Admin: add employees/courses, deploy programs.",
                  "Employees: access courses; simple, responsive UX.",
                ],
              },
              {
                name: "Ecommerce Project",
                live: "",
                source: "https://github.com/devkumarpawar/Ecommerce-Project",
                bullets: [
                  "Functional e-commerce workflow with auth.",
                  "User registration & login implemented.",
                ],
              },
              {
                name: "Human Pose Detection",
                live: "",
                source: "https://github.com/devkumarpawar/Human-Pose-Detection",
                bullets: [
                  "Pose estimation using Python.",
                  "Real-time pose detection & tracking.",
                ],
              },
              {
                name: "Taz Logistics",
                live: "",
                source: "http://tazgroup.co.in",
                bullets: [
                  "Website Development for Taz Logistics.",
                  "Responsive design with React.",
                ],
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 transition border shadow-sm rounded-xl bg-white/70 backdrop-blur-md hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-3 text-sm">
                  {p.live && (
                    <a
                      className="text-indigo-600 underline"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {p.source && (
                    <a
                      className="text-gray-800 underline"
                      href={p.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="py-20 bg-white sm:py-24">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-6 text-3xl font-bold">Certifications</h2>
          <ul className="grid gap-4 text-gray-800 sm:grid-cols-2">
            <li className="p-4 border rounded-xl bg-gray-50">
              Full-Stack JavaScript Development — LinkedIn (Nov 2021)
            </li>
            <li className="p-4 border rounded-xl bg-gray-50">
              Full Stack Web Developer — Udemy (Sep 2021)
            </li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-6 text-3xl font-bold">Education</h2>
          <div className="p-6 bg-white border shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold">
              Savitribai Phule Pune University
            </h3>
            <p className="text-gray-700">
              Bachelor's in Computer Application (2021 – 2023)
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Computer/Information Technology Administration & Management
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-3 text-3xl font-bold">Get In Touch</h2>
          <p className="mb-6 text-gray-700">
            Interested in working together? Let’s build something powerful.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:devkumarspawar99@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a
              href={ResumePdf}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border rounded-lg shadow hover:bg-gray-50"
            >
              <FileDown className="w-5 h-5" /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-sm text-center text-gray-600 bg-white border-t">
        © {new Date().getFullYear()} Devkumar Pawar. All rights reserved.
      </footer>
    </div>
  );
}
