import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@assets/hero-bg_1762239108990_1762248739425.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="video-hero-background"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/40" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="inline-block mb-6">
          <div className="px-6 py-2 bg-cyan-400/20 border border-cyan-400/40 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-cyan-300">Welcome to my portfolio</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-tight text-white drop-shadow-lg" data-testid="text-hero-title">
          Building Scalable
          <br />
          <span className="text-cyan-300">Data Solutions</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md" data-testid="text-hero-subtitle">
          Transforming raw data into actionable insights through innovative engineering and cutting-edge technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="h-14 px-8 text-lg hover-elevate"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-view-projects"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg hover-elevate"
            onClick={() => console.log('Download resume')}
            data-testid="button-download-resume"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "1 M+", label: "Data Processed" },
            { value: "99%", label: "Uptime Achieved" },
          ].map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 drop-shadow-lg mb-2">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
