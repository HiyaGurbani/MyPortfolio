"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projects = [
    {
      name: "NudgeMe",
      category: "Productivity Application",
      description:
        "A simple productivity app that helps users stay focused and achieve goals through reminders and habit tracking. Built with backend support, JWT authentication, and basic real-time notifications.",
      longDescription:
        "NudgeMe helps users improve productivity by sending reminders, tracking habits, and providing basic insights. The backend manages user data securely with JWT authentication, supports notifications, and syncs progress across devices.",
      tech: ["Spring Boot", "React", "PostgreSQL", "WebSocket", "JWT"],
      status: "In Development",
      progress: 75,
      features: [
        "Reminders / Notifications",
        "Habit Tracking",
        "Simple Analytics Dashboard",
        "Cross-device Sync",
        "JWT-based Authentication"
      ],
      timeline: "6 months",
      team: "Solo Project",
      highlights: [
        "Built backend and frontend as a solo developer",
        "Implemented JWT authentication for secure login",
        "Created basic notification system",
        "Handled basic data syncing across devices"
      ],
      github: "https://github.com/HiyaGurbani/NudgeMe"
    },
    {
      name: "Atisha",
      category: "AI/ML Web Application",
      description:
        "An AI-powered career guidance platform for children that provides suggestions based on interests and skills. Includes interactive dashboards and personalized recommendations.",
      longDescription:
        "Atisha helps children explore career options by analyzing their interests and performance data. The AI module provides personalized guidance, while the web app presents a simple dashboard for users to track suggestions and activities.",
      tech: ["Node.js", "React", "PostgreSQL", "Python", "AI/ML"],
      status: "Completed",
      progress: 100,
      features: [
        "AI-based Career Suggestions",
        "Interactive User Dashboard",
        "Personalized Recommendations",
        "Progress Tracking"
      ],
      timeline: "4 months",
      team: "Team Project",
      highlights: [
        "Implemented backend and AI recommendation system",
        "Created user-friendly dashboard",
        "Integrated database for storing user progress and suggestions"
      ],
      github: "https://github.com/HiyaGurbani/atisha"
    },
    {
      name: "Rural Connect",
      category: "Blockchain Application",
      description:
        "A blockchain platform connecting rural producers with buyers, ensuring transparent transactions and secure record keeping.",
      longDescription:
        "Rural Connect enables secure and transparent trade for rural producers using blockchain. The system tracks transactions, ensures authenticity, and provides easy access to buyers without intermediaries.",
      tech: ["Ethereum", "Solidity", "React", "Node.js", "PostgreSQL"],
      status: "Completed",
      progress: 100,
      features: [
        "Secure Blockchain Transactions",
        "User Authentication & Profiles",
        "Transaction History Tracking",
        "Buyer-Seller Matching"
      ],
      timeline: "5 months",
      team: "Team Project",
      highlights: [
        "Developed smart contracts for secure transactions",
        "Integrated frontend with blockchain backend",
        "Implemented transaction tracking and user profiles"
      ],
      github: "https://github.com/HiyaGurbani/RuralConnect"
    },
    {
      name: "Doing Well",
      category: "Well-being Web Application",
      description:
        "A women’ well-being app featuring mood tracking, AI chatbot support, and personalized resources for mental health and lifestyle guidance.",
      longDescription:
        "Doing Well is an Android application designed to simplify healthcare management.Users can book doctor appointments, manage lab tests, register/login securely, and view doctor details – all from a single app.",
      tech: ["React", "Next.js", "Firebase", "Node.js", "Python", "AI/ML"],
      status: "In Development",
      progress: 60,
      features: [
        "Daily Mood Tracker",
        "AI-powered Chatbot for Support",
        "Personalized Well-being Resources",
        "Sentiment Analysis & Insights",
        "Dashboard Visualization"
      ],
      timeline: "6 months",
      team: "Solo Project",
      highlights: [
        "Implemented mood tracking system and sentiment analysis",
        "Integrated AI chatbot for basic guidance",
        "Designed user dashboard for visual insights"
      ],
      github : "https://github.com/HiyaGurbani/DoingWell"
    },
    {
      name: "Gold Forecast",
      category: "AI/ML Prediction Tool",
      description:
        "A predictive tool using Random Forest algorithms to forecast gold prices based on historical trends and market data.",
      longDescription:
        "Gold Forecast analyzes historical gold price data and relevant market indicators to provide short-term forecasts. The tool uses a Random Forest model to generate predictions and visualize trends for decision-making.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      status: "Completed",
      progress: 100,
      features: [
        "Gold Price Prediction using Random Forest",
        "Data Visualization of Trends",
        "Model Accuracy Evaluation",
        "Simple User Interface for Predictions"
      ],
      timeline: "2 months",
      team: "Solo Project",
      highlights: [
        "Built and trained Random Forest model on historical data",
        "Implemented visualization for trends and predictions",
        "Evaluated model performance and accuracy"
      ],
      github: "https://github.com/HiyaGurbani/Gold-Price-Prediction"
    }


  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 md:mb-8 group"
          >
            <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="w-4 h-4" />
            </motion.div>
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Featured Projects
          </h1>
          <motion.div
            className="w-16 md:w-24 h-1 bg-primary mb-6 md:mb-8"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 0.3, duration: 1.0 }}
          />
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A collection of projects that showcase my passion for backend development and creating solutions that make a
            difference. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="p-4 md:p-8 lg:p-12 bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ opacity: 1 }}
                />
                <div className="relative">
                  <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
                        <div>
                          <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                            {project.name}
                          </h3>
                          <p className="text-[#F5E9D4] font-medium mb-2 md:mb-4">{project.category}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-1">
                            <div className="flex items-center">
                              {/* <Calendar className="w-4 h-4" />
                              {project.timeline} */}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              {project.team}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <span
                            className={`text-xs px-3 py-1 rounded-full ${
                              project.status === "Completed"
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {project.status}
                          </span>
                          <div className="text-sm text-muted-foreground">{project.progress}%</div>
                        </div>
                      </div>

                      {/* <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                        {project.description}
                      </p> */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                        {project.longDescription}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-6 md:mb-8">
                        <div className="rounded-lg bg-[#F5E9D4] ring-1 ring-border/30 p-5">
                        <h4 className="font-serif text-base md:text-lg font-semibold text-background mb-3 md:mb-4">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <motion.li
                              key={highlightIndex}
                              className="text-sm text-background flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + highlightIndex * 0.1, duration: 0.4 }}
                            >
                              <span className="text-background mt-1 text-xs">▸</span>
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group p-2 sm:p-0"
                        >
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          View Code
                        </Link>

                        {/* <motion.button
                          className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group p-2 sm:p-0"
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </motion.button> */}
                      </div>
                    </div>

                    {/* Project Details Sidebar */}
                    <div className="space-y-4 md:space-y-6 mt-6 lg:mt-0">
                      {/* Progress */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Development Progress</h4>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden mb-2">
                          <motion.div
                            className="h-full bg-[#F5E9D4] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground text-right">{project.progress}% Complete</div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + techIndex * 0.05, duration: 0.3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="text-sm text-neutral-300 flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + featureIndex * 0.1, duration: 0.4 }}
                            >
                              <Code className="w-3 h-3 text-primary flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
