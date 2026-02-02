import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/store";
import { getProductImageUrl } from "@/lib/data";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const imageUrl = product.image || getProductImageUrl(product.slug);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="outline" size="sm">
          <Link href="/products">← All products</Link>
        </Button>
        <article className="mt-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
          <h1 className="mt-8 text-2xl font-semibold tracking-tight md:text-3xl">
            {product.name}
          </h1>
          {product.description && (
            <p className="mt-4 text-muted-foreground">{product.description}</p>
          )}
        </article>
      </main>
    </div>
  );
}
