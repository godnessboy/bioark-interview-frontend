import { notFound } from "next/navigation";
import { getReagents } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { ReagentEditForm } from "./reagent-edit-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminReagentEditPage({ params }: PageProps) {
  const { id } = await params;
  const reagents = await getReagents();
  const reagent = reagents.find((r) => r.id === id);
  if (!reagent) notFound();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Button asChild variant="outline" size="sm">
          <Link href="/admin/reagents">← Back to Reagents</Link>
        </Button>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          Edit: {reagent.name}
        </h1>
        <ReagentEditForm
          id={reagent.id}
          name={reagent.name}
          showOnHomepageReagent={reagent.showOnHomepageReagent}
        />
      </main>
    </div>
  );
}
