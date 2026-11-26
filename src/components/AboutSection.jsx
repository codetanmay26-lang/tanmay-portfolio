import { Briefcase, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <img
                  src="/profile.JPG"
                  alt="Tanmay Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio + Education */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-semibold">
              CS Undergrad | AI &amp; CV Research Intern | 6x Hackathon Winner
            </h3>

            <p className="text-muted-foreground">
              I'm a B.Tech Computer Science student at Jaypee Institute of
              Information Technology, Noida (2024-2028), passionate about
              building intelligent systems at the intersection of AI, Computer
              Vision, and full-stack development.
            </p>

            <p className="text-muted-foreground">
              I interned at SSPL, DRDO where I built a 6-module multimodal RAG
              pipeline (Granite 97M + ChromaDB + GLM-4.5V) and at VISMA Lab,
              IIT Bhubaneswar where I built a zero-shot semantic image search
              engine with CLIP. I hold a Letter of Recommendation from DRDO for
              independently delivering the full pipeline.
            </p>

            <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
              <h4 className="font-medium text-sm text-primary">Education</h4>
              <p className="text-muted-foreground text-sm">
                <span className="font-medium text-foreground">B.Tech CSE</span> — JIIT, Noida (2024-2028)
              </p>
              <p className="text-muted-foreground text-xs">
                DSA - OOP - Machine Learning - DBMS - App Development
              </p>
              <p className="text-muted-foreground text-sm">
                <span className="font-medium text-foreground">Class 12th CBSE</span> — Jaypee Public School, Noida — <span className="text-primary font-semibold">93.4%</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1F9QGbTBo6xZicgb_dYc97sTvBZ1MyBFq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Specialty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                <p className="text-muted-foreground text-sm">
                  Building responsive web apps with React, Node.js,
                  TailwindCSS, Firebase, and REST APIs.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                <p className="text-muted-foreground text-sm">
                  Building multimodal RAG pipelines, semantic search engines,
                  and AI-powered systems with PyTorch, CLIP, and Gemini API.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Computer Vision</h4>
                <p className="text-muted-foreground text-sm">
                  Zero-shot image search, vision-language models, and
                  image annotation using CLIP, OpenCV, and HuggingFace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
