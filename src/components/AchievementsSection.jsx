import { Award, BadgeCheck, FileText, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "6x Hackathon Winner",
    description:
      "Top prizes in National and College-level hackathon events. Recognized for multi-stakeholder system design, data-driven risk scoring, and AI-powered features.",
  },
  {
    icon: FileText,
    title: "DRDO Letter of Recommendation",
    description:
      "Awarded by Scientist 'E' at SSPL, DRDO for independently designing and delivering a full 6-module multimodal RAG pipeline — grounding Gemini 2.5 Flash answers in ChromaDB-indexed datasheet chunks across text, images, and tables.",
    link: "https://drive.google.com/file/d/1utzvg4wfvtR7e3sTrJ1Kpm3m9x0B_EWo/view?usp=sharing",
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: "Google Data Analytics Certificate",
    issuer: "Coursera, 2026",
    skills: "Python programming, SQL, spreadsheets, data analysis, data cleaning, data visualization, data-driven decision making",
    link: "https://coursera.org/share/7c7caf1372b67555a9b1d97a40115338",
  },
  {
    icon: Award,
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    skills: "Adaptability & Resilience, Problem Solving, Effective Communication, Self-Leadership",
    link: "https://www.credly.com/badges/581a3940-f282-480b-aebb-5e41edc4a876",
  },
  {
    icon: Award,
    title: "OCI AI Foundations Associate",
    issuer: "Oracle",
    skills: "AI/ML Basics, Generative AI, OCI AI Services",
    link: "https://drive.google.com/file/d/1cBl4RQPdsORCGHaH-V00smEPYKtMGctK/view?usp=sharing",
  },
];

function Trophy(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Achievements &{" "}
          <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recognition and credentials that reflect my dedication to continuous
          learning and excellence.
        </p>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="group bg-card rounded-lg p-6 sm:p-8 shadow-xs card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Document
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-lg p-6 shadow-xs card-hover border border-transparent hover:border-primary/30 transition-all duration-300 block text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-muted-foreground text-sm">
                        — {cert.issuer}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      <span className="font-medium text-foreground/80">Skills: </span>
                      {cert.skills}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
                    <ExternalLink className="h-3 w-3" />
                    View Credential
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
