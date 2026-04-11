"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end md:order-last"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 sm:h-80 sm:w-80 md:h-[400px] md:w-[400px]">
              <Image
                src="https://res.cloudinary.com/duprqhkbv/image/upload/v1775832265/profileimg_vixr8l.png?q=80&w=400&h=250&auto=format&fit=crop"
                alt="Profile Image"
                loading="eager"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 400px"
                className="object-cover object-[center_20%] transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
            <div className="absolute -z-10 h-full w-full opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Software Engineer &{" "}
                <span className="text-primary">AI Automation Specialist</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Backend-focused engineer with full-stack experience. I build scalable systems,
                robust APIs, and intelligent automation workflows that drive efficiency.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/Chigbo Ezeokeke (5).pdf" target="_blank" download>
                  <FileText className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
