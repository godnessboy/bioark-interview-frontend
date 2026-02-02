import Link from "next/link";
import { getReagents } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default async function AdminReagentsPage() {
  const reagents = await getReagents();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">
            Admin · Reagents
          </h1>
          <Button asChild variant="outline" size="sm">
            <Link href="/admin">Back to Admin</Link>
          </Button>
        </div>
        <p className="mt-2 text-muted-foreground">
          Reagent management. The &quot;Show on homepage&quot; option is
          disabled because there is no Reagent section on the homepage yet.
        </p>
        <ul className="mt-8 space-y-3">
          {reagents.map((reagent) => (
            <li
              key={reagent.id}
              className="flex items-center justify-between rounded-lg border bg-card px-4 py-3"
            >
              <span className="font-medium">{reagent.name}</span>
              <Button asChild size="sm">
                <Link href={`/admin/reagents/${reagent.id}/edit`}>Edit</Link>
              </Button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
