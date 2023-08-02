interface Field {
  id: number;
  owner_id: number;
  name: string;
  category_sport: number;
  location: string;
  latitude: number;
  longitude: number;
  time_from: number;
  time_to: number;
  description: string;
  price: number;
  image: string | null;
  additional_comment: string | null;
  dimensions: string;
  surface_type: number;
  capacity: number | null;
  facilities: string | null;
  lighting: string | null;
  rules: string | null;
}

export default Field;