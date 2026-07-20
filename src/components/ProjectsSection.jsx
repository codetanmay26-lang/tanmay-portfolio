import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HealthSync — AI Continuity of Care",
    description:
      "6x Hackathon Winner. Role-based healthcare system with 4 user roles, Tesseract.js OCR for 80%+ prescription extraction, AI-powered lab report analysis via Gemini API, and a proactive risk scoring system.",
    image: "/projects/project1.png",
    tags: ["React (Vite)", "TailwindCSS", "Gemini API", "Firebase"],
    demoUrl: "https://health-sync-vert.vercel.app/",
    githubUrl: "https://github.com/codetanmay26-lang/health-sync.git",
  },
  {
    id: 2,
    title: "AptosRx — Blockchain Prescription Verification",
    description:
      "Decentralized system using Aptos blockchain and Move smart contracts for secure prescription issuance. SHA-256 hash validation with Firebase off-chain storage for 100% tamper detection and 50+ verified transactions.",
    image: "/projects/project2.png",
    tags: ["Aptos", "JavaScript", "Node.js", "Firebase"],
    demoUrl: "https://aptosrx.onrender.com/",
    githubUrl: "https://github.com/codetanmay26-lang/aptosrx.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/codetanmay26-lang"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
