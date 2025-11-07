import { Database, Code, Cloud, BarChart3, GitBranch, Cpu, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Languages",
    icon: Code,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    borderColor: "border-chart-1/30",
  items: ["Python", "SQL", "Java"],
  },
  {
    category: "Big Data Tools",
    icon: Database,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    borderColor: "border-chart-2/30",
    items: ["Apache Spark", "Hadoop", "Kafka", "Airflow", "Databricks"],
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    borderColor: "border-chart-3/30",
    items: ["Azure", "GCP", "Snowflake"],
  },
  {
    category: "Databases",
    icon: Cpu,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    borderColor: "border-chart-4/30",
    items: ["Microsoft SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Data Visualization",
    icon: BarChart3,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    borderColor: "border-chart-5/30",
    items: ["Grafana", "Tableau", "Power BI", "QlikSense"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    items: ["Git", "GitHub"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <Zap className="w-8 h-8 text-accent" />
              <div className="w-12 h-1 bg-accent rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6" data-testid="text-skills-title">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
            <div className="relative">
              <div className="h-1.5 w-56 bg-primary/20 rounded-full mx-auto">
                <div className="h-full w-4/5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700 ease-out ml-auto" />
              </div>
              <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8" viewBox="0 0 120 30">
                <path d="M 15 15 Q 60 25, 105 15" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent/40" />
              </svg>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            Building powerful data solutions with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className={`group p-6 hover-elevate active-elevate-2 transition-all duration-300 border-2 ${skill.borderColor}`}
                data-testid={`card-skill-${skill.category.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-4 ${skill.bgColor} rounded-xl transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className={`w-7 h-7 ${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-bold font-heading" data-testid={`text-skill-category-${index}`}>
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => {
                    // small map from item display name to simpleicons slug
                    const logoMap: Record<string, string> = {
                      python: "python",
                      sql: "/images/SQL.com.png",
                      microsoftsqlserver: "/images/mssql.com.png",
                      "microsoft sql server": "/images/mssql.com.png",
                      java: "java",
                      "apache spark": "/images/Apache_Spark_logo.svg.png",
                      hadoop: "apachehadoop",
                      kafka: "apachekafka",
                      airflow: "/images/airflowimages.png",
                      databricks: "databricks",
                      azure: "/images/Microsoft_Azure.svg.png",
                      gcp: "googlecloud",
                      snowflake: "snowflake",
                      postgresql: "postgresql",
                      mongodb: "mongodb",
                      grafana: "grafana",
                      "power bi": "/images/Power-BI.svg.png",
                      powerbi: "/images/Power-BI.svg.png",
                      tableau: "/images/tableausvgviewer-output.svg",
                      qliksense: "qlik",
                      git: "git",
                      github: "github",
                    };

                    const key = item.toLowerCase().replace(/\s+/g, ' ').trim();
                    const slugOrPath = logoMap[key as keyof typeof logoMap];
                    // allow local paths (starting with /) or simpleicons slugs
                    let src = null;
                    if (slugOrPath) {
                      if (slugOrPath.startsWith('/')) {
                        src = slugOrPath;
                      } else {
                        src = `https://cdn.simpleicons.org/${slugOrPath}`;
                      }
                    }
                    // fallback for mssql and powerbi if local image missing
                    if (src && src.includes('mssql.svg.png')) {
                      // fallback to simpleicons
                      src = '/images/mssql.svg.png';
                    }
                    if (src && src.includes('Power-BI.svg.png')) {
                      // fallback to simpleicons
                      src = '/images/Power-BI.svg.png';
                    }

                    return (
                      <Badge
                        key={itemIndex}
                        variant="secondary"
                        className="text-sm font-medium hover-elevate flex items-center gap-2"
                        data-testid={`badge-skill-${item.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        {src ? (
                          <img
                            src={src}
                            alt={`${item} logo`}
                            className="w-4 h-4 object-contain"
                            width={16}
                            height={16}
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              const s = img.src || '';
                              if (s.includes('Microsoft_Azure.svg.png')) {
                                img.src = '/images/azure.png';
                                return;
                              }
                              if (s.includes('azure.png')) {
                                img.src = '/images/azure.svg';
                                return;
                              }
                              if (s.includes('azure.svg')) {
                                img.src = 'https://cdn.simpleicons.org/azure';
                                return;
                              }
                            }}
                          />
                        ) : null}
                        {item}
                      </Badge>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/10 via-accent/5 to-card border-2 border-primary/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-lg font-semibold text-primary" data-testid="text-learning">
                Continuously Learning & Growing
              </p>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <p className="text-muted-foreground mb-6">Currently exploring and mastering</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Kubernetes", slug: "kubernetes" },
                { name: "dbt", slug: "dbt" },
                { name: "Terraform", slug: "terraform" },
                { name: "Apache Flink", slug: "apacheflink" },
              ].map((tech) => (
                <Badge
                  key={tech.name}
                  variant="outline"
                  className="text-sm px-4 py-2.5 font-medium border-2 hover-elevate active-elevate-2 flex items-center gap-2"
                  data-testid={`badge-learning-${tech.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    alt={`${tech.name} logo`}
                    className="w-4 h-4"
                    width={16}
                    height={16}
                  />
                  <span>{tech.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
