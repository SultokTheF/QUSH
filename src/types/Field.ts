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
  price: number;
  image: string ;
  width: number ;
  length: number ;
  surface_type: number;
  capacity: number ;
  facilities: string ;
  lighting: string ;
  rules: string ;
  bath: number;
  сloakroom: number;
  additional_services: string ;
  for_rent: boolean,
  dimensions: string,
}

export default Field;