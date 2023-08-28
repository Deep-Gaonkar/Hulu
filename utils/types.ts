import { requests } from "./constants";

export default interface HeaderItemProps {
  title: string,
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>
}

export type genreType = keyof typeof requests

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: string;
  first_air_date?: string;
};

export type MovieListResponse = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};