import { Link } from "@tanstack/react-router";
import logoSpark from "@/assets/logo-spark.svg";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="Aicorn home">
          <img src={logoSpark} alt="Aicorn" className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#economics" className="hover:text-foreground transition-colors">Economics</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
          <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
          <a href="#try" className="hover:text-foreground transition-colors">Try now</a>
        </nav>
        <a href="#try">
          <Button variant="kernel" size="sm">Try free</Button>
        </a>
      </div>
    </header>
  );
}