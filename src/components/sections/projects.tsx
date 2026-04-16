"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Automation Workflow",
    description: "Built a sophisticated n8n workflow that integrates OpenAI, Google Workspace, and Telegram for automated content generation and reporting.",
    techStack: ["n8n", "OpenAI", "Google API", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    image: "https://res.cloudinary.com/duprqhkbv/image/upload/v1775830974/DSC00782_r1wi5r.jpg",
  },
  {
    title: "EaziPurse - Digital Wallet Application",
    description: "Designed and implemented a scalable full-stack wallet system with secure JWT authentication, role-based access, real-time transaction workflows, and ontainerized deployment with Docker and PostgreSQL database management.",
    techStack: ["Python","Django", "Docker", "PostgreSQL", "ReactJs","RTKQuery"],
    liveLink: "https://eazipurse-ng.onrender.com/",
    githubLink: "https://github.com/Chigbo-max/EaziPurse",
    image: "https://res.cloudinary.com/duprqhkbv/image/upload/v1776257837/eazipurse_dash_gyp91f.png",
  },
  {
    title: "Real-time Chat Application",
    description: "Developed a full-stack real-time communication platform using React and Socket.io with end-to-end encryption.",
    techStack: ["Node.js", "GraphQl", "MongoDB", "React", ],
    liveLink: "https://our-chat-uyim.onrender.com/",
    githubLink: "https://github.com/Chigbo-max/chat-app/",
    image: "https://res.cloudinary.com/duprqhkbv/image/upload/v1776346736/daniel-korpai-r73OFSry5AI-unsplash_s1gln9.jpg",
  },
  {
    title: "FinTech Dashboard",
    description: "Created a comprehensive financial analytics dashboard with complex data visualization and real-time stock tracking.",
    techStack: ["Next.js", "Tailwind CSS", "Flask", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
    image: "https://drive.google.com/uc?export=view&id=185bO7OpdIPDIK4bQ4gvQadaKOyxdmr-l",
    
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-[700px] text-muted-foreground md:text-xl"
            >
              A selection of my recent work, ranging from backend architectures to AI-powered
              automation tools and modern web applications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="flex h-full flex-col overflow-hidden border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                  <CardHeader className="flex-1 space-y-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2 border-t p-4">
                    <Button asChild size="sm" className="w-full">
                      <Link href={project.liveLink} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={project.githubLink} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
