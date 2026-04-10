"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Compass, ExternalLink, Newspaper, Palette, Waves } from "lucide-react"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "kenya coastal vibes",
    description:
      "A vibrant poster showcasing Kenya's coastal vibes, featuring snorkeling, dhow sailing at sunset, and fun beach adventures under palm-lined shores.",
    image: "/1.png",
    link: "https://canva.link/jq8o2vpr1vn3l80",
    icon: <Waves className="h-4 w-4 text-primary" />,
  },
  {
    title: "coastal vibe poster",
    description:
      "A colorful travel poster highlighting Kenya's coast, from turquoise beaches and marine life to fresh seafood and tropical escapes.",
    image: "/2.png",
    link: "https://www.canva.com/design/DAHCPu6wt1k/HBpkwgE1Dcnqquz8PrIkpA/edit?utm_content=DAHCPu6wt1k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    icon: <Compass className="h-4 w-4 text-primary" />,
  },
  {
    title: "coastal magazine",
    description: "",
    image: "/3.png",
    link: "https://canva.link/nnq2eiutqdkegaw",
    icon: <Palette className="h-4 w-4 text-primary" />,
  },
  {
    title: "illu's menu",
    description:
      "A minimalist menu for Illu's Resturant featuring orange and black tones, categorized food lists with prices in Ksh, and diamond-shaped food imagery.",
    image: "/6.png",
    link: "https://canva.link/jz5tegnw5yxjx02",
    icon: <Newspaper className="h-4 w-4 text-primary" />,
  },
]

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="px-4 py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A few designs and visual projects from my portfolio.
          </p>
        </div>

        <BentoGrid>
          {projects.map((project, index) => (
            <BentoGridItem
              key={project.title}
              title={project.title}
              description={
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground">{project.description}</p>
                  <Button variant="outline" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              }
              header={
                <div className="relative h-44 w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg transition-transform duration-500 group-hover/bento:scale-105"
                  />
                </div>
              }
              icon={project.icon}
              className={index === 2 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </motion.section>
  )
}
