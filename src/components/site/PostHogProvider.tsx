import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import posthog from "posthog-js";

const POSTHOG_KEY = "phc_r6x6kGxn3NHvPLdgwiPSAfQHRLHtP79EYePRKKsLjWWr";
const POSTHOG_HOST = "https://us.i.posthog.com";

let initialized = false;

export function PostHogTracker() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!initialized) {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        capture_pageview: false,
        capture_pageleave: true,
        person_profiles: "identified_only",
      });
      initialized = true;
      posthog.capture("$pageview");
    }

    const unsub = router.subscribe("onResolved", () => {
      posthog.capture("$pageview");
    });
    return () => {
      unsub();
    };
  }, [router]);

  return null;
}