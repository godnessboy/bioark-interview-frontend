import Link from "next/link";
import { getServices } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">
            Admin · Services
          </h1>
          <Button asChild variant="outline" size="sm">
            <Link href="/admin">Back to Admin</Link>
          </Button>
        </div>
        <p className="mt-2 text-muted-foreground">
          Edit whether each service appears in the homepage &quot;Services&quot;
          section.
        </p>
        <ul className="mt-8 space-y-3">
          {services.map((service) => (
            <li
              key={service.id}
              className="flex items-center justify-between rounded-lg border bg-card px-4 py-3"
            >
              <div>
                <span className="font-medium">{service.name}</span>
                {service.showOnHomepageService && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    (on homepage)
                  </span>
                )}
              </div>
              <Button asChild size="sm">
                <Link href={`/admin/services/${service.id}/edit`}>Edit</Link>
              </Button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
