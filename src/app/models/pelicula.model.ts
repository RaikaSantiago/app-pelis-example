export interface PeliculaModel {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                GenreModel[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompanyModel[];
    production_countries:  ProductionCountryModel[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguageModel[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface GenreModel {
    id:   number;
    name: string;
}

export interface ProductionCompanyModel {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountryModel {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguageModel {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}
