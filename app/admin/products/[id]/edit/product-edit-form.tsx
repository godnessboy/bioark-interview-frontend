"use client";

import { useTransition } from "react";
import { updateProductAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ProductEditFormProps {
  id: string;
  name: string;
  showOnHomepageGeneEditing: boolean;
}

export function ProductEditForm({
  id,
  name,
  showOnHomepageGeneEditing: initial,
}: ProductEditFormProps) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    const checked = formData.get("showOnHomepageGeneEditing") === "on";
    startTransition(() => updateProductAction(id, checked));
  }

  return (
    <form action={handleSubmit} className="mt-6 space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-start gap-3 space-y-0">
          <Checkbox
            id="showOnHomepageGeneEditing"
            name="showOnHomepageGeneEditing"
            defaultChecked={initial}
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="showOnHomepageGeneEditing"
              className="cursor-pointer font-medium"
            >
              Show on homepage · Gene Editing products
            </Label>
            <p className="text-sm text-muted-foreground">
              When enabled, this product appears in the &quot;Gene Editing
              products&quot; section on the homepage.
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
