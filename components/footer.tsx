import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <Container className="flex flex-col items-center gap-6 py-14 text-center">
        <p className="font-display text-xl text-ink">Let's build something.</p>
        <p className="max-w-md text-sm text-muted">
          Open to research collaboration, TA roles, and conversations about
          Edge AI and hardware-aware ML.
        </p>
        <div className="flex items-center gap-4">
          <SocialLink href="mailto:hello@tanishksingh.com" label="Email">
            <Mail size={18} />
          </SocialLink>
          <SocialLink href="https://github.com" label="GitHub">
            <Github size={18} />
          </SocialLink>
          <SocialLink href="https://linkedin.com" label="LinkedIn">
            <Linkedin size={18} />
          </SocialLink>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Tanishk Singh · Tucson, AZ
        </p>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </Link>
  );
}
