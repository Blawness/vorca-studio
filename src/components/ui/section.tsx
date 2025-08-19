import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  noBg?: boolean;
};

function Section({ className, noBg, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(
        noBg ? "" : "bg-background",
        "text-foreground px-4 py-12 sm:py-24 md:py-32",
        className,
      )}
      {...props}
    />
  );
}

export { Section };
