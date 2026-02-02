import Link from "next/link";
import type { Product } from "@/lib/types";
import { FEATURED_PRODUCTS_LIMIT } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const allFeatured = products;
  const displayed = allFeatured.slice(0, FEATURED_PRODUCTS_LIMIT);
  const hasMore = allFeatured.length > FEATURED_PRODUCTS_LIMIT;

  return (
    <section id="featured-products" className="border-b bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Gene Editing Products
            </h2>
            <p className="mt-1 text-muted-foreground">
              Featured products for gene editing and delivery research
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/products">View all products</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/products">
                View all {allFeatured.length} products
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
