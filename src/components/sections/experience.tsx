"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Backend Engineer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "2023 - Present",
    description: "Developing scalable backend services using Node.js and Spring Boot. Optimizing database performance and implementing real-time messaging systems.",
    achievements: [
      "Reduced API latency by 40% through Redis caching.",
      "Architected a microservices-based order processing system.",
      "Integrated AI automation for automated support tickets.",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "WebCraft Studio",
    location: "New York, NY",
    period: "2021 - 2023",
    description: "Built and maintained multiple client websites using React, Next.js, and Node.js. Collaborated with designers to deliver high-quality user experiences.",
    achievements: [
      "Delivered 15+ high-performance web applications.",
      "Implemented secure authentication and payment systems.",
      "Optimized frontend performance, achieving a 95+ Lighthouse score.",
    ],
  },
  {
    title: "Software Intern",
    company: "Innovate Labs",
    location: "Austin, TX",
    period: "2020 - 2021",
    description: "Assisted in the development of internal tools and automated workflows. Gained hands-on experience with Python and Flask.",
    achievements: [
      "Developed an automated data entry tool saving 20 hours/week.",
      "Contributed to the development of a real-time monitoring dashboard.",
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
