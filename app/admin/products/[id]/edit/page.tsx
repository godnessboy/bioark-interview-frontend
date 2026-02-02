import { notFound } from "next/navigation";
import { getProducts } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { ProductEditForm } from "./product-edit-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminProductEditPage({ params }: PageProps) {
  const { id } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Button asChild variant="outline" size="sm">
          <Link href="/admin/products">← Back to Products</Link>
        </Button>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          Edit: {product.name}
        </h1>
        <ProductEditForm
          id={product.id}
          name={product.name}
          showOnHomepageGeneEditing={product.showOnHomepageGeneEditing}
        />
      </main>
    </div>
  );
}
