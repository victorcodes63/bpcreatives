import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ServiceNotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-bp-cream px-6 pt-28 text-center">
      <h1 className="font-serif text-3xl text-bp-green">Service not found</h1>
      <p className="mt-4 max-w-md text-sm text-bp-green/70">
        The service you are looking for may have moved or does not exist.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button href="/services" variant="primary">
          View All Services
        </Button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-bp-green transition-colors hover:text-bp-gold"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
