"use client";

import { useTransition } from "react";
import { updateServiceAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ServiceEditFormProps {
  id: string;
  name: string;
  showOnHomepageService: boolean;
}

export function ServiceEditForm({
  id,
  name,
  showOnHomepageService: initial,
}: ServiceEditFormProps) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    const checked = formData.get("showOnHomepageService") === "on";
    startTransition(() => updateServiceAction(id, checked));
  }

  return (
    <form action={handleSubmit} className="mt-6 space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-start gap-3 space-y-0">
          <Checkbox
            id="showOnHomepageService"
            name="showOnHomepageService"
            defaultChecked={initial}
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="showOnHomepageService"
              className="cursor-pointer font-medium"
            >
              Show on homepage · Services
            </Label>
            <p className="text-sm text-muted-foreground">
              When enabled, this service appears in the &quot;Services&quot;
              section on the homepage.
            </p>
          </div>
        </div>
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Saving…" : "Save"}
      </Button>
    </form>
  );
}
