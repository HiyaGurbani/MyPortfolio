import Link from "next/link"
import { ArrowLeft, Trophy, Award, Calendar, Users, Target, Zap, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { title } from "process"

export default function AchievementsPage() {
  const achievements = [
    // Smart India Hackathon (SIH)
    {
      title: "National Finalist - Smart India Hackathon 2024",
      category: "Hackathon Finalist",
      date: "December 2024",
      description:
        "Selected as a national finalist in SIH 2024 with an AI-powered career guidance platform for students (Atisha), competing among top student innovators across India.",
      details: [
        "Developed an AI-driven platform providing personalized career guidance for school students",
        "Integrated recommendation system leveraging ML models for career pathways",
        "Designed intuitive dashboards for both students and mentors",
        "Collaborated with a team of 6 to deliver an end-to-end prototype within 36 hours",
      ],
      icon: Trophy,
      highlight: true,
      impact: "Shortlisted at National Level",
      recognition: "Smart India Hackathon 2024",
      prize: "National Finalist",
      certificateLink:
        "https://www.linkedin.com/posts/hiyagurbani_sih2024-hackathonjourney-teamwork-activity-7275891083186749441-iT22?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA",
    },

    // DCGC (Digital Campus Google Cloud)
    {
      title: "2nd Runner-Up - Digital Campus Google Cloud (DCGC) Hackathon",
      category: "Hackathon Achievement",
      date: "November 2024",
      description:
        "Secured 2nd Runner-Up position with Rural Connect, a blockchain-based solution for transparent land and resource management.",
      details: [
        "Designed decentralized platform using Ethereum & smart contracts",
        "Implemented land record verification with fraud detection mechanism",
        "Built scalable backend leveraging Google Cloud services",
        "Presented solution to industry mentors from Google & academia",
      ],
      icon: Trophy,
      highlight: false,
      impact: "Competed against 150+ teams",
      recognition: "Google Cloud | DCGC",
      prize: "2nd Runner-Up",
      certificateLink:
        "https://www.linkedin.com/posts/hiyagurbani_blockchain-hackathon-gratitude-activity-7263854297472221185-hyuR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA",
    },

    // Web-a-thon (MNIT Jaipur)
    // {
    //   title: "Participant - Web-a-thon, MNIT Jaipur",
    //   category: "Hackathon Experience",
    //   date: "March 2024",
    //   description:
    //     "Participated with 'Trust-gig', a blockchain-based platform enabling secure freelancer-client collaboration.",
    //   details: [
    //     "Developed decentralized trust-based system for freelancer verification",
    //     "Implemented smart contracts ensuring secure payments",
    //     "Built prototype using Ganache & Solidity",
    //   ],
    //   icon: Trophy,
    //   highlight: false,
    //   impact: "Built Working Prototype",
    //   recognition: "MNIT Jaipur Web-a-thon",
    //   prize: "Finalist",
    // },

    // HackIndia
    {
      title: "Participant - HackIndia",
      category: "Hackathon Innovation",
      date: "October 2024",
      description:
        "Proposed a blockchain-based skill verification platform, focusing on creating tamper-proof credentials.",
      details: [
        "Designed blockchain-backed ledger to store verifiable certificates",
        "Implemented prototype using Ethereum and Ganache",
        "Showcased potential to reduce resume fraud in hiring process",
      ],
      icon: Trophy,
      highlight: true,
      impact: "Presented working prototype",
      recognition: "HackIndia",
      prize: "Participation",
      certificateLink:
        "https://www.linkedin.com/posts/hiyagurbani_web3-blockchain-hackathon-activity-7248653048565145600-lqVd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA",
    },

    // Dark Pattern Buster Hackathon (IIT BHU + Dept. of Consumer Affairs)
    {
      title: "Prototype Round - Dark Pattern Buster Hackathon (DPBH)",
      category: "Hackathon Prototype",
      date: "March 2024",
      description:
        "Advanced to the 2nd round with a prototype solution to identify and prevent deceptive design patterns online.",
      details: [
        "Developed browser extension for detecting misleading UI/UX patterns",
        "Integrated AI classifier trained on dataset of 5,000+ deceptive designs",
        "Collaborated with cross-functional team of developers & UI/UX experts",
      ],
      icon: Trophy,
      highlight: false,
      impact: "Advanced till Prototype Round",
      recognition: "IIT BHU | Dept. of Consumer Affairs",
      prize: "Prototype Stage",
      certificateLink:
        "https://www.linkedin.com/posts/hiyagurbani_hackathon-learning-connection-activity-7211669476839153665-Va5B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA",
    },

    // HackBVP
    {
      title: "Top 8 Finalist - HackBVP",
      category: "Hackathon Recognition",
      date: "June 2023",
      description:
        "Secured Top 8 position with an IoT-based PCB etching machine prototype, solving automation challenges in electronics fabrication.",
      details: [
        "Developed IoT-enabled system for automated PCB etching",
        "Integrated real-time monitoring and safety controls",
        "Built working prototype using microcontrollers and sensors",
      ],
      icon: Trophy,
      highlight: true,
      impact: "Top 8 out of 200+ teams",
      recognition: "HackBVP",
      prize: "Top 8 Teams",
      certificateLink:
        "https://www.linkedin.com/posts/hiyagurbani_connections-project-team-activity-7084924602933551104-F4cK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA",
    },
    // Certificate
    {
      title: "Generative AI Certification",
      category: "Professional Certification",
      date: "2024",
      description:
        "Completed LinkedIn’s Generative AI certification, covering foundational concepts of AI, prompt engineering, and applied use cases.",
      impact: "Industry Recognition",
      details: [
        "Gained practical understanding of prompt engineering and AI ethics",
        "Explored applications of generative AI in productivity and business contexts",
      ],
      recognition: "Skill-based Certification",
      prize: "Digital Badge",
      icon: Award,
      link: "https://www.linkedin.com/learning/certificates/4705d65106a2cd446df82a3e9849973937dc06ddab93dd035c53f76961c4c0d2",
    },
    {
      title: "API Fundamentals Student Expert",
      category: "Professional Certification",
      date: "2023",
      description:
        "Earned Postman Student Expert badge by demonstrating expertise in API creation, testing, and documentation.",
      impact: "Practical API Development Skills",
      details: [
        "Designed, tested, and documented RESTful APIs using Postman",
        "Learned best practices for API collaboration and lifecycle management",
      ],
      recognition: "Badge Earned",
      prize: "Digital Badge",
      icon: Award,
      link: "https://badgr.com/public/assertions/j0-VbHjKQuyDqzAOVhW8iA?identity__email=2022pietcshiya072@poornima.org",
    },
    {
      title: "Problem Solving & Python Certification",
      category: "Skill Certification",
      date: "2024",
      description:
        "Certified by HackerRank in Problem Solving and Python, validating algorithmic and coding proficiency.",
      impact: "Competitive Programming Readiness",
      details: [
        "Solved algorithmic challenges using data structures and efficient logic",
        "Demonstrated strong coding ability with Python for problem-solving",
      ],
      recognition: "Skill Certification",
      prize: "Digital Badge",
      icon: Award,
      link: "https://www.hackerrank.com/profile/hiyagurbani12",
    },
    {
      title: "Google Cloud Badges",
      category: "Cloud Certification",
      date: "2024",
      description: "Earned multiple skill badges from Google Cloud on topics including Large Language Models & AI.",
      impact: "Cloud Readiness",
      details: [
        "Completed hands-on labs using Google Cloud Console and APIs",
        "Earned badges on AI/ML, data processing, and cloud-native tools",
      ],
      recognition: "Skill Badge Collection",
      prize: "Digital Badges",
      icon: Award,
      link: "https://www.cloudskillsboost.google/public_profiles/557233ee-bdd4-4821-9805-3a75bedafde9/badges",
      links: [
        // { href: "https://www.cloudskillsboost.google/public_profiles/557233ee-bdd4-4821-9805-3a75bedafde9/badges", label: "Profile" },
        {
          href: "https://www.cloudskillsboost.google/public_profiles/557233ee-bdd4-4821-9805-3a75bedafde9/badges/11617814",
          label: "Badge 1",
        },
        {
          href: "https://www.cloudskillsboost.google/public_profiles/557233ee-bdd4-4821-9805-3a75bedafde9/badges/11617785",
          label: "Badge 2",
        },
        {
          href: "https://www.cloudskillsboost.google/public_profiles/557233ee-bdd4-4821-9805-3a75bedafde9/badges/9374930",
          label: "Badge 3",
        },
      ],
    },
    {
      title: "Microsoft Certifications",
      category: "Professional Certification",
      date: "2024–25",
      description: "Completed Microsoft Learn certifications on Azure, AI Fundamentals, and Database Essentials.",
      impact: "Cloud & Database Skills",
      details: [
        "Learned basics of Azure services, cloud architecture, and AI solutions",
        "Completed guided learning paths with hands-on exercises",
      ],
      recognition: "Professional Recognition",
      prize: "Certificates & Badges",
      icon: Award,
      link: "microsoft-credentials-link",
      links: [
        {
          href: "https://learn.microsoft.com/api/achievements/share/en-us/HiyaGurbani/4GCSLZQK?sharingId=15EB252D37989B7B",
          label: "Badge 1",
        },
        {
          href: "https://learn.microsoft.com/api/achievements/share/en-us/HiyaGurbani/3AZXR7GH?sharingId=15EB252D37989B7B",
          label: "Badge 2",
        },
        {
          href: "https://learn.microsoft.com/api/achievements/share/en-us/HiyaGurbani/87F3RFGW?sharingId=15EB252D37989B7B",
          label: "Badge 3",
        },
        {
          href: "https://learn.microsoft.com/api/achievements/share/en-us/HiyaGurbani/8A6VNFBW?sharingId=15EB252D37989B7B",
          label: "Badge 4",
        },
        {
          href: "https://learn.microsoft.com/api/achievements/share/en-us/HiyaGurbani/9XH6NHSU?sharingId=15EB252D37989B7B",
          label: "Trophy",
        },
      ],
    },
    {
      title: "Blockchain Fundamentals Workshop",
      category: "Workshop",
      date: "2024",
      description: "Hands-on workshop on decentralized systems, smart contracts, and blockchain fundamentals.",
      impact: "Practical Exposure",
      details: [
        "Worked with smart contracts using Solidity and Ethereum testnets",
        "Understood concepts of decentralization, consensus, and security",
      ],
      recognition: "Workshop Completion",
      prize: "Certificate",
      icon: Award,
      link: "https://drive.google.com/file/d/159irtO-M_9JipISUkmJYdMQx78HUplFw/view?usp=sharing",
    },
    {
      title: "Salesforce Masterclass",
      category: "Workshop",
      date: "2025",
      description: "4-day Salesforce masterclass covering CRM, custom objects, validation rules, and automation.",
      impact: "Hands-on CRM Experience",
      details: [
        "Built and customized Salesforce apps with objects and workflows",
        "Explored automation, validation rules, and CRM best practices",
      ],
      recognition: "Workshop Completion",
      prize: "Certificate",
      icon: Zap,
      link: "https://www.linkedin.com/posts/hiyagurbani_salesforce-masterclass-learningjourney-activity-7327181666173571073-KOHo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA",
    },
    {
      title: "Community Leadership Award",
      category: "Community Recognition",
      date: "December 2024",
      description:
        "Recognized for outstanding contribution to the developer community through mentoring, content creation, and organizing educational events for aspiring backend developers.",
      details: [
        "Mentored 25+ junior developers with 90% successful job placement rate",
        "Organized 12 technical workshops attended by 200+ participants",
        "Created educational content reaching 50k+ developers globally",
        "Built and managed thriving community of 500+ backend developers",
        "Established scholarship program for underrepresented groups in tech",
      ],
      icon: Users,
      highlight: false,
      impact: "500+ developers",
      recognition: "Community Level",
      prize: "Leadership Recognition",
    },
  ]

  // const stats = [
  //   { label: "Hackathons Participated", value: "12+", icon: Target },
  //   { label: "Certifications Earned", value: "8", icon: Award },
  //   { label: "Awards Won", value: "5", icon: Trophy },
  //   { label: "Projects Completed", value: "20+", icon: Zap },
  // ]

  const grouped = {
    hackathons: achievements.filter((a) => a.category.includes("Hackathon")),
    certifications: achievements.filter((a) => a.category.includes("Certification") || a.category.includes("Workshop")),
    leadership: achievements.filter((a) => ["Community Recognition"].includes(a.category)),
  }

  function RenderList({ items }: { items: typeof achievements }) {
    return (
      <div className="space-y-8">
        {items.map((achievement, index) => {
          const IconComponent = achievement.icon
          const certificate =
            (achievement as any)?.certificateLink ||
            (achievement as any)?.proof ||
            (achievement as any)?.link ||
            (achievement as any)?.url
          const linksList = Array.isArray((achievement as any)?.links)
            ? ((achievement as any)?.links as Array<string | { href: string; label?: string }>)
            : undefined
          return (
            <Card
              key={index}
              className={`p-8 md:p-12 bg-card border transition-all duration-500 relative overflow-hidden ${
                achievement.highlight
                  ? "border-[#F5E9D4]/50 bg-[#F5E9D4]/5 hover:border-[#F5E9D4]/70"
                  : "border-border/30 hover:border-[#F5E9D4]/30"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5E9D4]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className={`p-4 rounded-full ${
                          achievement.highlight ? "bg-[#F5E9D4]/20 text-[#F5E9D4]" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                          <div>
                            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 leading-tight">
                              {achievement.title}
                            </h3>
                            <p className="text-[#F5E9D4] font-medium mb-2">{achievement.category}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {achievement.date}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-8">{achievement.description}</p>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Key Highlights</h4>
                      <ul className="space-y-3">
                        {achievement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                            <span className="text-[#F5E9D4] mt-1 text-xs">▸</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar Stats */}
                  <div className="space-y-6">
                    <Card className="p-4 bg-[#F5E9D4]/5 border border-[#F5E9D4]/20">
                      <h4 className="font-medium text-foreground mb-2">Impact</h4>
                      <div className="text-lg font-bold text-[#F5E9D4]">{achievement.impact}</div>
                    </Card>

                    {/* <Card className="p-4 bg-muted/30 border border-border/30">
                      <h4 className="font-medium text-foreground mb-2">Recognition</h4>
                      <div className="text-sm text-muted-foreground">{achievement.recognition}</div>
                    </Card> */}

                    <Card
                      className={cn(
                        "p-4 border border-border/30",
                        achievement.highlight ? "bg-muted/50" : "bg-[#F5E9D4]",
                      )}
                    >
                      <h4
                        className={cn("font-medium mb-2", achievement.highlight ? "text-foreground" : "text-[#2C2C2C]")}
                      >
                        Prize/Reward
                      </h4>
                      <div
                        className={cn("text-sm", achievement.highlight ? "text-muted-foreground" : "text-[#4A4A4A]")}
                      >
                        {achievement.prize}
                      </div>
                    </Card>

                    {/* Certificate Links */}
                    {linksList && linksList.length > 0 ? (
                      <div className="space-y-2">
                        {linksList.map((l, i) => {
                          const href = typeof l === "string" ? l : l.href
                          const label =
                            typeof l === "string" ? `Certificate ${i + 1}` : l.label || `Certificate ${i + 1}`
                          return (
                            <Link
                              key={`${href}-${i}`}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full h-10 rounded-md border border-[#F5E9D4]/30 bg-[#F5E9D4]/5 text-[#F5E9D4] hover:bg-[#F5E9D4]/10 transition-colors text-sm font-medium"
                              aria-label={`${label} (opens in new tab)`}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {label}
                            </Link>
                          )
                        })}
                      </div>
                    ) : certificate ? (
                      <Link
                        href={certificate as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full h-10 rounded-md border border-[#F5E9D4]/30 bg-[#F5E9D4]/5 text-[#F5E9D4] hover:bg-[#F5E9D4]/10 transition-colors text-sm font-medium"
                        aria-label="View certificate (opens in new tab)"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View certificate
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    )
  }

  function RenderCompactList({ items }: { items: typeof achievements }) {
    return (
      <div className="space-y-8">
        {items.map((achievement, index) => {
          const IconComponent = achievement.icon
          const certificate =
            (achievement as any)?.certificateLink ||
            (achievement as any)?.proof ||
            (achievement as any)?.link ||
            (achievement as any)?.url

          const linksList = Array.isArray((achievement as any)?.links)
            ? ((achievement as any)?.links as Array<string | { href: string; label?: string }>)
            : undefined

          return (
            <Card
              key={index}
              className={`p-8 md:p-10 bg-card border transition-all duration-500 relative overflow-hidden ${
                (achievement as any)?.highlight
                  ? "border-[#F5E9D4]/50 bg-[#F5E9D4]/5 hover:border-[#F5E9D4]/70"
                  : "border-border/30 hover:border-[#F5E9D4]/30"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5E9D4]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        (achievement as any)?.highlight
                          ? "bg-[#F5E9D4]/20 text-[#F5E9D4]"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                    <Calendar className="w-4 h-4" />
                    {achievement.date}
                  </div>
                </div>

                {achievement.description ? (
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                ) : null}

                {(achievement as any)?.prize ? (
                  <div className="rounded-md border border-border/30 bg-[#F5E9D4] p-3">
                    <div className="text-xs text-background mb-0.5">Prize/Reward</div>
                    <div className="text-sm font-medium text-background">{(achievement as any).prize}</div>
                  </div>
                ) : null}

                {/* Links: support multiple or single */}
                {linksList && linksList.length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {linksList.map((l, i) => {
                      const href = typeof l === "string" ? l : l.href
                      const label = typeof l === "string" ? `Certificate ${i + 1}` : l.label || `Certificate ${i + 1}`
                      return (
                        <Link
                          key={`${href}-${i}`}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center h-9 rounded-md border border-[#F5E9D4]/30 bg-[#F5E9D4]/5 text-[#F5E9D4] px-3 hover:bg-[#F5E9D4]/10 transition-colors text-sm font-medium"
                          aria-label={`${label} (opens in new tab)`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {label}
                        </Link>
                      )
                    })}
                  </div>
                ) : certificate ? (
                  <div>
                    <Link
                      href={certificate as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center h-9 rounded-md border border-[#F5E9D4]/30 bg-[#F5E9D4]/5 text-[#F5E9D4] px-3 hover:bg-[#F5E9D4]/10 transition-colors text-sm font-medium"
                      aria-label="View certificate (opens in new tab)"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View certificate
                    </Link>
                  </div>
                ) : null}
              </div>
            </Card>
          )
        })}
      </div>
    )
  }

  type GroupItem = {
    text: string
    url?: string
  }

  type Group = {
    title: string
    items: GroupItem[]
  }


  function LeadershipGrouped() {
    const groups: Group[] = [
      {
        title: "Coding Achievements",
        items: [
          { text: "Solved 350+ problems on LeetCode, demonstrating strong problem-solving and algorithmic skills.", url: "https://leetcode.com/u/HiyaGurbani/"},
          { text: "Earned 200 Days Streak Badge (2025) on LeetCode for consistent daily practice.", url: ""},
          { text:"Semi-finalist, Flipkart GRID 2025",url: "https://www.linkedin.com/posts/hiyagurbani_flipkartgrid-semifinalist-techchallenge-activity-7355231986459824128-zGtS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
        ]
      },
      {
        title: "Leadership & Representation",
        items: [
          { text: "Served as Student Director, Unstop", url: "https://www.linkedin.com/posts/hiyagurbani_unstop-campusambassador-studentdirector-activity-7258500938250833921-I9cJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA" },
          { text: "Worked as Campus Ambassador, GSSoC 2024", url: "https://www.linkedin.com/posts/hiyagurbani_gssoc2024-campusambassador-opensource-activity-7244178182180929536-NNEq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
          { text: "Co-Edited, Poornima Panorama (Institute’s Official Magazine)", url: ""},
        ],
      },
      {
        title: "Publications",
        items: [
          { text:"Article published on Unstop (Animator Creator)",url: "https://www.linkedin.com/posts/hiyagurbani_animation-careerguide-unstop-activity-7312810282643296256-WWXD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
          { text:"Presented Research Paper at ICIDLHV-23 (International Conference), published in Omniscience", url: "https://www.linkedin.com/posts/hiyagurbani_opportunity-experience-connections-activity-7074381258176237569-2fWR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
        ],
      },
      {
        title: "Awards & Honors",
        items: [
          { text:"Outstanding Student Award, Kalanidhi (College)",url: "https://www.linkedin.com/posts/hiyagurbani_connections-certificateofexcellence-recognition-activity-7116833751128506369-7zf4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
          { text:"Represented at IIT Delhi under Model G20 showcase",url: "https://www.linkedin.com/posts/hiyagurbani_hello-connections-i-wanted-to-share-with-activity-7086302986993360896-RpvS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
          { text:"Winner – G20 College Debate Competition",url: "https://www.linkedin.com/posts/hiyagurbani_technology-opportunity-share-activity-7072448722445438976-vy-H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
          { text:"Winner (2 quizzes) at Women in Tech Conference 2025",url: "https://www.linkedin.com/posts/hiyagurbani_womenintech2024-witconf-quizwinner-activity-7315332490313834496-y4oy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
        ],
      },
      {
        title: "Contributions",
        items: [
          { text:"Anchored multiple events including Azure AI Influencers Day",url: "https://www.linkedin.com/posts/hiyagurbani_azureai-aiinfluencers-techcommunity-activity-7245319013193375745-tuPa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
          { text:"Conducted knowledge-sharing session on Smart India Hackathon for juniors",url: "https://www.linkedin.com/posts/hiyagurbani_smartindiahackathon-sih2024-fromfinaliststomentors-activity-7305630283557482498-sa0C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
        ],
      },
      {
        title: "Community & Volunteering",
        items: [
          { text: "Organizing Team – Poornima Hackathon 2.0",  url: "https://drive.google.com/file/d/15EGIPKXfpTg8gNbZ4uYRdoT4iehlMtl1/view?usp=sharing"},
          { text: "Vounteer - ICIDLHV Conference", url: "https://www.linkedin.com/posts/hiyagurbani_opportunity-experience-connections-activity-7074381258176237569-2fWR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7tW_UBj10mszJCQFgigzWhP4bAnxPdehA"},
        ],
      },
    ]

    return (
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <Card
            key={group.title}
            className="p-6 bg-card border border-border/30 hover:border-[#F5E9D4]/30 transition-colors"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{group.title}</h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
              <li
                key={`${group.title}-${i}`}
                className="text-sm text-muted-foreground flex items-center justify-between gap-3"
              >
                {/* Left side: bullet + text */}
                <span className="flex items-start gap-2 leading-relaxed">
                  <span className="text-[#F5E9D4] mt-1 text-xs">▸</span>
                  {item.text}
                </span>

                {/* Right side: external link icon */}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E9D4] hover:text-[#e6d2a5] flex-shrink-0"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </li>

            ))}
          </ul>
          </Card>
        ))}
      </div>
    )
  }

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
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">Achievements</h1>
          <div className="w-24 h-1 bg-[#F5E9D4] mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Recognition and achievements that reflect my commitment to continuous learning, innovation, and excellence
            in technology. Each milestone represents growth and dedication to the craft.
          </p>
        </div>

        {/* Stats Section
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card border border-border/30 text-center group hover:border-[#F5E9D4]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#F5E9D4]/20 text-[#F5E9D4] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-serif text-3xl font-bold text-[#F5E9D4] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            )
          })}
        </div> */}

        {/* Achievements List */}
        <Tabs defaultValue="hackathons" className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-6">
            <TabsTrigger
              value="hackathons"
              className="data-[state=active]:!bg-[#F5E9D4] data-[state=active]:!text-black"
            >
              Hackathons
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="data-[state=active]:!bg-[#F5E9D4] data-[state=active]:!text-black"
            >
              Certifications
            </TabsTrigger>
            <TabsTrigger
              value="leadership"
              className="data-[state=active]:!bg-[#F5E9D4] data-[state=active]:!text-black"
            >
              Recognition
            </TabsTrigger>

          </TabsList>


          <TabsContent value="hackathons">
            <RenderList items={grouped.hackathons} />
          </TabsContent>

          <TabsContent value="certifications">
            <RenderCompactList items={grouped.certifications} />
          </TabsContent>

          <TabsContent value="leadership">
            <LeadershipGrouped />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
