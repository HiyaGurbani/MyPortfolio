"use client"

import Link from "next/link"
import { ArrowLeft, Code, Database, Server, Users, Settings, Zap, Award, RefreshCcw, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}


const softSkills = [
  { name: "Problem Solving", icon: Zap },
  { name: "Leadership ", icon: Award},
  { name: "Adaptability", icon: RefreshCcw },
  { name: "Communication", icon: MessageCircle },
  { name: "Collaboration", icon: Users },
  
];


export default function AboutPage() {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      items: [ "Java", "C++", "Python"],
    },
    {
      category: "Database Systems",
      icon: Database,
      items: ["PostgreSQL", "MySQL", "Database Design"],
    },
    {
      category: "Frameworks & Core Concepts",
      icon: Server,
      items: ["Spring Boot", "OOPs", "RESTful APIs", "Microservices"],
    },
    {
      category: "Development Tools",
      icon: Settings,
      items: ["Git", "Postman" , "Docker", "CI/CD"],
    },
    
  ]

  return (
    <div className="min-h-screen bg-background">
      
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="w-4 h-4" />
            </motion.div>
            Back to Portfolio
          </Link>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <motion.div
                className="lg:col-span-1 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Card className="p-6 bg-card border border-border/30 relative overflow-hidden h-fit sticky top-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <div className="relative">
                    {/* Placeholder for vertical image */}
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border-2 border-primary/20 shadow-lg mb-4">
                      <img
                        src="/profile2.jpg"
                        alt="Hiya Gurbani - Professional Portrait"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Hiya Gurbani</h3>
                      <p className="text-sm text-muted-foreground">Final Year Computer Science Student</p>
                      {/* <p className="text-sm text-muted-foreground">Backend Developer</p> */}
                    </div>
                  </div>
                </Card>
              </motion.div>

              <div className="lg:col-span-2 order-1 lg:order-2">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                    About Me
                  </h1>
                  <motion.div
                    className="w-24 h-1 bg-primary mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ delay: 0.5, duration: 1.0 }}
                  />
                  <p className="font-serif text-xl text-primary italic leading-relaxed">
                    Aspiring Developer | Creative Problem Solver | Building Impactful Solutions
                  </p>
                </motion.div>

                <motion.div
                  className="prose prose-lg max-w-none space-y-6 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <p className="font-serif text-lg text-justify text-zinc-300 leading-relaxed mb-6">
                    Hi, I’m Hiya Gurbani dedicated to using technology to build impactful solutions.
                     My journey in software development is driven by curiosity, creativity,
                     and a desire to solve real-world problems.
                  </p>

                  <p className="font-serif text-lg text-justify text-zinc-300 leading-relaxed mb-6">
                    Specializing in backend development, I have a strong foundation in building robust and scalable 
                    applications. I am adaptable and a fast learner, able to quickly pick up new technologies and 
                    frameworks. 
                    {/* My approach combines technical precision with creative problem-solving, keeping the 
                    end user’s experience at the forefront. */}
                  </p>

                  <p className="font-serif text-lg text-justify text-zinc-300 leading-relaxed">
                    Beyond coding, I enjoy bridging complex technical concepts with accessible solutions and exploring 
                    content writing and technical communication, helping me grow as a well-rounded developer.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Technical Expertise</h2>
              <motion.div
                className="w-16 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="p-6 bg-card border border-border/30 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="p-3 bg-primary/20 text-primary rounded-lg"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{skill.category}</h3>
                          <div className="flex flex-wrap gap-2 mb-2 mt-6">
                            {skill.items.map((item, itemIndex) => (
                              <motion.span
                                key={itemIndex}
                                className="text-xs px-2 py-1 bg-muted text-zinc-300 rounded"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3 + index * 0.1 + itemIndex * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {item}
                              </motion.span>
                            ))}
                          </div>
                          
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <Card className="p-8 md:p-12 bg-primary/5 border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
              <div className="relative">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Soft Skills</h2>
                  <motion.div
                    className="w-16 h-1 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                  />
                </motion.div>

                <div className="flex flex-wrap gap-6 justify-center">
                  {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          transition: { duration: 0.2 },
                        }}
                        className="relative group"
                      >
                        {/* Hexagonal background shape */}
                        <div
                          className="w-36 h-30 relative"
                          style={{
                            background: "#F5E9D4",
                            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                          }}
                        >
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                            <motion.div
                              className="mb-1"
                              initial={{ scale: 1, rotate: 0 }}   // ✅ default position
                              whileHover={{
                                scale: 1.1,
                                rotate: 5,                        // slight tilt
                                transition: { duration: 0.1 },
                              }}
                              whileTap={{ scale: 0.95 }}          // nice click feedback
                            >
                              <IconComponent className="w-5 h-5 text-amber-800" />
                            </motion.div>
                            <span className="font-serif text-xs font-medium text-amber-900 leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        </div>

                        {/* Subtle shadow effect */}
                        <div
                          className="absolute inset-0 -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-100"
                          style={{
                            background: "rgba(0,0,0,0.1)",
                            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                            transform: "translate(2px, 2px)",
                          }}
                        />
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 md:p-12 bg-card border border-border/30 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              <div className="relative">
                <motion.h2
                  className="font-serif text-3xl font-semibold text-foreground mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  What Drives Me
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Code,
                      title: "Clean Code",
                      desc: "Writing maintainable, efficient code that stands the test of time and scales with business needs.",
                    },
                    {
                      icon: Users,
                      title: "Collaboration",
                      desc: "Building strong teams through knowledge sharing, mentoring, and fostering inclusive development environments.",
                    },
                    {
                      icon: Server,
                      title: "Innovation",
                      desc: "Constantly learning new technologies and approaches to solve complex problems in creative ways.",
                    },
                  ].map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                        whileHover={{
                          y: -10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <motion.div
                          className="w-16 h-16 mx-auto mb-4 bg-primary/20 text-primary rounded-full flex items-center justify-center"
                          whileHover={{
                            scale: 1.1,
                            rotate: 10,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <IconComponent className="w-8 h-8" />
                        </motion.div>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
