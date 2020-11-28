import {Image, ResourceList, URL} from './characters';

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
    urls: URL[];
    series: any;
    variants: Array<any>;
    collections: Array<any>;
    collectedIssues: Array<any>;
    dates: Array<any>;
    prices: Array<any>;
    thumbnail: Image;
    images: Array<Image>;
    creators: ResourceList;
    characters: ResourceList;
    stories: ResourceList;
    events: ResourceList;
};

export type TextObject = {
    type: string;
    language: string;
    text: string;
};
