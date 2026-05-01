import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-network.jpg";
import mascot from "@/assets/aicorn-mascot.png";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aicorn — Crack the page once. Share the kernel." },
      {
        name: "description",
        content:
          "A shared, credit-metered cache for agent-friendly web content. One agent extracts, the rest of the forest harvests.",
      },
      { property: "og:title", content: "Aicorn — Shared cache for AI agents" },
      {
        property: "og:description",
        content:
          "Stop re-extracting the same web pages. Aicorn is the squirrel-network: crack a page once, every other agent reads the kernel.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Economics />
        <Demo />
        <Architecture />
        <TryNow />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Mascot peeking from the right edge — decorative, subtle */}
      <img
        src={mascot}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-20 hidden w-32 rotate-6 opacity-90 drop-shadow-[0_20px_40px_rgba(255,170,80,0.35)] animate-float lg:block lg:w-40 xl:w-48"
      />
      <div className="container mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Live · Shared cache for AI agents
          </div>
          <h1 className="text-balance text-5xl font-bold tracking-tight md:text-7xl">
            Crack the page once.{" "}
            <span className="text-kernel-gradient">Share the kernel.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Aicorn is a shared, credit-metered cache for agent-friendly web content.
            One agent extracts. The rest of the forest harvests. Contributors earn credits when others read what they cracked.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#try">
              <Button variant="hero" size="xl">Try Aicorn free</Button>
            </a>
            <a href="#demo">
              <Button variant="kernel" size="xl">See the 20× demo</Button>
            </a>
          </div>
        </div>

        {/* Mascot for small screens, centered below copy */}
        <div className="mt-16 flex justify-center lg:hidden">
          <img
            src={mascot}
            alt="Aicorn mascot"
            className="h-40 w-auto animate-float drop-shadow-[0_30px_60px_rgba(255,170,80,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "20×", label: "Cheaper per cached read" },
    { value: "400", label: "Tokens on a cache HIT" },
    { value: "8,000", label: "Tokens on a cold MISS" },
    { value: "5,000", label: "Free credits at signup" },
  ];
  return (
    <section className="border-y border-border/40 bg-card/40">
      <div className="container mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-bold text-kernel-gradient md:text-5xl">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Agent requests a URL",
      body: "Any agent — Claude, GPT, Perplexity, your own — points its fetch at the Aicorn proxy.",
    },
    {
      n: "02",
      title: "First fetch cracks the shell",
      body: "Cache miss. Workers AI cleans the page into agent-ready markdown. The fetcher pays extraction + 10 credits and becomes the URL's contributor.",
    },
    {
      n: "03",
      title: "Every other agent harvests",
      body: "Cache hit. Reader pays 10 credits. The original contributor earns 9. Network pockets 1 credit of margin. Forever sybil-proof.",
    },
  ];
  return (
    <section id="how" className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          The forest beats the lone tree.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Every AI agent re-extracts the same HTML from the same websites and burns the same tokens cleaning it up. Aicorn is the squirrel-network that ends the duplication.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-kernel)]"
          >
            <div className="font-mono text-sm text-primary/60">{s.n}</div>
            <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Economics() {
  const rules = [
    ["Reading any cached page", "costs 10 credits"],
    ["First fetcher of a URL", "pays extraction + 10, becomes contributor"],
    ["Each subsequent read", "earns the contributor 9 credits"],
    ["New users", "get a 100-credit signup grant"],
    ["Sybil math", "self-dealing always loses 1 credit per round"],
  ];
  return (
    <section id="economics" className="bg-card/30 border-y border-border/40">
      <div className="container mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-primary">The credit ledger</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Contribution = future consumption rights.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Same shape as BitTorrent ratios and Filecoin storage proofs — but for agent-readable web content. Anyone who pays to extract a page is buying future free reads for themselves and the network.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-background/60 p-2 shadow-[var(--shadow-soft)]">
          <div className="rounded-xl bg-card p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-primary/70" />
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              <span className="ml-2">ledger.rules</span>
            </div>
            <ul className="space-y-3 font-mono text-sm">
              {rules.map(([k, v]) => (
                <li key={k} className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-primary">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">The visceral moment</div>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Two agents. Same URL. Ten seconds apart.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <DemoCard
          tag="Agent A"
          status="MISS"
          statusColor="text-destructive"
          tokens="8,000"
          cost="$0.02"
          note="Cracks the shell. Becomes contributor."
          variant="cold"
        />
        <DemoCard
          tag="Agent B"
          status="HIT"
          statusColor="text-accent"
          tokens="400"
          cost="$0.00"
          note="Pays 10 credits. Agent A earns 9."
          variant="warm"
        />
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">
          Same content. Same agent quality.{" "}
          <span className="font-semibold text-foreground">20× cheaper.</span>
        </p>
      </div>
    </section>
  );
}

function DemoCard({
  tag,
  status,
  statusColor,
  tokens,
  cost,
  note,
  variant,
}: {
  tag: string;
  status: string;
  statusColor: string;
  tokens: string;
  cost: string;
  note: string;
  variant: "cold" | "warm";
}) {
  return (
    <div
      className={`group rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
        variant === "warm"
          ? "border-primary/40 bg-[image:var(--gradient-kernel)]/10 shadow-[var(--shadow-kernel)]"
          : "border-border bg-card"
      }`}
      style={
        variant === "warm"
          ? { backgroundImage: "linear-gradient(135deg, oklch(0.78 0.17 65 / 0.12), oklch(0.55 0.13 150 / 0.08))" }
          : undefined
      }
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground">{tag}</span>
        <span className={`rounded-full border border-current/30 px-3 py-1 font-mono text-xs font-semibold ${statusColor}`}>
          X-Cache: {status}
        </span>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Tokens</div>
          <div className="mt-1 text-4xl font-bold">{tokens}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Cost</div>
          <div className="mt-1 text-4xl font-bold">{cost}</div>
        </div>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">{note}</p>
    </div>
  );
}

function Architecture() {
  const items = [
    { title: "Cloudflare Workers", body: "Proxy, ledger routes, dashboard — one TypeScript project, one deploy." },
    { title: "Workers AI", body: "Llama-class extraction model turns raw HTML into clean markdown at the edge." },
    { title: "KV", body: "Cache index, extracted bodies, ledger balances, live stats counters." },
    { title: "No external services", body: "No databases to provision. No queues. Cloudflare end-to-end." },
  ];
  return (
    <section id="architecture" className="bg-card/30 border-y border-border/40">
      <div className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">All Cloudflare</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            One Worker. One deploy. The whole network.
          </h2>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-background/60 shadow-[var(--shadow-soft)]">
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
{`Agent request
   ↓
Cloudflare Worker  (header detection, routing, ledger)
   ↓
KV cache lookup: is this URL extracted?
   ├── HIT  → KV read markdown
   │         → charge reader 10 credits
   │         → credit contributor 9 credits
   │         → return markdown  [X-Cache: HIT]
   │
   └── MISS → fetch origin HTML
              → Workers AI extraction
              → write to KV
              → charge fetcher (extraction_cost + 10)
              → register fetcher as contributor
              → return markdown  [X-Cache: MISS]`}
          </pre>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/30 p-10 text-center md:p-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-kernel)" }}
        />
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Stop paying to clean the same page <span className="text-kernel-gradient">twice.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Create a free account, drop SKILL.md into your agent, and start saving tokens on your very next request.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#try">
            <Button variant="hero" size="xl">Get 5,000 free credits</Button>
          </a>
          <a href="https://github.com/danicuki/aicorn" target="_blank" rel="noreferrer">
            <Button variant="kernel" size="xl">View on GitHub</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function TryNow() {
  const steps = [
    {
      n: "01",
      title: "Create your account",
      body: "Sign up in under a minute and instantly receive 5,000 free credits — enough to harvest thousands of cached pages.",
      cta: { label: "Create free account", href: "https://github.com/danicuki/aicorn" },
    },
    {
      n: "02",
      title: "Install SKILL.md on your agent",
      body: "Drop our SKILL.md into Claude, Cursor, your custom agent, or any tool-using LLM. It teaches your agent to read the web through Aicorn.",
      cta: { label: "Get SKILL.md", href: "https://github.com/danicuki/aicorn/blob/main/SKILL.md" },
    },
    {
      n: "03",
      title: "Start using and saving tokens",
      body: "Every cached page costs a fraction of a fresh extraction. Watch your token bill drop from the first request — and earn credits when others read what you cracked.",
      cta: { label: "See the economics", href: "#economics" },
    },
  ];
  return (
    <section id="try" className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-primary">Try it now</div>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Three steps to a cheaper agent.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          No infrastructure to set up. No model to host. Just sign up, install, and ship.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-kernel)]"
          >
            <div className="font-mono text-sm text-primary/60">{s.n}</div>
            <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <a
              href={s.cta.href}
              target={s.cta.href.startsWith("http") ? "_blank" : undefined}
              rel={s.cta.href.startsWith("http") ? "noreferrer" : undefined}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
            >
              {s.cta.label} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
