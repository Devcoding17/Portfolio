import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6 md:py-8">
      <div className="footer-content max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dev Parmar All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
