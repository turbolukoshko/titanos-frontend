export interface MovieList {
  collection: Movie[];
  pagination: Pagination;
}

export interface Movie {
  id: number;
  type: string;
  original_title: string;
  title: string;
  synopsis: string;
  year: number;
  classification: Classification;
  duration_in_seconds: number | null;
  number: number | null;
  parent_id: number | null;
  images: Images;
  stream_info: Record<string, unknown>;
  genres: Genre[];
  deeplinkings: Deeplinking[];
}

export interface Pagination {
  count: number;
  per_page: number;
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
  total_count: number;
  total_pages: number;
}

interface Classification {
  id: number;
  name: string;
  description: string;
}

interface Image {
  id: number;
  locale: string;
  image: string;
  image_dominant_color: string;
  image_image_dominant_color: string;
}

interface Genre {
  id: number;
  name: string;
  image: Image;
}

interface AppClassification {
  id: number;
  name: string;
  description: string;
}

interface App {
  id: number;
  name: string;
  code: string;
  icon: string;
  type: string;
  classification: AppClassification;
  image_dominant_color: string;
  url: string;
  app_type: string;
  resolution: string;
  content_list_app_type: string;
  content_list_app_name: string;
  description: string;
  background_image: string;
  logo: string | null;
  icon_landscape: string;
  background_image_dominant_color: string | null;
  icon_landscape_dominant_color: string | null;
  icon_dominant_color: string;
}

interface Deeplinking {
  app: App;
  url: string;
}

interface Images {
  id: number;
  locale: string;
  artwork_portrait: string;
  artwork_landscape: string | null;
  screenshot_portrait: string | null;
  screenshot_landscape: string | null;
  image_dominant_color: string | null;
  transparent_logo: string | null | null;
  artwork_portrait_dominant_color: string | null;
  artwork_landscape_dominant_color: string | null;
  screenshot_portrait_dominant_color: string | null;
  screenshot_landscape_dominant_color: string | null;
}
