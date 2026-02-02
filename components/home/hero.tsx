import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-muted/40 to-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Research and Development
          <br />
          <span className="text-primary">Gene Editing and Gene Delivery</span>
          <br />
          Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          BioArk Technologies is a biotechnology and biopharmaceutical CRO
          specializing in gene editing and delivery. Using proprietary
          platforms, our team engineers DNA and RNA to support research across
          therapeutic areas such as immunology, oncology, and neuroscience.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/products">View Products</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
