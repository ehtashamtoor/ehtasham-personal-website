import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-body)]">
      <div className="text-center px-4">
        <h1 className="text-8xl font-extrabold gradient-text">404</h1>
        <p className="mt-4 text-xl text-[var(--text-secondary)]">
          Page not found
        </p>
        <p className="mt-2 text-[var(--text-muted)]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
