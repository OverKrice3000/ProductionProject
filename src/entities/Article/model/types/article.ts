import type { User } from "@/entities/User";

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export enum ArticleView {
  LIST = `list`,
  PLATE = `plate`
}

interface ArticleBlockBaseData {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlockData extends ArticleBlockBaseData {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export interface ArticleImageBlockData extends ArticleBlockBaseData {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}

export interface ArticleCodeBlockData extends ArticleBlockBaseData {
  type: ArticleBlockType.CODE;
  code: string;
}

export type ArticleBlock = ArticleTextBlockData | ArticleImageBlockData | ArticleCodeBlockData;

export enum ArticleBlockType {
  TEXT = `TEXT`,
  IMAGE = `IMAGE`,
  CODE = `CODE`
}

export enum ArticleType {
  ALL = `All`,
  IT = `IT`,
  SCIENCE = `SCIENCE`,
  ECONOMICS = `ECONOMICS`
}

export enum ArticleSortField {
  VIEWS = `views`,
  TITLE = `title`,
  CREATED_AT = `createdAt`
}
