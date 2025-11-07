import { GraduationCap, Target, Sparkles, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <Code2 className="w-8 h-8 text-primary" />
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6" data-testid="text-about-title">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="relative">
              <div className="h-1.5 w-48 bg-primary/20 rounded-full mx-auto">
                <div className="h-full w-3/4 bg-primary rounded-full transition-all duration-700 ease-out" />
              </div>
              <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8" viewBox="0 0 100 30">
                <path d="M 10 20 Q 50 5, 90 20" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/40" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed pl-4" data-testid="text-about-intro">
                Hi! I'm a passionate <span className="font-semibold text-primary">Data Engineer</span> with a
                strong foundation in building scalable data pipelines and transforming raw data into
                meaningful insights. I thrive on solving complex data challenges and creating efficient
                ETL processes that power data-driven decisions.
              </p>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
              My journey in data engineering began with a fascination for how data powers decision-making.
              I love working with cutting-edge technologies to build robust data infrastructure that
              enables businesses to unlock the full potential of their data assets.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium">Fast Learner</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-chart-3/10 rounded-full">
                <div className="w-2 h-2 bg-chart-3 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Team Player</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <Card className="relative p-8 hover-elevate transition-all duration-300 border-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary to-primary/70 rounded-xl shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading" data-testid="text-education-title">Education</h3>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-foreground" data-testid="text-degree">
                  Bachelor of Engineering
                </p>
                <p className="text-base text-muted-foreground" data-testid="text-major">
                  Computer Engineering
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span data-testid="text-university">K.J. Institute of Engineering & Technology • 2022 - 2025</span>
                </div>
                <div className="pt-3 flex items-center gap-2">
                  <div className="text-sm font-medium text-primary">CGPA: 7.5/10</div>
                </div>
              </div>
            </Card>
            
            <Card className="relative p-8 hover-elevate transition-all duration-300 border-2 mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-gradient-to-br from-accent to-accent/70 rounded-xl shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading" data-testid="text-experience-title">Experience</h3>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-foreground" data-testid="text-role">
                  Data Analyst
                </p>
                <p className="text-base text-muted-foreground" data-testid="text-company">
                  <strong>Unlock Technologies Private Limited • July 2025 - Present</strong> 
                </p>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  
                  <div className="flex-1" data-testid="text-summary">
                    <ul className="list-none pl-0 space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-1 flex-shrink-0" />
                        <div>
                          <strong>MSSQL:</strong> Developed optimized SQL queries and managed large-scale financial databases, enhancing data accessibility and reporting efficiency.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-1 flex-shrink-0" />
                        <div>
                          <strong>Qlik Sense:</strong> Designed interactive financial dashboards in Qlik Sense, delivering actionable insights for business decision-making.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-1 flex-shrink-0" />
                        <div>
                          <strong>Grafana:</strong> Built real-time Grafana dashboards to monitor financial KPIs and system performance for data-driven operations.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-3 flex items-center gap-2">
                  <div className="text-sm font-medium text-accent">Key: SQL, Grafana, Python, Data Modelling</div>
                </div>
              </div>
            </Card>
          </div>
        </div>


        {/* ---- */}
        


        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 hover-elevate transition-all duration-300 bg-gradient-to-br from-card to-primary/5 border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-xl shrink-0">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 font-heading" data-testid="text-objective-title">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-objective-description">
                  To leverage my technical skills in data engineering to build innovative, scalable solutions that
                  drive measurable business value, while continuously learning and growing in a collaborative,
                  fast-paced environment.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300 bg-gradient-to-br from-card to-accent/5 border-l-4 border-l-accent">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-accent/10 rounded-xl shrink-0">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 font-heading" data-testid="text-passion-title">What Drives Me</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-passion-description">
                  I'm passionate about turning complex data challenges into elegant, efficient solutions. The thrill
                  of optimizing pipelines, uncovering insights, and seeing data flow seamlessly keeps me motivated every single day.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
