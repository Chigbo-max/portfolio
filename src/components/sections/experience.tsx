"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Backend Software Engineer",
    company: "MaterialsPro",
    location: "Remote",
    period: "2025 - Present",
    description:
      "Designing and maintaining secure REST APIs for homeowners and contractors in a construction technology platform. Building scalable backend systems, relational data models, and cloud-ready services.",
    achievements: [
      "Implemented role-based access control systems for secure platform operations.",
      "Designed scalable PostgreSQL relational database models.",
      "Shipped containerized backend services using Docker and AWS environments.",
      "Collaborated directly with product stakeholders to transform user needs into backend features.",
      "Validated and iterated product features with early adopters to improve decision-making.",
    ],
  },
  {
    title: "Software Engineering Trainee",
    company: "Semicolon Africa",
    location: "Lagos, Nigeria",
    period: "2024 - 2025",
    description:
      "Built production-ready backend and frontend applications using Java Spring Boot and React while following modern software engineering practices.",
    achievements: [
      "Developed scalable APIs using Java Spring Boot.",
      "Built responsive frontend applications with React.",
      "Worked with MySQL, PostgreSQL, and MongoDB for database-driven applications.",
      "Practiced TDD using JUnit and improved code reliability.",
      "Implemented CI/CD pipelines using GitHub Actions.",
      "Documented APIs and improved team development workflows.",
    ],
  },
  {
    title: "AI Automation Developer",
    company: "Freelance",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Building AI-powered automation workflows using n8n to streamline business processes, integrations, and operational tasks.",
    achievements: [
      "Developed automated workflows integrating APIs, AI tools, and third-party services.",
      "Built AI-driven automations for notifications, support systems, and business operations.",
      "Integrated webhook-based event systems and workflow orchestration.",
      "Optimized repetitive processes using low-code automation solutions with n8n.",
    ],
  },
  {
    title: "Customer Service Support",
    company: "Reliance Health",
    location: "Lagos, Nigeria",
    period: "2023 - 2024",
    description:
      "Worked closely with operations and customer support teams to improve service delivery and customer experience workflows.",
    achievements: [
      "Reduced customer complaints by 30% through proactive issue resolution.",
      "Collaborated cross-functionally to improve operational workflows.",
      "Trained new staff members on support and CRM processes.",
      "Improved CRM efficiency and customer communication processes.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <div className="space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Professional Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-[700px] text-muted-foreground md:text-xl"
            >
              A journey through my professional career, highlighting key roles and
              achievements in software engineering and AI automation.
            </motion.p>
          </div>

          <div className="relative mx-auto max-w-[800px] space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent md:before:mx-auto md:before:translate-x-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Icon Circle */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 shadow-sm md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Briefcase className="h-5 w-5" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md md:w-[calc(50%-2.5rem)]">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" /> {exp.period}
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-medium text-primary">
                    <span className="flex items-center gap-1">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" /> {exp.location}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
