/**
 * 数据类型定义 - BioArk 产品 / 服务 / 试剂
 * 用于首页栏目展示与后台「是否出现在首页」选项
 */

/** 产品（Gene Editing products 等） */
export interface Product {
  id: string;
  name: string;
  description?: string;
  slug: string;
  image?: string;
  /** 是否在首页「Gene Editing products」栏目中展示 */
  showOnHomepageGeneEditing: boolean;
}

/** 服务 */
export interface Service {
  id: string;
  name: string;
  description?: string;
  slug: string;
  image?: string;
  /** 是否在首页「Services」栏目中展示 */
  showOnHomepageService: boolean;
}

/** 试剂（目前首页无 Reagent 专区，对应选项在 UI 中置灰） */
export interface Reagent {
  id: string;
  name: string;
  description?: string;
  slug: string;
  image?: string;
  /**
   * 是否在首页 Reagent 栏目展示。
   * 当前首页无 Reagent 专区，该字段预留；后台表单中此选项置灰不可选。
   */
  showOnHomepageReagent: boolean;
}
