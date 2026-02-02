import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/types";
import { FEATURED_SERVICES_LIMIT, getServiceImageUrl } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const allFeatured = services;
  const displayed = allFeatured.slice(0, FEATURED_SERVICES_LIMIT);
  const hasMore = allFeatured.length > FEATURED_SERVICES_LIMIT;

  return (
    <section id="services" className="border-b bg-muted/30 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Services
            </h2>
            <p className="mt-1 text-muted-foreground">
              Comprehensive molecular services and development support
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/services">View all services</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((service) => {
            const imageUrl = service.image || getServiceImageUrl(service.slug);
            return (
              <Card
                key={service.id}
                className="flex flex-col transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted">
                  <Image
                    src={imageUrl}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{service.name}</CardTitle>
                  {service.description && (
                    <CardDescription className="line-clamp-3">
                      {service.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/services/${service.slug}`}>Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/services">
                View all {allFeatured.length} services
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
