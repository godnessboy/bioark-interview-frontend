"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ReagentEditFormProps {
  id: string;
  name: string;
  showOnHomepageReagent: boolean;
}

export function ReagentEditForm({
  showOnHomepageReagent: initial,
}: ReagentEditFormProps) {
  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-lg border bg-muted/50 p-4 opacity-90">
        <div className="flex items-start gap-3 space-y-0">
          <Checkbox
            id="showOnHomepageReagent"
            name="showOnHomepageReagent"
            defaultChecked={initial}
            disabled
            aria-describedby="reagent-homepage-hint"
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="showOnHomepageReagent"
              className="cursor-not-allowed font-medium text-muted-foreground"
            >
              Show on homepage · Reagent section
            </Label>
            <p
              id="reagent-homepage-hint"
              className="text-sm text-muted-foreground"
            >
              There is no Reagent section on the homepage at the moment. This
              option is disabled until a Reagent block is added to the
              homepage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
