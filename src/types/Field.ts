interface Field {
  id: number;
  owner_id: number;
  name: string;
  category_sport: number;
  location: string;
  latitude?: number | null;
  longitude: number;
  time_from: number;
  time_to: number;
  description: string;
  price: number;
  image?: string | null;
  width?: number | null;
  length?: number | null;
  surface_type: number;
  capacity?: number | null;
  facilities?: string | null;
  lighting?: string | null;
  rules?: string | null;
  bath: number;
  cloakroom: number;
  additional_services?: string | null;
}

export default Field;