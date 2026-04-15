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
    items: ["Java", "Node.js", "Python", "TypeScript", "JavaScript", "Spring Boot", "Express", "Django", "Flask", "GraphQL",],
  },
  {
    category: "Frontend (supporting)",
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
    items: ["n8n", "Zapier", "Make(Integromat)", "LangChain", "APIs", "Automation Workflows"],
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
              className="max-w-[1200px] text-muted-foreground md:text-xl leading-relaxed"
            >
              I am a results-driven Backend Engineer and AI Automation Specialist based in Lagos, Nigeria, with a strong foundation in full-stack development. I specialize in building scalable backend systems and designing intelligent automation workflows that reduce manual effort and improve operational efficiency.

              My expertise lies in combining robust server-side engineering with AI-powered automation- leveraging tools like Java, Node.js, Python, and modern APIs to create systems that are reliable, efficient, and easy to scale.

              I have hands-on experience designing and implementing automation solutions using tools such as n8n, Zapier, Make, and LangChain, enabling seamless integration between services and intelligent data processing. From API integrations to workflow orchestration, I focus on building solutions that deliver real business value.

              I bridge the gap between backend engineering and automation, creating systems that not only work- but work smarter.
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
