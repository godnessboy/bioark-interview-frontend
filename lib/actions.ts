"use server";

import { revalidatePath } from "next/cache";
import { updateProduct, updateService, updateReagent } from "./store";

export async function updateProductAction(
  id: string,
  showOnHomepageGeneEditing: boolean
) {
  await updateProduct(id, { showOnHomepageGeneEditing });
  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/admin/products");
}

export async function updateServiceAction(
  id: string,
  showOnHomepageService: boolean
) {
  await updateService(id, { showOnHomepageService });
  revalidatePath("/");
  revalidatePath("/services");
  revalidatePath("/admin/services");
}

export async function updateReagentAction(
  id: string,
  _showOnHomepageReagent: boolean
) {
  // Reagent 首页选项当前不可用，仅预留；实际不更新
  await updateReagent(id, {});
  revalidatePath("/admin/reagents");
}
