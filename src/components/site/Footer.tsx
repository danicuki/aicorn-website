import acorn from "@/assets/acorn.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/60">
      <div className="container mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <img src={acorn} alt="" width={28} height={28} className="h-7 w-7" />
            <div>
              <div className="font-semibold">Aicorn</div>
              <div className="text-xs text-muted-foreground">Crack the page once. Share the kernel.</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#try" className="hover:text-foreground">Try now</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="https://github.com/danicuki/aicorn" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <span>© {new Date().getFullYear()} Aicorn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}