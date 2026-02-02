import type { Product, Service, Reagent } from "./types";

/** 占位图：无 image 时按 slug 生成稳定图片（picsum.photos） */
export function getProductImageUrl(slug: string): string {
  return `https://picsum.photos/seed/${slug}/600/400`;
}

export function getServiceImageUrl(slug: string): string {
  return `https://picsum.photos/seed/svc-${slug}/600/400`;
}

/** 产品列表（Gene Editing / Gene Delivery 等） */
export const products: Product[] = [
  {
    id: "prod-1",
    name: "CRISPR Gene Editing Kit",
    description: "Proprietary CRISPR-based gene editing solutions for research and therapeutic development.",
    slug: "crispr-gene-editing-kit",
    image: "https://picsum.photos/seed/crispr-gene-editing-kit/600/400",
    showOnHomepageGeneEditing: true,
  },
  {
    id: "prod-2",
    name: "AAV Gene Delivery Vector",
    description: "Adeno-associated virus vectors for safe and efficient gene delivery.",
    slug: "aav-gene-delivery-vector",
    image: "https://picsum.photos/seed/aav-gene-delivery-vector/600/400",
    showOnHomepageGeneEditing: true,
  },
  {
    id: "prod-3",
    name: "Lentiviral Packaging System",
    description: "Stable lentiviral packaging for cell line development and gene expression.",
    slug: "lentiviral-packaging-system",
    image: "https://picsum.photos/seed/lentiviral-packaging-system/600/400",
    showOnHomepageGeneEditing: false,
  },
  {
    id: "prod-4",
    name: "Base Editor Platform",
    description: "Precision base editing without double-strand breaks.",
    slug: "base-editor-platform",
    image: "https://picsum.photos/seed/base-editor-platform/600/400",
    showOnHomepageGeneEditing: true,
  },
  {
    id: "prod-5",
    name: "Prime Editor System",
    description: "Search-and-replace gene editing with minimal off-target effects.",
    slug: "prime-editor-system",
    image: "https://picsum.photos/seed/prime-editor-system/600/400",
    showOnHomepageGeneEditing: true,
  },
  {
    id: "prod-6",
    name: "RNA Delivery Platform",
    description: "Efficient RNA delivery for therapeutic and research applications.",
    slug: "rna-delivery-platform",
    image: "https://picsum.photos/seed/rna-delivery-platform/600/400",
    showOnHomepageGeneEditing: true,
  },
  {
    id: "prod-7",
    name: "Cell Line Engineering Kit",
    description: "Tools for stable cell line generation and screening.",
    slug: "cell-line-engineering-kit",
    image: "https://picsum.photos/seed/cell-line-engineering-kit/600/400",
    showOnHomepageGeneEditing: false,
  },
];

/** 首页 Featured Products（Gene Editing）最多展示数量，避免产品多时首屏过长 */
export const FEATURED_PRODUCTS_LIMIT = 6;

/** 首页 Services 最多展示数量 */
export const FEATURED_SERVICES_LIMIT = 6;

/** 服务列表 */
export const services: Service[] = [
  {
    id: "svc-1",
    name: "Molecular Services",
    description: "Comprehensive DNA and RNA engineering to support research across immunology, oncology, and neuroscience.",
    slug: "molecular-services",
    image: "https://picsum.photos/seed/molecular-services/600/400",
    showOnHomepageService: true,
  },
  {
    id: "svc-2",
    name: "Viral Packaging",
    description: "Custom viral vector design and packaging for gene delivery.",
    slug: "viral-packaging",
    image: "https://picsum.photos/seed/viral-packaging/600/400",
    showOnHomepageService: true,
  },
  {
    id: "svc-3",
    name: "Stable Cell Line Development",
    description: "Stable cell line generation and characterization to accelerate discoveries.",
    slug: "stable-cell-line-development",
    image: "https://picsum.photos/seed/stable-cell-line-development/600/400",
    showOnHomepageService: false,
  },
];

/** 试剂列表（首页暂无 Reagent 专区，showOnHomepageReagent 预留、后台选项置灰） */
export const reagents: Reagent[] = [
  {
    id: "reag-1",
    name: "gRNA Synthesis Reagent",
    description: "High-purity reagents for guide RNA synthesis.",
    slug: "grna-synthesis-reagent",
    showOnHomepageReagent: false,
  },
  {
    id: "reag-2",
    name: "Cas9 Nuclease Buffer",
    description: "Optimized buffer systems for Cas9 nuclease activity.",
    slug: "cas9-nuclease-buffer",
    showOnHomepageReagent: false,
  },
];

/** 仅首页 Gene Editing products 栏目展示的产品 */
export function getProductsForHomepageGeneEditing(): Product[] {
  return products.filter((p) => p.showOnHomepageGeneEditing);
}

/** 仅首页 Services 栏目展示的服务 */
export function getServicesForHomepage(): Service[] {
  return services.filter((s) => s.showOnHomepageService);
}
