import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: " 🚗💨❄️ Car Rental Batch Data Ingestion with SCD2 Merge in Snowflake ❄️",
    description:
      "Implemented a batch data ingestion pipeline for car rental data, featuring SCD2 (Slowly Changing Dimension Type 2) merge on the customer dimension in Snowflake. The pipeline uses Python, PySpark, GCP Dataproc, Airflow, and Snowflake to ingest, transform, and automate scalable data workflows. Key features include SCD2 handling, ingestion from GCS to Snowflake, PySpark transformations, Airflow orchestration, and scalable processing via Dataproc.",
    // impact: "SCD2 Merge",
    // impactLabel: "Accurate Customer History",
    tech: ["Python", "PySpark", "GCP Dataproc", "Airflow", "Snowflake"],
    image: "/images/carpipeline.png",
    gradient: "from-chart-2/10 to-chart-2/5",
  },
  {
    title: "🔶 Databricks ETL Pipeline with Medallion Architecture 🔶",
    description:
      "I led a data processing project on Databricks using PySpark and DBT, applying the Medallion architecture (bronze, silver, gold layers). The goal was to build a modular, scalable ETL pipeline: ingesting raw data with PySpark streaming, transforming and cleaning it in the silver layer, and creating analytics-ready models with DBT in the gold layer. My main challenge was handling incremental data loads and ensuring reliability; I solved this by implementing checkpointing and dynamic schema handling. This resulted in a robust, production-quality pipeline that improved data quality and analytics efficiency.",
    // impact: "85%",
    // impactLabel: "Data Quality Improvement",
    tech: ["PySpark", "DBT", "Databricks", "Python", "Delta Lake"],
    image: "/images/pysprakxdbt.png",
    gradient: "from-chart-1/10 to-chart-1/5",
  }
  // {
  //   title: "ETL Automation Framework",
  //   description:
  //     "Developed an automated ETL framework with Apache Airflow that orchestrates 50+ daily data workflows, improving data quality by 85% and reducing manual effort by 60% through intelligent error handling and monitoring.",
  //   impact: "60%",
  //   impactLabel: "Less Manual Work",
  //   tech: ["Airflow", "PostgreSQL", "Python", "Docker"],
  //   image: "https://placehold.co/800x500/059669/ffffff?text=ETL+Framework",
  //   gradient: "from-chart-2/10 to-chart-2/5",
  // },
  // {
  //   title: "Customer Insights Dashboard",
  //   description:
  //     "Created an interactive dashboard using Power BI to visualize customer behavior patterns across 10+ metrics, enabling data-driven decisions that increased customer retention by 25% and reduced churn by 15%.",
  //   impact: "25%",
  //   impactLabel: "Better Retention",
  //   tech: ["Power BI", "SQL", "Azure", "DAX"],
  //   image: "https://placehold.co/800x500/9333ea/ffffff?text=Dashboard",
  //   gradient: "from-chart-3/10 to-chart-3/5",
  // }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <TrendingUp className="w-8 h-8 text-primary" />
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6" data-testid="text-projects-title">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="relative">
              <div className="h-1.5 w-52 bg-primary/20 rounded-full mx-auto">
                <div className="h-full w-2/3 bg-primary rounded-full transition-all duration-700 ease-out" />
              </div>
              <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-8" viewBox="0 0 110 30">
                <path d="M 10 20 Q 55 10, 100 20" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/40" />
              </svg>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            Transforming data challenges into impactful, measurable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 border-2 bg-gradient-to-br ${project.gradient}`}
              data-testid={`card-project-${index}`}
            >
              <div className="relative h-52 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="p-7 space-y-5">
                <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="font-medium"
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {index === 0 ? (
                    <a
                      href="https://github.com/Devcoding17/End-To-End-CAR-RENTAL-PIPELINE?tab=readme-ov-file"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      data-testid={`button-github-${index}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-elevate w-full"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  ) : index === 1 ? (
                    <a
                      href="https://github.com/Devcoding17/PYSPARK-DBT-PROJECT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      data-testid={`button-github-${index}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-elevate w-full"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover-elevate flex-1"
                      onClick={() => console.log(`View ${project.title} on GitHub`)}
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
                
              </div>
            </Card>
          ))}
        </div>

        

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more?</p>
          <Button
            variant="outline"
            size="lg"
            className="hover-elevate border-2"
            onClick={() => console.log('View all projects')}
            data-testid="button-view-all"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
