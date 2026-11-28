import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Research Intern – Computer Vision & AI",
    company: "VISMA Lab, IIT Bhubaneswar",
    location: "Bhubaneswar, India",
    period: "10 Aug 2026 — 15 Oct 2026",
    certLink: "https://drive.google.com/file/d/1RucCYNtbwncWH9k9YXDvd7yqKUTi0qN0/view?usp=sharing",
    lorLink: null,
    highlights: [
      "Annotated 1,000 images and built a zero-shot semantic image search engine using CLIP (ViT-B/32) in a 512-d latent space (0.28–0.38+ cosine scores).",
      "Precomputed a unit-normalised 1,000×512 embedding matrix (2 MB) for <25 ms retrieval via a single BLAS dot product.",
      "Engineered a CUDA/CPU-adaptive inference pipeline, cutting memory by >60% and eliminating ~600 MB model reloads per query.",
    ],
    tags: ["CLIP", "PyTorch", "HuggingFace", "Streamlit", "Computer Vision", "Semantic Search"],
  },
  {
    role: "AI Research Intern",
    company: "Solid State Physics Laboratory (SSPL), DRDO",
    location: "Delhi, India",
    period: "02 Jun 2026 — 14 Jul 2026",
    certLink:
      "https://drive.google.com/file/d/1tmeFDkdeJwO1O0t7mk0iBC-pUNbJ0waw/view?usp=drive_link",
    lorLink:
      "https://drive.google.com/file/d/1utzvg4wfvtR7e3sTrJ1Kpm3m9x0B_EWo/view?usp=sharing",
    highlights: [
      "Built a 6-module multimodal RAG pipeline (Granite 97M + ChromaDB) indexing datasheets into 36 enriched chunks (text, 63 images, 15 tables) with MMR retrieval (k=10, fetch_k=20).",
      "Converted tables & diagrams into searchable text via GLM-4.5V (1,091 → 1,375 avg chars), enabling visual datasheet content retrieval via text-based vector search.",
      "Designed chunk-health scoring (0–100, 25 pts per modality) with confidence-scored web fallback, grounding Gemini 2.5 Flash answers in source chunks to eliminate hallucinations.",
      "Awarded a Letter of Recommendation for technical excellence and independently delivering the full RAG pipeline.",
    ],
    tags: ["GLM-4.5V", "ChromaDB", "IBM Granite 97M", "Gemini 2.5 Flash", "RAG", "MMR Retrieval"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Professional experience building AI-powered systems and research tools
          in cutting-edge environments.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 sm:pl-20 pb-16 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-2.5 sm:left-6.5 top-1 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_12px_rgba(139,92,246,0.5)]" />

              {/* Card */}
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-xs border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-left">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-primary font-medium text-sm sm:text-base">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 sm:items-end shrink-0">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground text-left">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags + Certificate Link */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 shrink-0">
                    {exp.certLink && (
                      <a
                        href={exp.certLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Certificate
                      </a>
                    )}
                    {exp.lorLink && (
                      <a
                        href={exp.lorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View LOR
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
