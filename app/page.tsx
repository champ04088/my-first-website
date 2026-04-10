'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import ProjectsSection from "@/components/ProjectsSection"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black antialiased">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid pattern */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            "[background-image:light(linear-gradient(to_right,#e5e7eb_1px,transparent_1px)),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]",
          )}
        />

        {/* Spotlight */}
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#ff69b4"
        />
        <Spotlight
          className="top-0 right-0 md:top-20 md:right-60"
          fill="#ff1493"
        />
        <Spotlight
          className="top-1/2 left-1/2"
          fill="#ff69b4"
        />

        {/* Diagonal spotlight ray */}
        <div className="absolute bottom-0 right-10 h-[110vh] w-0.5 origin-bottom-right -rotate-[45deg] bg-gradient-to-t from-[#ff69b4]/90 via-[#ff69b4]/40 to-transparent blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 md:py-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </Badge>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Ilham
                </span>
              </h1>

              {/* Skills Flip */}
              <div className="flex items-center gap-2 text-xl font-medium">
                <span>I build</span>
                <ContainerTextFlip
                  words={["Networking", "Web Development", "Linux", "Design", "CCTV", "Next.js"]}
                  className="text-2xl md:text-4xl"
                />
              </div>

              {/* Bio */}
              <p className="text-lg text-muted-foreground max-w-md">
                Passionate about creating innovative solutions through technology.
                I specialize in web development and network engineering, always eager to learn and tackle new challenges.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <IconBrandGithub className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <IconBrandLinkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <IconBrandTwitter className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-full max-w-[550px] aspect-square mx-auto order-1 lg:order-2"
            >
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-95" />

              {/* Online badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-background/80 backdrop-blur-sm border border-border/40 flex items-center gap-1.5 px-2 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium">Online</span>
                </Badge>
              </div>

              <Image
                src="/4.jpeg"
                alt="Profile Photo"
                fill
                priority
                className="object-cover object-top rounded-2xl shadow-2xl border border-border/40
                         hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <ProjectsSection />
    </main>
  )
}

