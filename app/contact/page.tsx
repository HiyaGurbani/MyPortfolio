import Link from "next/link"
import { ArrowLeft, Linkedin, Github, Twitter,Code, Mail, MapPin, Clock, Send, Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hiyagurbani@gmail.com",
      href: "mailto:hiyagurbani@gmail.com",
      description: "Best way to reach me for professional inquiries and collaboration opportunities",
      primary: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hiyagurbani",
      href: "https://linkedin.com/in/hiyagurbani",
      description: "Connect with me professionally and view my career journey",
      primary: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hiyagurbani",
      href: "https://github.com/hiyagurbani",
      description: "Explore my code, contributions, and open source projects",
      primary: false,
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/HiyaGurbani",
      href: "https://leetcode.com/u/HiyaGurbani/",
      description: "Exploring algorithms, building problem-solving skills, and open to collaborate on challenges.",
      primary: false,
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   value: "@hiyagurbani",
    //   href: "https://twitter.com/hiyagurbani",
    //   description: "Follow my tech journey, thoughts, and industry insights",
    //   primary: false,
    // },
  ]

  const availability = [
    {
      type: "Full Time Roles & Internship Opportunities",
      status: "Open",
      description: "Seeking backend development positions & internships",
    },
    {
      type: "Freelance Projects",
      status: "Selective",
      description: "Available for interesting and challenging projects across domains",
    },
    {
      type: "Mentoring",
      status: "Open",
      description: "Happy to mentor beginners or peers in areas I am confident in",
    },
    {
      type: "Speaking Engagements",
      status: "Interested",
      description: "Active in tech events; open to organizing, anchoring, and giving talks",
    },
  ]

  // const responseTime = [
  //   { type: "Professional Inquiries", time: "24-48 hours" },
  //   { type: "Collaboration Requests", time: "2-3 days" },
  //   { type: "Mentoring Requests", time: "1 week" },
  //   { type: "General Questions", time: "3-5 days" },
  // ]

  

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
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Connect
          </h1>
          <div className="w-24 h-1 bg-primary mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, share knowledge about
            backend development, or simply chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card
                    key={index}
                    className={`p-6 bg-card border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group ${
                      method.primary
                        ? "border-primary/30 hover:border-primary/50" 
                        : "border-border/30 hover:border-primary/40"
                    }`}
                    style={{
                          backgroundColor: method.primary ? "#F5E9D4" : undefined,
                        }}
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer" className="block">
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-3 rounded-lg transition-all duration-300 group-hover:scale-110 ${
                                method.primary ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3
                                className="font-serif text-lg font-semibold mb-2"
                                style={{ color: method.primary ? "#2C2C2C" : undefined }}
                              >
                                {method.label}
                              </h3>
                              <p
                                className="text-primary text-sm mb-3 font-medium"
                                style={{ color: method.primary ? "#8B4513" : undefined }}
                              >
                                {method.value}
                              </p>
                              <p
                                className="text-xs leading-relaxed"
                                style={{ color: method.primary ? "#5A5A5A" : undefined }}
                              >
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </a>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6 mt-22">
            {/* Location & Availability */}
            {/* <Card className="p-6 bg-card border border-border/30 min-h-[300px] shadow-lg" style={{ backgroundColor: "#F5E9D4" }}> */}
            <Card className="p-6 bg-card border border-border/30 min-h-[300px] shadow-lg" >
              <div className="flex items-start gap-4 mt-3 ml-4">
                <div className="p-2 bg-primary/20 text-primary rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Rajasthan, India</p>
                  {/* <p className="text-xs text-muted-foreground mt-1">Open to Remote and On-Site Opportunities Globally</p> */}
                </div>
              </div>
              <div className="flex items-start gap-4 ml-4">
                <div className="p-2 bg-primary/20 text-primary rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Timezone</h3>
                  <p className="text-sm text-muted-foreground">IST (UTC+5:30)</p>
                  {/* <p className="text-xs text-muted-foreground mt-1">Flexible for global collaboration</p> */}
                </div>
              </div>
              <div className="flex items-start gap-4 ml-4">
                <div className="p-2 bg-primary/20 text-primary rounded-lg">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Work Mode</h3>
                  <p className="text-sm text-muted-foreground">Open to Remote and On-Site Opportunities Globally</p>
                  {/* <p className="text-xs text-muted-foreground mt-1">Flexible for global collaboration</p> */}
                </div>
              </div>
            </Card>

            {/* Response Time
            <Card className="p-6 bg-card border border-border/30">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Response Time</h3>
              <div className="space-y-3">
                {responseTime.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{item.type}</span>
                    <span className="text-xs text-primary font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </Card> */}
          </div>
        </div>

        {/* Current Availability */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">Role Interests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {availability.map((item, index) => {
              // Determine status color
              const statusClass =
                item.status === "Open"
                  ? "bg-green-500/20 text-green-600"
                  : item.status === "Selective"
                  ? "bg-yellow-500/20 text-yellow-600"
                  : item.status === "Interested"
                  ? "bg-blue-500/20 text-blue-600"
                  : "bg-gray-200 text-gray-600"; // fallback

              return (
                <Card
                  key={index}
                  className="p-6 bg-card border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{item.type}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusClass}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 md:p-12 bg-primary/5 border border-primary/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
          <div className="relative">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect with a fellow
              developer, I'd love to hear from you. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hiyagurbani@gamil.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg 
                          hover:bg-primary/90 hover:scale-105 hover:shadow-lg 
                          transition-all duration-200 ease-in-out font-medium group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send me an email
              </a>

              <a
                href="https://linkedin.com/in/hiyagurbani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-muted text-foreground px-8 py-4 rounded-lg 
                          hover:bg-muted/80 hover:scale-105 hover:shadow-lg 
                          transition-all duration-300 ease-in-out font-medium group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Connect on LinkedIn
              </a>
            </div>

          </div>
        </Card>
      </div>
    </div>
  )
}


