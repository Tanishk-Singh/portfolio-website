import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="flex flex-col items-center gap-4 text-center">
        <p className="font-display text-6xl text-accent">404</p>
        <h1 className="font-display text-2xl font-medium text-ink">
          Nothing here.
        </h1>
        <p className="text-muted">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg"
        >
          Back home
        </Link>
      </Container>
    </section>
  );
}
