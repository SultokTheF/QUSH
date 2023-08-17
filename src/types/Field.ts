interface Field {
  id: number;
  owner_id: number;
  name: string;
  category_sport: number;
  location: string;
  latitude: number ;
  longitude: number ;
  time_from: number;
  time_to: number;
  description: string;
  price: string;
  surface_type: number;
  dimensions: string,
}

export default Field;