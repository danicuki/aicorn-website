import { Link } from "@tanstack/react-router";
import acorn from "@/assets/acorn.png";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={acorn} alt="Aicorn logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight">Aicorn</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#economics" className="hover:text-foreground transition-colors">Economics</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
          <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
        </nav>
        <a href="https://github.com/danicuki/aicorn" target="_blank" rel="noreferrer">
          <Button variant="kernel" size="sm">View on GitHub</Button>
        </a>
      </div>
    </header>
  );
}