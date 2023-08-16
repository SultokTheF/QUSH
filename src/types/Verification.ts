interface Verification {
  id: number,
  admin_id: number;
  owner_id: number;
  name: string;
  category_sport: number;
  location: number;
  time_from: number;
  time_to: number;
  description: string;
  price: string;
  dimensions: string;
  surface_type: number;
  latitude: number;
  longitude: number;
}

export default Verification;
