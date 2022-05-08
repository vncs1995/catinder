import axios from 'axios';

export type CatListResponse = {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  image: CatImage;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: CatWeight;
  wikipedia_url: string;
};

export type CatImage = {
  height: number;
  id: string;
  url: string;
  width: number;
};

export type CatWeight = {
  imperial: string;
  metric: string;
};

export const listCats = () =>
  axios.get<CatListResponse>(
    'https://docs.thecatapi.com/api-reference/breeds/breeds-list',
  );
