import Link from "next/link";
import { getProducts } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/product-card";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          All Products
        </h1>
        <p className="mt-2 text-muted-foreground">
          Gene editing and gene delivery products for research and therapeutic
          development.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
