import {
  ComicSummary,
  EventSummary,
  Image,
  ResourceList,
  SeriesSummary,
  StorySummary,
  URL,
} from './characters';

export type ComicDataWrapper = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicDataContainer;
  etag: string;
};

export type ComicDataContainer = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Comics>;
};

export type Comics = {
  i: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<TextObject>;
  resourceURI: string;
  urls: Array<URL>;
  series: SeriesSummary;
  variants: Array<ComicSummary>;
  collections: Array<ComicSummary>;
  collectedIssues: Array<ComicSummary>;
  dates: Array<ComicDate>;
  prices: Array<ComicPrice>;
  thumbnail: Image;
  images: Array<Image>;
  creators: CreatorList;
  characters: ResourceList<CharacterSummary>;
  stories: ResourceList<StorySummary>;
  events: ResourceList<EventSummary>;
};

export type TextObject = {
  type: string;
  language: string;
  text: string;
};

export type ComicDate = {
  type: string;
  date: Date;
};

export type ComicPrice = {
  type: string;
  price: number;
};

export type CreatorList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<CharacterSummary>;
};

export type CharacterSummary = {
  resourceURI: string;
  name: string;
  role: string;
};
