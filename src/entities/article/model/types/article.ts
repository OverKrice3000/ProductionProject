export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
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
  IT = `IT`,
  SCIENCE = `SCIENCE`,
  ECONOMICS = `ECONOMICS`
}

export interface ArticleRootSchema {
  article?: ArticleSchema;
}

export interface ArticleSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
