import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = { title: "Contact" };

const CHANNELS = [
  {
    href: "mailto:hello@tanishksingh.com",
    label: "Email",
    value: "hello@tanishksingh.com",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/tanishksingh/",
    label: "LinkedIn",
    value: "linkedin.com/in/tanishksingh",
    icon: Linkedin,
  },
  {
    href: "https://github.com/Tanishk-Singh",
    label: "GitHub",
    value: "github.com/Tanishk-Singh",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <section className="py-24">
      <Container className="flex max-w-xl flex-col gap-8 text-center">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Contact
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h1 className="font-display text-4xl font-medium text-ink md:text-5xl">
            Let's talk.
          </h1>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="text-muted">
            Open to research collaboration, TA roles, and conversations
            about Edge AI and hardware-aware ML. Reach out through whichever
            channel is easiest.
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <div className="flex flex-col gap-3">
            {CHANNELS.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                className="group flex items-center justify-between rounded-2xl border border-hairline bg-surface px-5 py-4 text-left transition-colors hover:border-accent"
              >
                <span className="flex items-center gap-3">
                  <channel.icon size={18} className="text-accent" />
                  <span>
                    <span className="block text-sm font-medium text-ink">
                      {channel.label}
                    </span>
                    <span className="block text-sm text-muted">
                      {channel.value}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
