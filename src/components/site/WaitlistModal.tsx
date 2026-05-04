import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type WaitlistSource = "nav" | "hero" | "other";

type Ctx = { open: (source?: WaitlistSource) => void };
const WaitlistCtx = createContext<Ctx | null>(null);

export function useWaitlist() {
  const ctx = useContext(WaitlistCtx);
  if (!ctx) throw new Error("useWaitlist must be used within WaitlistProvider");
  return ctx;
}

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<WaitlistSource>("other");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const open = useCallback((src: WaitlistSource = "other") => {
    setSource(src);
    setEmail("");
    setStatus("idle");
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      // reset shortly after close
      const t = setTimeout(() => setStatus("idle"), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) && trimmed.length <= 255;
    if (!valid) {
      setStatus("error");
      return;
    }
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: trimmed, source });
    if (error) {
      console.error("waitlist insert failed", error);
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <WaitlistCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="w-[440px] max-w-[calc(100vw-2rem)] gap-0 rounded-2xl border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] sm:rounded-2xl"
          style={{ boxShadow: "0 30px 80px -20px color-mix(in oklab, var(--foreground) 25%, transparent)" }}
        >
          {status === "success" ? (
            <div className="text-center">
              <h2 className="font-serif text-2xl font-extrabold tracking-tight text-foreground">
                You're on the list.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We'll email you when your invite is ready.
              </p>
              <Button
                variant="hero"
                className="mt-6 w-full"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <h2 className="font-serif text-2xl font-extrabold tracking-tight text-foreground">
                Invite-only while we scale the cache.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Aicorn is in private preview. Drop your email and we'll send your invite when the next cohort opens.
              </p>
              <div className="mt-6">
                <Input
                  type="email"
                  required
                  autoFocus
                  placeholder="you@yourdomain.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  maxLength={255}
                  className="h-11"
                  aria-invalid={status === "error"}
                />
                {status === "error" && (
                  <p className="mt-2 text-xs text-destructive">
                    Something went wrong. Try again or email hi@aicorn.app.
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="hero"
                className="mt-6 w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Requesting…" : "Request access"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </WaitlistCtx.Provider>
  );
}