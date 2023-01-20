export interface CarteleraModel {
    dates:         DatesModel;
    page:          number;
    results:       MovieModel[];
    total_pages:   number;
    total_results: number;
}

export interface DatesModel {
    maximum: Date;
    minimum: Date;
}

export interface MovieModel {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguageModel;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguageModel {
    En = "en",
    Fr = "fr",
    Ja = "ja",
    Ko = "ko",
}