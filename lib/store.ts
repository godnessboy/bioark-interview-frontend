import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { Product, Service, Reagent } from "./types";
import {
  products as defaultProducts,
  services as defaultServices,
  reagents as defaultReagents,
} from "./data";

export interface Store {
  products: Product[];
  services: Service[];
  reagents: Reagent[];
}

const STORE_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(STORE_DIR, "store.json");

async function ensureStoreDir(): Promise<void> {
  try {
    await mkdir(STORE_DIR, { recursive: true });
  } catch {
    // ignore
  }
}

/** 从文件读取 store；不存在则返回默认数据并写入文件 */
export async function readStore(): Promise<Store> {
  try {
    await ensureStoreDir();
    const raw = await readFile(STORE_FILE, "utf-8");
    const data = JSON.parse(raw) as Store;
    return {
      products: data.products ?? defaultProducts,
      services: data.services ?? defaultServices,
      reagents: data.reagents ?? defaultReagents,
    };
  } catch {
    const store: Store = {
      products: defaultProducts,
      services: defaultServices,
      reagents: defaultReagents,
    };
    await writeStore(store);
    return store;
  }
}

export async function writeStore(store: Store): Promise<void> {
  await ensureStoreDir();
  await writeFile(STORE_FILE, JSON.stringify(store, null, 2), "utf-8");
}

export async function getProducts(): Promise<Product[]> {
  const store = await readStore();
  return store.products;
}

export async function getServices(): Promise<Service[]> {
  const store = await readStore();
  return store.services;
}

export async function getReagents(): Promise<Reagent[]> {
  const store = await readStore();
  return store.reagents;
}

export async function getProductsForHomepageGeneEditing(): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((p) => p.showOnHomepageGeneEditing);
}

export async function getServicesForHomepage(): Promise<Service[]> {
  const services = await getServices();
  return services.filter((s) => s.showOnHomepageService);
}

export async function updateProduct(
  id: string,
  patch: Partial<Pick<Product, "showOnHomepageGeneEditing">>
): Promise<void> {
  const store = await readStore();
  const index = store.products.findIndex((p) => p.id === id);
  if (index === -1) return;
  store.products[index] = { ...store.products[index], ...patch };
  await writeStore(store);
}

export async function updateService(
  id: string,
  patch: Partial<Pick<Service, "showOnHomepageService">>
): Promise<void> {
  const store = await readStore();
  const index = store.services.findIndex((s) => s.id === id);
  if (index === -1) return;
  store.services[index] = { ...store.services[index], ...patch };
  await writeStore(store);
}

export async function updateReagent(
  id: string,
  patch: Partial<Pick<Reagent, "showOnHomepageReagent">>
): Promise<void> {
  const store = await readStore();
  const index = store.reagents.findIndex((r) => r.id === id);
  if (index === -1) return;
  store.reagents[index] = { ...store.reagents[index], ...patch };
  await writeStore(store);
}
