type StrapiResponse<T> = {
  data: T;
  message: string;
};


export interface Data {
  id: number;
  url: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
}

export interface Picture {
  data: Data;
}

export interface Button {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  type: string;
}

export interface ContentSection {
  id: number;
  __component: string;
  title: string;
  description: string;
  picture: Picture;
  buttons: Button[];
}

export interface Data {
  id: number;
  shortName: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  heading?: any;
  description?: any;
  contentSections: ContentSection[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface RootObject {
  data: Data[];
  meta: Meta;
}