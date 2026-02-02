import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { ServicesSection } from "@/components/home/services-section";
import {
  getProductsForHomepageGeneEditing,
  getServicesForHomepage,
} from "@/lib/store";

export default async function Home() {
  const [featuredProducts, featuredServices] = await Promise.all([
    getProductsForHomepageGeneEditing(),
    getServicesForHomepage(),
  ]);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedProducts products={featuredProducts} />
        <ServicesSection services={featuredServices} />
      </main>
      <footer className="border-t bg-muted/30 px-6 py-8 text-center text-sm text-muted-foreground">
        <p>13 Taft, Suite 213 Rockville, MD, 20850</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Bioark Technologies, LLC. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
