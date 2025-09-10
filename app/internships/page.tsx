import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Building, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function InternshipsPage() {
  const experiences = [
    {
      company: "Celebal",
      role: "SQL Intern",
      duration: "June 2025 - August 2025",
      location: "Remote",
      type: "Part-time Internship",
      description:
        "Focused on database design, optimization, and efficient query handling in enterprise data systems.",
      achievements: [
        "Gained hands-on experience in SQL query writing, joins, and aggregations",
        "Applied database design principles including normalization and indexing basics",
        "Worked with sample datasets for reporting and analytics tasks"
      ],
      tech: ["MySQL", "PostgreSQL"],
      skills: ["Query Optimization", "Data Normalization", "Joins & Aggregations", "Indexing", "Schema Design"],
    },
    {
      company: "Matrix Pvt. Ltd.",
      role: "Backend Development Intern",
      duration: "June 2025 - July 2025",
      location: "Jaipur, India",
      type: "Full-time Internship",
      description:
        "Contributed to backend development tasks using Java and Spring Boot, focusing on building scalable and efficient enterprise applications.",
      achievements: [
        "Developed and tested REST APIs for user authentication and data management",
        "Implemented CRUD operations and integrated with PostgreSQL databases",
        "Enhanced code quality through debugging, modularization, and best practices"
      ],
      tech: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
      skills: ["Backend Development", "Hibernate ORM", "REST API Design", "Database Integration", "Debugging & Troubleshooting"],
    },
    {
      company: "Matrix Pvt. Ltd.",
      role: "Software Development Intern",
      duration: "July 2024 - August 2024",
      location: "Jaipur, India",
      type: "Full-time Internship",
      description:
        "Gained hands-on experience in mobile application development, focusing on healthcare solutions using Java and XML.",
      achievements: [
      "Built a healthcare Android app through a guided project to apply concepts practically",
      "Learned Java , XML and local data handling using SQLite for persistent storage",
      "Gained practical understanding of Android lifecycle management"
      ],
      tech: ["Java", "XML", "Android Studio"],
      skills: ["Android Development", "Java Programming", "UI Design", "Mobile App Development"],
    },
    {
      company: "IIHT Limited",
      role: "Python Development Intern",
      duration: "August 2023",
      location: "Jaipur, India",
      type: "Full-time Internship",
      description:
        "Completed coding exercises and projects to strengthen Python fundamentals, with hands-on implementation of Tkinter for GUI-based applications.",
      achievements: [
        "Strengthened Python fundamentals through coding exercises on conditionals, loops, and functions",
        "Developed a GUI-based Bill Management System using Tkinter for real-time billing operations",
        "Worked on modular Python scripts improving code readability and reusability"
      ],
      tech: ["Python", "Tkinter"],
      skills: ["Problem Solving", "GUI Development", "Modular Programming", "Application Development"]

    },
  ]


  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Professional Experience
          </h1>
          <div className="w-24 h-1 bg-primary mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty">
            My journey through internships and professional roles has shaped my understanding of backend development,
            technical communication, and collaborative software engineering practices.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <Card className="md:ml-16 p-8 md:p-12 bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2">
                        <div className="mb-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 text-balance">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Building className="w-4 h-4 text-primary" />
                                <p className="text-lg text-primary font-medium">{exp.company}</p>
                              </div>
                              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  {exp.duration}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  {exp.location}
                                </div>
                              </div>
                            </div>
                            <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full whitespace-nowrap">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        <p className="text-neutral-400 leading-relaxed mb-8 text-pretty italic">{exp.description}</p>

                        {/* Key Achievements */}
                        <div className="mb-2 rounded-lg bg-background/60 ring-1 ring-border/30 p-4">
                          <h4 className="font-serif text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-foreground flex items-start gap-3">
                                <span className="text-primary mt-1 text-xs">▸</span>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-6">
                        {/* Skills Developed */}
                        <div className="rounded-lg bg-[#F5E9D4] ring-1 ring-border/30 p-5">
                          <h4 className="font-medium text-neutral-900 mb-3">Skills Developed</h4>
                          <ul className="space-y-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="text-sm text-[#3B2F2F] flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#3B2F2F] rounded-full" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies & Tools */}
                        <div className="rounded-lg bg-background/60 ring-1 ring-border/30 p-4">
                          <h4 className="font-medium text-foreground mb-3">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs px-2 py-1 bg-background text-zinc-300 border border-border/40 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
