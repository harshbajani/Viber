"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorStateProps {
  error?: Error;
  resetErrorBoundary?: () => void;
  variant?: "full" | "compact";
  className?: string;
}

export const ErrorState = ({
  error,
  resetErrorBoundary,
  variant = "full",
  className,
}: ErrorStateProps) => {
  const handleReset = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center p-6 text-center bg-muted/30 rounded-lg border border-dashed border-border m-4",
          className
        )}
      >
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle size={20} />
        </div>
        <h3 className="mb-1 text-sm font-semibold text-foreground">
          Component failed to load
        </h3>
        <p className="mb-4 text-xs text-muted-foreground max-w-[200px]">
          {error?.message || "An unexpected error occurred."}
        </p>
        <Button
          onClick={handleReset}
          size="sm"
          variant="outline"
          className="h-8 gap-1.5 text-xs"
        >
          <RefreshCcw size={14} />
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex min-h-[400px] flex-col items-center justify-center p-8 text-center bg-background",
        className
      )}
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive animate-in fade-in zoom-in duration-500">
        <AlertTriangle size={40} />
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
        Something went wrong
      </h2>
      <p className="mb-8 max-w-md text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
        {error?.message ||
          "An unexpected error occurred while loading this section."}
      </p>
      <Button
        onClick={handleReset}
        size="lg"
        className="gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500"
      >
        <RefreshCcw size={18} />
        Try again
      </Button>
    </div>
  );
};
