"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Download, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ProfessionalTimeline } from "@/components/professional-timeline"
import HomeAchievementsStats from "@/components/home-achievements-stats"

const nameVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.5, // Wait for name animation to complete
    },
  },
}

const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 200, // Increased from 100 to 200 for more dramatic slide effect
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const slideLeftVariants = {
  hidden: {
    opacity: 0,
    x: -300, // Increased from -100 to -300 for more dramatic slide effect
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const slideRightVariants = {
  hidden: {
    opacity: 0,
    x: 300, // Increased from 100 to 300 for more dramatic slide effect
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const portraitVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotateY: -30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const hoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
}

const iconHoverVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.5,
    },
  }),
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    console.log("[v0] Component mounted, starting animations")
    setMounted(true)
  }, [])

  console.log("[v0] Render - mounted:", mounted)

  const homeProjects = [
    {
      title: "NudgeMe",
      tagline: "Mood-based reminders & habit tracking",
      tech: ["Spring Boot", "Hibernate", "PostgreSQL", "React"],
    },
    {
      title: "ATISHA",
      tagline: "AI-powered career guidance for students",
      tech: ["Node.js", "Python", "ML", "PostgreSQL"],
    },
    {
      title: "Rural Connect",
      tagline: "Blockchain-based rural e-commerce & services",
      tech: ["Blockchain", "React", "Solidity", "IPFS"],
    },
    {
      title: "DoingWell",
      tagline: "Healthcare system for doctor bookings & management",
      tech: ["Java", "XML", "Firebase", "Android Studio"],
    },
    {
      title: "Gold Forecast",
      tagline: "Predictive analytics for gold prices",
      tech: ["Python", "Pandas", "NumPy", "Random Forest"],
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <div className="hidden lg:block">
        <div className="h-screen max-w-[1500px] mx-auto px-8 py-8">
          <motion.div
            className="grid grid-cols-12 grid-rows-10 gap-4 h-full w-full"
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {/* Column 1 - About Me (40%) */}
            <motion.div className="col-span-4 row-span-4 col-start-1 row-start-1" variants={slideLeftVariants}>
              <Link href="/about" className="group block h-full">
                <Card
                  className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30"
                  style={{ backgroundColor: "#f5e9d4" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-serif text-xl font-bold leading-tight" style={{ color: "#2C2C2C" }}>
                        About Me
                      </h2>
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#2C2C2C" }}
                      />
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#2C2C2C" }}>
                      Hi, I’m Hiya Gurbani, a final-year B.Tech Computer Science student passionate about using
                      technology to solve real-world problems. <br></br>I enjoy building robust and scalable
                      applications, learning new tools, and applying problem-solving to challenges. <br></br>
                    </p>

                    <div className="mt-auto">
                      <p className="text-xs leading-relaxed opacity-80 italic" style={{ color: "#2C2C2C" }}>
                        Open to exciting opportunities and collaborations in software development and backend systems.
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Column 1 - Professional Summary (60%) */}
            <motion.div className="col-span-4 row-span-6 col-start-1 row-start-5" variants={slideLeftVariants}>
              <Link href="/internships" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Professional Summary</h3>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-card-foreground" />
                    </div>
                    <div>
                      {/* <h4 className="font-medium text-sm mb-4 text-card-foreground">Timeline</h4> */}
                      <ProfessionalTimeline
                        items={[
                          {
                            role: "SQL Intern",
                            org: "Celebal",
                            duration: "Jun–Aug 2025",
                            achievement: "Gained hands-on expertise in SQL queries and data handling",
                          },
                          {
                            role: "Backend Development Intern",
                            org: "Matrix Pvt. Ltd.",
                            duration: "Jun-Jul 2025 ",
                            achievement: "Built REST APIs using Spring Boot and Hibernate",
                          },
                          {
                            role: "Software Development Intern",
                            org: "Matrix Pvt. Ltd.",
                            duration: "Jul-Aug 2024 ",
                            achievement: "Developed an Android application with Java and XML",
                          },
                          {
                            role: "Python Intern",
                            org: "IIHT Limited",
                            duration: "August 2023",
                            achievement: "Implemented mini projects to strengthen core Python skills",
                          },
                        ]}
                      />
                    </div>
                    
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Column 2 - Name Header */}
            <motion.div
              className="col-span-4 row-span-2 col-start-5 row-start-1 flex items-center justify-center"
              variants={nameVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16 ml-1"></div>
                </div>
                <h1 className="font-serif font-bold tracking-wide text-5xl text-card-foreground">Hiya Gurbani</h1>
                <div className="flex items-center justify-center mt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16 ml-1"></div>
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Portrait */}
            <motion.div className="col-span-4 row-span-5 col-start-5 row-start-3" variants={portraitVariants}>
              <Card className="h-full p-6 relative overflow-hidden border border-border/30 bg-card shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative h-full flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(245, 233, 212, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-56 rounded-lg overflow-hidden border-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(245,233,212,0.2) 0%, transparent 70%)",
                      borderColor: "rgba(212, 175, 122, 0.3)",
                    }}
                  >
                    <img
                      src="/profile7.png"
                      alt="Hiya Gurbani - Professional Portrait"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>

                 <div className="w-20 h-[2px] mt-3 mb-3 rounded-full bg-gradient-to-r from-transparent via-[#F5E9D4] to-transparent" />

                  <div className="flex gap-4 justify-center ">
                    <Button
                      className="w-[160px] py-4 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "#F5E9D4",
                        color: "#2C2C2C",
                        border: "1px solid #F5E9D4",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#E5D9C4"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#F5E9D4"
                      }}
                      onClick={() => window.open("https://drive.google.com/file/d/1EQI2ixvuD1CuOeDWg2jaKTZ7u5jJDDuI/view", "_blank")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Resume
                    </Button>
                    <Button
                      asChild
                      className="w-[180px] py-4 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "transparent",
                        color: "#F5E9D4",
                        border: "1px solid #F5E9D4",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#F5E9D4"
                        e.currentTarget.style.color = "#2C2C2C"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#F5E9D4"
                      }}
                    >
                      <a
                        href="https://drive.google.com/file/d/1S11cyQwK4enJgXxONKAoBQ6RfJuSM2x9"
                        download="Resume-HiyaGurbani.pdf"
                        className="flex items-center justify-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>

                  </div>
                </div>
              </Card>
            </motion.div>


            {/* Column 2 - Achievements */}
            <motion.div className="col-span-4 row-span-3 col-start-5 row-start-8" variants={slideUpVariants}>
              <Link href="/achievements" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Achievements</h3>
                      <ArrowUpRight
                        className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-card-foreground"
                        style={{ color: "#F8F5F2" }}
                      />
                    </div>
                    <HomeAchievementsStats
                      items={[
                        { label: "Hackathons", count: 6 },
                        { label: "Certifications", count: 7 },
                        { label: "Recognition", count: "15+" },
                      ]}
                    />
                  </div>
                  
                </Card>
              </Link>
            </motion.div>

            {/* Column 3 - Projects (70%) */}
            <motion.div className="col-span-4 row-span-7 col-start-9 row-start-1" variants={slideRightVariants}>
              <Link href="/projects" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Projects</h3>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-card-foreground" />
                    </div>

                    <p className="text-sm leading-relaxed mb-4 text-card-foreground">
                      Innovative projects built with modern technologies and best practices.
                    </p>

                    {/* Featured project */}
                    <div className="relative p-4 rounded-lg mb-4 border">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary/15 rounded-lg" />

                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0" style={{ color: "#F5E9D4" }}>
                          <h4 className="font-medium text-m truncate">{homeProjects[0].title}</h4>
                          <p className="text-xs opacity-80 mt-1 italic">{homeProjects[0].tagline}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {homeProjects[0].tech.slice(0, 4).map((t, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/60 text-black/80">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary shrink-0">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Compact grid of 4 */}
                    <div className="grid grid-cols-2 gap-1 flex-1">
                      {homeProjects.slice(1, 5).map((p, idx) => (
                        <div
                          key={idx}
                          className="p-2 rounded-lg border border-border/10 hover:border-border/40 transition-colors"
                        >
                          <h5 className="font-medium text-sm text-card-foreground">{p.title}</h5>
                          <p className="text-xs opacity-70 mt-1 mb-2 text-card-foreground truncate">{p.tagline}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.slice(0, 3).map((t, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Column 3 - Let's Connect (30%) */}
            <motion.div className="col-span-4 row-span-3 col-start-9 row-start-8" variants={slideRightVariants}>
              <Link href="/contact" className="group block h-full">
                <Card
                  className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30"
                  style={{ backgroundColor: "#f5e9d4" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-lg font-bold" style={{ color: "#2C2C2C" }}>
                        Let's Connect
                      </h3>
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#2C2C2C" }}
                      />
                    </div>
                    {/* Middle: description */}
                    <div className="mb-4">
                      <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
                        I’d love to hear from you! Reach out for collaborations, questions, or just to say hi.
                      </p>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("mailto:hiyagurbani@gmail.com", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Mail className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("https://github.com/hiyagurbani", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Github className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("https://linkedin.com/in/hiyagurbani", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

  {/* Tablet Layout */}
  <div className="hidden md:block lg:hidden">
  <motion.div
    className="flex flex-col gap-4 px-4 py-4 overflow-y-auto"
    variants={containerVariants}
    initial="hidden"
    animate={mounted ? "visible" : "hidden"}
  >
    
    {/* Row 1 - Name Header */}
            <motion.div
              className="col-span-4 row-span-2 col-start-5 row-start-1 flex items-center justify-center"
              variants={nameVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16 ml-1"></div>
                </div>
                <h1 className="font-serif font-bold tracking-wide text-5xl text-card-foreground">Hiya Gurbani</h1>
                <div className="flex items-center justify-center mt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16 ml-1"></div>
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Portrait */}
            <motion.div className="col-span-4 row-span-5 col-start-5 row-start-3" variants={portraitVariants}>
              <Card className="h-full p-6 relative overflow-hidden border border-border/30 bg-card shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative h-full flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(245, 233, 212, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className="w-150 h-100 rounded-lg overflow-hidden border-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(245,233,212,0.2) 0%, transparent 70%)",
                      borderColor: "rgba(212, 175, 122, 0.3)",
                    }}
                  >
                    <img
                      src="/profile7.png"
                      alt="Hiya Gurbani - Professional Portrait"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>

                 <div className="w-20 h-[2px] mt-3 mb-3 rounded-full bg-gradient-to-r from-transparent via-[#F5E9D4] to-transparent" />

                  <div className="flex gap-4 justify-center ">
                    <Button
                      className="w-[160px] py-4 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "#F5E9D4",
                        color: "#2C2C2C",
                        border: "1px solid #F5E9D4",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#E5D9C4"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#F5E9D4"
                      }}
                      onClick={() => window.open("https://drive.google.com/file/d/1JcSp3siimx6mMbPCSzaXdNTjlYdshfH2/view", "_blank")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Resume
                    </Button>
                    <Button
                      asChild
                      className="w-[180px] py-4 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "transparent",
                        color: "#F5E9D4",
                        border: "1px solid #F5E9D4",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#F5E9D4"
                        e.currentTarget.style.color = "#2C2C2C"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#F5E9D4"
                      }}
                    >
                      <a
                        href="https://drive.google.com/uc?export=download&id=1JcSp3siimx6mMbPCSzaXdNTjlYdshfH2"
                        download="Resume-HiyaGurbani.pdf"
                        className="flex items-center justify-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>

                  </div>
                </div>
              </Card>
            </motion.div>
    
    {/* Row 2 About Me */}
    <motion.div variants={slideLeftVariants}>
              <Link href="/about" className="group block h-full">
                <Card
                  className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30"
                  style={{ backgroundColor: "#f5e9d4" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-serif text-xl font-bold leading-tight" style={{ color: "#2C2C2C" }}>
                        About Me
                      </h2>
                      <ArrowUpRight
                        className="w-4 h-4 transition-opacity duration-300"
                        style={{ color: "#2C2C2C" }}
                      />
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#2C2C2C" }}>
                      Hi, I’m Hiya Gurbani, a final-year B.Tech Computer Science student passionate about using
                      technology to solve real-world problems. <br></br>I enjoy building robust and scalable
                      applications, learning new tools, and applying problem-solving to challenges. <br></br>
                    </p>

                    <div className="mt-auto">
                      <p className="text-xs leading-relaxed opacity-80 italic" style={{ color: "#2C2C2C" }}>
                        Open to exciting opportunities and collaborations in software development and backend systems.
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>


    {/* Row 3 - Professional Summary */}
            <motion.div className="col-span-4 row-span-6 col-start-1 row-start-5" variants={slideLeftVariants}>
              <Link href="/internships" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Professional Summary</h3>
                      <ArrowUpRight className="w-4 h-4 transition-opacity duration-300 text-card-foreground" />
                    </div>
                    <div>
                      {/* <h4 className="font-medium text-sm mb-4 text-card-foreground">Timeline</h4> */}
                      <ProfessionalTimeline
                        items={[
                          {
                            role: "SQL Intern",
                            org: "Celebal",
                            duration: "Jun–Aug 2025",
                            achievement: "Gained hands-on expertise in SQL queries and data handling",
                          },
                          {
                            role: "Backend Development Intern",
                            org: "Matrix Pvt. Ltd.",
                            duration: "Jun-Jul 2025 ",
                            achievement: "Built REST APIs using Spring Boot and Hibernate",
                          },
                          {
                            role: "Software Development Intern",
                            org: "Matrix Pvt. Ltd.",
                            duration: "Jul-Aug 2024 ",
                            achievement: "Developed an Android application with Java and XML",
                          },
                          {
                            role: "Python Intern",
                            org: "IIHT Limited",
                            duration: "August 2023",
                            achievement: "Implemented mini projects to strengthen core Python skills",
                          },
                        ]}
                      />
                    </div>
                    
                  </div>
                </Card>
              </Link>
            </motion.div>


            {/* Column 3 - Projects (70%) */}
            <motion.div className="col-span-4 row-span-7 col-start-9 row-start-1" variants={slideRightVariants}>
              <Link href="/projects" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Projects</h3>
                      <ArrowUpRight className="w-4 h-4 transition-opacity duration-300 text-card-foreground" />
                    </div>

                    <p className="text-sm leading-relaxed  text-card-foreground">
                      {/* Innovative projects built with modern technologies and best practices. */}
                    </p>

                    {/* Featured project */}
                    <div className="relative p-4 rounded-lg mb-4 border">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary/15 rounded-lg" />

                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0" style={{ color: "#F5E9D4" }}>
                          <h4 className="font-medium text-m truncate">{homeProjects[0].title}</h4>
                          <p className="text-xs opacity-80 mt-1 italic">{homeProjects[0].tagline}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {homeProjects[0].tech.slice(0, 4).map((t, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/60 text-black/80">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary shrink-0">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Compact grid of 4 */}
                    <div className="grid grid-cols-2 gap-1 flex-1">
                      {homeProjects.slice(1, 5).map((p, idx) => (
                        <div
                          key={idx}
                          className="p-2 rounded-lg border border-border/10 hover:border-border/40 transition-colors"
                        >
                          <h5 className="font-medium text-sm text-card-foreground">{p.title}</h5>
                          <p className="text-xs opacity-70 mt-1 mb-2 text-card-foreground truncate">{p.tagline}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.slice(0, 3).map((t, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Column 2 - Achievements */}
            <motion.div  variants={slideUpVariants}>
              <Link href="/achievements" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Achievements</h3>
                      <ArrowUpRight
                        className="w-4 h-4 ml-auto transition-opacity duration-300 text-card-foreground"
                        style={{ color: "#F8F5F2" }}
                      />
                    </div>
                    <HomeAchievementsStats
                      items={[
                        { label: "Hackathons", count: 6 },
                        { label: "Certifications", count: 7 },
                        { label: "Recognition", count: "15+" },
                      ]}
                    />
                  </div>
                  
                </Card>
              </Link>
            </motion.div>

            {/* Column 3 - Let's Connect (30%) */}
            <motion.div  variants={slideRightVariants}>
              <Link href="/contact" className="group block h-full">
                <Card
                  className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30"
                  style={{ backgroundColor: "#f5e9d4" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-lg font-bold" style={{ color: "#2C2C2C" }}>
                        Let's Connect
                      </h3>
                      <ArrowUpRight
                        className="w-4 h-4 transition-opacity duration-300"
                        style={{ color: "#2C2C2C" }}
                      />
                    </div>
                    {/* Middle: description */}
                    <div className="mb-4">
                      <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
                        I’d love to hear from you! Reach out for collaborations, questions, or just to say hi.
                      </p>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("mailto:hiyagurbani@gmail.com", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Mail className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("https://github.com/hiyagurbani", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Github className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("https://linkedin.com/in/hiyagurbani", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
  </motion.div>
</div>

      
      
{/* Mobile stacked layout */}
<div className="md:hidden">
  <motion.div
    className="flex flex-col gap-4 px-4 py-4 overflow-y-auto"
    variants={containerVariants}
    initial="hidden"
    animate={mounted ? "visible" : "hidden"}
  >
    
    {/* Row 1 - Name Header */}
            <motion.div
              className="col-span-4 row-span-2 col-start-5 row-start-1 flex items-center justify-center"
              variants={nameVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16 ml-1"></div>
                </div>
                <h1 className="font-serif font-bold tracking-wide text-5xl text-card-foreground">Hiya Gurbani</h1>
                <div className="flex items-center justify-center mt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent w-16 ml-1"></div>
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Portrait */}
            <motion.div className="col-span-4 row-span-5 col-start-5 row-start-3" variants={portraitVariants}>
              <Card className="h-full p-6 relative overflow-hidden border border-border/30 bg-card shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative h-full flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(245, 233, 212, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-56 rounded-lg overflow-hidden border-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(245,233,212,0.2) 0%, transparent 70%)",
                      borderColor: "rgba(212, 175, 122, 0.3)",
                    }}
                  >
                    <img
                      src="/profile7.png"
                      alt="Hiya Gurbani - Professional Portrait"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>

                 <div className="w-20 h-[2px] mt-3 mb-3 rounded-full bg-gradient-to-r from-transparent via-[#F5E9D4] to-transparent" />

                  <div className="flex gap-4 justify-center ">
                    <Button
                      className="w-[160px] py-4 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "#F5E9D4",
                        color: "#2C2C2C",
                        border: "1px solid #F5E9D4",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#E5D9C4"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#F5E9D4"
                      }}
                      onClick={() => window.open("https://drive.google.com/file/d/1JcSp3siimx6mMbPCSzaXdNTjlYdshfH2/view", "_blank")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Resume
                    </Button>
                    <Button
                      asChild
                      className="w-[180px] py-4 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "transparent",
                        color: "#F5E9D4",
                        border: "1px solid #F5E9D4",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#F5E9D4"
                        e.currentTarget.style.color = "#2C2C2C"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#F5E9D4"
                      }}
                    >
                      <a
                        href="https://drive.google.com/uc?export=download&id=1JcSp3siimx6mMbPCSzaXdNTjlYdshfH2"
                        download="Resume-HiyaGurbani.pdf"
                        className="flex items-center justify-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>

                  </div>
                </div>
              </Card>
            </motion.div>
    
    {/* Row 2 About Me */}
    <motion.div variants={slideLeftVariants}>
              <Link href="/about" className="group block h-full">
                <Card
                  className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30"
                  style={{ backgroundColor: "#f5e9d4" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-serif text-xl font-bold leading-tight" style={{ color: "#2C2C2C" }}>
                        About Me
                      </h2>
                      <ArrowUpRight
                        className="w-4 h-4 transition-opacity duration-300"
                        style={{ color: "#2C2C2C" }}
                      />
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#2C2C2C" }}>
                      Hi, I’m Hiya Gurbani, a final-year B.Tech Computer Science student passionate about using
                      technology to solve real-world problems. <br></br>I enjoy building robust and scalable
                      applications, learning new tools, and applying problem-solving to challenges. <br></br>
                    </p>

                    <div className="mt-auto">
                      <p className="text-xs leading-relaxed opacity-80 italic" style={{ color: "#2C2C2C" }}>
                        Open to exciting opportunities and collaborations in software development and backend systems.
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>


    {/* Row 3 - Professional Summary */}
            <motion.div className="col-span-4 row-span-6 col-start-1 row-start-5" variants={slideLeftVariants}>
              <Link href="/internships" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Professional Summary</h3>
                      <ArrowUpRight className="w-4 h-4 transition-opacity duration-300 text-card-foreground" />
                    </div>
                    <div>
                      {/* <h4 className="font-medium text-sm mb-4 text-card-foreground">Timeline</h4> */}
                      <ProfessionalTimeline
                        items={[
                          {
                            role: "SQL Intern",
                            org: "Celebal",
                            duration: "Jun–Aug 2025",
                            // achievement: "Gained hands-on expertise in SQL queries and data handling",
                          },
                          {
                            role: "Backend Development Intern",
                            org: "Matrix Pvt. Ltd.",
                            duration: "Jun-Jul 2025 ",
                            // achievement: "Built REST APIs using Spring Boot and Hibernate",
                          },
                          {
                            role: "Software Development Intern",
                            org: "Matrix Pvt. Ltd.",
                            duration: "Jul-Aug 2024 ",
                            // achievement: "Developed an Android application with Java and XML",
                          },
                          {
                            role: "Python Intern",
                            org: "IIHT Limited",
                            duration: "August 2023",
                            // achievement: "Implemented mini projects to strengthen core Python skills",
                          },
                        ]}
                      />
                    </div>
                    
                  </div>
                </Card>
              </Link>
            </motion.div>


            {/* Column 3 - Projects (70%) */}
            <motion.div className="col-span-4 row-span-7 col-start-9 row-start-1" variants={slideRightVariants}>
              <Link href="/projects" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Projects</h3>
                      <ArrowUpRight className="w-4 h-4 transition-opacity duration-300 text-card-foreground" />
                    </div>

                    <p className="text-sm leading-relaxed  text-card-foreground">
                      {/* Innovative projects built with modern technologies and best practices. */}
                    </p>

                    {/* Featured project */}
                    <div className="relative p-4 rounded-lg mb-4 border">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary/15 rounded-lg" />

                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0" style={{ color: "#F5E9D4" }}>
                          <h4 className="font-medium text-m truncate">{homeProjects[0].title}</h4>
                          <p className="text-xs opacity-80 mt-1 italic">{homeProjects[0].tagline}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {homeProjects[0].tech.slice(0, 4).map((t, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/60 text-black/80">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary shrink-0">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Compact grid of 4 */}
                    <div className="grid grid-cols-2 gap-1 flex-1">
                      {homeProjects.slice(1, 5).map((p, idx) => (
                        <div
                          key={idx}
                          className="p-2 rounded-lg border border-border/10 hover:border-border/40 transition-colors"
                        >
                          <h5 className="font-medium text-sm text-card-foreground">{p.title}</h5>
                          <p className="text-xs opacity-70 mt-1 mb-2 text-card-foreground truncate">{p.tagline}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.slice(0, 3).map((t, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                
                  </div>
                </Card>
              </Link>
            </motion.div>

            {/* Column 2 - Achievements */}
            <motion.div  variants={slideUpVariants}>
              <Link href="/achievements" className="group block h-full">
                <Card className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30 bg-card shadow-lg">
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">Achievements</h3>
                      <ArrowUpRight
                        className="w-4 h-4 ml-auto transition-opacity duration-300 text-card-foreground"
                        style={{ color: "#F8F5F2" }}
                      />
                    </div>
                    <HomeAchievementsStats
                      items={[
                        { label: "Hackathons", count: 6 },
                        { label: "Certifications", count: 7 },
                        { label: "Recognition", count: "15+" },
                      ]}
                    />
                  </div>
                  
                </Card>
              </Link>
            </motion.div>

            {/* Column 3 - Let's Connect (30%) */}
            <motion.div  variants={slideRightVariants}>
              <Link href="/contact" className="group block h-full">
                <Card
                  className="h-full p-6 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border border-border/30"
                  style={{ backgroundColor: "#f5e9d4" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-lg font-bold" style={{ color: "#2C2C2C" }}>
                        Let's Connect
                      </h3>
                      <ArrowUpRight
                        className="w-4 h-4 transition-opacity duration-300"
                        style={{ color: "#2C2C2C" }}
                      />
                    </div>
                    {/* Middle: description */}
                    <div className="mb-4">
                      <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
                        I’d love to hear from you! Reach out for collaborations, questions, or just to say hi.
                      </p>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("mailto:hiyagurbani@gmail.com", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Mail className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("https://github.com/hiyagurbani", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Github className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open("https://linkedin.com/in/hiyagurbani", "_blank")
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-6 h-6" style={{ color: "#2C2C2C" }} />
                      </button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
  </motion.div>
</div>


    </div>
  )
}
