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
    title: "AI Voice Receptionist For a Restaurant",
    description: "Built a sophisticated n8n workflow that integrates ElevenLabs, Gemini and Google Workspace for automated content generation and reporting.",
    techStack: ["n8n", "ElevenLabs", "Gemini", "Google API"],
    liveLink: "https://drive.google.com/file/d/1YASMbaOWXAyMw4gae8gqrQpuzY721C52/view?usp=drive_link",
    githubLink: "https://github.com/Chigbo-max/ai-voice-receptionist.git",
    image: "https://res.cloudinary.com/duprqhkbv/image/upload/v1779953338/Build_an_AI_Receptionist_for_Your_Business_24_7_Customer_Support_nfoc9o.jpg",
  },
  {
  title: "AI Telegram Chatbot for Real Estate Company",
  description:
    "Built an advanced AI-powered real estate assistant using n8n, Telegram, Supabase Vector Store, Cohere embeddings, and Google Workspace integrations. Developed a RAG-based chatbot capable of handling property inquiries, lead qualification, appointment scheduling, agent assignment, and automated customer engagement with memory-aware conversations and vector search capabilities.",
  techStack: [
    "n8n",
    "Telegram API",
    "Supabase",
    "Cohere Embeddings",
    "Google Calendar API",
    "Google Sheets API",
    "Google Drive API",
    "Vector Database",
    "RAG",
    "AI Agents",
    "LangChain",
    "HTTP API Integration"
  ],
  liveLink:
    "https://drive.google.com/file/d/1DorrBW6bCx4j-5lAwUhdsXjiXcBP26bQ/view?usp=drive_link",
  githubLink:
    "https://github.com/Chigbo-max/ai-telegram-real-estate-chatbot.git",
  image:
    "https://res.cloudinary.com/duprqhkbv/image/upload/v1779975398/Boost_Your_Real_Estate_Business_with_AI_Chatbots_zmkyj2.jpg",
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
    image: "https://res.cloudinary.com/duprqhkbv/image/upload/v1779953353/Chat_Logo_Png_da0axp.jpg",
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
