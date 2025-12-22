"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10 text-destructive animate-in fade-in zoom-in duration-500">
        <AlertTriangle size={48} />
      </div>

      <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
        Something went wrong!
      </h1>

      <p className="mb-8 max-w-md text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
        We apologize for the inconvenience. An unexpected error has occurred.
        Our team has been notified and is working to fix it.
      </p>

      {error.digest && (
        <div className="mb-8 rounded-lg bg-muted/50 border border-border p-3 font-mono text-xs text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-450">
          Error ID: {error.digest}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
        <Button onClick={() => reset()} size="lg" className="gap-2">
          <RefreshCcw size={18} />
          Try again
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/" className="flex items-center gap-2">
            <Home size={18} />
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
