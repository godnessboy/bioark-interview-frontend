import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/store";
import { getServiceImageUrl } from "@/lib/data";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const imageUrl = service.image || getServiceImageUrl(service.slug);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="outline" size="sm">
          <Link href="/services">← All services</Link>
        </Button>
        <article className="mt-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src={imageUrl}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
          <h1 className="mt-8 text-2xl font-semibold tracking-tight md:text-3xl">
            {service.name}
          </h1>
          {service.description && (
            <p className="mt-4 text-muted-foreground">{service.description}</p>
          )}
        </article>
      </main>
    </div>
  );
}
