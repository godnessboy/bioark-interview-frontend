import { notFound } from "next/navigation";
import { getServices } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { ServiceEditForm } from "./service-edit-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminServiceEditPage({ params }: PageProps) {
  const { id } = await params;
  const services = await getServices();
  const service = services.find((s) => s.id === id);
  if (!service) notFound();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Button asChild variant="outline" size="sm">
          <Link href="/admin/services">← Back to Services</Link>
        </Button>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          Edit: {service.name}
        </h1>
        <ServiceEditForm
          id={service.id}
          name={service.name}
          showOnHomepageService={service.showOnHomepageService}
        />
      </main>
    </div>
  );
}
