export interface MovieDetailsAPIResponse {
  adult: false;
  backdrop_path: '/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg';
  belongs_to_collection: null;
  budget: 35000000;
  genres: [
    {
      id: 878;
      name: 'Science Fiction';
    },
    {
      id: 10749;
      name: 'Romance';
    },
    {
      id: 35;
      name: 'Comedy';
    }
  ];
  homepage: 'https://www.searchlightpictures.com/poor-things';
  id: 792307;
  imdb_id: 'tt14230458';
  origin_country: ['US'];
  original_language: 'en';
  original_title: 'Poor Things';
  overview: 'Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.';
  popularity: 305.95;
  poster_path: '/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg';
  production_companies: {
    id: 127929;
    logo_path: '/fCB4AVYvxxDvqumgYqsN6ehyN3G.png';
    name: 'Searchlight Pictures';
    origin_country: 'US';
  }[];
  production_countries: {
    iso_3166_1: 'IE';
    name: 'Ireland';
  }[];
  release_date: '2023-12-07';
  revenue: 117193959;
  runtime: 142;
  spoken_languages: {
    english_name: 'English';
    iso_639_1: 'en';
    name: 'English';
  }[];
  status: 'Released';
  tagline: "She's like nothing you've ever seen.";
  title: 'Poor Things';
  video: false;
  vote_average: 7.8;
  vote_count: 3383;
}

export interface VideoInfo {
  id: '664df669e9b4172c3413fac5';
  iso_639_1: 'en';
  iso_3166_1: 'US';
  key: 'pwPpguuFkIs';
  name: 'A Titanic Fight Among the Pyramids';
  official: true;
  published_at: '2024-05-21T14:00:41.000Z';
  site: 'YouTube';
  size: 1080;
  type: string;
}

export interface VideosAPIResponse {
  results: VideoInfo[];
}
