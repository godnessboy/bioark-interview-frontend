import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/store";
import { getServiceImageUrl } from "@/lib/data";
import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          All Services
        </h1>
        <p className="mt-2 text-muted-foreground">
          Comprehensive molecular services, viral packaging, and stable cell line
          development.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
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
      </main>
    </div>
  );
}
