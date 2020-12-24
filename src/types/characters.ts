export type Character = {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: URL[];
    thumbnail: Image;
    comics: ResourceList<ComicSummary>;
    stories: ResourceList<StorySummary>;
    events: ResourceList<EventSummary>;
    series: ResourceList<SeriesSummary>;
};

export type URL = {
    type: string;
    url: string;
};

export type Image = {
    path: string;
    extension: string;
};

export type ResourceList<T> = {
    available: number;
    returned: number;
    collectionURL: string;
    items: Array<T>;
};

export type CharacterDataWrapper = {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: CharacterDataContainer;
    etag: string;
};

export type CharacterDataContainer = {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
};

export type ComicSummary = {
    resourceURL: string;
    name: string;
};

export type StorySummary = {
    resourceURL: string;
    name: string;
    type: string;
};

export type EventSummary = {
    resourceURL: string;
    name: string;
};

export type SeriesSummary = {
    name: string;
    resourceURL: string;
};
