/* eslint-disable camelcase */

export type City = {
  id: string;
  name: string;
  country: string;
  flag: string;
  image: string;
};

export type Continent = {
  name: string;
  full_description: string;
  image: string;
  countries: number;
  cities: number;
  languages: number;
};
