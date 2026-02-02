import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-semibold tracking-tight">Admin</h1>
        <p className="mt-2 text-muted-foreground">
          Manage homepage visibility for products, services, and reagents.
        </p>
        <nav className="mt-8 flex flex-col gap-4">
          <Button asChild variant="outline" size="lg" className="justify-start">
            <Link href="/admin/products">Products</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="justify-start">
            <Link href="/admin/services">Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="justify-start">
            <Link href="/admin/reagents">Reagents</Link>
          </Button>
        </nav>
      </main>
    </div>
  );
}
