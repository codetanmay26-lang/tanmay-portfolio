import { Code, Database, Globe, Cpu, Wrench, BarChart2 } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C/C++", "Python", "Java", "JavaScript"],
  },
  {
    title: "AI / ML",
    icon: Cpu,
    skills: ["PyTorch", "TensorFlow", "Computer Vision", "RAG", "Multimodal AI", "CLIP"],
  },
  {
    title: "APIs & Services",
    icon: Globe,
    skills: ["Gemini API", "HuggingFace", "REST APIs"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["ReactJS", "Node.js", "FastAPI", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    title: "Data Analytics",
    icon: BarChart2,
    skills: ["SQL", "Data Cleaning", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Tools & Databases",
    icon: Wrench,
    skills: ["MySQL", "Firebase", "ChromaDB", "OpenCV", "Git", "GitHub"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Technologies and tools I work with to build intelligent, full-stack
          applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-card rounded-xl p-6 shadow-xs border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <group.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-foreground/90 border border-border/50 hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
