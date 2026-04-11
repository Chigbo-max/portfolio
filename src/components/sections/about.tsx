"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Layout,
  Cpu,
  Database,
  Terminal,
  Layers,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react"

const skills = [
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: ["Java","Node.js", "Python","TypeScript","JavaScript", "Spring Boot", "Express","Django","Flask", "GraphQL",  ],
  },
  {
    category: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    items: ["HTML", "CSS", "React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: <Database className="h-5 w-5" />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Sequelize", "Prisma"],
  },
  {
    category: "DevOps/Tools",
    icon: <Terminal className="h-5 w-5" />,
    items: ["Docker", "Git"],
  },
  {
    category: "AI/Automation",
    icon: <Workflow className="h-5 w-5" />,
    items: [ "n8n","Zapier", "Make", "LangChain", "APIs", "Automation Workflows"],
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-[800px] text-muted-foreground md:text-xl leading-relaxed"
            >
              I am a results-driven Backend Engineer with a strong foundation in full-stack
              development. My passion lies in building scalable architectures and leveraging AI
              automation to streamline complex processes. With extensive experience in Node.js,
              Python, and modern frontend frameworks, I bridge the gap between robust server-side
              logic and intuitive user experiences.
            </motion.p>
          </div>

          <div id="skills" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1 text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
