import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { getProductImageUrl } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.image || getProductImageUrl(product.slug);

  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{product.name}</CardTitle>
        {product.description && (
          <CardDescription className="line-clamp-3">
            {product.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/products/${product.slug}`}>Learn more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
