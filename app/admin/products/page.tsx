import Link from "next/link";
import { getProducts } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">
            Admin · Products
          </h1>
          <Button asChild variant="outline" size="sm">
            <Link href="/admin">Back to Admin</Link>
          </Button>
        </div>
        <p className="mt-2 text-muted-foreground">
          Edit whether each product appears in the homepage &quot;Gene Editing
          products&quot; section.
        </p>
        <ul className="mt-8 space-y-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between rounded-lg border bg-card px-4 py-3"
            >
              <div>
                <span className="font-medium">{product.name}</span>
                {product.showOnHomepageGeneEditing && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    (on homepage)
                  </span>
                )}
              </div>
              <Button asChild size="sm">
                <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
              </Button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
